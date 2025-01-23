import Link from "next/link";
import classes from './page.module.css';
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
    title: 'All Foods',
    description: 'Delicious meals, shared by a food-loving community.',
};

async function Meals() {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />
}

export default function MealsPage() {

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created
                    <span className={classes.highlight}></span>
                </h1>
                <p>Delicious meals, created by a food-loving community.</p>
                <p className={classes.cta}>
                    <Link href='/meals/share'>
                        Share Your Favourite Recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}