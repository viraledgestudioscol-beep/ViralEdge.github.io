"use client";

import { motion, Variants } from "framer-motion";

export interface GradientTextAnimatorProps {
  text: string;
  className?: string;
}

export function GradientTextAnimator({ text, className }: GradientTextAnimatorProps) {
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: { transition: { staggerChildren: 0.03 } },
    visible: {
      transition: { staggerChildren: 0.03, delayChildren: 0.2 },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: `0.25em` },
    visible: { opacity: 1, y: `0em`, transition: { duration: 0.6 } },
  };

  return (
    <motion.h1
      className={`text-5xl font-bold text-center bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block mr-2">
          {word.split("").map((letter, j) => (
            <motion.span
              key={j}
              variants={letterVariants}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
}