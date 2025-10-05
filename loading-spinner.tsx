'use client'

import { motion } from 'framer-motion'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  fullScreen?: boolean
}

const spinTransition = {
  repeat: Infinity,
  ease: "linear" as const,
  duration: 1
}

const pulseTransition = {
  repeat: Infinity,
  ease: "easeInOut" as const,
  duration: 1.5
}

export default function LoadingSpinner({ size = 'md', fullScreen = false }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-20 h-20'
  }

  const dotSize = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-3 h-3'
  }

  const container = fullScreen ? 'fixed inset-0 z-50 bg-black/90 backdrop-blur-sm' : 'relative'

  return (
    <div className={`${container} flex items-center justify-center`}>
      <div className="flex flex-col items-center gap-4">
        {/* Spinning Ring */}
        <div className={`${sizeClasses[size]} relative`}>
          <motion.div
            className="absolute inset-0 border-2 border-transparent border-t-blue-500 border-r-blue-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={spinTransition}
          />
          <motion.div
            className="absolute inset-2 border-2 border-transparent border-b-blue-400 border-l-blue-400 rounded-full"
            animate={{ rotate: -360 }}
            transition={spinTransition}
          />
        </div>

        {/* Pulsing Dots */}
        <div className="flex gap-1">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className={`${dotSize[size]} bg-blue-500 rounded-full`}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                ...pulseTransition,
                delay: index * 0.2
              }}
            />
          ))}
        </div>

        {fullScreen && (
          <motion.p
            className="text-white text-lg font-medium"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={pulseTransition}
          >
            Loading...
          </motion.p>
        )}
      </div>
    </div>
  )
}
