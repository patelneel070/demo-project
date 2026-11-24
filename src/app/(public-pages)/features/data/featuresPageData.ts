import type { IconType } from 'react-icons'
import {
    TbArchive,
    TbBell,
    TbBox,
    TbBoxMultiple,
    TbBarcode,
    TbCategory,
    TbChartLine,
    TbCloud,
    TbEdit,
    TbFileExport,
    TbFileImport,
    TbFolder,
    TbHistory,
    TbHome,
    TbMapPin,
    TbNotes,
    TbPhoto,
    TbQrcode,
    TbSearch,
    TbUsers,
    TbUserCheck,
    TbDeviceMobile,
    TbCheck,
    TbMinus,
    TbRefresh,
    TbPackage,
    TbAdjustments,
} from 'react-icons/tb'

import {
    BASE_PATH,
    featureItems,
} from '../../invenka/components/data/landingData'

export type FeatureCard = {
    title: string
    description: string
    Icon: IconType
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
    Icon: IconType,
): FeatureCard => {
    const item = featureItems.find((f) => f.slug === slug)

    if (!item) {
        throw new Error(`Unknown feature slug: ${slug}`)
    }

    return {
        title: item.title,
        description: item.description,
        Icon,
        href: `${BASE_PATH}/features/${item.slug}`,
    }
}
export const hero = {
    // Words listed in `highlight` are shown in the primary colour
    title: 'Every feature you need to manage inventory, effortlessly.',
    highlight: ['feature'],
    subtitle:
        'A simple way for growing teams to keep track of supplies, parts, tools and equipment, all in one place.',
    primaryCta: 'Start Free Trial',
    secondaryCta: 'See All plans',
}
export const featureCategories: FeatureCategory[] = [
    // =========================================================
    // ORGANIZE
    // =========================================================
    {
        id: 'organize',
        label: 'Organize',
        heading: 'Put everything in its place',
        description:
            'Keep your inventory clean, structured, and easy to find with simple tools built for everyday organization.',
        cards: [
            {
                title: 'Items',
                description:
                    'Create and organize every item in your inventory with the details that matter.',
                Icon: TbBox,
            },
            {
                title: 'Categories',
                description:
                    'Group similar items into clear categories so your inventory stays easy to navigate.',
                Icon: TbCategory,
            },
            {
                title: 'Folders',
                description:
                    'Create folders to structure your inventory around the way your business works.',
                Icon: TbFolder,
            },
            {
                title: 'Locations',
                description:
                    'Assign items to locations so you can quickly understand where they belong.',
                Icon: TbMapPin,
            },
            {
                title: 'Item Details',
                description:
                    'Keep names, quantities, prices, notes, and other important information together.',
                Icon: TbNotes,
            },
            {
                title: 'Custom Fields',
                description:
                    'Add custom information to your items when the standard details are not enough.',
                Icon: TbAdjustments,
            },
            {
                title: 'Item Photos',
                description:
                    'Add photos to items so they are easier to recognize and identify.',
                Icon: TbPhoto,
            },
            {
                title: 'Search',
                description:
                    'Find the item you need quickly without browsing through your entire inventory.',
                Icon: TbSearch,
            },
            {
                title: 'Quick Import',
                description:
                    'Bring your existing inventory into Invenka without entering everything manually.',
                Icon: TbFileImport,
            },
        ],
    },

    // =========================================================
    // MANAGE
    // =========================================================
    {
        id: 'manage',
        label: 'Manage',
        heading: 'Manage your inventory from one place',
        description:
            'Handle your inventory, team, and everyday tasks with simple tools that keep everything connected.',
        cards: [
            fromItem(
                'mobile-app',
                TbDeviceMobile,
            ),
            {
                title: 'Cloud Sync',
                description:
                    'Keep your inventory information synchronized and available wherever you work.',
                Icon: TbCloud,
            },
            {
                title: 'Teams',
                description:
                    'Work together with your team and keep everyone connected to the same inventory.',
                Icon: TbUsers,
            },
            {
                title: 'User Access',
                description:
                    'Control who can access and manage information inside your inventory.',
                Icon: TbUserCheck,
            },
            {
                title: 'Bulk Edit',
                description:
                    'Update multiple items together instead of making the same change repeatedly.',
                Icon: TbEdit,
            },
            {
                title: 'Inventory Management',
                description:
                    'Add, edit, organize, and remove items as your inventory changes.',
                Icon: TbPackage,
            },
            {
                title: 'Stock Counts',
                description:
                    'Record and maintain the quantities of items currently in your inventory.',
                Icon: TbBoxMultiple,
            },
            {
                title: 'Notes',
                description:
                    'Add useful notes to items so important information stays with the inventory.',
                Icon: TbNotes,
            },
            {
                title: 'Workspace',
                description:
                    'Keep your inventory and team work organized inside one shared workspace.',
                Icon: TbHome,
            },
        ],
    },

    // =========================================================
    // TRACK
    // =========================================================
    {
        id: 'track',
        label: 'Track',
        heading: 'Always know what you have',
        description:
            'Keep a clear view of your items, quantities, locations, and inventory activity with simple tracking tools.',
        cards: [
            fromItem(
                'barcoding',
                TbBarcode,
            ),
            {
                title: 'QR Scanning',
                description:
                    'Scan QR codes to quickly identify and access inventory items.',
                Icon: TbQrcode,
            },
            {
                title: 'Stock Levels',
                description:
                    'See current item quantities and keep your inventory counts accurate.',
                Icon: TbChartLine,
            },
            {
                title: 'Item History',
                description:
                    'Keep a record of important changes made to inventory items.',
                Icon: TbHistory,
            },
            fromItem(
                'alerts',
                TbBell,
            ),
            {
                title: 'Check In',
                description:
                    'Record items being added to your inventory and keep quantities updated.',
                Icon: TbCheck,
            },
            {
                title: 'Check Out',
                description:
                    'Record items being removed from your inventory and keep counts accurate.',
                Icon: TbMinus,
            },
            {
                title: 'Item Status',
                description:
                    'See the current status of an item and quickly understand what needs attention.',
                Icon: TbRefresh,
            },
            {
                title: 'Activity Log',
                description:
                    'See recent inventory activity and understand what has changed.',
                Icon: TbHistory,
            },
        ],
    },

    // =========================================================
    // UPDATE
    // =========================================================
    {
        id: 'update',
        label: 'Update',
        heading: 'Keep your inventory up to date',
        description:
            'Make changes quickly and keep your inventory information accurate as your items and quantities change.',
        cards: [
            {
                title: 'Edit Items',
                description:
                    'Update item names, quantities, prices, descriptions, and other details whenever needed.',
                Icon: TbEdit,
            },
            {
                title: 'Quantity Updates',
                description:
                    'Change item quantities quickly whenever inventory is added or removed.',
                Icon: TbRefresh,
            },
            {
                title: 'Price Updates',
                description:
                    'Keep item prices current so your inventory information stays accurate.',
                Icon: TbChartLine,
            },
            {
                title: 'Category Updates',
                description:
                    'Move items between categories whenever your inventory structure changes.',
                Icon: TbCategory,
            },
            {
                title: 'Location Updates',
                description:
                    'Update an item location whenever it is moved to another place.',
                Icon: TbMapPin,
            },
            {
                title: 'Bulk Updates',
                description:
                    'Make changes to multiple inventory items together and save time.',
                Icon: TbAdjustments,
            },
            {
                title: 'Archive Items',
                description:
                    'Remove old or unused items from your active inventory while keeping their information.',
                Icon: TbArchive,
            },
            {
                title: 'Export',
                description:
                    'Export your inventory information when you need a copy outside Invenka.',
                Icon: TbFileExport,
            },
            {
                title: 'Inventory Prediction',
                description:
                    'Use inventory data to help anticipate future inventory needs and make better stock decisions.',
                Icon: TbChartLine,
            },
        ],
    },
]
