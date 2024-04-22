export const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

export const listItemVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}

export const svgVariants = {
  initial: {
    rotate: -180,
  },
  animate: {
    rotate: 0,
    transition: { duration: 1, delay: 0.5 },
  },
}

export const pathVariants = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,

    transition: { duration: 3, ease: "easeInOut", delay: 0.5 },
  },
}

export const navVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 1, delay: 1.3 },
  },
}

export const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      //staggerChildren: 0.1,
    },
  },
}
