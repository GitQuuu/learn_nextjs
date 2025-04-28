import classes from './page.module.css';
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";

export default async function Meals () {
    return (
       <>
       <header className={classes.header}>
           <h1>Delicious meals created{' '}
               <span className={classes.highlight}>by you</span>
           </h1>
           <p1>Choose your favorite recipe and cook it yourself</p1>
           <p className={classes.cta}>
               <Link href="/meals/share" >Share your favorite recipe</Link>
           </p>
       </header>
           <main className={classes.main}>
               <MealsGrid meals={[]}></MealsGrid>
           </main>
       </>
    )
}