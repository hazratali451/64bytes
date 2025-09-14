import Image from "next/image";
import React from "react";
import bg from "@/../public/assets/violet_web.svg";
import Button from "../global/Button";

import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";

export default function NotFound() {
    return (
        <div className='min-h-screen flex flex-col justify-between'>
            <div className=''>
                <Navbar />
                <main>
                    <section className='px-5'>
                        <div className='sm:h-[550px] sm:mb-0 mb-20 mt-30 sm:mt-20 flex items-center justify-center'>
                            <div className='w-full max-w-[786px] relative flex justify-center items-center'>
                                <Image
                                    className='absolute max-w-none -top-[20px] sm:-top-[56px] sm:w-auto w-[170px]'
                                    src={bg}
                                    alt=''
                                    priority
                                />

                                <div className='flex flex-col gap-8 justify-center items-center relative z-1'>
                                    <h1 className='font-robotoMono text-[100px] md:text-[180px] leading-[120%] tracking-[1px] uppercase text-center text-cyan1'>
                                        404
                                    </h1>

                                    <p className='text-center text-base leading-normal '>
                                        Seite nicht gefunden. <br /> Aber wir
                                        bauen gleich eine neue!
                                    </p>

                                    <Button variant='outline'>
                                        Auf zur neuen Seite{" "}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <Footer />
        </div>
    );
}
