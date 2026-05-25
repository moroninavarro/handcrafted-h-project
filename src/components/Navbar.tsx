import React from "react";
import style from "./Navbar.module.css";
import Link from "next/link";


export default function Navbar() {
    return (
    <header className={style.header}>
        <h1 className={style.h1}>Handcrafted Haven</h1>
        <nav className={style.nav}>
            <Link href="/">Shop</Link>
            <Link href="/profile">My Profile</Link>
            
            <Link href="/basket" className={style.button}>
            Basket 
            </Link>
        </nav>
    </header>
    );
}