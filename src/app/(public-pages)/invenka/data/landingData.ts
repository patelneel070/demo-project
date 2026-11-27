import type { IconType } from 'react-icons'
import {
    TbBarcode,
    TbBell,
    TbChartLine,
    TbDeviceMobile,
    TbPackage,
    TbBuildingWarehouse,
    TbMapPin,
    TbChartBar,
    TbCar,
    TbPlane,
    TbBolt,
    TbBuilding,
    TbSofa,
    TbHome,
    TbBook2,
    TbNews,
    TbHelpCircle
} from 'react-icons/tb'
import {LuBoxes} from 'react-icons/lu'
/**
 * ALL DUMMY CONTENT FOR THE /invenka LANDING PAGE LIVES HERE.
 * Image paths point to /public/img/invenka/... (see the image list).
 */

export const BASE_PATH = '/invenka'

/* ---------------------------------- Navbar --------------------------------- */
export const featuresPageHref = `/features`
export const solutionsPageHref = `/solutions`
export const industriesPageHref = `/industries`
export const resourcesPageHref ='/resources'
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
export type SolutionItem = {
    title: string
    slug: string
    description: string
    Icon: IconType
}

/* All solutions — used on the full Solutions page */
export const allSolutionItems: SolutionItem[] = [
    {
        title: 'Inventory Tracking',
        slug: 'solutions/inventory-tracking',
        description:
            'Track stock levels, movements and availability across your business.',
        Icon: TbPackage,
    },
    {
        title: 'Stock Management',
        slug: 'solutions/stock-management',
        description:
            'Keep inventory organized with accurate stock levels and adjustments.',
        Icon: LuBoxes,
    },
    {
        title: 'Warehouse Management',
        slug: 'solutions/warehouse-management',
        description:
            'Organize stock across warehouses, locations and storage areas.',
        Icon: TbBuildingWarehouse,
    },
    {
        title: 'Barcode & Scanning',
        slug: 'solutions/barcode-scanning',
        description:
            'Speed up inventory operations with barcode scanning and item tracking.',
        Icon: TbBarcode,
    },
    {
        title: 'Multi-Location Inventory',
        slug: 'solutions/multi-location-inventory',
        description:
            'Manage inventory across multiple stores, warehouses and locations.',
        Icon: TbMapPin,
    },
    {
        title: 'Inventory Reporting',
        slug: 'solutions/inventory-reporting',
        description:
            'Turn inventory data into clear reports and actionable insights.',
        Icon: TbChartBar,
    },
    {
        title: 'Inventory Forecasting',
        slug: 'solutions/inventory-forecasting',
        description:
            'Use inventory data to anticipate demand and plan future stock requirements.',
        Icon: TbChartLine,
    },
    {
        title: 'Inventory Automation',
        slug: 'solutions/inventory-automation',
        description:
            'Automate repetitive inventory tasks and keep your stock operations running efficiently.',
        Icon: TbBolt,
    },
]

/* First 6 solutions — used in the navbar dropdown */
export const solutionItems: SolutionItem[] =
    allSolutionItems.slice(0, 6)
export const industriesItems = [
    {
        title: 'Automotive & Fleet',
        slug: 'industries/automotive-fleet',
        description:
            'Maintenance schedules, parts bins and repair stock for workshops and vehicle fleets.',
        Icon: TbCar,
    },
    {
        title: 'Aviation & Aerospace',
        slug: 'industries/aviation-aerospace',
        description:
            'Serialised components, traceable records and calibrated tooling for regulated operations.',
        Icon: TbPlane,
    },
    {
        title: 'Electrical Contracting',
        slug: 'industries/electrical-contracting',
        description:
            'Cable, fittings and van stock replenished and allocated to each job site.',
        Icon: TbBolt,
    },
    {
        title: 'Facilities Management',
        slug: 'industries/facilities-management',
        description:
            'Equipment registers, planned upkeep and critical spares across buildings and sites.',
        Icon: TbBuilding,
    },
    {
        title: 'Interior Design & Staging',
        slug: 'industries/interior-design-staging',
        description:
            'Visual catalogues of furniture and décor allocated across projects and staging jobs.',
        Icon: TbSofa,
    },
    {
        title: 'Real Estate & Property',
        slug: 'industries/real-estate-property',
        description:
            'Appliances, furnishings and hardware tracked across units and tenant turnovers.',
        Icon: TbHome,
    },
]

export type ResourceItem = {
    title: string
    slug: string
    description: string
    Icon: IconType
}

export const resourceItems: ResourceItem[] = [
    {
        title: 'Glossary',
        slug: 'glossary',
        description:
            'Understand inventory terms, concepts, and essential terminology in simple language.',
        Icon: TbBook2,
    },
    {
        title: 'Blogs',
        slug: 'blogs',
        description:
            'Explore insights, tips, and ideas to help you manage inventory more efficiently.',
        Icon: TbNews,
    },
    {
        title: 'Help Centre',
        slug: 'help-centre',
        description:
            'Find answers, guides, and helpful information to get the most out of Invenka.',
        Icon: TbHelpCircle,
    },
]
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
export const hero = {
    title: 'Smart Inventory Management for Modern Businesses',
    highlight: ['Smart', 'Inventory', 'Management'],
    subtitle:
        'Invenka helps businesses track stock, manage products, monitor inventory, and make better decisions from one powerful platform.',
    primaryCta: 'Start Free Trial',
    secondaryCta: 'Explore Features',
    imageLight: '/img/invenka/hero/hero-light.png',
    imageAlt: 'Invenka inventory management dashboard',
    benefits: [
        {
            title: 'Real-time tracking',
            text: 'Keep track of your inventory levels and stock movements in real time.',
        },
        {
            title: 'Reduce errors',
            text: 'Minimize manual work, stock mistakes, and unnecessary inventory losses.',
        },
        {
            title: 'Better decisions',
            text: 'Get clear inventory insights to make faster and smarter business decisions.',
        },
    ],
}