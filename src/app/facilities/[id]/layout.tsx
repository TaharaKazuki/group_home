import { getFacilityById, getAllFacilities } from "@/data/facilities"

import type { Metadata } from "next"

interface FacilityLayoutProps {
  children: React.ReactNode
  params: Promise<{ id: string }>
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const facility = getFacilityById(id)

  if (!facility) {
    return {
      title: "施設が見つかりません",
      description: "お探しの施設は見つかりませんでした。",
    }
  }

  return {
    title: facility.name,
    description: facility.detailedDescription || facility.description,
    openGraph: {
      title: `${facility.name} | IXIA Group Home`,
      description: facility.detailedDescription || facility.description,
      images: [
        {
          url: facility.image,
          width: 1200,
          height: 630,
          alt: facility.name,
        },
      ],
    },
    twitter: {
      title: `${facility.name} | IXIA Group Home`,
      description: facility.detailedDescription || facility.description,
      images: [facility.image],
    },
  }
}

export async function generateStaticParams() {
  const facilities = getAllFacilities()
  return facilities.map((facility) => ({
    id: facility.id,
  }))
}

export default async function FacilityLayout({
  children,
}: FacilityLayoutProps) {
  return <>{children}</>
}
