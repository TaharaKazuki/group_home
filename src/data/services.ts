import { Palette, Package, Home, Users } from "lucide-react"

export const servicesData = [
  {
    id: "design",
    icon: Palette,
    title: "Design",
    description:
      "革新的なデザインソリューションを提供し、ブランド価値を最大化します。",
    image:
      "https://images.unsplash.com/photo-1509087859087-a384654eca4d?w=600&h=400&fit=crop",
    detailedDescription:
      "私たちのデザインチームは、最新のトレンドと伝統的な美学を融合させ、クライアントのブランドアイデンティティを強化するデザインソリューションを提供します。ロゴデザインから完全なブランドアイデンティティまで、あらゆるデザインニーズにお応えします。",
    features: [
      "ブランドアイデンティティデザイン",
      "ロゴ・グラフィックデザイン",
      "パッケージデザイン",
      "ウェブデザイン",
      "印刷物デザイン",
    ],
  },
  {
    id: "production",
    icon: Package,
    title: "Production",
    description: "最高品質の素材と熟練の技術で、理想を形にします。",
    image:
      "https://images.unsplash.com/photo-1452457807411-4979b707c5be?w=600&h=400&fit=crop",
    detailedDescription:
      "厳選された高品質な素材と、長年の経験を持つ職人による手作業で、お客様の理想を実現します。品質管理から完成まで、すべての工程を丁寧に管理しています。",
    features: [
      "家具製作",
      "カスタムオーダー対応",
      "素材選定・調達",
      "品質管理",
      "アフターサービス",
    ],
  },
  {
    id: "interior",
    icon: Home,
    title: "Interior",
    description:
      "空間全体をコーディネートし、統一感のある美しい環境を創造します。",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    detailedDescription:
      "住空間から商業空間まで、お客様のライフスタイルや事業内容に合わせたインテリアデザインを提案し、機能性と美しさを兼ね備えた空間を創造します。",
    features: [
      "住宅インテリアデザイン",
      "商業空間デザイン",
      "空間プランニング",
      "家具配置・コーディネート",
      "照明計画",
    ],
  },
  {
    id: "consulting",
    icon: Users,
    title: "Consulting",
    description: "専門知識を活かし、プロジェクト全体をサポートします。",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
    detailedDescription:
      "プロジェクトの企画段階からアフターサポートまで、豊富な経験と専門知識を活かして、お客様のビジネス成功をトータルでサポートします。",
    features: [
      "プロジェクト企画・立案",
      "市場調査・分析",
      "戦略策定支援",
      "実装サポート",
      "継続的改善提案",
    ],
  },
]

export function getServiceById(id: string) {
  return servicesData.find((service) => service.id === id)
}
