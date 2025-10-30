import { getServiceById, servicesData } from "@/data/services"

import type { Metadata } from "next"

interface ServiceLayoutProps {
  children: React.ReactNode
  params: Promise<{ id: string }>
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const service = getServiceById(id)

  if (!service) {
    return {
      title: "サービスが見つかりません",
      description: "お探しのサービスは見つかりませんでした。",
    }
  }

  return {
    title: service.title,
    description: service.detailedDescription || service.description,
    openGraph: {
      title: `${service.title} | IXIA Group Home`,
      description: service.detailedDescription || service.description,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      title: `${service.title} | IXIA Group Home`,
      description: service.detailedDescription || service.description,
      images: [service.image],
    },
  }
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    id: service.id,
  }))
}

export default async function ServiceLayout({ children }: ServiceLayoutProps) {
  return <>{children}</>
}
