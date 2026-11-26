import type { IconType } from 'react-icons'
import {
    TbBolt,
    TbBuilding,
    TbBuildingBank,
    TbBuildingFactory2,
    TbBuildingStore,
    TbCar,
    TbDental,
    TbHeartHandshake,
    TbHome,
    TbMicrophone2,
    TbPalette,
    TbPlane,
    TbSchool,
    TbSofa,
    TbTool,
    TbToolsKitchen2,
} from 'react-icons/tb'
import { industrySlugs, type IndustrySlug } from './industrySlugs'

/**
 * CONTENT FOR /industries AND /industries/[slug].
 * Every industry page uses the same layout; only the data below changes.
 */

type TitledText = { title: string; text: string }

export type Industry = {
    slug: IndustrySlug
    name: string
    /** Short label shown at the top-right of the card */
    tag: string
    Icon: IconType
    /** Card description */
    summary: string
    /** Hero paragraph on the industry page */
    intro: string
    /** Exactly three common problems */
    challenges: TitledText[]
    /** Exactly three ways Invenka helps */
    benefits: TitledText[]
    /** Hero image */
    imageLight: string
    /** Hero image alt text */
    imageAlt: string
    /** Six things this industry typically tracks */
    tracks: string[]
}
const industryList: Industry[] = [
    {
        slug: 'automotive-fleet',
        name: 'Automotive & Fleet',
        tag: 'Fleet & Parts',
        Icon: TbCar,
        summary:
            'Maintenance schedules, parts bins and repair stock for workshops and vehicle fleets.',
        intro: 'Keep every vehicle serviced and every part accounted for, from the workshop shelf to the service truck.',
        imageLight: '/img/industries/automotive-fleet-hero.png',
        imageAlt: 'Automotive and fleet inventory management',
        challenges: [
            {
                title: 'Parts run out mid-repair',
                text: 'Without live stock levels, jobs stall while a missing part is ordered.',
            },
            {
                title: 'Unclear vehicle stock',
                text: 'It is hard to know which parts and tools are on which vehicle or bay.',
            },
            {
                title: 'Paper maintenance records',
                text: 'Service history kept on paper is slow to find and easy to lose.',
            },
        ],
        benefits: [
            {
                title: 'Organised parts bins',
                text: 'Catalogue every part by bin, shelf and vehicle so it can be found in seconds.',
            },
            {
                title: 'Scheduled maintenance',
                text: 'Plan servicing and consumable replacement before it becomes urgent.',
            },
            {
                title: 'Low-stock alerts',
                text: 'Be notified when fast-moving parts fall below the level you set.',
            },
        ],
        tracks: [
            'Spare parts',
            'Tyres and batteries',
            'Fluids and lubricants',
            'Workshop tools',
            'Service vehicle stock',
            'Maintenance records',
        ],
    },

    {
        slug: 'aviation-aerospace',
        name: 'Aviation & Aerospace',
        tag: 'Compliance',
        Icon: TbPlane,
        summary:
            'Serialised components, traceable records and calibrated tooling for regulated operations.',
        intro: 'Maintain clear, traceable records for every component and tool, so audits and inspections run smoothly.',
        imageLight: '/img/industries/aviation-aerospace-hero.png',
        imageAlt: 'Aviation and aerospace inventory management',
        challenges: [
            {
                title: 'Strict traceability rules',
                text: 'Every component needs a documented history from receipt to installation.',
            },
            {
                title: 'Tool calibration deadlines',
                text: 'Overdue calibration can ground work and put compliance at risk.',
            },
            {
                title: 'High-value stock',
                text: 'Costly parts demand precise counts and clear custody records.',
            },
        ],
        benefits: [
            {
                title: 'Serial and batch tracking',
                text: 'Record serial numbers and batches against each component.',
            },
            {
                title: 'Calibration reminders',
                text: 'Schedule calibration cycles and see which tools are due.',
            },
            {
                title: 'Audit-ready history',
                text: 'Keep a complete activity log that is simple to review and share.',
            },
        ],
        tracks: [
            'Serialised components',
            'Rotable parts',
            'Calibrated tooling',
            'Consumables and fasteners',
            'Ground support equipment',
            'Certification documents',
        ],
    },

    {
        slug: 'electrical-contracting',
        name: 'Electrical Contracting',
        tag: 'Job-site Kits',
        Icon: TbBolt,
        summary:
            'Cable, fittings and van stock replenished and allocated to each job site.',
        intro: 'Know what is on every van and at every job site, and restock before a missing item slows the crew down.',
        imageLight: '/img/industries/electrical-contracting-hero.png',
        imageAlt: 'Electrical contracting inventory management',
        challenges: [
            {
                title: 'Cable and fittings unaccounted for',
                text: 'Partial reels and loose stock are hard to measure and easy to overlook.',
            },
            {
                title: 'Empty vans on site',
                text: 'Crews lose time returning to the supplier for items that should have been loaded.',
            },
            {
                title: 'Job costs that drift',
                text: 'Materials used on site are rarely matched back to the job they belong to.',
            },
        ],
        benefits: [
            {
                title: 'Van and site stock',
                text: 'See exactly what each van and job site is holding.',
            },
            {
                title: 'Job allocation',
                text: 'Assign materials to jobs and keep costs tied to the work.',
            },
            {
                title: 'Automatic restock lists',
                text: 'Generate replenishment lists from minimum levels set per van.',
            },
        ],
        tracks: [
            'Cable and wire reels',
            'Fittings and fixtures',
            'Breakers and panels',
            'Hand and power tools',
            'Van replenishment kits',
            'Job-site materials',
        ],
    },

    {
        slug: 'facilities-management',
        name: 'Facilities Management',
        tag: 'Campus Operations',
        Icon: TbBuilding,
        summary:
            'Equipment registers, planned upkeep and critical spares across buildings and sites.',
        intro: 'Maintain a clear register of equipment and spares across every building, so upkeep stays planned rather than reactive.',
        imageLight: '/img/industries/facilities-management-hero.png',
        imageAlt: 'Facilities management inventory management',
        challenges: [
            {
                title: 'Spares in too many places',
                text: 'Critical parts are spread across stores and buildings with no single view.',
            },
            {
                title: 'Reactive maintenance',
                text: 'Without schedules, teams respond to breakdowns instead of preventing them.',
            },
            {
                title: 'Unknown asset condition',
                text: 'Age, location and service history of equipment is hard to confirm.',
            },
        ],
        benefits: [
            {
                title: 'Central equipment register',
                text: 'Record every asset with its location, status and history.',
            },
            {
                title: 'Preventive upkeep',
                text: 'Plan recurring tasks and keep the right spares ready for them.',
            },
            {
                title: 'Emergency spares visibility',
                text: 'Know which critical items are in stock and where they are held.',
            },
        ],
        tracks: [
            'HVAC equipment',
            'Critical spare parts',
            'Cleaning supplies',
            'Safety equipment',
            'Keys and access cards',
            'Furniture and fixtures',
        ],
    },

    {
        slug: 'interior-design-staging',
        name: 'Interior Design & Staging',
        tag: 'Showroom',
        Icon: TbSofa,
        summary:
            'Visual catalogues of furniture and décor allocated across projects and staging jobs.',
        intro: 'Organise furniture, décor and samples in a visual catalogue, and always know which pieces are committed to which project.',
        imageLight: '/img/industries/interior-design-staging-hero.png',
        imageAlt: 'Interior design and staging inventory management',
        challenges: [
            {
                title: 'Pieces double-booked',
                text: 'Without a shared view, the same item can be promised to two projects.',
            },
            {
                title: 'Scattered storage',
                text: 'Stock held across warehouses and client sites is hard to locate.',
            },
            {
                title: 'Hard to share options',
                text: 'Clients need to see available items clearly, not read a spreadsheet.',
            },
        ],
        benefits: [
            {
                title: 'Photo catalogues',
                text: 'Store images, dimensions and details with every item.',
            },
            {
                title: 'Project allocation',
                text: 'Reserve pieces for a project and see availability by date.',
            },
            {
                title: 'Location tracking',
                text: 'Record whether an item is in storage, on site or being returned.',
            },
        ],
        tracks: [
            'Furniture',
            'Lighting and décor',
            'Rugs and textiles',
            'Artwork and accessories',
            'Material samples',
            'Staging kits',
        ],
    },

    {
        slug: 'real-estate-property',
        name: 'Real Estate & Property',
        tag: 'Turnover',
        Icon: TbHome,
        summary:
            'Appliances, furnishings and hardware tracked across units and tenant turnovers.',
        intro: 'Track what belongs in every unit and what is needed between tenants, so each turnover is quick and consistent.',
        imageLight: '/img/industries/real-estate-property-hero.png',
        imageAlt: 'Real estate and property inventory management',
        challenges: [
            {
                title: 'Slow unit turnover',
                text: 'Missing items and unclear unit contents delay move-ins.',
            },
            {
                title: 'Furnishings that go missing',
                text: 'Appliances and furniture move between units without a record.',
            },
            {
                title: 'Maintenance supplies spread thin',
                text: 'Hardware and supplies are held across many properties.',
            },
        ],
        benefits: [
            {
                title: 'Unit-by-unit records',
                text: 'Keep a list of what is in each unit and its condition.',
            },
            {
                title: 'Turnover checklists',
                text: 'Use the same checklist for every move-out and move-in.',
            },
            {
                title: 'Shared supply stock',
                text: 'Manage hardware and supplies across all properties in one place.',
            },
        ],
        tracks: [
            'Appliances',
            'Furnished-unit contents',
            'Locks and keys',
            'Paint and finishes',
            'Maintenance supplies',
            'Fixtures and fittings',
        ],
    },

    {
        slug: 'retail-omnichannel',
        name: 'Retail & Omnichannel',
        tag: 'Multi-store',
        Icon: TbBuildingStore,
        summary:
            'Synced stock levels, variants and reordering across stores and online channels.',
        intro: 'Keep stock accurate across every store and sales channel, so customers can buy what you actually have.',
        imageLight: '/img/industries/retail-omnichannel-hero.png',
        imageAlt: 'Retail and omnichannel inventory management',
        challenges: [
            {
                title: 'Stock counts that disagree',
                text: 'Stores and online channels show different quantities for the same item.',
            },
            {
                title: 'Many size and colour variants',
                text: 'Variants multiply quickly and are difficult to count and reorder.',
            },
            {
                title: 'Late or excess reordering',
                text: 'Without clear sales data, stock is either missing or sitting unsold.',
            },
        ],
        benefits: [
            {
                title: 'One view of every store',
                text: 'See stock levels for each location and channel together.',
            },
            {
                title: 'Variant management',
                text: 'Manage sizes, colours and options under a single product.',
            },
            {
                title: 'Smarter reordering',
                text: 'Set reorder points and create purchase orders from low stock.',
            },
        ],
        tracks: [
            'Products and variants',
            'Store stock',
            'Warehouse stock',
            'Incoming shipments',
            'Returns',
            'Supplier orders',
        ],
    },

    {
        slug: 'manufacturing-assembly',
        name: 'Manufacturing & Assembly',
        tag: 'Assembly',
        Icon: TbBuildingFactory2,
        summary:
            'Bills of materials, work-in-progress and raw materials across production stages.',
        intro: 'Follow materials from raw stock to finished goods, and keep production moving with the right components at each stage.',
        imageLight: '/img/industries/manufacturing-assembly-hero.png',
        imageAlt: 'Manufacturing and assembly inventory management',
        challenges: [
            {
                title: 'Shortages halt production',
                text: 'One missing component can stop an entire assembly line.',
            },
            {
                title: 'Work-in-progress is invisible',
                text: 'Partly built items are hard to count and value.',
            },
            {
                title: 'Complex bills of materials',
                text: 'Multi-level assemblies are difficult to keep accurate by hand.',
            },
        ],
        benefits: [
            {
                title: 'Bills of materials',
                text: 'Define the components each product needs, including sub-assemblies.',
            },
            {
                title: 'Work-in-progress tracking',
                text: 'See what is in production and at which stage.',
            },
            {
                title: 'Raw material planning',
                text: 'Monitor raw stock and reorder before production is affected.',
            },
        ],
        tracks: [
            'Raw materials',
            'Components',
            'Sub-assemblies',
            'Work-in-progress',
            'Finished goods',
            'Packaging',
        ],
    },

    {
        slug: 'food-hospitality',
        name: 'Food & Hospitality',
        tag: 'Expiry Control',
        Icon: TbToolsKitchen2,
        summary:
            'Perishable stock, kitchen equipment and beverages managed first-in, first-out.',
        intro: 'Reduce waste and keep kitchens and venues well stocked, with clear expiry dates and first-in, first-out control.',
        imageLight: '/img/industries/food-hospitality-hero.png',
        imageAlt: 'Food and hospitality inventory management',
        challenges: [
            {
                title: 'Spoilage and waste',
                text: 'Perishable items expire before they are used when dates are not tracked.',
            },
            {
                title: 'Over- and under-ordering',
                text: 'Guesswork leads to either empty shelves or excess stock.',
            },
            {
                title: 'Equipment spread across sites',
                text: 'Kitchen equipment and supplies are difficult to account for across venues.',
            },
        ],
        benefits: [
            {
                title: 'Expiry tracking',
                text: 'Record dates and use the oldest stock first.',
            },
            {
                title: 'Par levels',
                text: 'Set target quantities and order only what is needed.',
            },
            {
                title: 'Multi-venue stock',
                text: 'Manage kitchens, bars and storerooms from one system.',
            },
        ],
        tracks: [
            'Perishable ingredients',
            'Dry goods',
            'Beverages',
            'Kitchen equipment',
            'Cleaning and disposables',
            'Linen and tableware',
        ],
    },

    {
        slug: 'education-campuses',
        name: 'Education & Campuses',
        tag: 'Academic',
        Icon: TbSchool,
        summary:
            'Lab equipment, technology loans and campus assets for staff and students.',
        intro: 'Know where every piece of equipment is, who has it, and when it is due back across departments and campuses.',
        imageLight: '/img/industries/education-campuses-hero.png',
        imageAlt: 'Education and campus inventory management',
        challenges: [
            {
                title: 'Equipment not returned',
                text: 'Loaned items are hard to chase without a record of who has them.',
            },
            {
                title: 'Departments work separately',
                text: 'Each department keeps its own list, so nothing is visible overall.',
            },
            {
                title: 'Lab supplies run low',
                text: 'Consumables are noticed only when a class is already underway.',
            },
        ],
        benefits: [
            {
                title: 'Check-out and check-in',
                text: 'Record who borrowed an item and when it is due back.',
            },
            {
                title: 'Asset tags',
                text: 'Label equipment so it can be scanned and identified quickly.',
            },
            {
                title: 'Department views',
                text: 'Give each department its own view while keeping a campus-wide picture.',
            },
        ],
        tracks: [
            'Laptops and tablets',
            'Audio-visual equipment',
            'Lab instruments',
            'Lab consumables',
            'Sports equipment',
            'Library materials',
        ],
    },

    {
        slug: 'government-municipal',
        name: 'Government & Municipal',
        tag: 'Audit Ready',
        Icon: TbBuildingBank,
        summary:
            'Public works supplies and assets with clear custody records and audit trails.',
        intro: 'Manage public assets and supplies responsibly, with clear custody records and an audit trail for every movement.',
        imageLight: '/img/industries/government-municipal-hero.png',
        imageAlt: 'Government and municipal inventory management',
        challenges: [
            {
                title: 'Strict audit requirements',
                text: 'Public bodies must show where assets are and who is accountable.',
            },
            {
                title: 'Assets across many depots',
                text: 'Supplies and equipment are spread across departments and yards.',
            },
            {
                title: 'Grant-funded purchases',
                text: 'Items bought with grants need separate, verifiable records.',
            },
        ],
        benefits: [
            {
                title: 'Complete audit trail',
                text: 'Every change to stock and assets is recorded with a date and user.',
            },
            {
                title: 'Custody records',
                text: 'Assign items to people and departments and see current custody.',
            },
            {
                title: 'Grant and funding tags',
                text: 'Tag items by funding source for clear reporting.',
            },
        ],
        tracks: [
            'Public works supplies',
            'Vehicles and equipment',
            'Road and signage materials',
            'IT assets',
            'Emergency supplies',
            'Office inventory',
        ],
    },

    {
        slug: 'events-production',
        name: 'Events & Production',
        tag: 'Touring',
        Icon: TbMicrophone2,
        summary:
            'Audio, visual and staging equipment tracked through packing, touring and return.',
        intro: 'Pack, ship and return equipment with confidence, using checklists that make sure nothing is left behind.',
        imageLight: '/img/industries/events-production-hero.png',
        imageAlt: 'Events and production inventory management',
        challenges: [
            {
                title: 'Gear left behind',
                text: 'Equipment is lost between venues when packing is not checked.',
            },
            {
                title: 'Tight turnarounds',
                text: 'Shows move fast, leaving little time to confirm what has returned.',
            },
            {
                title: 'Shared equipment pools',
                text: 'Several productions draw from the same stock of cases and cables.',
            },
        ],
        benefits: [
            {
                title: 'Pack-out checklists',
                text: 'Create a list for each show and tick items off as they are loaded.',
            },
            {
                title: 'Return verification',
                text: 'Check items back in and spot anything missing straight away.',
            },
            {
                title: 'Equipment availability',
                text: 'See what is booked, in transit or free for the next event.',
            },
        ],
        tracks: [
            'Audio equipment',
            'Lighting and video',
            'Staging and rigging',
            'Cables and cases',
            'Merchandise',
            'Costumes and props',
        ],
    },

    {
        slug: 'antiques-fine-art',
        name: 'Antiques & Fine Art',
        tag: 'Provenance',
        Icon: TbPalette,
        summary:
            'Detailed records, images and provenance for one-of-a-kind pieces and collections.',
        intro: 'Document every piece with images, condition notes and provenance, and keep a reliable record of where it is.',
        imageLight: '/img/industries/antiques-fine-art-hero.png',
        imageAlt: 'Antiques and fine art inventory management',
        challenges: [
            {
                title: 'Every item is unique',
                text: 'There are no standard SKUs, so each piece needs its own detailed record.',
            },
            {
                title: 'Provenance must be proven',
                text: 'Ownership history and documents have to stay attached to the item.',
            },
            {
                title: 'Condition changes over time',
                text: 'Damage and restoration need to be recorded as they happen.',
            },
        ],
        benefits: [
            {
                title: 'Detailed item records',
                text: 'Store photos, measurements, notes and valuations for each piece.',
            },
            {
                title: 'Document storage',
                text: 'Attach certificates, receipts and provenance papers to the item.',
            },
            {
                title: 'Location and loan history',
                text: 'Know where each piece is, including works on loan or exhibition.',
            },
        ],
        tracks: [
            'Paintings and prints',
            'Sculpture',
            'Antique furniture',
            'Jewellery and objects',
            'Provenance documents',
            'Condition reports',
        ],
    },

    {
        slug: 'non-profit-relief',
        name: 'Non-Profit & Relief',
        tag: 'Relief',
        Icon: TbHeartHandshake,
        summary:
            'Donated goods, emergency supplies and shipments organised for fast, accountable distribution.',
        intro: 'Make every donation count by knowing what you hold, where it is, and where it needs to go next.',
        imageLight: '/img/industries/non-profit-relief-hero.png',
        imageAlt: 'Non-profit and relief inventory management',
        challenges: [
            {
                title: 'Donations arrive unpredictably',
                text: 'Mixed, unsorted goods are hard to record and distribute.',
            },
            {
                title: 'Emergencies need speed',
                text: 'Teams must locate and dispatch supplies quickly when needs arise.',
            },
            {
                title: 'Donors expect accountability',
                text: 'Funders want to see how goods and funds were used.',
            },
        ],
        benefits: [
            {
                title: 'Fast intake',
                text: 'Record donated items as they arrive and sort them by category.',
            },
            {
                title: 'Distribution tracking',
                text: 'Track shipments from storage to the people and sites who receive them.',
            },
            {
                title: 'Reporting for donors',
                text: 'Produce clear reports on what was received and distributed.',
            },
        ],
        tracks: [
            'Donated goods',
            'Food and water',
            'Medical supplies',
            'Clothing and bedding',
            'Shelter equipment',
            'Outgoing shipments',
        ],
    },

    {
        slug: 'dental-orthodontic',
        name: 'Dental & Orthodontic',
        tag: 'Clinical',
        Icon: TbDental,
        summary:
            'Implants, sterile supplies and consumables tracked by lot and expiry date.',
        intro: 'Keep clinical supplies safe and available, with lot numbers and expiry dates recorded for everything you use.',
        imageLight: '/img/industries/dental-orthodontic-hero.png',
        imageAlt: 'Dental and orthodontic inventory management',
        challenges: [
            {
                title: 'Expired clinical stock',
                text: 'Supplies past their date must be removed before they reach a patient.',
            },
            {
                title: 'Lot traceability',
                text: 'Implants and materials need lot numbers recorded against treatments.',
            },
            {
                title: 'Sterile supplies across rooms',
                text: 'Stock held in several surgeries is hard to count and replenish.',
            },
        ],
        benefits: [
            {
                title: 'Lot and expiry tracking',
                text: 'Record lot numbers and expiry dates for every clinical item.',
            },
            {
                title: 'Room-level stock',
                text: 'Track supplies in each surgery and store room.',
            },
            {
                title: 'Reorder alerts',
                text: 'Receive a prompt before key consumables run out.',
            },
        ],
        tracks: [
            'Implants and components',
            'Sterile supplies',
            'Anaesthetics',
            'Impression materials',
            'Instruments',
            'Disposables',
        ],
    },

    {
        slug: 'plumbing-hvac',
        name: 'Plumbing & HVAC',
        tag: 'Service Fleet',
        Icon: TbTool,
        summary:
            'Compressors, valves, pipe and van stock for service technicians in the field.',
        intro: 'Make sure every technician arrives with the right parts, and that warehouse and van stock stay in step.',
        imageLight: '/img/industries/plumbing-hvac-hero.png',
        imageAlt: 'Plumbing and HVAC inventory management',
        challenges: [
            {
                title: 'Return visits for parts',
                text: 'Technicians leave a job unfinished because a part is not on the van.',
            },
            {
                title: 'Costly parts go missing',
                text: 'Compressors, valves and refrigerant need careful accounting.',
            },
            {
                title: 'Warehouse and van out of sync',
                text: 'Stock moves between locations without being recorded.',
            },
        ],
        benefits: [
            {
                title: 'Van stock management',
                text: 'Track what each technician carries and restock it easily.',
            },
            {
                title: 'Transfers between locations',
                text: 'Move stock between warehouse and vans with a clear record.',
            },
            {
                title: 'Job-linked usage',
                text: 'Record parts used on each job to keep billing accurate.',
            },
        ],
        tracks: [
            'Compressors and motors',
            'Valves and fittings',
            'Pipe and ducting',
            'Refrigerant',
            'Filters and controls',
            'Technician van stock',
        ],
    },
]

