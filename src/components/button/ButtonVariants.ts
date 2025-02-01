import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center cursor-pointer rounded-full border-1 shadow-[0_0_10px_0] transition-all duration-200 ease-in-out hover:scale-102 font-bold flex items-center gap-2",
  {
    variants: {
      variant: {
        default:
          "text-default border-default shadow-default/30 hover:shadow-default/50",
        primary:
          "text-primary border-primary shadow-primary/30 hover:shadow-primary/50",
      },
      size: {
        default: "px-6 py-2",
        small: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
