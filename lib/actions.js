'use server';
import {postMeal} from "@/lib/meals";
import {redirect} from "next/navigation";

export async function shareMeal(prevState,formData) {

function isInvalidText(text) {
    if (typeof text !== 'string') {
        return true;
    }
    return text.trim() === '';
}

    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
    }

    if (
        isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image ||
        meal.image.size === 0
    )
    {
        return {
            status: 400,
            message: 'Please fill in all fields'
        }
    }

    await postMeal(meal);
    redirect('/meals');
}