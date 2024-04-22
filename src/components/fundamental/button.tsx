import { HTMLAttributes } from "react"
import { motion } from "framer-motion"
const Button = ({
  className,
  ...props
}: HTMLAttributes<HTMLButtonElement> & { disabled?: boolean }) => (
  <motion.button
    whileHover={{
      y: -2,
      opacity: 0.7,
      transition: { duration: 0.2 },
    }}
    whileTap={{
      scale: 1.1,
    }}
    className={`${
      className ?? ""
    } uppercase font-semibold border-b-2 disabled:opacity-60 border-accent w-[min-content] whitespace-nowrap`}
    {...(props as object)}
  />
)
export default Button
