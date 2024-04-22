import { useAnimationControls, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

const useView = <T extends HTMLElement>(
  props: { once?: boolean; additionalDependency?: boolean } | undefined
) => {
  const ref = useRef<T>(null)
  const isInView = useInView(ref, props)
  const controls = useAnimationControls()
  useEffect(() => {
    if (isInView) {
      console.log(isInView)
      controls.start("animate")
    } else {
      controls.start("initial")
    }
  }, [controls, isInView, props?.additionalDependency])

  return { ref, controls }
}

export default useView
