import type { IconType } from 'react-icons'
import {
    TbBarcode,
    TbBox,
    TbBuildingWarehouse,
    TbChartBar,
    TbMapPins,
    TbPackage,
    TbReportAnalytics,
    TbSettingsAutomation,
    TbTruckDelivery,
} from 'react-icons/tb'

/**
 * PAGE-ONLY CONTENT FOR THE /solutions PAGE.
 * The solutions themselves (titles + descriptions) come from `solutionItems`
 * in invenka/components/data/landingData.ts, which stays the source of truth.
 */

export const solutionsHero = {
    tag: 'Solutions',
    titleStart: 'Inventory solutions for',
    titleHighlight: 'every part',
    titleEnd: 'of your business.',
    text: 'Choose the tools that fit the way your team works, and add more as your business grows.',
    primaryCta: 'Start Free Trial',
    secondaryCta: 'View solutions',
    image: '/img/solutions/solutions-hero.png',
    imageAlt: 'Illustration of a warehouse with inventory and a mobile device',
}

export const solutionsSection = {
    id: 'solutions',
    title: "Invenka's solutions",
    text: 'Everything you need to track, manage and report on your inventory.',
}

// Large icon shown for each solution, matched by title
const solutionIcons: Record<string, IconType> = {
    'inventory tracking': TbPackage,
    'stock management': TbChartBar,
    'order management': TbTruckDelivery,
    'warehouse management': TbBuildingWarehouse,
    'barcode & scanning': TbBarcode,
    'multi-location inventory': TbMapPins,
    'inventory reporting': TbReportAnalytics,
    'inventory automation': TbSettingsAutomation,
}

export const getSolutionIcon = (title: string): IconType =>
    solutionIcons[title.trim().toLowerCase()] ?? TbBox
