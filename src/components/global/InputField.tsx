import React from "react";
import { cn } from "@/utils/cn";

interface InputFieldProps {
  id?: string;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  className?: string;
  suffix?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errormsg?: string;
  onBlur?: (e?: React.FocusEvent<HTMLInputElement>) => void;
  value?: string;
}

export default function InputField({
  id,
  name,
  label,
  type = "text",
  placeholder,
  className,
  suffix,
  onChange,
  errormsg,
  onBlur,
  value,
}: InputFieldProps) {
  // Generate ID from label if not provided
  const generatedId =
    id ||
    `${label
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-") // replace invalid chars with -
      .replace(/(^-|-$)/g, "")}${suffix ? `-${suffix}` : ""}`;

  return (
    <div className={cn("", className)}>
      <label htmlFor={generatedId} className="text-base leading-normal">
        {label}
      </label>
      <input
        className={cn(
          "text-white1 py-4 block border-b border-gray1 w-full text-sm leading-normal tracking-[0.8px] placeholder:text-gray1 focus:outline-none focus:placeholder:opacity-0 focus:border-white1",
          {
            "text-[#FF3247] placeholder:text-[#FF3247] border-[#FF3247]":
              errormsg,
          }
        )}
        type={type}
        name={name}
        id={generatedId}
        placeholder={placeholder}
        autoComplete="off"
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {errormsg && (
        <div className="flex items-center gap-2 pt-4 text-sm leading-normal text-gray1 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <path
              d="M8 11.5625V10.25M8 5.4375V8.9375M15 8.5C15 12.366 11.866 15.5 8 15.5C4.134 15.5 1 12.366 1 8.5C1 4.634 4.134 1.5 8 1.5C11.866 1.5 15 4.634 15 8.5Z"
              stroke="#B4B4B4"
            />
          </svg>

          {errormsg}
        </div>
      )}
    </div>
  );
}
