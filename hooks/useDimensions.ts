import { useEffect, useRef } from "react"

export const useDimensions = (ref: any) => {
  const dimensions = useRef({ with: 0, height: 0 })

  useEffect(() => {
    dimensions.current.with = ref.current.offsetWidth
    dimensions.current.height = ref.current.offsetHeight
  }, [])

  return dimensions.current
}
