import type { Metadata } from 'next'
import IndustriesLanding from './components/IndustriesLanding'

export const metadata: Metadata = {
  title: 'Industries | Invenka',
  description:
    'See how Invenka inventory management supports automotive, aviation, retail, manufacturing, healthcare, education, government and more.',
}

function page() {
  return <IndustriesLanding />
}

export default page
