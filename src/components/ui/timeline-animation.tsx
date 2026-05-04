"use client";

import {
  motion,
  useInView,
  type Variants,
  type HTMLMotionProps,
} from "framer-motion";
import { type ElementType, type RefObject, useRef } from "react";

type TimelineContentProps = {
  as?: ElementType;
  animationNum?: number;
  customVariants?: {
    visible: (i: number) => object;
    hidden: object;
  };
  timelineRef?: RefObject<HTMLElement | HTMLDivElement | null>;
  children?: React.ReactNode;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "variants" | "animate" | "initial" | "custom">;

const DEFAULT_VARIANTS: Variants = {
  hidden: { opacity: 1, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export function TimelineContent({
  as = "div",
  animationNum = 0,
  customVariants,
  timelineRef,
  children,
  className,
  ...props
}: TimelineContentProps) {
  const ownRef = useRef<HTMLDivElement>(null);
  const ref = timelineRef ?? ownRef;

  const isInView = useInView(ref as RefObject<Element>, {
    once: true,
    margin: "10px",
  });

  const variants = (customVariants ?? DEFAULT_VARIANTS) as Variants;

  const MotionComponent = (
    typeof as === "string" && as in motion
      ? motion[as as keyof typeof motion]
      : motion.div
  ) as typeof motion.div;

  return (
    <MotionComponent
      ref={
        !timelineRef ? (ownRef as React.RefObject<HTMLDivElement>) : undefined
      }
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={animationNum}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
