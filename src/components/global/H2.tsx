import React, { ReactNode } from "react";

export default function H2({children}:{children?:string|ReactNode}) {
    return (
        <h2 className='font-robotoMono text-[28px] md:text-[40px] leading-[120%] tracking-[1px] uppercase text-center '>
            {children}
        </h2>
    );
}
