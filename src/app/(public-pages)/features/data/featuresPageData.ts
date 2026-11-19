import type { IconType } from 'react-icons'
import {
    TbCloud,
    TbFileExport,
    TbFileImport,
    TbFolder,
    TbListDetails,
    TbReportAnalytics,
    TbUsers,
} from 'react-icons/tb'
import {
    BASE_PATH,
    featureItems,
    featureRows,
    integrationsSection,
} from '../../invenka/components/data/landingData'

/**
 * Data for the /invenka/features page.
 * Everything is pulled from components/data/landingData.ts so the copy stays
 * in one place. Only the short card titles that are marked NEW below are
 * additional text; their descriptions are existing sentences.
 */

export type FeatureCard = {
    title: string
    description: string
    Icon?: IconType
    image?: string // used instead of an icon (integration logos)
    href?: string // only cards backed by a feature detail page are links
}

export type FeatureCategory = {
    id: string
    label: string
    heading: string
    description: string
    points: string[]
    cards: FeatureCard[]
}

// A card for one of the 7 dropdown features (links to its detail page)
const fromItem = (slug: string): FeatureCard => {
    const item = featureItems.find((f) => f.slug === slug)
    if (!item) throw new Error(`Unknown feature slug: ${slug}`)
    return {
        title: item.title,
        description: item.description,
        Icon: item.Icon,
        href: `${BASE_PATH}/features/${item.slug}`,
    }
}

const [organizeRow, trackRow, reportRow, syncRow] = featureRows

export const featureCategories: FeatureCategory[] = [
    {
        id: 'organize',
        label: 'Organize',
        heading: organizeRow.title,
        description: organizeRow.text,
        points: organizeRow.points,
        cards: [
            { title: 'Quick import', description: organizeRow.points[0], Icon: TbFileImport }, // NEW title
            { title: 'Folders', description: organizeRow.points[1], Icon: TbFolder }, // NEW title
        ],
    },
    {
        id: 'customize',
        label: 'Customize',
        heading: 'Customize every item', // NEW
        description: 'Keep the details that matter in custom fields, and add photos to every item.', // NEW (built from existing copy)
        points: [],
        cards: [
            { title: 'Custom fields', description: organizeRow.points[2], Icon: TbListDetails }, // NEW title
            fromItem('inventory-photos'),
        ],
    },
    {
        id: 'manage',
        label: 'Manage',
        heading: syncRow.title,
        description: syncRow.text,
        points: syncRow.points,
        cards: [
            fromItem('mobile-app'),
            { title: 'Cloud sync', description: syncRow.points[0], Icon: TbCloud }, // NEW title
            { title: 'Teams of any size', description: syncRow.points[2], Icon: TbUsers }, // NEW title
        ],
    },
    {
        id: 'track',
        label: 'Track & Update',
        heading: trackRow.title,
        description: trackRow.text,
        points: trackRow.points,
        cards: [fromItem('barcoding'), fromItem('alerts')],
    },
    {
        id: 'report',
        label: 'Report',
        heading: reportRow.title,
        description: reportRow.text,
        points: reportRow.points,
        cards: [
            { title: 'Detailed data', description: reportRow.points[0], Icon: TbReportAnalytics }, // NEW title
            { title: 'PDF & CSV export', description: reportRow.points[1], Icon: TbFileExport }, // NEW title
            fromItem('sales-prediction'),
            fromItem('buying-prediction'),
        ],
    },
    {
        id: 'integrations',
        label: 'Integrations',
        heading: integrationsSection.title,
        description: integrationsSection.text,
        points: [],
        cards: [
            fromItem('integrations'),
            ...integrationsSection.items.map((item) => ({
                title: item.title,
                description: item.description,
                image: item.image,
            })),
        ],
    },
]
