import textFile from "../../json/text.json"
import Icon from "../icon"
import Button from "../fundamental/button"
import NavBar from "../navbar"
import { motion } from "framer-motion"
import { containerVariants, textVariants } from "../../lib/framer"
import useView from "../../hooks/useView"

const { title, description } = textFile.header

const Header = ({
  scrollToContact,
}: {
  scrollToContact: () => void | undefined
}) => {
  const { ref, controls } = useView<HTMLParagraphElement>({ once: true })
  return (
    <header className="flex gap-8 flex-col-reverse text-center sm:text-left sm:flex-row text-white relative">
      <NavBar className="w-[40vw] sm:w-responsive left-0 right-0 sm:right-[initial] sm:left-[initial]   top-4 gap-4 absolute" />

      <motion.article
        variants={containerVariants}
        initial="initial"
        ref={ref}
        animate={controls}
        className="sm:basis-[60%] sm:pt-[14vh] flex flex-col items-center gap-4 sm:items-start"
      >
        <motion.h1
          variants={textVariants}
          initial="initial"
          animate={controls}
          className="font-bold text-4xl lg:text-6xl mb-4"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={textVariants}
          initial="initial"
          animate={controls}
          className="opacity-60"
        >
          {description}
        </motion.p>
        <Button onClick={scrollToContact}>Contact me</Button>
      </motion.article>

      <Icon />
    </header>
  )
}

export default Header
