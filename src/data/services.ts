import { DollarSign, Home } from "lucide-react"

export const servicesData = [
  {
    id: "pricing",
    icon: DollarSign,
    title: "料金詳細",
    description:
      "利用料金やサービス内容、公的支援制度の活用について詳しくご説明します。",
    detailedDescription:
      "私たちのグループホームでは、利用者様に安心してご利用いただけるよう、明確で透明性の高い料金体系を設けています。利用料金は、国の定める基準に基づき設定されており、各種公的支援制度もご活用いただけます。ご利用者様の個別のニーズに応じたサービス提供により、質の高いケアをリーズナブルな価格でお届けします。",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    features: [
      "基本利用料の詳細説明",
      "食事・光熱費の内訳",
      "各種支援制度のご案内",
      "個別料金のお見積もり",
      "支払い方法のご相談",
      "料金改定時の事前通知",
    ],
  },
  {
    id: "life",
    icon: Home,
    title: "暮らし",
    description:
      "グループホームでの一日の流れや、季節のイベント、日常生活の様子をご紹介します。",
    detailedDescription:
      "私たちのグループホームでは、利用者様が自分らしく生き生きとした毎日を過ごしていただけるよう、様々な活動や支援を行っています。一人ひとりの個性や能力を大切にし、家庭的な雰囲気の中で安心して過ごせる環境を提供しています。日常生活の支援から社会参加まで、幅広いサポートを通じて充実した生活をお手伝いします。",
    image:
      "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=600&h=400&fit=crop",
    features: [
      "朝・昼・夕の規則正しい生活リズム",
      "季節のイベント・行事",
      "外出・買い物支援",
      "趣味・レクリエーション活動",
      "健康管理・服薬支援",
      "地域交流・社会参加支援",
    ],
  },
]

export function getServiceById(id: string) {
  return servicesData.find((service) => service.id === id)
}