// Keep the list in the same order as the slug list used for routing
export const industries: Industry[] = industrySlugs.map((slug) => {
    const industry = industryList.find((item) => item.slug === slug)

    if (!industry) {
        throw new Error(`Missing industry data for slug: ${slug}`)
    }

    return industry
})

export const getIndustry = (slug: string): Industry | undefined =>
    industries.find((item) => item.slug === slug)

/* ------------------------------- Page copy -------------------------------- */
export const industriesHero = {
    title: 'Inventory management for every industry.',
    highlight: ['every', 'industry.'],
    subtitle:
        'From workshops and job sites to clinics and campuses, Invenka adapts to the way your industry tracks, stores and moves stock.',
    primaryCta: 'Start Free Trial',
    secondaryCta: 'See Plans',
    imageLight: '/img/industries/hero.png',
    imageAlt: 'Illustration of people working in different industries',
    benefits: [
        {
            title: 'Flexible for your industry',
            text: 'Invenka adapts to the way your industry tracks, stores and moves stock.',
        },
        {
            title: 'Fast to set up',
            text: 'Get started quickly with pre-built templates for your industry.',
        },
        {
            title: 'Easy to use',
            text: 'Intuitive design means your team can start using it straight away.',
        },
    ],
}
export const industriesSection = {
    id: 'industries',
    tag: 'Industry index',
    title: 'See Plans',
    text: 'See how Invenka supports the workflows, compliance needs and asset types of your sector.',
}
