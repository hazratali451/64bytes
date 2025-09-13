import React from "react";
import Button from "../global/Button";
import Image from "next/image";
import spiderImg from "@/../public/assets/service/spiderNet1.svg";
import spiderImg2 from "@/../public/assets/service/spiderNet2.svg";
export default function TerminCTA() {
    return (
        <section className='md:pb-30 md:pt-28 pt-18 pb-20 overflow-hidden px-5'>
            <div className='relative mx-auto max-w-[580px] pt-14 pb-16 md:px-10 px-6 rounded-sm '>
                <div className='flex flex-col gap-6 justify-center items-center z-3 relative'>
                    <div className='w-full'>
                        <div className='flex items-center gap-4 w-full px-12'>
                            <div className=' h-[1px] bg-gray1 opacity-25 flex-1'></div>
                            <h2 className='text-sm leading-[24px] text-gray1 '>
                                Termin vereinbaren
                            </h2>
                            <div className='h-[1px] bg-gray1 opacity-25 flex-1'></div>
                        </div>

                        <h3 className='text-center mt-4 font-robotoMono text-lg lg:text-2xl leading-[28px] lg:leading-[34px] tracking-[1px] uppercase '>
                            Wir bringen <br className="sm:hidden"/> Sie nach vorne
                        </h3>
                    </div>

                    <Button>Kostenlose Erstberatung </Button>
                </div>

                <div
                    className='absolute inset-0 rounded-sm z-1
                            bg-white/2 
                            backdrop-blur-[2px]
                            backdrop-saturate-110
                            shadow-[inset_0_-8px_6px_rgba(0,0,0,0.25),0_0_7px_rgba(0,0,0,0.15)]'
                ></div>
                <Image
                    className='absolute sm:-bottom-[56px] sm:top-auto -top-3  sm:-right-[256px] -right-[103px] sm:w-auto w-[241px] '
                    src={spiderImg}
                    alt=''
                />
                <Image
                    className='absolute sm:-bottom-[146px] sm:-left-[214px] -left-[111px] -bottom-[88px] sm:w-auto w-[200px]'
                    src={spiderImg2}
                    alt=''
                />
            </div>

            <div className='md:h-7 '></div>
        </section>
    );
}
