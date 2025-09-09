import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  email: z.email("正しいメールアドレスを入力してください"),
  category: z
    .string()
    .min(1, "種別を選択してください")
    .refine((value) => value === "admission" || value === "employment", {
      message: "有効な種別を選択してください",
    }),
  message: z
    .string()
    .min(1, "メッセージを入力してください")
    .max(2000, "メッセージは2000文字以内で入力してください"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
