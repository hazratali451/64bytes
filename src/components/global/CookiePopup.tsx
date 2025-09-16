"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "./Button";

export default function CookiePopup() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 8000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [show]);

    return (
        <div
            onClick={() => setShow(false)} // close on backdrop click
            className={`z-999 fixed inset-0 backdrop-blur-xs p-5 flex items-center 
        transition-[opacity_blur] duration-400 ease-out
        ${show ? "" : "opacity-0 pointer-events-none -z-10"}`}
        >
            <div
                className='flex justify-center overflow-auto w-full'
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
                <div className='rounded-sm bg-black1 px-5 pt-14 pb-16 max-w-[580px] w-full flex flex-col gap-4'>
                    <div className='px-12 gap-4 flex items-center '>
                        <div className='h-[1px] opacity-25 flex-1 bg-gray1 rounded-2xl'></div>
                        <p>Accept Cookies</p>
                        <div className='h-[1px] opacity-25 flex-1 bg-gray1 rounded-2xl'></div>
                    </div>

                    <h3 className='font-robotoMono text-lg leading-[28px] md:text-2xl md:leading-[34px] tracking-[1px] uppercase text-center'>
                        Wir setzen <span className='text-violet1'>Cookies</span>{" "}
                        ein, keine Sorge,sie haben keine Bugs. Nur Features.
                    </h3>

                    <p className='text-center text-sm leading-normal '>
                        Mehr Infos in unserer{" "}
                        <Link
                            className='underline underline-offset-4'
                            href={""}
                        >
                            Datenschutzerklärung
                        </Link>
                    </p>

                    <div className='flex gap-4 mt-2'>
                        <Button
                            className='w-full'
                            variant='violet'
                            onClick={() => setShow(false)}
                        >
                            Akzeptieren
                        </Button>
                        <Button
                            className='w-full'
                            variant='outline-violet'
                            onClick={() => setShow(false)}
                        >
                            Ablehnen
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
