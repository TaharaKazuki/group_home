import { DollarSign, Home } from "lucide-react"

export const servicesData = [
  {
    id: "pricing",
    icon: DollarSign,
    title: "料金詳細",
    description:
      "利用料金やサービス内容、公的支援制度の活用について詳しくご説明します。",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
  },
  {
    id: "life",
    icon: Home,
    title: "暮らし",
    description:
      "グループホームでの一日の流れや、季節のイベント、日常生活の様子をご紹介します。",
    image:
      "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=600&h=400&fit=crop",
  },
]

export function getServiceById(id: string) {
  return servicesData.find((service) => service.id === id)
}
