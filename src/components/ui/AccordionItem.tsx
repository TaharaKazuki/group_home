"use client"

import { useState } from "react"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

import { colors } from "@/lib/colors"

interface AccordionItemProps {
  question: string
  answer: string
  questionId: number
}

export default function AccordionItem({
  question,
  answer,
  questionId,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-start justify-between text-left transition-colors hover:cursor-pointer hover:text-gray-600"
        aria-expanded={isOpen}
        aria-controls={`answer-${questionId}`}
      >
        <div className="flex items-start gap-4">
          <span
            className={`rounded-ful mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white ${colors.primaryClass}`}
          >
            Q{questionId}
          </span>
          <span className="text-base font-medium text-gray-900 md:text-lg">
            {question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="mt-1 ml-4 flex-shrink-0"
        >
          <ChevronDown
            className={`h-5 w-5 ${colors.primaryClass} rounded-full text-white`}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`answer-${questionId}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex items-start gap-4 pt-4">
              <span className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 text-xs font-semibold text-gray-600">
                A
              </span>
              <p className="leading-relaxed text-gray-700">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
