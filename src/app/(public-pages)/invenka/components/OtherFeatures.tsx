
import Container from '../../landing/components/LandingContainer'
import Button from '@/components/ui/Button'
import { TbCircleCheck } from 'react-icons/tb'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import type { ReactNode } from 'react'
import { featureRows, mobileSection } from './data/landingData'

const PointList = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex items-center gap-2">
            <TbCircleCheck className="text-xl shrink-0 text-primary" />
            <span>{children}</span>
        </div>
    )
}

const cardClass =
    'rounded-3xl py-12 lg:py-24 overflow-hidden mb-10'

const OtherFeatures = () => {
    const router = useRouter()

    return (
        <div id="features" className="relative z-20 py-10 md:py-20">
            {featureRows.map((row, index) => (
                <div
                    key={row.title}
                    className={
                        index % 2 === 0
                            ? 'bg-white dark:bg-gray-900'
                            : 'bg-gray-100 dark:bg-gray-800'
                    }
                >
                    <Container>
                        <motion.div
                            className={cardClass}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.3,
                                type: 'spring',
                                bounce: 0.1,
                            }}
                            viewport={{ once: true }}
                        >
                            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                                <div
                                    className={
                                        index % 2 === 1
                                            ? 'lg:order-2 px-10 lg:px-16'
                                            : 'px-10 lg:px-16'
                                    }
                                >
                                    <h3 className="text-3xl md:text-4xl">
                                        {row.title}
                                    </h3>

                                    <p className="mt-6 max-w-[550px] text-lg">
                                        {row.text}
                                    </p>

                                    <div className="mt-8 flex flex-col gap-4">
                                        {row.points.map((point) => (
                                            <PointList key={point}>
                                                {point}
                                            </PointList>
                                        ))}
                                    </div>

                                    <div className="mt-8">
                                        <Button
                                            variant="solid"
                                            onClick={() =>
                                                router.push('/sign-up')
                                            }
                                        >
                                            Start Free Trial
                                        </Button>
                                    </div>
                                </div>

                                <div
                                    className={
                                        index % 2 === 1
                                            ? 'lg:order-1'
                                            : ''
                                    }
                                >
                                    <div
                                        className={
                                            index % 2 === 0
                                                ? 'h-[400px] w-[900px] lg:h-[500px] overflow-hidden'
                                                : 'pl-0 h-[400px] lg:h-[500px] overflow-hidden'
                                        }
                                    >
                                        <img
                                            src={row.image}
                                            alt={row.title}
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Container>
                </div>
            ))}

            <Container>
                <motion.div
                    id="mobile"
                    className={cardClass}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.3,
                        type: 'spring',
                        bounce: 0.1,
                    }}
                    viewport={{ once: true }}
                >
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-4">
                        <div>
                            <h3 className="text-3xl md:text-4xl">
                                {mobileSection.title}
                            </h3>

                            <p className="mt-6 max-w-[550px] text-lg">
                                {mobileSection.text}
                            </p>

                            <div className="mt-12 flex flex-col sm:flex-row gap-4">
                                <Button variant="solid">
                                    {mobileSection.appStoreCta}
                                </Button>

                                <Button>
                                    {mobileSection.playStoreCta}
                                </Button>
                            </div>
                        </div>

                        <div className="relative flex justify-center">
                            <motion.div
                                className="p-2 border border-gray-600 bg-gray-200 dark:bg-gray-700 dark:border-gray-700 rounded-[32px] max-w-[300px] lg:absolute lg:top-[-50px]"
                                whileHover={{ y: -20 }}
                            >
                                <div className="absolute inset-x-0 bottom-0 h-20 w-full bg-gradient-to-b from-transparent via-gray-100 to-gray-100 dark:via-zinc-800/70 dark:to-gray-800 scale-[1.1] pointer-events-none" />

                                <div className="bg-white dark:bg-black dark:border-gray-700 border border-gray-200 rounded-[24px] overflow-hidden max-h-[450px]">
                                    <img
                                        src={mobileSection.image}
                                        alt={mobileSection.imageAlt}
                                        className="rounded-[24px]"
                                    />
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