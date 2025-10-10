import * as React from "react";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: LucideIcon;
  endIcon?: LucideIcon;
  onClickStartIcon?: () => void;
  onClickEndIcon?: () => void;
}

function Input({
  className,
  type,
  startIcon,
  endIcon,
  onClickStartIcon,
  onClickEndIcon,
  ...props
}: InputProps) {
  const StartIcon = startIcon;
  const EndIcon = endIcon;
  return (
    <div className="w-full relative">
      {StartIcon && (
        <StartIcon
          className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground"
          onClick={onClickStartIcon}
          size={19}
        />
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
      {EndIcon && (
        <EndIcon
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground"
          onClick={onClickEndIcon}
          size={19}
        />
      )}
    </div>
  );
}

export { Input };
