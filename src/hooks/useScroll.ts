import { useRef } from "react"

const useScroll = () => {
  const ref = useRef<HTMLElement>(null)
  const scrollToRef = () => {
    if (ref) {
      if (ref.current) {
        ref.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
  }
  return [ref, scrollToRef] as const
}

export default useScroll
