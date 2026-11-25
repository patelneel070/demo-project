import type { Metadata } from 'next'
import SolutionsLanding from './components/SolutionsLanding'

export const metadata: Metadata = {
  title: 'Solutions | Invenka',
  description:
    'Explore Invenka inventory solutions: tracking, stock, orders, warehouses, scanning, multiple locations, reporting and automation.',
}

function page() {
  return <SolutionsLanding />
}

export default page
