import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "secondary" | "outline";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variant === "default" &&
          "bg-green-900/30 text-green-400 border border-green-800/40",
        variant === "secondary" &&
          "bg-white/10 text-white/60 border border-white/10",
        variant === "outline" && "border border-white/20 text-white/60",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
