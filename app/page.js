'use client';
import classes from './page.module.css';
import Link from "next/link";
import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {
    return (
        <>
            <header className={classes.header}>
                <div className={classes.slideshow}>
                    <ImageSlideshow></ImageSlideshow>
                </div>
                <div>
                    <div className={classes.hero}>
                        <h1>BetterDeveloper food for BD Foodies</h1>
                        <p>Taste & Share food from all over the world.</p>
                    </div>
                    <div className={classes.cta}>
                        <Link href="/community">Join the community</Link>
                        <Link href="/meals">Explore the meals</Link>
                    </div>
                </div>
            </header>
            <main>
                <section className={classes.section}>
                    <h2>How it works</h2>
                    <p>
                        BetterDevelopers Food is a platform for foodies to share their favorite
                        recipes with the world. It&apos;s a place to discover new dishes, and to
                        connect with other food lovers.
                    </p>
                    <p>
                        BetterDevelopers Food is a place to discover new dishes, and to connect
                        with other food lovers.
                    </p>
                </section>

                <section className={classes.section}>
                    <h2>Why BetterDevelopers Food?</h2>
                    <p>
                        BetterDevelopers Food is a platform for foodies to share their favorite
                        recipes with the world. It&apos;s a place to discover new dishes, and to
                        connect with other food lovers.
                    </p>
                    <p>
                        BetterDevelopers Food is a place to discover new dishes, and to connect
                        with other food lovers.
                    </p>
                </section>
            </main>
        </>
    );
}
