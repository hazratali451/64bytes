"use client";

import React from "react";
import { icon_logo } from "./icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";

const menuItems = [
    { label: "Service", href: "/" },
    { label: "Projekte", href: "/projekte" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
    { label: "Karriere", href: "/karriere" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="z-[99] fixed w-full top-0 backdrop-blur-[2px] bg-[#0b0b0b33]">
            <nav className='flex gap-4 items-center justify-between max-w-[1180px] mx-auto py-4'>
                <div className=''>{icon_logo}</div>
                <ul className='flex items-center gap-6'>
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`p-1 text-lg font-medium leading-[28px] ${
                                        isActive ? "text-violet1" : ""
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <Button variant="fade-cyan"/>
            </nav>
        </header>
    );
}
