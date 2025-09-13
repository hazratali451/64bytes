import React from "react";
import Button from "../global/Button";
import Image from "next/image";
import { GrayBall } from "../global/icons";

export default function TerminCta2() {
    return (
        <section className='md:pb-30 md:pt-28 pt-18 pb-20 overflow-hidden px-5'>
            <div className='relative mx-auto max-w-[580px] pt-14 pb-16 px-6 lg:px-10 rounded-sm '>
                <div className='flex flex-col lg:gap-6 gap-4 justify-center items-center z-3 relative'>
                    <div className='w-full'>
                        <div className='flex items-center gap-4 w-full px-12'>
                            <div className=' h-[1px] bg-gray1 opacity-25 flex-1'></div>
                            <h2 className='text-sm leading-[24px] text-gray1 '>
                                Termin vereinbaren
                            </h2>
                            <div className='h-[1px] bg-gray1 opacity-25 flex-1'></div>
                        </div>

                        <h3 className='text-center mt-4 font-robotoMono text-lg lg:text-2xl leading-[28px] lg:leading-[34px] tracking-[1px] uppercase '>
                            Bereit für den <br /> nächsten Schritt?
                        </h3>
                    </div>

                    <p className='text-base text-gray1 leading-normal text-center mb-4 md:mb-0'>
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

                <GrayBall
                    className='md:size-[400px] size-[223px] absolute -right-[168px] md:-right-[210px] md:-top-[90px] -top-8  md:[fill-opacity:0.4]'
                    pclassName='md:[fill-opacity:0.4]'
                />

                <Image
                    className='md:size-[400px] size-[223px] absolute -left-[87px] md:-left-[125px] md:-bottom-[168px] -bottom-4'
                    src='/assets/service/violetBall.svg'
                    alt=''
                    width={400}
                    height={400}
                />
            </div>
        </section>
    );
}
