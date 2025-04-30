import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'
import * as fs from 'node:fs';
import Buffer from "next/dist/server/lib/squoosh/image_data";

const db = sql('meals.db');

export async function getMeals() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function  postMeal(meal) {
    meal.slug = slugify(meal.title, {lower: true});
    meal.instructions = xss(meal.instructions);

    const extensions = meal.image.name.split('.').pop();
    const filename = `${meal.slug}.${extensions}`;
    const imagePath = `public/images/${filename}`;

    const stream = fs.create(imagePath);
    const bufferedImage = await meal.image.arrayBuffer();
    stream.write(Buffer.from(bufferedImage), (error) => {

        if (error) {
            throw new Error(error);
        }
    });


}