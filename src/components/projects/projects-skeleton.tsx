import { motion } from "framer-motion"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { listItemVariants } from "../../lib/framer"
const Projectsskeleton = () => {
  const items = ["first", "second", "third", "fourth"]

  return (
    <>
      {items.map((item) => (
        <motion.li
          variants={listItemVariants}
          className="flex flex-col gap-4"
          key={item + "-skeleton"}
        >
          <Skeleton height={"12rem"} />
          <Skeleton width={"60%"} />
          <Skeleton height={"4rem"} width={"70%"} />
          <div className="flex gap-4">
            <Skeleton width={"4rem"} />
            <Skeleton width={"4rem"} />
          </div>
        </motion.li>
      ))}
    </>
  )
}

export default Projectsskeleton
