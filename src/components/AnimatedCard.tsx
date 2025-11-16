import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedCard = ({ children, className, delay = 0 }: AnimatedCardProps) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-card border border-border/40 p-6",
        "transition-all duration-300 hover:shadow-[var(--shadow-card-hover)]",
        "animate-fade-in hover:scale-[1.02] hover:-translate-y-1",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:to-secondary/5",
        "before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        boxShadow: "var(--shadow-card)"
      }}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedCard;
