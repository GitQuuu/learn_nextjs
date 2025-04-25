import Link from "next/link";
import logoImg from "@/assets/logo.png";

export default function MainHeader() {
    return (
        <header>
            <h1>Main Header</h1>
            <Link href="/">
                <img src={logoImg.src} alt="A plate with food on it" />
                NextLevel Food
            </Link>

            <nav>
                <ul>
                    <li>
                        <Link href="/meals">Browse meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Browse community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}