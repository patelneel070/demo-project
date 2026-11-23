import type { IconType } from 'react-icons'
import {
    TbBarcode,
    TbBell,
    TbChartLine,
    TbDeviceMobile,
} from 'react-icons/tb'

/**
 * ALL DUMMY CONTENT FOR THE /invenka LANDING PAGE LIVES HERE.
 * Image paths point to /public/img/invenka/... (see the image list).
 */

export const BASE_PATH = '/invenka'

/* ---------------------------------- Navbar --------------------------------- */

export type NavLink = { title: string; href: string }

// Plain navbar links. "Features" is handled separately (mega dropdown).
export const navLinks: NavLink[] = [
    // { title: 'Features', href: `${BASE_PATH}/features` },
    { title: 'Integrations', href: `${BASE_PATH}/integrations` },
    { title: 'Solutions', href: `${BASE_PATH}/solutions` },
    { title: 'Industries', href: `${BASE_PATH}/industries` },
    { title: 'Pricing', href: `${BASE_PATH}/pricing` },
    { title: 'Resources', href: `${BASE_PATH}/resources` },
]

export const featuresPageHref = `/features`

export type FeatureItem = {
    title: string
    slug: string
    description: string
    Icon: IconType
}

// Each item opens /invenka/features/<slug>
export const featureItems: FeatureItem[] = [
    {
        title: 'Mobile App',
        slug: 'mobile-app',
        description:
            'Manage stock from your phone, even offline.',
        Icon: TbDeviceMobile,
    },
    {
        title: 'Alerts',
        slug: 'alerts',
        description:
            'Get notified with low-level and expiry alerts you control.',
        Icon: TbBell,
    },
    {
        title: 'Barcoding',
        slug: 'barcoding',
        description:
            'Scan or generate barcodes and QR codes to make counts and check-ins fast.',
        Icon: TbBarcode,
    },
    {
        title: 'Inventory Prediction',
        slug: 'inventory-prediction',
        description:
            'Forecast demand from past inventory data so you always know what will can be done next.',
        Icon: TbChartLine,
    },
]

export const featuresMenuPromo = {
    title: 'Everything in one place',
    text: 'See how Invenka helps you organize, track and forecast your stock.',
    image: '/img/invenka/nav/features-preview.webp',
    cta: 'See all features',
}

/* ----------------------------------- Hero ---------------------------------- */

export const hero = {
    // Words listed in `highlight` are shown in the primary colour
    title: 'Take command of every item you own.',
    highlight: ['command'],
    subtitle:
        'A simple way for growing teams to keep track of supplies, parts, tools and equipment, all in one place.',
    primaryCta: 'Start Free Trial',
    secondaryCta: 'See All plans',
    imageLight: '/img/invenka/hero/hero-light.png',
    imageDark: '/img/invenka/hero/hero-dark.webp', 
    imageAlt: 'Invenka inventory list',
}

/* ------------------------------ Feature rows ------------------------------- */

export const featureRows = [
    {
        title: 'Organize and automate your stock',
        text: 'Bring in your current list, sort items into folders by place or type, and keep key details in custom fields.',
        points: [
            'Import your list in just a few minutes.',
            'Group items by location, category and more.',
            'Add custom fields for the details you need.',
        ],
        image: '/img/invenka/sections/OrganizeImage.png',
    },
    {
        title: 'Track everything from one app',
        text: 'Count faster, see every item at a glance and know before you run low.',
        points: [
            'Scan barcodes and QR codes to speed up counts.',
            'Add photos so every item is easy to recognise.',
            'Receive alerts when levels drop.',
        ],
        image: '/img/invenka/sections/inventorApp.png',
    },
    {
        title: 'See inventory insights',
        text: 'Turn raw inventory data into report, budgets and planning stock refill.',
        points: [
            'data on items, folders and activity.',
            'Export custom PDF or CSV reports.',
            'Built for budgeting and future stock prediction.',
        ],
        image: '/img/invenka/sections/insights.png',
    },
    {
        title: 'Stay in sync on every device',
        text: 'Use Invenka on phone, tablet or desktop. Cloud sync keeps the whole team current.',
        points: [
            'Automatic cloud syncing.',
            'Update stock from anywhere.',
            'Works for teams of any size.',
        ],
        image: '/img/invenka/sections/sync.png',
    },
]

export const mobileSection = {
    title: 'Your inventory, wherever you are.',
    text: 'Our mobile app lets you manage stock on the move, even without a connection.',
    appStoreCta: 'Download on the App Store',
    playStoreCta: 'Get it on Google Play',
    image: '/img/invenka/mobile/mobile-app.png',
    imageAlt: 'Invenka mobile app',
}

/* ---------------------------------- Footer --------------------------------- */

export const cta = {
    title: 'Try Invenka free for 14 days.',
    text: 'Keep track of stock, supplies and tools, and run a smoother business.',
}

export const footer = {
    tagline: 'Straightforward inventory software for teams of every size.',
    company: 'Invenka',
    columns: [
        { title: 'Industries', links: ['Construction', 'Healthcare', 'Warehousing', 'Electrical', 'Retail'] },
        { title: 'Use Cases', links: ['Stock Management', 'Supply Tracking', 'Asset Tracking', 'Barcode Inventory'] },
        { title: 'Company', links: ['Pricing', 'Blog', 'About Us', 'Help Center', 'Privacy Policy'] },
    ],
}
