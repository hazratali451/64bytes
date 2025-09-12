import React from "react";
import Button from "../global/Button";
import Image from "next/image";

export default function TerminCta2() {
    return (
        <section className='pt-28 pb-30 overflow-hidden'>
            <div className='relative mx-auto max-w-[580px] pt-14 pb-16 px-10 rounded-sm '>
                <div className='flex flex-col gap-6 justify-center items-center z-3 relative'>
                    <div className='w-full'>
                        <div className='flex items-center gap-4 w-full px-12'>
                            <div className=' h-[1px] bg-gray1 opacity-25 flex-1'></div>
                            <h2 className='text-sm leading-[24px] text-gray1 '>
                                Termin vereinbaren
                            </h2>
                            <div className='h-[1px] bg-gray1 opacity-25 flex-1'></div>
                        </div>

                        <h3 className='text-center mt-4 font-robotoMono text-2xl leading-[34px] tracking-[1px] uppercase '>
                            Bereit für den <br /> nächsten Schritt?
                        </h3>
                    </div>

                    <p className='text-base text-gray1 leading-normal text-center'>
                        Entdecken Sie, wie wir Ihr Unternehmen mit
                        maßgeschneiderten Lösungen voranbringen. Kontaktieren
                        Sie uns für eine unverbindliche Beratung.
                    </p>

                    <Button>Unverbindlich anfragen </Button>
                </div>

                <div
                    className='absolute inset-0 rounded-sm z-1
                            bg-white/2 
                            backdrop-blur-[2px]
                            backdrop-saturate-110
                            shadow-[inset_0_0px_16px_rgba(0,0,0,0.05),0_0_16px_rgba(0,0,0,0.05)]'
                ></div>

                <Image
                    className='absolute -right-[210px] -top-[90px]'
                    src='/assets/service/grayBall.svg'
                    alt=''
                    width={400}
                    height={400}
                />

                <Image
                    className='absolute -left-[125px] -bottom-[168px]'
                    src='/assets/service/violetBall.svg'
                    alt=''
                    width={400}
                    height={400}
                />
            </div>
        </section>
    );
}
