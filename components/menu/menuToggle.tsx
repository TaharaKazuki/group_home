import { motion } from "framer-motion"

const topVariants = {
  closed: {
    rotate: 0,
    backgroundColor: "#F9AFA6",
  },
  opened: {
    rotate: 45,
  },
}
const centerVariants = {
  closed: {
    opacity: 1,
    backgroundColor: "#F9AFA6",
  },
  opened: {
    opacity: 0,
  },
}
const bottomVariants = {
  closed: {
    rotate: 0,
    backgroundColor: "#F9AFA6",
  },
  opened: {
    rotate: -45,
  },
}

type ToggleProps = {
  isOpen: boolean
  toggle: () => void
}

export const MenuToggle = ({ isOpen, toggle }: ToggleProps) => (
  <button
    className="w-10 h-8 flex flex-col justify-between z-50 relative"
    onClick={toggle}
  >
    <motion.div
      variants={topVariants}
      animate={isOpen ? "opened" : "closed"}
      className="w-10 h-1 rounded bg-main origin-left"
    />
    <motion.div
      variants={centerVariants}
      animate={isOpen ? "opened" : "closed"}
      className="w-10 h-1 rounded bg-main"
    />
    <motion.div
      variants={bottomVariants}
      animate={isOpen ? "opened" : "closed"}
      className="w-10 h-1 rounded bg-main origin-left"
    />
  </button>
)
