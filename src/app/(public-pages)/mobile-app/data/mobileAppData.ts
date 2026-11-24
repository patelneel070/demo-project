import type { IconType } from 'react-icons'
import {
    TbBarcode,
    TbBell,
    TbCloud,
    TbPhoto,
    TbUsers,
    TbWifiOff,
    TbSearch,
    TbEdit,
    TbQrcode,
} from 'react-icons/tb'
import {
    mobileSection,
} from '../../invenka/data/landingData'

/**
 * CONTENT FOR THE /mobile-app PAGE.
 * Copy and images are reused from invenka/components/data/landingData.ts
 * wherever they already exist; only page-specific wording lives here.
 */

/* ----------------------------------- Hero ---------------------------------- */

export const mobileHero = {
    tag: 'Mobile App',
    titleStart: 'Manage your inventory from',
    titleHighlight: 'anywhere.',
    text: mobileSection.text,
    primaryCta: 'Start Free Trial',
    secondaryCta: 'See app features',
    image: mobileSection.image,
    imageAlt: mobileSection.imageAlt,
}

/* -------------------------------- Highlights ------------------------------- */

export type MobileHighlight = {
    title: string
    description: string
    Icon: IconType
}

const highlightCards: MobileHighlight[] = [
    {
        title: 'Instant item lookup',
        description:
            'Find the item you need quickly without going through your entire inventory.',
        Icon: TbSearch,
    },
    {
        title: 'Barcode scanning',
        description:
            'Scan item barcodes to identify products and access their information faster.',
        Icon: TbBarcode,
    },
    {
        title: 'Item photos',
        description:
            'Add visual references to your items so they are easier to recognize in the field.',
        Icon: TbPhoto,
    },
    {
        title: 'Offline access',
        description:
            'Continue working with your inventory even when your phone temporarily loses connection.',
        Icon: TbWifiOff,
    },
    {
        title: 'Stock notifications',
        description:
            'Get useful alerts when inventory levels need your attention.',
        Icon: TbBell,
    },
    {
        title: 'Cloud backup',
        description:
            'Keep your inventory information safely synchronized with your cloud workspace.',
        Icon: TbCloud,
    },
    {
        title: 'Team access',
        description:
            'Give your team a convenient way to access inventory information while working remotely.',
        Icon: TbUsers,
    },
    {
        title: 'Quick updates',
        description:
            'Make changes to item information directly from your phone without switching devices.',
        Icon: TbEdit,
    },
    {
        title: 'QR code support',
        description:
            'Use QR codes to identify inventory items and speed up everyday inventory tasks.',
        Icon: TbQrcode,
    },
]

export const mobileHighlights = {
    id: 'app-features',
    tag: 'App features',
    title: 'Everything you need, right in your pocket',
    text: 'Count, check and update stock wherever the work happens, with or without a connection.',
    cards: highlightCards,
}
/* --------------------------- App Feature Tabs ----------------------------- */

export type MobileFeatureTabItem = {
    title: string
    description: string
}

export type MobileFeatureTab = {
    id: string
    label: string
    items: MobileFeatureTabItem[]
}

