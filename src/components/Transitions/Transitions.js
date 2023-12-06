import { motion } from 'framer-motion';

// Create variable of the animation
const welcomeAnimation = {
  initial: {opacity:0}, //before
  animate: {opacity:1}, //after with animation
  exit: {opacity:0} //exit page with animation
}

const portfolioAnimation = {
  initial: {y:"2000px"},
  animate: {y:0},
  exit: {
    y:"2000px",
    opacity:0
  }
};

const contactAnimation = {
  initial: {x:"2000px"},
  animate: {x:0},
  exit: {x:"2000px"}
}

const aboutAnimation = {
  initial: {y:"-2000px"},
  animate: {y:0},
  exit: {y:"-2000px"}
}

// Export the animation function with variants from variable
export function WelcomeAnimation({children}) {
  return (
    <motion.div
      variants={welcomeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{duration:0.5}} //animation duration
    >
      {children}
    </motion.div>
  )
}

export default function Transitions({children}) {
  return (
    <motion.div
      variants={portfolioAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{duration:1}}
    >
      {children}
    </motion.div>
  )
}

export function ContactAnimation({children}) {
  return (
    <motion.div
      variants={contactAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{duration:1}}
    >
      {children}
    </motion.div>
  )
}

export function AboutAnimation({children}) {
  return (
    <motion.div
      variants={aboutAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{duration:1}}
    >
      {children}
    </motion.div>
  )
}