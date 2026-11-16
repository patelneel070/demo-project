import Container from '../../landing/components/LandingContainer'
import Button from '@/components/ui/Button'
import { TbCircleCheck } from 'react-icons/tb'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import type { ReactNode } from 'react'

const PointList = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex items-center gap-2">
            <TbCircleCheck className="text-xl shrink-0 text-primary" />
            <span>{children}</span>
        </div>
    )
}

const featureRows = [
    {
        title: 'Organize and automate your inventory',
        text: 'Import your existing list, group items into folders by location or type, and capture the details that matter with custom fields.',
        points: [
            'Import your inventory list in minutes.',
            'Group items into folders by location, type and more.',
            'Add custom fields for key item details.',
        ],
        image: '/img/landing/demo/productCreate.webp',
    },
    {
        title: 'Track and manage everything in one app',
        text: 'Speed up counts, see every item at a glance and know before you run low.',
        points: [
            'Scan barcodes and QR codes to speed up counts.',
            'Add photos to track each item visually.',
            'Get alerted when stock runs low.',
        ],
        image: '/img/landing/demo/productEdit.webp',
    },
    {
        title: 'Get real-time reporting insights',
        text: 'Turn inventory data into reports you can use for audits, budgeting and forecasting.',
        points: [
            'In-depth data on items, folders and user history.',
            'Export custom PDF or CSV reports.',
            'Perfect for audits, budgeting and forecasting.',
        ],
        image: '/img/landing/demo/dashboardAnalytic.webp',
    },
    {
        title: 'Sync across every device and team',
        text: 'Use it on mobile, desktop or tablet. Cloud syncing keeps your whole team up to date in real time.',
        points: [
            'Automatic cloud-based syncing.',
            'Update inventory from any location.',
            'Works for teams of any size.',
        ],
        image: '/img/landing/demo/orderList.webp',
    },
]

const cardClass =
    'bg-gray-100 dark:bg-gray-800 rounded-3xl py-12 px-10 lg:py-24 lg:px-16 overflow-hidden mb-10'

const OtherFeatures = () => {
    const router = useRouter()

    return (
        <div id="features" className="relative z-20 py-10 md:py-20">
            <Container>
                {featureRows.map((row, index) => (
                    <motion.div
                        key={row.title}
                        className={cardClass}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, type: 'spring', bounce: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                <h3 className="text-3xl md:text-4xl">{row.title}</h3>
                                <p className="mt-6 max-w-[550px] text-lg">{row.text}</p>
                                <div className="mt-8 flex flex-col gap-4">
                                    {row.points.map((point) => (
                                        <PointList key={point}>{point}</PointList>
                                    ))}
                                </div>
                                <div className="mt-8">
                                    <Button variant="solid" onClick={() => router.push('/sign-up')}>
                                        Start Free Trial
                                    </Button>
                                </div>
                            </div>
                            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                <div className="p-2 lg:p-4 border border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-700 rounded-2xl lg:rounded-[32px]">
                                    <div className="bg-white dark:bg-black dark:border-gray-700 border border-gray-200 rounded-[24px] overflow-hidden">
                                        <img src={row.image} alt={row.title} className="w-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}

                <motion.div
                    id="mobile"
                    className={cardClass}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, type: 'spring', bounce: 0.1 }}
                    viewport={{ once: true }}
                >
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-4">
                        <div>
                            <h3 className="text-3xl md:text-4xl">Inventory from anywhere.</h3>
                            <p className="mt-6 max-w-[550px] text-lg">
                                Our top-rated mobile app makes it easy to manage
                                inventory anywhere, even when you are offline.
                            </p>
                            <div className="mt-12 flex flex-col sm:flex-row gap-4">
                                <Button variant="solid">Download on the App Store</Button>
                                <Button>Get it on Google Play</Button>
                            </div>
                        </div>
                        <div className="relative flex justify-center">
                            <motion.div
                                className="p-2 border border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-700 rounded-[32px] max-w-[300px] lg:absolute lg:top-[-50px]"
                                whileHover={{ y: -20 }}
                            >
                                <div className="absolute inset-x-0 bottom-0 h-20 w-full bg-gradient-to-b from-transparent via-gray-100 to-gray-100 dark:via-zinc-800/70 dark:to-gray-800 scale-[1.1] pointer-events-none" />
                                <div className="bg-white dark:bg-black dark:border-gray-700 border border-gray-200 rounded-[24px] overflow-hidden max-h-[450px]">
                                    <img src="/img/landing/features/mobile.png" alt="Mobile view" className="rounded-[24px]" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </div>
    )
}

export default OtherFeatures
