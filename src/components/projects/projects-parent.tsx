import useProjects from "../../hooks/useProjects"
import Project from "./project"
import Button from "../fundamental/button"
import ProjectsSkeleton from "./projects-skeleton"
import { motion } from "framer-motion"
import { containerVariants } from "../../lib/framer"
import useView from "../../hooks/useView"
import ProjectsErrorMessage from "./projects-error-message"

const ProjectsParent = ({
  scrollToContact,
}: {
  scrollToContact: () => void
}) => {
  const { data, isLoading, isError, images } = useProjects()
  const { ref, controls } = useView<HTMLUListElement>({
    once: true,
    additionalDependency: isLoading,
  })

  if (isError) return <ProjectsErrorMessage />

  return (
    <section>
      <div className="flex justify-between  p-4 mb-4">
        <h2 className="text-white text-4xl font-bold" id="projects">
          Projects
        </h2>
        <Button onClick={scrollToContact}>Contact me</Button>
      </div>
      <motion.ul
        ref={ref}
        variants={containerVariants}
        initial="initial"
        animate={controls}
        className="grid grid-cols-1 sm:grid-cols-2 gap-10 pb-10"
      >
        {isLoading ? (
          <ProjectsSkeleton />
        ) : (
          data!.map((obj) => (
            <Project key={obj.id} img={images[obj.id]} {...obj} />
          ))
        )}
      </motion.ul>
    </section>
  )
}

export default ProjectsParent
