'use client'

import { motion, AnimatePresence, Transition } from 'framer-motion'
// La importación de 'next/navigation' es correcta para Next.js App Router,
// pero genera un error en el entorno de compilación de la vista previa.
// Para que la vista previa funcione, hemos comentado esta línea.
// import { usePathname } from 'next/navigation' 
import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -20, // Ajustado para un efecto de salida más dinámico
    scale: 1.02
  }
}

// Aplicamos el tipo 'Transition' importado de framer-motion para resolver el error de TypeScript.
const pageTransition: Transition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
}

export default function PageTransition({ children }: PageTransitionProps) {
  // Para evitar el error de compilación en este entorno, hemos comentado la línea.
  // const pathname = usePathname()

  // Usamos una clave estática para que la vista previa no se rompa.
  // En tu proyecto real, usa 'pathname' como la clave.
  const staticKey = "/transition" 

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={staticKey}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="min-h-screen w-full" 
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
