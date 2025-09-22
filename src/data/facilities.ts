import { MapPin, Phone, Utensils, Wifi } from "lucide-react"

export const facilitiesData = [
  {
    id: "ixia-1",
    name: "グループホームわおんイキシア",
    shortName: "わおんイキシア",
    address: "〒334-0061 埼玉県川口市大字新堀837番地10",
    phone: "090-0000-0001",
    email: "shigemi.takano@gmail.com",
    description:
      "川口市新堀にある当施設は、アットホームな雰囲気と充実したサポート体制で、利用者様の自立を支援しています。",
    detailedDescription:
      "グループホームわおんイキシアは、埼玉県川口市新堀に位置する障害者グループホームです。24時間体制のサポートで、利用者様一人ひとりが安心して生活できる環境を提供しています。地域との連携を大切にし、利用者様の社会参加と自立を積極的に支援いたします。",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
    features: [
      {
        icon: Utensils,
        name: "食事サービス",
        description: "栄養バランスの取れた食事",
      },
      { icon: Wifi, name: "Wi-Fi完備", description: "インターネット環境" },
    ],
    facilities: [
      "個室10室",
      "共有リビング",
      "食堂",
      "浴室・洗面所",
      "洗濯室",
      "相談室",
    ],
    staff: [
      {
        name: "田中 美香",
        position: "管理者",
        experience: "5年",
        speciality: "生活支援",
      },
      {
        name: "佐藤 健太",
        position: "生活支援員",
        experience: "3年",
        speciality: "就労支援",
      },
    ],
  },
  {
    id: "ixia-2",
    name: "グループホームわおんイキシアⅡ",
    shortName: "わおんイキシアⅡ",
    address: "〒334-0059 埼玉県川口市安行248-20",
    phone: "090-0000-0002",
    email: "shigemi.takano@gmail.com",
    description:
      "川口市安行にある当施設は、自然豊かな環境の中で、利用者様が落ち着いて生活できる空間を提供しています。",
    detailedDescription:
      "グループホームわおんイキシアⅡは、川口市安行の静かな住宅街に位置しています。緑豊かな環境の中で、利用者様が心身ともに健やかに生活できるよう、きめ細やかなサポートを提供しています。日中活動支援や就労支援など、個別のニーズに応じた支援計画を作成し、実施しています。",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
    features: [
      {
        icon: MapPin,
        name: "静かな住宅街",
        description: "落ち着いた生活環境",
      },
      { icon: Utensils, name: "手作り料理", description: "温かい家庭的な食事" },
    ],
    facilities: [
      "個室12室",
      "広々としたリビング",
      "ダイニングルーム",
      "大浴場",
      "庭園",
      "多目的室",
    ],
    staff: [
      {
        name: "山田 太郎",
        position: "施設長",
        experience: "8年",
        speciality: "施設運営・管理",
      },
      {
        name: "鈴木 花子",
        position: "看護師",
        experience: "6年",
        speciality: "健康管理",
      },
    ],
  },
  {
    id: "akatsuki",
    name: "グループホームあかつき館",
    shortName: "あかつき館",
    address: "〒333-0831 埼玉県川口市木曾呂939番地9",
    phone: "090-0000-0003",
    email: "shigemi.takano@gmail.com",
    description:
      "川口市木曾呂にある当施設は、家庭的な雰囲気を大切にし、利用者様が安心して暮らせる第二の家を目指しています。",
    detailedDescription:
      "グループホームあかつき館は、川口市木曾呂の閑静な住宅街にある小規模でアットホームな施設です。少人数制の良さを活かし、利用者様お一人おひとりとじっくり向き合い、きめ細やかなサポートを提供しています。地域との交流も活発で、地域行事への参加など社会参加の機会も豊富です。",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
    features: [
      { icon: MapPin, name: "閑静な住宅街", description: "穏やかな生活環境" },
      {
        icon: Utensils,
        name: "家庭料理",
        description: "季節の食材を使った食事",
      },
      { icon: Phone, name: "地域密着", description: "地域との強い絆" },
    ],
    facilities: [
      "個室8室",
      "家族的リビング",
      "ダイニングキッチン",
      "和室",
      "談話室",
      "事務室",
    ],
    staff: [
      {
        name: "高橋 由美",
        position: "管理者",
        experience: "7年",
        speciality: "地域連携・生活支援",
      },
      {
        name: "渡辺 一郎",
        position: "世話人",
        experience: "4年",
        speciality: "日常生活支援",
      },
    ],
  },
  {
    id: "ixia-4",
    name: "グループホームわおんイキシアⅣ",
    shortName: "わおんイキシアⅣ",
    address: "〒334-0063 埼玉県川口市本郷1211番地32",
    phone: "090-0000-0004",
    email: "shigemi.takano@gmail.com",
    description:
      "川口市本郷にある最新設備を備えた施設で、快適な生活環境と充実したサポート体制を提供しています。",
    detailedDescription:
      "グループホームわおんイキシアⅣは、川口市本郷に位置する最新の設備を備えた施設です。バリアフリー設計で安全性を重視し、利用者様が快適に生活できる環境を整えています。個別支援計画に基づき、日常生活支援から就労支援まで、幅広いサポートを提供し、利用者様の自立と社会参加を促進しています。",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
    features: [
      { icon: Wifi, name: "最新設備", description: "充実した設備" },
      {
        icon: Utensils,
        name: "栄養管理",
        description: "管理栄養士による献立",
      },
    ],
    facilities: [
      "個室14室",
      "大型共有リビング",
      "食堂",
      "浴室",
      "リハビリ室",
      "屋上庭園",
    ],
    staff: [
      {
        name: "伊藤 正人",
        position: "施設長",
        experience: "10年",
        speciality: "総合支援・施設管理",
      },
      {
        name: "加藤 美穂",
        position: "サービス管理責任者",
        experience: "5年",
        speciality: "個別支援計画",
      },
    ],
  },
]

export function getFacilityById(id: string) {
  return facilitiesData.find((facility) => facility.id === id)
}

export function getAllFacilities() {
  return facilitiesData
}
