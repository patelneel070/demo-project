'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import useTheme from '@/utils/hooks/useTheme'
import applyTheme from '@/utils/applyThemeSchema'
import presetThemeSchemaConfig from '@/configs/preset-theme-schema.config'
import { MODE_DARK, MODE_LIGHT } from '@/constants/theme.constant'
import classNames from '@/utils/classNames'
import Container from '../../landing/components/LandingContainer'
import NavigationBar from '../../invenka/components/NavigationBar'
import LandingFooter from '../../invenka/components/LandingFooter'
import { hero } from '../../invenka/components/data/landingData'
import { featureCategories } from '../data/featuresPageData'

const focusRingClass =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'

const FeaturesPage = () => {

    const mode = useTheme((state) => state.mode)
    const setMode = useTheme((state) => state.setMode)
    const schema = useTheme((state) => state.themeSchema)

    useEffect(() => {
        applyTheme('red', mode, presetThemeSchemaConfig)

        return () => {
            applyTheme(
                schema || 'default',
                mode,
                presetThemeSchemaConfig,
            )
        }
    }, [mode, schema])

    return (
        <main className="text-base bg-white dark:bg-gray-900">
            <NavigationBar
                mode={mode}
                toggleMode={() =>
                    setMode(
                        mode === MODE_LIGHT
                            ? MODE_DARK
                            : MODE_LIGHT,
                    )
                }
            />

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
                                Features
                            </h1>

                            <p className="mt-4 text-base text-muted dark:text-muted-dark md:mt-6 md:text-xl">
                                {hero.subtitle}
                            </p>
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
                                    ? 'bg-gray-100 dark:bg-gray-800'
                                    : 'bg-white dark:bg-gray-900'
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
                                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                                            {category.label}
                                        </p>

                                        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                                            {category.heading}
                                        </h2>

                                        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted dark:text-muted-dark sm:text-lg">
                                            {category.description}
                                        </p>
                                    </div>

                                    {/* ===================== IMAGE CARDS ===================== */}

                                    <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:gap-6">
                                        {category.cards.map(
                                            (card, cardIndex) => {
                                                const cardContent = (
                                                    <div
                                                        className={classNames(
                                                            'group h-full overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 dark:border-gray-700 dark:bg-gray-900',
                                                            card.href &&
                                                                'hover:-translate-y-1 hover:border-primary hover:shadow-xl',
                                                            focusRingClass,
                                                        )}
                                                    >
                                                        {/* Image */}

                                                        <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800 sm:h-52 lg:h-56">
                                                            <img
                                                                src={
                                                                    card.image
                                                                }
                                                                alt=""
                                                                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                                                            />
                                                        </div>

                                                        {/* Content */}

                                                        <div className="p-5 sm:p-6">
                                                            <h3 className="text-lg font-semibold heading-text sm:text-xl">
                                                                {card.title}
                                                            </h3>

                                                            <p className="mt-2 text-sm leading-6 text-muted dark:text-muted-dark sm:text-base">
                                                                {
                                                                    card.description
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                )

                                                return (
                                                    <motion.div
                                                        key={card.title}
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
                                                                0.06,
                                                        }}
                                                        viewport={{
                                                            once: true,
                                                            amount: 0.2,
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
                                                                {cardContent}
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

            <LandingFooter mode={mode} />
        </main>
    )
}

export default FeaturesPage