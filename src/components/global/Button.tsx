import React from "react";
import { cn } from "@/utils/cn"; // make sure this points to your cn file

interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    variant?:
        | "cyan"
        | "violet"
        | "outline"
        | "fade-cyan"
        | "fade-violet"
        | "outline-violet";
    link?: string;
    onClick?:(e:React.MouseEvent)=>void
}

export default function Button({
    children = "Get in touch",
    className,
    variant = "cyan",
    link,
    onClick,
}: ButtonProps) {
    const classes = cn(
        "py-2 md:px-6 px-4 xl:text-lg md:text-base text-sm font-medium leading-[24px] xl:leading-[28px] text-center rounded-[48px] backdrop-blur-[2px]",
        "transition-all duration-400 ease-out inline-block",
        variant === "cyan" && "bg-white hover:bg-cyan1 text-black1",
        variant === "violet" && "bg-white hover:bg-violet1 text-black1",
        variant === "outline" &&
            "shadow-[inset_0_0_0_1px_#F4F2ED] hover:bg-white1 text-white1 hover:text-black1",
        variant === "fade-cyan" &&
            "bg-[#c4c4c426] hover:bg-cyan1 hover:text-black1 ",
        variant === "fade-violet" &&
            "bg-[#c4c4c426] hover:bg-violet1 hover:text-black1 ",
        variant === "outline-violet" &&
            "shadow-[inset_0_0_0_1px_#F4F2ED] hover:shadow-[inset_0_0_0_1px_#d946ff] hover:bg-violet1 text-white1 hover:text-black1",
        className
    );

    if (link) {
        return (
            <a href={link} className={classes} onClick={onClick}>
                {children}
            </a>
        );
    }

    return <button className={classes} onClick={onClick}>{children}</button>;
}
