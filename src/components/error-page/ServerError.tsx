import Image from "next/image";
import React from "react";
import bg from "@/../public/assets/violet_web.svg";

export default function ServerError() {
    return (
        <main className='px-5 min-h-screen flex justify-center items-center'>
            <section className=' pt-[170px] md:pt-[200px] pb-30 flex items-center justify-center'>
                <div className='w-full max-w-[786px] relative flex justify-center items-center'>
                    <Image
                        className='absolute max-w-none -top-[20px] sm:-top-[56px] sm:w-auto w-[170px]'
                        src={bg}
                        alt=''
                        priority
                    />

                    <div className='flex flex-col gap-8 justify-center items-center relative z-1'>
                        <h1 className='font-robotoMono text-[100px] md:text-[180px] leading-[120%] tracking-[1px] uppercase text-center text-cyan1'>
                            500
                        </h1>

                        <p className='text-center text-base leading-normal '>
                            Unsere Entwickler jagen gerade den Bug. <br />
                            Er ist flink, aber wir sind schneller!
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
