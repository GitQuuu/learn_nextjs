import fs from 'node:fs';

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

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
        

        const result = db.prepare(`
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

        return result;
    } catch (error) {
        console.error('Error posting meal:', error);
        throw new Error('Failed to create meal. Please try again with a different title.');
    }
}