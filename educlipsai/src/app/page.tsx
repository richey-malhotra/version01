'use client'

import React, { useState, useEffect } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

const Logo = ({ scale = 1, delay = 0, color = "#000000" }) => {
const [hoverPart, setHoverPart] = useState<number | null>(null)

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.2 + delay, type: "spring", duration: 1.5, bounce: 0 },
      opacity: { delay: i * 0.2 + delay, duration: 0.01 }
    }
  })
}

const fillVariants = {
  hidden: { fill: `${color}00` },
  visible: { fill: `${color}FF`, transition: { delay: 1 + delay, duration: 0.5 } }
}

return (
  <motion.svg
    width={300 * scale}
    height={270 * scale}
    viewBox="0 0 100 90"
    xmlns="http://www.w3.org/2000/svg"
    initial="hidden"
    animate="visible"
  >
    <g transform="translate(5 0) translate(0 -3.12) matrix(1.3674 0 0 1.29706 -23.8552 -17.6799)">
      {[
        "m20.67,36.42l0,42.45l13.21,-13.21l0,-29.24l-13.21,0zm-1.08,46.16c-0.14,0 -0.29,-0.03 -0.42,-0.09c-0.41,-0.16 -0.67,-0.56 -0.67,-1l0,-46.15c0,-0.6 0.49,-1.09 1.09,-1.09l15.38,0c0.6,0 1.08,0.49 1.08,1.09l0,30.77c0,0.29 -0.11,0.56 -0.31,0.77l-15.39,15.38c-0.2,0.21 -0.48,0.32 -0.76,0.32",
        "m22.21,34.26l43.08,0l13.21,-13.21l-43.08,0l-13.21,13.21zm43.53,2.17l-46.15,0c-0.44,0 -0.84,-0.26 -1.01,-0.67c-0.17,-0.4 -0.07,-0.87 0.24,-1.18l15.38,-15.38c0.2,-0.21 0.48,-0.32 0.77,-0.32l46.15,0c0.44,0 0.84,0.27 1,0.67c0.17,0.41 0.08,0.87 -0.23,1.18l-15.39,15.39c-0.2,0.2 -0.47,0.31 -0.76,0.31",
        "m22.21,80.41l43.08,0l13.21,-13.21l-43.08,0l-13.21,13.21zm43.53,2.18l-46.15,0c-0.44,0 -0.84,-0.27 -1.01,-0.67c-0.17,-0.41 -0.07,-0.88 0.24,-1.19l15.38,-15.38c0.2,-0.2 0.48,-0.32 0.77,-0.32l46.15,0c0.44,0 0.84,0.27 1,0.67c0.17,0.41 0.08,0.87 -0.23,1.19l-15.39,15.38c-0.2,0.2 -0.47,0.32 -0.76,0.32",
        "m66.82,65.03l13.21,0l0,-42.44l-13.21,13.21l0,29.23zm14.3,2.17l-15.38,0c-0.6,0 -1.09,-0.48 -1.09,-1.08l0,-30.77c0,-0.29 0.12,-0.56 0.32,-0.77l15.38,-15.38c0.32,-0.31 0.78,-0.41 1.19,-0.23c0.4,0.16 0.67,0.56 0.67,1l0,46.15c-0.01,0.6 -0.49,1.08 -1.09,1.08"
      ].map((d, i) => (
        <motion.path
          key={i}
          d={d}
          variants={pathVariants}
          custom={i}
          stroke={hoverPart === i ? "#3B82F6" : color}
          strokeWidth={0.5 / scale}
          fill="none"
          onMouseEnter={() => setHoverPart(i)}
          onMouseLeave={() => setHoverPart(null)}
        />
      ))}
      {[
        "m20.67,36.42l0,42.45l13.21,-13.21l0,-29.24l-13.21,0zm-1.08,46.16c-0.14,0 -0.29,-0.03 -0.42,-0.09c-0.41,-0.16 -0.67,-0.56 -0.67,-1l0,-46.15c0,-0.6 0.49,-1.09 1.09,-1.09l15.38,0c0.6,0 1.08,0.49 1.08,1.09l0,30.77c0,0.29 -0.11,0.56 -0.31,0.77l-15.39,15.38c-0.2,0.21 -0.48,0.32 -0.76,0.32",
        "m22.21,34.26l43.08,0l13.21,-13.21l-43.08,0l-13.21,13.21zm43.53,2.17l-46.15,0c-0.44,0 -0.84,-0.26 -1.01,-0.67c-0.17,-0.4 -0.07,-0.87 0.24,-1.18l15.38,-15.38c0.2,-0.21 0.48,-0.32 0.77,-0.32l46.15,0c0.44,0 0.84,0.27 1,0.67c0.17,0.41 0.08,0.87 -0.23,1.18l-15.39,15.39c-0.2,0.2 -0.47,0.31 -0.76,0.31",
        "m22.21,80.41l43.08,0l13.21,-13.21l-43.08,0l-13.21,13.21zm43.53,2.18l-46.15,0c-0.44,0 -0.84,-0.27 -1.01,-0.67c-0.17,-0.41 -0.07,-0.88 0.24,-1.19l15.38,-15.38c0.2,-0.2 0.48,-0.32 0.77,-0.32l46.15,0c0.44,0 0.84,0.27 1,0.67c0.17,0.41 0.08,0.87 -0.23,1.19l-15.39,15.38c-0.2,0.2 -0.47,0.32 -0.76,0.32",
        "m66.82,65.03l13.21,0l0,-42.44l-13.21,13.21l0,29.23zm14.3,2.17l-15.38,0c-0.6,0 -1.09,-0.48 -1.09,-1.08l0,-30.77c0,-0.29 0.12,-0.56 0.32,-0.77l15.38,-15.38c0.32,-0.31 0.78,-0.41 1.19,-0.23c0.4,0.16 0.67,0.56 0.67,1l0,46.15c-0.01,0.6 -0.49,1.08 -1.09,1.08"
      ].map((d, i) => (
        <motion.path
          key={`fill-${i}`}
          d={d}
          variants={fillVariants}
          fill={hoverPart === i ? `${color}20` : `${color}10`}
        />
      ))}
    </g>
  </motion.svg>
)
}

