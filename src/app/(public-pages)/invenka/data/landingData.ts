import type { IconType } from 'react-icons'
import {
    TbBarcode,
    TbBell,
    TbChartLine,
    TbDeviceMobile,
    TbPackage,
    TbClipboardList,
    TbBuildingWarehouse,
    TbMapPin,
    TbChartBar,
    TbAutomation,
    TbBuildingStore,
    TbShoppingBag,
    TbTruckDelivery,
    TbShoppingCart,
    TbToolsKitchen2,
    TbBuilding,     
} from 'react-icons/tb'
import {LuBoxes} from 'react-icons/lu'
import {MdFactory} from 'react-icons/md'
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
    // { title: 'Industries', href: `${BASE_PATH}/industries` },
    // { title: 'Solutions', href: `${BASE_PATH}/solutions` },
    { title: 'Pricing', href: `${BASE_PATH}/pricing` },
    { title: 'Resources', href: `${BASE_PATH}/resources` },
]

export const featuresPageHref = `/features`
export const solutionsPageHref = `/solutions`
export const industriesPageHref = `/industries`
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
export const solutionItems = [
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
        title: 'Order Management',
        slug: 'solutions/order-management',
        description:
            'Manage purchase and sales orders while keeping inventory up to date.',
        Icon: TbClipboardList,
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
        title: 'Inventory Automation',
        slug: 'solutions/inventory-automation',
        description:
            'Reduce manual work by automating repetitive inventory processes.',
        Icon: TbAutomation,
    },
]
export const industriesItems = [
    {
        title: 'Small Business',
        slug: 'industries/small-business',
        description:
            'Simple inventory management for growing businesses and everyday operations.',
        Icon: TbBuildingStore,
    },
    {
        title: 'Retail',
        slug: 'industries/retail',
        description:
            'Manage products, stock and sales across stores with better inventory visibility.',
        Icon: TbShoppingBag,
    },
    {
        title: 'Manufacturing',
        slug: 'industries/manufacturing',
        description:
            'Track raw materials, components and finished goods throughout production.',
        Icon: MdFactory,
    },
    {
        title: 'Wholesale & Distribution',
        slug: 'industries/wholesale-distribution',
        description:
            'Manage bulk inventory, orders and stock movement across your distribution network.',
        Icon: TbTruckDelivery,
    },
    {
        title: 'Warehousing',
        slug: 'industries/warehousing',
        description:
            'Organize warehouse inventory, storage locations and stock movements efficiently.',
        Icon: TbBuildingWarehouse,
    },
    {
        title: 'E-commerce',
        slug: 'industries/e-commerce',
        description:
            'Keep online products, orders and inventory synchronized as your business grows.',
        Icon: TbShoppingCart,
    },
    {
        title: 'Restaurants & Food',
        slug: 'industries/restaurants-food',
        description:
            'Track ingredients, supplies and stock levels while reducing waste and shortages.',
        Icon: TbToolsKitchen2,
    },
    {
        title: 'Construction',
        slug: 'industries/construction',
        description:
            'Keep track of materials, tools and equipment across projects and locations.',
        Icon: TbBuilding,
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
