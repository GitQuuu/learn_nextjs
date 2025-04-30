import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'
import * as fs from 'node:fs';


const db = sql('meals.db');

export async function getMeals() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function postMeal(meal) {
    meal.slug = slugify(meal.title, {lower: true});
    meal.instructions = xss(meal.instructions);

    // Check if we have a valid image
    if (!meal.image || typeof meal.image.name !== 'string') {
        throw new Error('Invalid image data');
    }

    const extensions = meal.image.name.split('.').pop();
    const filename = `${meal.slug}.${extensions}`;
    const imagePath = `images/${filename}`;

    // Ensure the images directory exists
    const dir = 'public/images';
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }

    const stream = fs.createWriteStream(`public/${imagePath}`);

    // Handle File object from form data
    const imageData = await meal.image;
    const chunks = [];
    for await (const chunk of imageData.stream()) {
        chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    // Write the file
    await new Promise((resolve, reject) => {
        stream.write(buffer, (error) => {
            if (error) {
                reject(error);
            }
            stream.end();
            resolve();
        });
    });

    meal.image = `/${imagePath}`; // Add leading slash for proper URL path

    db.prepare(`
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
}

