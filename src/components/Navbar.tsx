'use client';

import React from "react";
import Link from "next/link";

import{
    HomeIcon,
    ShoppingBagIcon,
    UserIcon,
    Squares2X2Icon,
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
        href: "/shop",
        icon: ShoppingBagIcon,
    },
    {
        name: "Categories",
        href: "/categories",
        icon: Squares2X2Icon,
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

    <aside className="fixed top-0 left-0 z-50 w-full h-16 bg-white border-b shadow-lg md:h-screen md:w-64 md:border-r md:border-b-0">
       
        
         <div className="flex items-center justify-center h-20 border-b">
            <div className="text-center">
                 <h1 className="text-2xl font-bold tracking-tight">
                    Handcrafted Haven</h1>
            </div>

            
            </div>   
       

        

        <nav className="flex items-center justify-around px-2 py-2 md:flex-col md:items-stretch md:justify-start md:gap-2 md:p-4">

            {links.map((link) => {
                const Icon = link.icon;
                return (
                    <Link key={link.name} href={link.href} className="flex items-center justify-center gap-3 rounded-xl p-3 text-gray-700 transition hover:bg-blue-500 hover:text-white md:justify-start">

                    <Icon className="w-6 h-6" />
                    <span className="hidden md:block">{link.name}</span>
                    </Link>
                );
            })}

            <Link href="/basket" className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-blue-500 transition">
            Basket 
            </Link>
        </nav>
    </aside>
    );
}