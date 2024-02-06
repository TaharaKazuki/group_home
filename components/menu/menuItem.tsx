import { motion } from "framer-motion"

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const color = "#F9AFA6"

export const MenuItem = ({ i }: { i: number }) => {
  const style = { border: `2px solid ${color}` }

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div style={style} />
      <div style={style} />
    </motion.li>
  )
}
