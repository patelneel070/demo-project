'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import classNames from '@/utils/classNames'
import Container from '../../invenka/components/LandingContainer'
import NavigationBar from '../../invenka/components/NavigationBar'
import LandingFooter from '../../invenka/components/LandingFooter'
import { hero } from '../data/featuresPageData'
import { featureCategories } from '../data/featuresPageData'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/navigation'
import TextGenerateEffect from '../../invenka/components/TextGenerateEffect'
const focusRingClass =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'

const FeaturesPage = () => {
    const router = useRouter()
    
    const handlePlans = () => {
        router.push('/plans')
    }
    return (
        <main className="text-base bg-gray-50">
            <NavigationBar />

            {/* ===================== HERO ===================== */}

            <div className="relative overflow-hidden">
                <section className="relative z-10 pb-12 pt-24 sm:pt-28 md:pb-16 md:pt-36">
                    <Container>
                        <motion.div
                            className="mx-auto max-w-3xl text-center"
                            initial={{
                                opacity: 0,
                                y: 24,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.3,
                            }}
                        >
                            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
                                <TextGenerateEffect
                                    wordClassName="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto text-center mt-6 relative z-10"
                                    words={hero.title}
                                    wordsCallbackClass={({ word }) =>
                                        hero.highlight.includes(word) ? 'text-primary' : ''
                                    }
                                />
                            </h1>

                            <p className="mt-4 text-base text-muted md:mt-6 md:text-xl">
                                {hero.subtitle}
                            </p>
                        </motion.div>
                        <motion.div
                        initial={{ opacity: 0, translateY: 40 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-10 relative z-10"
                    >
                        <Button variant="solid" onClick={() => router.push('/sign-up')}>
                            {hero.primaryCta}
                        </Button>
                        <Button onClick={handlePlans}>{hero.secondaryCta}</Button>
                    </motion.div>
                        <motion.div
                            className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl"
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.4,
                                delay: 0.1,
                            }}
                        >
                            <video
                                className="h-auto w-full"
                                controls
                                playsInline
                                preload="metadata"
                            >
                                <source
                                    src="/img/features/feature-video.mp4"
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </motion.div>
                    </Container>
                </section>
            </div>

            {/* ===================== FEATURE SECTIONS ===================== */}

            <section id="features">
                {featureCategories.map((category, index) => {
                    const isGray = index % 2 === 0

                    return (
                        <section
                            key={category.id}
                            className={
                                isGray
                                    ? 'bg-gray-100'
                                    : 'bg-gray-50'
                            }
                        >
                            <Container>
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 35,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.35,
                                        type: 'spring',
                                        bounce: 0.1,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.15,
                                    }}
                                    className="py-14 sm:py-16 md:py-20 lg:py-24"
                                >
                                    {/* ===================== INTRO ===================== */}

                                    <div className="mx-auto max-w-3xl text-center">
                                        {/* Category tag */}

                                        <p className="inline-flex items-center rounded-full bg-primary-subtle px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                            {category.label}
                                        </p>

                                        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                                            {category.heading}
                                        </h2>

                                        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                                            {category.description}
                                        </p>
                                    </div>

                                    {/* ===================== FEATURE CARDS ===================== */}

                                    <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                                        {category.cards.map(
                                            (card, cardIndex) => {
                                                const Icon = card.Icon

                                                const cardContent = (
                                                    <div
                                                        className={classNames(
                                                            'group flex h-full min-h-[230px] flex-col rounded-3xl border border-gray-200 bg-gray-50 p-6',
                                                            focusRingClass,
                                                        )}
                                                    >
                                                        {/* Icon */}

                                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-subtle text-primary">
                                                            <Icon
                                                                size={25}
                                                                strokeWidth={1.8}
                                                                aria-hidden="true"
                                                            />
                                                        </div>

                                                        {/* Content */}

                                                        <div className="mt-6">
                                                            <h3 className="text-lg font-semibold heading-text sm:text-xl">
                                                                {card.title}
                                                            </h3>

                                                            <p className="mt-2 text-sm leading-6 text-muted sm:text-base">
                                                                {card.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )

                                                return (
                                                    <motion.div
                                                        key={`${category.id}-${card.title}`}
                                                        initial={{
                                                            opacity: 0,
                                                            y: 20,
                                                        }}
                                                        whileInView={{
                                                            opacity: 1,
                                                            y: 0,
                                                        }}
                                                        transition={{
                                                            duration: 0.3,
                                                            delay:
                                                                cardIndex *
                                                                0.04,
                                                        }}
                                                        viewport={{
                                                            once: true,
                                                            amount: 0.15,
                                                        }}
                                                    >
                                                        {card.href ? (
                                                            <Link
                                                                href={
                                                                    card.href
                                                                }
                                                                className="block h-full"
                                                                aria-label={`Learn more about ${card.title}`}
                                                            >
                                                                {
                                                                    cardContent
                                                                }
                                                            </Link>
                                                        ) : (
                                                            cardContent
                                                        )}
                                                    </motion.div>
                                                )
                                            },
                                        )}
                                    </div>
                                </motion.div>
                            </Container>
                        </section>
                    )
                })}
            </section>

            <LandingFooter />
        </main>
    )
}

export default FeaturesPage