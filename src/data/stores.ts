import { MapPin, Phone, Clock, Users, Utensils, Wifi } from "lucide-react"

export const storesData = [
  {
    id: "shibuya",
    name: "IXIA渋谷店",
    shortName: "渋谷店",
    address: "東京都渋谷区神宮前1-1-1 渋谷ビル3F",
    phone: "090-0000-0001",
    email: "shibuya@ixia-grouphome.jp",
    openingHours: "10:00 - 20:00",
    closedDays: "水曜日",
    capacity: 12,
    description:
      "渋谷の中心地にある当店は、アクセスの良さと落ち着いた雰囲気で多くのお客様にご利用いただいています。",
    detailedDescription:
      "IXIA渋谷店は、東京の中心地である渋谷に位置する旗艦店です。最新の設備と快適な環境を提供し、利用者の皆様が安心して過ごせる空間を創造しています。経験豊富なスタッフが24時間体制でサポートし、一人ひとりのニーズに合わせたケアを提供いたします。",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
    features: [
      { icon: Users, name: "定員12名", description: "ゆったりとした居住空間" },
      {
        icon: Utensils,
        name: "食事サービス",
        description: "栄養バランスの取れた食事",
      },
      { icon: Wifi, name: "Wi-Fi完備", description: "高速インターネット環境" },
      { icon: MapPin, name: "駅近", description: "渋谷駅徒歩5分" },
    ],
    facilities: [
      "個室12室",
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
    id: "shinjuku",
    name: "IXIA新宿店",
    shortName: "新宿店",
    address: "東京都新宿区西新宿2-2-2 新宿タワー5F",
    phone: "090-0000-0002",
    email: "shinjuku@ixia-grouphome.jp",
    openingHours: "9:00 - 21:00",
    closedDays: "木曜日",
    capacity: 15,
    description:
      "新宿の高層ビル街にあり、都市的な利便性と静かな住環境を両立した理想的な立地です。",
    detailedDescription:
      "IXIA新宿店は、東京の副都心である新宿に位置し、ビジネス街の利便性と住環境の快適さを兼ね備えた施設です。公共交通機関へのアクセスが良く、買い物や医療機関も近隣に充実しています。モダンな設備と温かいスタッフのサポートで、利用者様が自立した生活を送れるよう支援いたします。",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
    features: [
      {
        icon: Users,
        name: "定員15名",
        description: "大型施設でゆとりある生活",
      },
      {
        icon: Utensils,
        name: "カフェテリア",
        description: "選べるメニューシステム",
      },
      { icon: Wifi, name: "最新設備", description: "スマートホーム機能" },
      {
        icon: Clock,
        name: "24時間サポート",
        description: "安心の見守りサービス",
      },
    ],
    facilities: [
      "個室15室",
      "大型リビング",
      "カフェテリア",
      "大浴場",
      "フィットネスルーム",
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
    id: "setagaya",
    name: "IXIA世田谷店",
    shortName: "世田谷店",
    address: "東京都世田谷区三軒茶屋3-3-3 世田谷ハウス2F",
    phone: "090-0000-0003",
    email: "setagaya@ixia-grouphome.jp",
    openingHours: "8:00 - 22:00",
    closedDays: "金曜日",
    capacity: 10,
    description:
      "住宅街の中にあり、家庭的で温かい雰囲気が特徴の施設です。地域との繋がりを大切にしています。",
    detailedDescription:
      "IXIA世田谷店は、閑静な住宅街に位置し、家庭的な雰囲気の中で利用者様が安心して生活できる環境を提供しています。地域コミュニティとの交流を重視し、地域イベントへの参加や近隣住民との良好な関係を築いています。緑豊かな環境で、心身ともに健やかな生活をサポートいたします。",
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e5b08dc0?w=800&h=600&fit=crop",
    features: [
      { icon: Users, name: "定員10名", description: "アットホームな環境" },
      { icon: MapPin, name: "住宅街", description: "静かで安全な立地" },
      { icon: Utensils, name: "家庭料理", description: "手作りの温かい食事" },
      { icon: Phone, name: "地域密着", description: "地域との強い連携" },
    ],
    facilities: [
      "個室10室",
      "家族的リビング",
      "ダイニングキッチン",
      "庭園",
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
]

export function getStoreById(id: string) {
  return storesData.find((store) => store.id === id)
}

export function getAllStores() {
  return storesData
}
