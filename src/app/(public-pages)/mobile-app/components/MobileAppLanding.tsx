'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { TbCircleCheck } from 'react-icons/tb'
import Button from '@/components/ui/Button'
import Container from '../../invenka/components/LandingContainer'
import NavigationBar from '../../invenka/components/NavigationBar'
import LandingFooter from '../../invenka/components/LandingFooter'
import { useState } from 'react'
import {
    FeatureRows,
    mobileHero,
    mobileHighlights,
    mobileFeatureTabs
} from '../data/mobileAppData'

// Same fade-up used by the Features and Invenka pages (no hover effects)
const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.3, type: 'spring', bounce: 0.1 },
    viewport: { once: true, amount: 0.15 },
} as const

const sectionSpacing = 'py-14 sm:py-16 md:py-20 lg:py-24'

const Tag = ({ children }: { children: ReactNode }) => (
    <p className="inline-flex items-center rounded-full bg-primary-subtle px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
        {children}
    </p>
)

const PointItem = ({ children }: { children: ReactNode }) => (
    <li className="flex items-start gap-3">
        <TbCircleCheck
            aria-hidden="true"
            className="mt-0.5 shrink-0 text-xl text-primary"
        />
        <span>{children}</span>
    </li>
)

const MobileAppLanding = () => {
    const [activeFeatureTab, setActiveFeatureTab] = useState(
        mobileFeatureTabs[0].id,
    )

    const activeFeatureCategory = mobileFeatureTabs.find(
        (tab) => tab.id === activeFeatureTab,
    )
    return (
        <main className="overflow-x-clip bg-gray-50 text-base">
            <NavigationBar />

            {/* ===================== HERO ===================== */}

            <section className="bg-gray-50 pb-14 pt-28 sm:pb-16 md:pb-20 md:pt-36 lg:pb-24">
                <Container>
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                        <motion.div
                            className="text-center lg:text-left"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Tag>{mobileHero.tag}</Tag>

                            <h1 className="mt-5 text-4xl font-bold sm:text-5xl lg:text-6xl">
                                {mobileHero.titleStart}{' '}
                                <span className="text-primary">
                                    {mobileHero.titleHighlight}
                                </span>
                            </h1>

                            <p className="mx-auto mt-5 max-w-xl text-base font-normal text-muted md:text-xl lg:mx-0">
                                {mobileHero.text}
                            </p>

                            <div>
                            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                                 <Button
                                      variant="solid"
                                        className="min-w-[190px] h-[70px] justify-center"
                                  >
                                <span className="flex flex-col items-start leading-tight">
                                    <span className="text-[10px] font-lg uppercase tracking-wider opacity-90">
                                        Download on
                                    </span>
                                    <span className="text-lg font-semibold">
                                        App Store
                                    </span>
                                </span>
                            </Button>
                            <Button
                                className="min-w-[190px] h-[70px] justify-center"
                            >
                                <span className="flex flex-col items-start leading-tight">
                                    <span className="text-[10px] font-lg uppercase tracking-wider opacity-90">
                                        Get it on
                                    </span>
                                    <span className="text-lg font-semibold">
                                        Google Play
                                    </span>
                                </span>
                            </Button>
                        </div>
                        </div>
                        </motion.div>

                        <motion.div
                            className="mx-auto w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[340px]"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                        >
                            <div className="rounded-[32px] border border-gray-600 bg-gray-200 p-2">
                                <div className="overflow-hidden rounded-[24px] border border-gray-200 bg-gray-50">
                                    <img
                                        src={mobileHero.image}
                                        alt={mobileHero.imageAlt}
                                        className="block h-auto w-full"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* ===================== APP FEATURES ===================== */}

                <section className="bg-gray-100">
                    <Container>
                        <motion.div {...fadeUp} className={sectionSpacing}>
                            <div className="mx-auto max-w-4xl text-center">
                                <Tag>{mobileHighlights.tag}</Tag>

                                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                                    {mobileHighlights.title}
                                </h2>

                                <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                                    {mobileHighlights.text}
                                </p>
                            </div>

                            {/* ===================== FEATURE TABS ===================== */}

                            <div className="mx-auto mt-12 max-w-7xl sm:mt-14 lg:mt-16">
                                <div className="grid gap-8 md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10">

                                    {/* ===================== LEFT NAV ===================== */}

                                    <div className="flex flex-col gap-2">
                                        {mobileFeatureTabs.map((tab) => {
                                            const isActive =
                                                activeFeatureTab === tab.id

                                            return (
                                                <button
                                                    key={tab.id}
                                                    type="button"
                                                    onClick={() =>
                                                        setActiveFeatureTab(tab.id)
                                                    }
                                                    className={`w-full rounded-xl px-6 py-4 text-left text-sm font-semibold ${
                                                        isActive
                                                            ? 'bg-primary text-white'
                                                            : 'bg-gray-50 text-gray-600'
                                                    }`}
                                                >
                                                    {tab.label}
                                                </button>
                                            )
                                        })}
                                    </div>

                                    {/* ===================== RIGHT CONTENT ===================== */}

                                    <div className="min-w-0 min-h-[560px] rounded-3xl bg-gray-50 p-7 sm:p-9 lg:p-12">
                                        {activeFeatureCategory && (
                                            <>
                                                <div className="mb-10">
                                                    <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                                        {activeFeatureCategory.label}
                                                    </h3>

                                                    <p className="mt-3 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                                                        Explore the tools available for{' '}
                                                        {activeFeatureCategory.label.toLowerCase()}{' '}
                                                        your inventory.
                                                    </p>
                                                </div>

                                                <div className="grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2">
                                                    {activeFeatureCategory.items.map(
                                                        (item) => (
                                                            <div
                                                                key={item.title}
                                                                className="border-b border-gray-200 pb-7"
                                                            >
                                                                <div className="mb-4 h-2 w-2 rounded-full bg-primary" />

                                                                <h4 className="text-lg font-semibold heading-text">
                                                                    {item.title}
                                                                </h4>

                                                                <p className="mt-2 text-sm leading-6 text-muted sm:text-base">
                                                                    {item.description}
                                                                </p>
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Container>
                </section>
            {/* ===================== FEATURE ROWS ===================== */}

            {FeatureRows.map((row, index) => {
                const isReversed = index % 2 === 1

                return (
                    <section
                        key={row.title}
                        className={index % 2 === 1 ? 'bg-gray-100' : 'bg-gray-50'}
                    >
                        <Container>
                            <motion.div
                                {...fadeUp}
                                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${sectionSpacing}`}
                            >
                                <div className={isReversed ? 'lg:order-2' : ''}>
                                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                                        {row.title}
                                    </h2>

                                    <p className="mt-5 max-w-xl text-base text-muted md:text-lg">
                                        {row.text}
                                    </p>

                                    <ul className="mt-8 flex flex-col gap-4">
                                        {row.points.map((point) => (
                                            <PointItem key={point}>
                                                {point}
                                            </PointItem>
                                        ))}
                                    </ul>
                                </div>

                                <div className={isReversed ? 'lg:order-1' : ''}>
                                    <div className="h-[280px] w-full overflow-hidden rounded-[40px] sm:h-[380px] sm:rounded-[64px] lg:h-[480px] lg:rounded-[80px]">
                                        <img
                                            src={row.img}
                                            alt={row.alt}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </Container>
                    </section>
                )
            })}
            <LandingFooter />
        </main>
    )
}

export default MobileAppLanding
