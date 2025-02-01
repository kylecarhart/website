import { Copy } from "lucide-react";
import { useRef, type ButtonHTMLAttributes } from "react";
import { buttonVariants, type ButtonVariants } from "./ButtonVariants";

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  copyText: string;
}

export default function CopyButton({
  copyText,
  children,
  variant,
  size,
  ...props
}: Props) {
  const copyRef = useRef<HTMLDivElement>(null);

  function handleCopy() {
    navigator.clipboard.writeText(copyText);
    copyRef.current?.animate(
      [{ opacity: 1 }, { transform: "translateY(-1em)", opacity: 0 }],
      { duration: 750, easing: "ease-out" }
    );
  }

  return (
    <div className="relative">
      <div
        ref={copyRef}
        className="absolute bottom-full left-1/2 -translate-x-1/2 opacity-0 w-full flex justify-center items-center gap-2 text-sm font-medium"
      >
        <Copy className="w-4 h-4 inline" /> Copied to clipboard
      </div>
      <button
        className={buttonVariants({ variant, size })}
        onClick={handleCopy}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
