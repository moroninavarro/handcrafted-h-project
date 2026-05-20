import React from "react";
import style from "./Navbar.module.css";

export default function Navbar() {
    return (<header>
        <h1 className={style.h1}>Handcrafted Haven</h1>
        <nav>
            <a>Shop</a>
            <a>My Profile</a>
            <button>Basket</button>
        </nav>
    </header>
    );
}