import Button from '../fundamental/button'
import { motion } from 'framer-motion'
import { containerVariants, listItemVariants } from '../../lib/framer'
import jsonText from "../../json/text.json"
const {links} = jsonText
const ProjectsErrorMessage = () => {
  return (
    <motion.section variants={containerVariants} initial="initial" animate="animate" className='flex flex-col gap-8 items-center py-10 text-center'>
        <motion.h2 variants={listItemVariants} className='font-bold text-2xl'>Oops, something went wrong</motion.h2>
        <motion.p variants={listItemVariants} className='opacity-60'> It seems there was an error while loading the projects. Don't worry though, you can always give it another try or check out my GitHub repositories instead.</motion.p>
        <motion.ul variants={listItemVariants} className='flex gap-4'>
            <Button onClick={() => window.location.reload()}>Try again</Button>
            <a href={`${links.github}?tab=repositories`} target="_blank" rel="noopener noreferrer"><Button>Check out repos</Button></a>
        </motion.ul>
    </motion.section>
  )
}

export default ProjectsErrorMessage