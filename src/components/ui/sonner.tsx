"use client"

import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-gray-700 group-[.toaster]:border group-[.toaster]:border-red-300 group-[.toaster]:shadow-xl group-[.toaster]:text-lg group-[.toaster]:p-6 group-[.toaster]:font-bold",
          description:
            "group-[.toast]:text-gray-700 group-[.toast]:text-base group-[.toast]:font-normal",
          actionButton:
            "group-[.toast]:bg-gray-900 group-[.toast]:text-gray-50",
          cancelButton:
            "group-[.toast]:bg-gray-100 group-[.toast]:text-gray-500",
          success:
            "group-[.toaster]:bg-white group-[.toaster]:text-gray-700 group-[.toaster]:border group-[.toaster]:border-red-300 group-[.toaster]:font-bold [&>svg]:text-red-300",
          error:
            "group-[.toaster]:bg-white group-[.toaster]:text-gray-700 group-[.toaster]:border group-[.toaster]:border-red-300 group-[.toaster]:font-bold [&>svg]:text-red-300",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