export default function AnimatedIntro() {
const [animationStage, setAnimationStage] = useState(0)
const mainLogoControls = useAnimation()
const fadeControls = useAnimation()
const wipeControls = useAnimation()
const router = useRouter()

useEffect(() => {
  const animate = async () => {
    // Stage 0: Initial logo reveal
    await mainLogoControls.start({
      scale: [0.5, 1.1, 1],
      opacity: [0, 1],
      transition: { duration: 1.5, times: [0, 0.8, 1], ease: "easeInOut" }
    })
    setAnimationStage(1)

    // Stage 1: Logo pulse
    await mainLogoControls.start({
      scale: [1, 1.05, 1],
      transition: { 
        duration: 2, 
        times: [0, 0.5, 1],
        repeat: 2,
        repeatType: "loop"
      }
    })
    setAnimationStage(2)

    // Stage 2: Logo expansion and grid reveal
    await mainLogoControls.start({
      scale: [1, 20],
      opacity: [1, 0],
      transition: { duration: 1.5, ease: "easeInOut" }
    })
    setAnimationStage(3)

    // Stage 3: Grid animation
    await new Promise(resolve => setTimeout(resolve, 5000))
    setAnimationStage(4)


    // Stage 5: Wipe effect
    await wipeControls.start({
      clipPath: [
        'inset(0% 0% 0% 0%)',
        'inset(0% 0% 0% 100%)',
        'inset(0% 0% 100% 100%)',
        'inset(0% 100% 100% 100%)',
        'inset(100% 100% 100% 100%)'
      ],
      transition: { duration: 2, ease: "easeInOut" }
    })
    setAnimationStage(5)


    // Navigate to landing page
    router.push('/landing')
  }

  animate()
}, [mainLogoControls, fadeControls, wipeControls, router])

const gridVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.03,
      delayChildren: 0.2,
      staggerDirection: 1,
      when: "beforeChildren"
    } 
  }
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -180 },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: { 
      type: "spring", 
      stiffness: 100,
      damping: 10
    } 
  }
}

return (
  <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-purple-600 to-blue-500">
    <AnimatePresence>
      {animationStage < 2 && (
        <motion.div 
          key="mainLogo"
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            animate={mainLogoControls}
            className="w-64 h-64"
          >
            <Logo color="#FFFFFF" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    <motion.div
      className="absolute inset-0"
      animate={wipeControls}
    >
      {animationStage >= 2 && (
        <motion.div 
          className="absolute inset-0 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 p-4"
          variants={gridVariants}
          initial="hidden"
          animate="visible"
        >
          {Array.from({ length: 80 }).map((_, index) => (
            <motion.div 
              key={index} 
              className="flex items-center justify-center" 
              variants={itemVariants}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              <Logo scale={0.15} delay={(index % 10) * 0.1} color="#FFFFFF" />
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500"
      initial={{ opacity: 0 }}
      animate={fadeControls}
    />
  </div>
)
}