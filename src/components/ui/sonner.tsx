"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-gray-900 group-[.toaster]:border-gray-200 group-[.toaster]:shadow-xl group-[.toaster]:text-lg group-[.toaster]:p-6",
          description: "group-[.toast]:text-gray-700 group-[.toast]:text-base",
          actionButton:
            "group-[.toast]:bg-gray-900 group-[.toast]:text-gray-50",
          cancelButton:
            "group-[.toast]:bg-gray-100 group-[.toast]:text-gray-500",
          success:
            "group-[.toaster]:bg-green-100 group-[.toaster]:text-green-800 group-[.toaster]:border-green-300 group-[.toaster]:font-semibold",
          error:
            "group-[.toaster]:bg-red-100 group-[.toaster]:text-red-800 group-[.toaster]:border-red-300 group-[.toaster]:font-semibold",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
