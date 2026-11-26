import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import IndustryDetail from '../components/IndustryDetail'
import { getIndustry, industries } from '../data/industriesData'

type PageProps = { params: Promise<{ slug: string }> }

// Only the industries in the data file exist; anything else is a 404
export const dynamicParams = false

export function generateStaticParams() {
  return industries.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustry(slug)

  if (!industry) {
    return { title: 'Industries | Invenka' }
  }

  return {
    title: `${industry.name} Inventory Management | Invenka`,
    description: industry.intro,
  }
}

async function page({ params }: PageProps) {
  const { slug } = await params

  if (!getIndustry(slug)) {
    notFound()
  }

  return <IndustryDetail slug={slug} />
}

export default page
