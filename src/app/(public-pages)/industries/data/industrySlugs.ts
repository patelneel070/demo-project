/**
 * Slugs of every industry page (/industries/<slug>).
 * Kept free of imports so it is safe to use from the route configuration
 * (and therefore from middleware) as well as from the page data.
 */
export const industrySlugs = [
    'automotive-fleet',
    'aviation-aerospace',
    'electrical-contracting',
    'facilities-management',
    'interior-design-staging',
    'real-estate-property',
    'retail-omnichannel',
    'manufacturing-assembly',
    'food-hospitality',
    'education-campuses',
    'government-municipal',
    'events-production',
    'antiques-fine-art',
    'non-profit-relief',
    'dental-orthodontic',
    'plumbing-hvac',
] as const

export type IndustrySlug = (typeof industrySlugs)[number]
