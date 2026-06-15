'use client';

import Link from "next/link";
import { useEffect, useState } from "react";


import {
    HomeIcon,
    ShoppingBagIcon,
    UserIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";


const guestLinks = [
    {
        name: "Home",
        href: "/",
        icon: HomeIcon,
    },
    {
        name: "Shop",
        href: "/products",
        icon: ShoppingBagIcon,
    },
    {
        name: "Sellers",
        href: "/sellers",
        icon: UserGroupIcon,
    },
    {
        name: "Login",
        href: "/login",
        icon: UserIcon,
    },
];


const authLinks = [
    {
        name: "Home",
        href: "/",
        icon: HomeIcon,
    },
    {
        name: "Shop",
        href: "/products",
        icon: ShoppingBagIcon,
    },
    {
        name: "Sellers",
        href: "/sellers",
        icon: UserGroupIcon,
    },
    {
        name: "Logout",
        href: "#",
        icon: UserIcon,
    },
];

export default function Navbar() {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
    async function checkAuth() {
        try{
            const response = await fetch("/api/auth/me");

            setAuthenticated(response.ok);
        } catch {
            setAuthenticated(false);
        }
    }

    checkAuth();
}, []);

    const links = authenticated ? authLinks : guestLinks;

    return (
        <aside className="fixed top-0 left-0 z-50 w-full h-36 bg-(--color-background) border-b shadow-lg md:h-screen md:w-64 md:border-r md:border-b-0">

            <div className="flex items-center justify-center h-20 border-b">
                <div className="text-center">
                    <h1 className="text-2xl font-bold tracking-tight text-(--color-text)">
                        Handcrafted Haven</h1>
                </div>
            </div>

            <nav className="flex items-center justify-around px-2 py-2 md:flex-col md:items-stretch md:justify-start md:gap-2 md:p-4">
                {links.map((link) => {
                    const Icon = link.icon;

                    if (link.name === "Logout"){
                        return(
                            <button
                            key={link.name}
                            onClick={async() => {
                                const response = await fetch("/api/auth/logout", {
                                    method:"POST",
                                });

                                if (response.ok) {
                                    setAuthenticated(false);
                                    window.location.href = "/";
                                }
                            }}
                            className="flex items-center justify-center gap-3 rounded-xl p-3 text-(--color-text) transition hover:bg-(--color-primary)/60 md:justify-start cursor-pointer"
                            >
                                <Icon className="w-6 h-6"/>
                                <span className="hidden md:block">
                                    {link.name}

                                </span>

                            </button>
                        );
                        
                    }
                    return (
                        <Link 
                        key={link.name}
                        href={link.href}
                        className="flex items-center justify-center gap-3 rounded-xl p-3 text-(--color-text) transition hover:bg-(--color-primary)/60 md:justify-start"
                        >
                            <Icon className="w-6 h-6" />
                            <span className="hidden md:block">
                                {link.name}
                            </span>
                        </Link>
                   );
                 })}

                <Link href="/basket" className="flex items-center gap-3 rounded-xl border border-(--color-text)/15 px-4 py-2 transition hover:bg-(--color-primary)/60 text-bold text-(--color-text) justify-center">
                    Basket
                </Link>
  
            </nav>
        </aside>
    );
}