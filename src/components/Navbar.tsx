'use client';

import Link from "next/link";

import {
    HomeIcon,
    ShoppingBagIcon,
    UserIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";

const links = [
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

export default function Navbar() {
    return (
        <aside className="fixed top-0 left-0 z-50 w-full h-36 bg-[var(--color-background)] border-b shadow-lg md:h-screen md:w-64 md:border-r md:border-b-0">

            <div className="flex items-center justify-center h-20 border-b">
                <div className="text-center">
                    <h1 className="text-2xl font-bold tracking-tight text-[var(--color-text)]">
                        Handcrafted Haven</h1>
                </div>
            </div>

            <nav className="flex items-center justify-around px-2 py-2 md:flex-col md:items-stretch md:justify-start md:gap-2 md:p-4">
                {links.map((link) => {
                    const Icon = link.icon;
                    return (
                        <Link key={link.name} href={link.href} className="flex items-center justify-center gap-3 rounded-xl p-3 text-[var(--color-text)] transition hover:bg-[var(--color-primary)]/60 md:justify-start">
                            <Icon className="w-6 h-6" />
                            <span className="hidden md:block">{link.name}</span>
                        </Link>
                    );
                })}

                <Link href="/basket" className="flex items-center gap-3 rounded-xl border border-[var(--color-text)]/15 px-4 py-2 transition hover:bg-[var(--color-primary)]/60 text-bold text-[var(--color-text)] justify-center">
                    Basket
                </Link>
            </nav>
        </aside>
    );
}