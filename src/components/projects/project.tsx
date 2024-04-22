import { listItemVariants } from "../../lib/framer"
import { project } from "../../types/types"
import Button from "../fundamental/button"
import { motion } from "framer-motion"


const Project = ({
  img,
  name,
  description,
  url_github,
  url_preview,
}: project & { img?: string }) => {
  return (
    <motion.li
      variants={listItemVariants}
      className="flex flex-col gap-4  text-white"
    >
      <div className="max-w-[100%] max-h-[20rem] overflow-hidden">
        <img className="object-contain" src={img} alt={name + " picture"} />
      </div>
      <div className="p-4 flex flex-col gap-4 pb-8">
        <h3 className="text-2xl font-bold uppercase text-accent">{name}</h3>
        <p>{description}</p>
        <div className="flex gap-4">
          <a href={url_preview} target="_blank">
            <Button>view project</Button>
          </a>
          <a href={url_github} target="_blank">
            <Button>view code</Button>
          </a>
        </div>
      </div>
    </motion.li>
  )
}

export default Project