export const mobileFeatureTabs: MobileFeatureTab[] = [
    {
        id: 'organizing',
        label: 'Organizing',
        items: [
            {
                title: 'Item Categories',
                description:
                    'Group your inventory into clear categories so everything stays organized and easy to find.',
            },
            {
                title: 'Custom Fields',
                description:
                    'Add the information that matters to your business and keep important item details together.',
            },
            {
                title: 'Item Photos',
                description:
                    'Add photos to inventory items so your team can identify them quickly.',
            },
            {
                title: 'Locations',
                description:
                    'Organize inventory by location and know exactly where your items belong.',
            },
            {
                title: 'Folders',
                description:
                    'Create a simple structure for keeping related inventory information together.',
            },
            {
                title: 'Search',
                description:
                    'Find inventory items quickly without manually going through your entire collection.',
            },
            {
                title: 'Item Details',
                description:
                    'Keep quantities, descriptions, prices, notes, and other important information together.',
            },
            {
                title: 'Inventory Groups',
                description:
                    'Arrange related items together to make larger inventories easier to manage and navigate.',
            },
        ],
    },

    {
        id: 'managing',
        label: 'Managing',
        items: [
            {
                title: 'Inventory Updates',
                description:
                    'Update quantities and item information whenever your inventory changes.',
            },
            {
                title: 'Barcode & QR Scanning',
                description:
                    'Scan items quickly using your phone to identify inventory and access item details.',
            },
            {
                title: 'Check-In / Check-Out',
                description:
                    'Record when items enter or leave your inventory and keep your records accurate.',
            },
            {
                title: 'Quantity Alerts',
                description:
                    'Get notified when inventory reaches a level that needs your attention.',
            },
            {
                title: 'Purchase Records',
                description:
                    'Keep purchase information connected with your inventory for easier management.',
            },
            {
                title: 'Team Access',
                description:
                    'Let your team work with the same inventory information from their own devices.',
            },
            {
                title: 'Bulk Editing',
                description:
                    'Update multiple inventory items together instead of making the same changes one by one.',
            },
            {
                title: 'Item Status',
                description:
                    'Keep track of the current state of your inventory items and quickly identify what needs attention.',
            },
        ],
    },

    {
        id: 'reporting',
        label: 'Reporting',
        items: [
            {
                title: 'Inventory Overview',
                description:
                    'Get a clear view of your inventory and understand what you currently have.',
            },
            {
                title: 'Stock History',
                description:
                    'Review inventory changes over time and understand how your stock has changed.',
            },
            {
                title: 'Activity Reports',
                description:
                    'See important inventory activity and keep track of changes made by your team.',
            },
            {
                title: 'Inventory Value',
                description:
                    'Understand the value represented by the items in your inventory.',
            },
            {
                title: 'Export Reports',
                description:
                    'Export inventory information when you need to work with your data elsewhere.',
            },
            {
                title: 'Inventory Insights',
                description:
                    'Use your inventory information to make better decisions about your stock.',
            },
            {
                title: 'Stock Movement',
                description:
                    'Review how inventory quantities change and understand movement across your items.',
            },
            {
                title: 'Team Activity',
                description:
                    'Understand inventory activity across your team and keep important changes visible.',
            },
        ],
    },

    {
        id: 'mobile',
        label: 'Mobile',
        items: [
            {
                title: 'Mobile Inventory',
                description:
                    'Access and manage your inventory directly from your phone wherever you work.',
            },
            {
                title: 'Offline Mode',
                description:
                    'Continue working with inventory information even when an internet connection is unavailable.',
            },
            {
                title: 'Mobile Scanning',
                description:
                    'Use your phone camera to scan barcodes and QR codes while working with inventory.',
            },
            {
                title: 'Quick Updates',
                description:
                    'Make inventory changes directly from your phone without returning to a desktop.',
            },
            {
                title: 'Cloud Sync',
                description:
                    'Keep mobile inventory changes synchronized with your workspace.',
            },
            {
                title: 'Team Mobility',
                description:
                    'Give your team access to inventory information while working in different locations.',
            },
            {
                title: 'Item Lookup',
                description:
                    'Quickly search for inventory items and access their details while working on the move.',
            },
            {
                title: 'Mobile Alerts',
                description:
                    'Stay informed about important inventory changes and alerts while away from your desk.',
            },
        ],
    },
]
/* ------------------------------ Feature rows ------------------------------- */

export type MobileFeatureRow = {
    title: string
    text: string
    points: string[]
    img: string
    alt: string
}

export const FeatureRows: MobileFeatureRow[] = [
    {
        title: 'Turn your phone into an inventory tool',
        text:
            'Bring everyday inventory tasks directly to the place where the work happens. Use your phone to identify items, check information, and make updates without sitting at a desk.',
        points: [
            'Access item information while you work',
            'Make inventory changes directly from your phone',
            'Reduce the need for manual desktop work',
        ],
        img: '/img/mobile-app/inventory.png',
        alt: 'Invenka mobile inventory management interface',
    },
    {
        title: 'Find the right item in seconds',
        text:
            'Quickly locate the inventory information you need when you are working on the move. Keep item details easy to access instead of searching through spreadsheets or paperwork.',
        points: [
            'Search through your inventory quickly',
            'Open item details whenever you need them',
            'Keep important information accessible in the field',
        ],
        img: '/img/mobile-app/findItem.png',
        alt: 'Invenka app displaying inventory items and details',
    },
    {
        title: 'Make inventory work less repetitive',
        text:
            'Simplify routine inventory tasks with a mobile workflow designed for quick actions. Spend less time recording information and more time getting the actual work done.',
        points: [
            'Update information during your normal workflow',
            'Handle routine inventory tasks from one place',
            'Keep manual data entry to a minimum',
        ],
        img: '/img/mobile-app/reduceSearch.png',
        alt: 'Invenka mobile app simplifying inventory tasks',
    },
    {
        title: 'Keep your team connected to the inventory',
        text:
            'Give your team a shared way to access inventory information while working in different places. Everyone can work from the same up-to-date inventory system.',
        points: [
            'Give team members access to inventory information',
            'Work from different locations without losing visibility',
            'Keep inventory work organized across your team',
        ],
        img: '/img/mobile-app/team.png',
        alt: 'Invenka mobile inventory app used by a team',
    },
]
// Reuse the two existing feature rows that describe the app itself.

/* -------------------------------- Download --------------------------------- */

export const mobileDownload = {
    id: 'download',
    title: mobileSection.title,
    text: mobileSection.text,
    appStoreCta: mobileSection.appStoreCta,
    playStoreCta: mobileSection.playStoreCta,
}
