import { useState } from "react"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Button from "../fundamental/button"
import emailjs from "@emailjs/browser"
import toast from "react-hot-toast"
import { motion } from "framer-motion"
import useView from "../../hooks/useView"
import { containerVariants, listItemVariants } from "../../lib/framer"
import FormError from "../form-error"
const ContactSchema = z.object({
  email: z.string().email(),
  message: z
    .string()
    .min(50, "Message must be at least 50 characters in length")
    .max(300, "Message can't be longer than 300 characters"),
  name: z
    .string()
    .min(3, "Name must be at least 3 characters in length")
    .max(100, "Name can't be longer than 100 characters"),
})

const fields: { name: string; type?: string }[] = [
  { name: "name" },
  { name: "email", type: "email" },
]

const ContactForm = () => {
  //const formRef = useRef<HTMLFormElement>(null)
  const { ref: formRef, controls } = useView<HTMLFormElement>({ once: true })

  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(ContactSchema) })

  const onSubmit = () => {
    setIsLoading(true)
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success("Message sent!")
          reset()
        },
        (error) => {
          console.log("FAILED...", error.text)
          toast.error("Failed to send message")
        }
      )
      .finally(() => setIsLoading(false))
  }
  const isBusy = [isLoading, isSubmitting].includes(true)
  return (
    <motion.form
      ref={formRef}
      variants={containerVariants}
      animate={controls}
      initial="initial"
      className="flex flex-col gap-4 basis-[100%]"
      onSubmit={handleSubmit(onSubmit)}
    >
      {fields.map(({ name }) => (
        <>
          <motion.input
            key={name}
            variants={listItemVariants}
            className="bg-secondary border-b-2 py-4 focus:border-accent focus:outline-none focus:ring-0"
            id={name}
            placeholder={name.toUpperCase()}
            {...register(name)}
          />
          {/* {errors && errors[name] && (
            <span>{errors[name]?.message as string}</span>
          )} */}
          <FormError
            key={name + "err-message"}
            isError={Boolean(errors && errors[name])}
            errMessage={errors[name]?.message as string}
          />
        </>
      ))}
      <motion.textarea
        variants={listItemVariants}
        placeholder="MESSAGE"
        className="bg-secondary border-b-2 py-4 focus:border-accent focus:outline-none focus:ring-0"
        {...register("message")}
      />
      <FormError
        isError={Boolean(errors && errors["message"])}
        errMessage={errors["message"]?.message as string}
      />

      <Button disabled={isBusy} className="self-end">
        send{isBusy && "ing"} message{isSubmitting && "..."}{" "}
      </Button>
    </motion.form>
  )
}

export default ContactForm
