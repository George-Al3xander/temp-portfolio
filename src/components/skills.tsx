import jsonText from "../json/text.json"
import { motion } from "framer-motion"
import useView from "../hooks/useView"
import { containerVariants, listItemVariants } from "../lib/framer"

const { body } = jsonText
const { skills } = body



const Skills = () => {
  const { ref, controls } = useView<HTMLUListElement>({once: true})
  return (
    <section className="border-t-2 border-b-2 sm:border-b-0 my-10 py-10">
      <motion.ul
        ref={ref}
        variants={containerVariants}
        animate={controls}
        initial="initial"
        className="text-center sm:grid grid-cols-3 items-center"
      >
        {skills.map((skill, index) => (
          <motion.li
            variants={listItemVariants}
            className={index != skills.length - 1 ? "mb-10 sm:mb-4" : ""}
            key={skill}
          >
            <h4 className="text-2xl font-bold">{skill}</h4>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}

export default Skills
