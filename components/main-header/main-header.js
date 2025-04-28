import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background";
import NavLink from "@/components/main-header/nav-link";

export default function MainHeader() {

    return <>
        <MainHeaderBackground></MainHeaderBackground>
        <header className={classes.header}>
            <Link className={classes.logo} href="/public">
                <Image src={logoImg} alt="A plate with food on it"/>
                BetterDeveloper Food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Browse meals</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Join community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </>


}