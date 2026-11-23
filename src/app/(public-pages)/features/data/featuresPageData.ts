import {
    BASE_PATH,
    featureItems,
} from '../../invenka/components/data/landingData'

export type FeatureCard = {
    title: string
    description: string
    image: string
    href?: string
}

export type FeatureCategory = {
    id: string
    label: string
    heading: string
    description: string
    cards: FeatureCard[]
}

// Card for one of the feature detail pages
const fromItem = (
    slug: string,
    image: string,
): FeatureCard => {
    const item = featureItems.find((f) => f.slug === slug)

    if (!item) {
        throw new Error(`Unknown feature slug: ${slug}`)
    }

    return {
        title: item.title,
        description: item.description,
        image,
        href: `${BASE_PATH}/features/${item.slug}`,
    }
}

export const featureCategories: FeatureCategory[] = [
    {
        id: 'organize',
        label: 'Organize',
        heading: 'Organize and automate your stock',
        description:
            'Bring your items together, organize them your way, and keep every important detail easy to find.',
        cards: [
            {
                title: 'Quick import',
                description:
                    'Import your existing inventory in just a few minutes.',
                image: '/img/features/featurepics/quick-import.png',
            },
            {
                title: 'Folders',
                description:
                    'Group items by location, category, and the way your team works.',
                image: '/img/features/featurepics/folders.png',
            },
        ],
    },

    {
        id: 'manage',
        label: 'Manage',
        heading: 'Manage your inventory from anywhere',
        description:
            'Keep your inventory connected across devices and make it simple for your whole team to stay organized.',
        cards: [
            fromItem(
                'mobile-app',
                '/img/features/featurepics/mobile-app.png',
            ),
            {
                title: 'Cloud sync',
                description:
                    'Keep your inventory information synced and available wherever you work.',
                image: '/img/features/featurepics/cloud-sync.png',
            },
            {
                title: 'Teams of any size',
                description:
                    'Give everyone on your team the access they need to keep work moving.',
                image: '/img/features/featurepics/teams.png',
            },
        ],
    },

    {
        id: 'track',
        label: 'Track & Update',
        heading: 'Track every item with confidence',
        description:
            'Know what you have, where it is, and when something changes with simple tracking and timely updates.',
        cards: [
            fromItem(
                'barcoding',
                '/img/features/featurepics/barcoding.png',
            ),
            fromItem(
                'alerts',
                '/img/features/featurepics/alerts.png',
            ),
        ],
    },

    {
        id: 'report',
        label: 'Report',
        heading: 'See the bigger picture with better data',
        description:
            'Turn your inventory data into clear insights that help you understand what is happening across your business.',
        cards: [
            {
                title: 'Detailed data',
                description:
                    'Get a clearer view of your inventory with useful information in one place.',
                image: '/img/features/featurepics/analytics.png',
            },
            {
                title: 'PDF & CSV export',
                description:
                    'Export your inventory data when you need to share, review, or work with it elsewhere.',
                image: '/img/features/featurepics/export.png',
            },
            fromItem(
                'inventory-prediction',
                '/img/features/featurepics/inventory-prediction.png',
            ),
        ],
    },
]