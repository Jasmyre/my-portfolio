"use client";

import { useInView } from "react-intersection-observer";
import { motion, AnimationProps } from "framer-motion";
import React, { ReactNode } from "react";

interface AnimatedProps {
    triggerOnce?: boolean;
    threshold?: number;
    duration?: number;
    animation?: AnimationProps;
    className?: string;
    children?: ReactNode;
}

export const floatUp: AnimationProps = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const toRight: AnimationProps = {
  initial: {
    opacity: 0,
    transform: "translateX(-50px)",
  },
  animate: {
    opacity: 1,
    transform: "translateX(0)",
  },
};

export const toLeft: AnimationProps = {
  initial: {
    opacity: 0,
    transform: "translateX(50px)",
  },
  animate: {
    opacity: 1,
    transform: "translateX(0)",
  },
};

const Animated = ({ triggerOnce = false, threshold = 0.1, duration = 0.25, animation = floatUp, className, children, ...props}: AnimatedProps) => {
  const { ref, inView } = useInView({
    triggerOnce: triggerOnce, // Only animate once when in view
    threshold: threshold, // Trigger animation when 20% of the element is visible
  });

  return (
    <motion.div
      ref={ref}
      initial={animation.initial}
      animate={inView ? animation.animate : animation.initial}
      transition={{ duration: duration }}
      className={className}
      {...props}
    >
        {children}
    </motion.div>
  );
}
export default Animated