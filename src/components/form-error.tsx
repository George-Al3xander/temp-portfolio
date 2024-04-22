import { motion, useAnimationControls } from "framer-motion"
import  { useEffect } from "react"


const FormError = ({
  isError,
  errMessage,
}: {
  isError: boolean
  errMessage?: string
}) => {
  const controls = useAnimationControls()
  useEffect(() => {
    if (isError) {
      controls.start("animate")
    } else {
      controls.start("initial")
    }
  }, [controls, isError])
  return (
    <motion.span
    className="text-red-600 italic"
      initial="initial"
      animate={controls}
      variants={{
        initial: {
          opacity: 0,
          transition: { duration: .5 },

        },
        animate: {
          opacity: 1,
          transition: { duration: .5 },
        },
      }}
    >
      {errMessage}
    </motion.span>
  )
}

export default FormError
