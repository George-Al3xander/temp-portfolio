import jsonText from "../json/text.json"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
const { username, links } = jsonText
import { motion } from "framer-motion"
import { navVariants } from "../lib/framer"
import useView from "../hooks/useView"

const icons = { github: <FaGithub />, linkedin: <FaLinkedin /> }
const linksMap = Object.entries(links)

const NavBar = ({ className }: { className?: string }) => {
  const { ref, controls } = useView({ once: true })
  return (
    <motion.nav
      ref={ref}
      variants={navVariants}
      initial={"initial"}
      animate={controls}
      className={`${
        className ?? ""
      } flex flex-col sm:flex-row items-center sm:justify-between`}
    >
      <h4 className="text-md font-bold">{username}</h4>
      <ul className="flex gap-2">
        {linksMap.map(([key, value]) => (
          <motion.li
            whileHover={{
              opacity: 0.7,
              y: -1,
            }}
            key={key + "-link"}
          >
            <a target="_blank" href={value}>
              {icons[key as "github"]}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}

export default NavBar
