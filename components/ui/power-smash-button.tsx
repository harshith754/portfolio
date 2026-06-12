import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

const powerSmashButtonVariants = cva(
  "group relative rounded-2xl bg-red-500 font-bold uppercase tracking-wider text-white border-b-[8px] border-red-700 shadow-[0_15px_25px_-10px_rgba(239,68,68,0.8)] transition-all duration-100 active:translate-y-[8px] active:border-b-[0px] focus:outline-none focus:ring-4 focus:ring-red-400/50",
  {
    variants: {
      size: {
        default: "px-8 py-4",
        sm: "px-6 py-3 text-sm",
        lg: "px-10 py-5 text-lg",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

type PowerSmashButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof powerSmashButtonVariants> & {
    children?: ReactNode;
  };

export function PowerSmashButton({
  children = "Power Smash",
  className,
  size,
  type = "button",
  ...props
}: PowerSmashButtonProps) {
  return (
    <button
      className={cn(powerSmashButtonVariants({ size }), className)}
      type={type}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
      <span className="pointer-events-none absolute top-2 left-3 h-3 w-6 rounded-full bg-white/40 blur-[2px]" />
      <span className="relative flex items-center justify-center gap-2 drop-shadow-md">
        <svg
          aria-hidden="true"
          className="h-6 w-6 animate-pulse"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            d="M13 10V3L4 14h7v7l9-11h-7z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {children}
      </span>
    </button>
  );
}
