
import ContactSec from "./components/contact/contact-sec"
import Header from "./components/header/header"

import ProjectsParent from "./components/projects/projects-parent"
import Skills from "./components/skills"
import useScroll from "./hooks/useScroll"


function App() {
  const [contactSectionRef, scrollToContact] = useScroll()
  return (
    <div className="bg-primary">
      <Header scrollToContact={scrollToContact} />
      <Skills />
      <ProjectsParent scrollToContact={scrollToContact} />
      <ContactSec ref={contactSectionRef} />
    </div>
  )
}

export default App
