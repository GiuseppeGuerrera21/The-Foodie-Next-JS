'use server'
import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';

function isInvalidEmail(text) {
    return !text || text.trim() === '';
}

export async function shareMeal(prevState, fromData) {

    const meal = {
        title: fromData.get('title'),
        image: fromData.get('image'),
        summary: fromData.get('summary'),
        instructions: fromData.get('instructions'),
        creator: fromData.get('name'),
        creator_email: fromData.get('email'),
    };

    if(
        isInvalidEmail(meal.title) ||
        isInvalidEmail(meal.summary) ||
        isInvalidEmail(meal.instructions) ||
        isInvalidEmail(meal.creator) ||
        isInvalidEmail(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image || meal.image.size === 0    
    ){
        return{
            message: 'Invalid inputs'
        }
    }


    await saveMeal(meal);
    revalidatePath('/meals');
    redirect('/meals');
    }
