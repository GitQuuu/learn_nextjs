import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';

const db = sql('meals.db');

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // throw new Error('Loading meals failed');
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function postMeal(meal) {
    try {
        meal.slug = slugify(meal.title, {lower: true});
        
        // Check if meal with this slug already exists
        const existingMeal = getMeal(meal.slug);
        if (existingMeal) {
            // Add a timestamp to make the slug unique
            meal.slug = `${meal.slug}-${Date.now()}`;
        }
        
        meal.instructions = xss(meal.instructions);

        const extensions = meal.image.name.split('.').pop();
        const filename = `${meal.slug}.${extensions}`;
        const imagePath = `images/${filename}`;

        const stream = fs.createWriteStream(`./public/${imagePath}`);
        const bufferedImage = await meal.image.arrayBuffer();

        stream.write(Buffer.from(bufferedImage), (error) => {
            if (error) {
                console.error('Error writing image to stream:', error);
                throw new Error('Saving the image failed!');
            }
        });

        meal.image = `/${imagePath}`;

        return db.prepare(`
            INSERT INTO meals
            (title, summary, image, instructions, creator, creator_email, slug)
            VALUES (
                @title, 
                @summary, 
                @image,
                @instructions,
                @creator,
                @creator_email, 
                @slug
            )
        `).run(meal);
    } catch (error) {
        console.error('Error posting meal:', error);
        throw new Error('Failed to create meal. ');
    }
}
