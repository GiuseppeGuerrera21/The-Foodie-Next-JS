import logoImage from "@/assets/logo.png";
import Link from "next/link";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link
                    href="/"
                    className={classes.logo}
                >
                    <Image
                        src={logoImage}
                        alt="logo"
                        priority
                    />
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Food community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}