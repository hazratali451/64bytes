import React from "react";
import { cn } from "@/utils/cn";

interface CheckToggleProps {
  value: boolean;
  onClick: () => void;
}

export default function CheckBox({ value, onClick }: CheckToggleProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "size-4 min-w-4 flex justify-center items-center cursor-pointer border rounded-xs",
        value ? "border-white1 bg-white1" : "border-gray1"
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
      >
        <path
          d="M1 3.25L4.68421 7L11 1"
          stroke="#0B0B0B"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
