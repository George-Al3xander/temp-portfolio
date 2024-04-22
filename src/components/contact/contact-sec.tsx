import { forwardRef } from "react"
import jsonText from "../../json/text.json"
import ContactForm from "./contact-form"
import NavBar from "../navbar"
import useView from "../../hooks/useView"
import { motion } from "framer-motion"
import { textVariants } from "../../lib/framer"
const { footer } = jsonText
const { contact_text } = footer
const ContactSec = forwardRef<HTMLElement>((_prop, ref) => {
  const { ref: textRef, controls } = useView<HTMLParagraphElement>({
    once: true,
  })

  return (
    <footer ref={ref} className="bg-secondary py-14">
      <div className="w-responsive mx-auto flex-col sm:flex-row flex gap-16 justify-between">
        <motion.article
          ref={textRef}
          initial="initial"
          animate={controls}
          className="sm:basis-[100%]  flex flex-col items-center gap-4 sm:items-start"
        >
          <motion.h2
            variants={textVariants}
            className="font-bold text-4xl lg:text-6xl mb-4"
          >
            Contact
          </motion.h2>
          <motion.p variants={textVariants} className="opacity-60">
            {contact_text}
          </motion.p>
        </motion.article>
        <ContactForm />
      </div>
      <NavBar className="border-t-2 mt-8 pt-8" />
    </footer>
  )
})

export default ContactSec
