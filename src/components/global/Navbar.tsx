"use client";

import React from "react";
import { easeOut, motion } from "motion/react";
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

    const transition = { delay: 1.8, duration: 1, ease: easeOut };

    return (
        <>
            {pathname === "/" ? (
                <motion.header
                    initial={{ y: "-100%" }}
                    animate={{ y: "0%" }}
                    transition={transition}
                    className='z-[99] fixed w-full top-0 lg:backdrop-blur-[2px] lg:bg-[#0b0b0b33] px-5 '
                >
                    <nav className='flex gap-4 items-center justify-between max-w-[1180px] mx-auto lg:py-4 py-3'>
                        <Link href={'/'} className=''>{icon_logo}</Link>
                        <ul className='lg:flex items-center gap-6 hidden'>
                            {menuItems.map((item) => {
                                const isActive = pathname === item.href;

                                return (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className={`transition-colors duration-200 ease-out p-1 hover:text-violet1 text-lg font-medium leading-[28px] ${
                                                isActive ? "text-violet1" : ""
                                            }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <Button variant='fade-violet' link="/kontaktieren" />
                    </nav>
                </motion.header>
            ) : (
                <header className='z-[99] fixed w-full top-0 lg:backdrop-blur-[2px] lg:bg-[#0b0b0b33] px-5 '>
                    <nav className='flex gap-4 items-center justify-between max-w-[1180px] mx-auto lg:py-4 py-3'>
                        <Link href={'/'} className=''>{icon_logo}</Link>
                        <ul className='lg:flex items-center gap-6 hidden'>
                            {menuItems.map((item) => {
                                const isActive = pathname === item.href;

                                return (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className={`transition-colors duration-200 ease-out hover:text-cyan1 p-1 text-lg font-medium leading-[28px] ${
                                                isActive ? "text-cyan1" : ""
                                            }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <Button variant='fade-violet' link="/kontaktieren" />
                    </nav>
                </header>
            )}

            <motion.nav
                initial={{ y: pathname === "/" ? "150%" : "0%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 6, duration: 0.8, ease: easeOut }}
                className=' lg:hidden z-99 fixed bottom-4 left-5 right-5 flex justify-center '
            >
                <ul className='p-1 backdrop-blur-[2px] bg-white1/15 rounded-full items-center flex  justify-center'>
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <li key={item.href} className='flex'>
                                <Link
                                    href={item.href}
                                    className={`py-1 px-2 text-sm font-medium leading-[24px] rounded-full ${
                                        isActive ? "text-black1 bg-white1 " : ""
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </motion.nav>
        </>
    );
}
