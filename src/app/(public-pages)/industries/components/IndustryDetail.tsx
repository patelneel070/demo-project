'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { TbCircleCheck } from 'react-icons/tb'
import Container from '../../invenka/components/LandingContainer'
import NavigationBar from '../../invenka/components/NavigationBar'
import LandingFooter from '../../invenka/components/LandingFooter'
import { getIndustry } from '../data/industriesData'
import HeroContent from '../../invenka/components/HeroContent'

// Same fade-up used on the other public pages
const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.3, type: 'spring', bounce: 0.1 },
    viewport: { once: true, amount: 0.1 },
} as const

const sectionSpacing = 'py-14 sm:py-16 md:py-20 lg:py-24'

const SectionHeading = ({
    title,
    text,
}: {
    title: string
    text: string
}) => (
    <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {title}
        </h2>
        <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{text}</p>
    </div>
)

const Card = ({ children }: { children: ReactNode }) => (
    <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-gray-50 p-6">
        {children}
    </div>
)

/**
 * One layout for every industry page. Only the data (by slug) changes.
 */
const IndustryDetail = ({ slug }: { slug: string }) => {
    const industry = getIndustry(slug)

    if (!industry) {
        return null
    }

    const { name, intro, challenges, benefits, tracks } = industry

    return (
        <main className="overflow-x-clip bg-gray-50 text-base">
            <NavigationBar />

            <div className="relative">
                <HeroContent
                    key={slug}
                    title={`${name} inventory management.`}
                    highlight={name.split(' ')}
                    subtitle={intro}
                    primaryCta="Start Free Trial"
                    secondaryCta="All industries"
                    imageLight={industry.imageLight}
                    imageAlt={industry.imageAlt}
                    benefits={industry.benefits}
                />
            </div>

            {/* ===================== CHALLENGES ===================== */}

            <section className="bg-gray-50">
                <Container>
                    <motion.div {...fadeUp} className={sectionSpacing}>
                        <SectionHeading
                            title="Common challenges"
                            text={`Where inventory management typically becomes difficult in ${name.toLowerCase()}.`}
                        />

                        <ul
                            role="list"
                            className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 md:grid-cols-3"
                        >
                            {challenges.map(({ title, text }) => (
                                <li key={title}>
                                    <Card>
                                        <h3 className="text-lg font-semibold heading-text">
                                            {title}
                                        </h3>
                                        <p className="mt-2 text-base leading-7 text-muted">
                                            {text}
                                        </p>
                                    </Card>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </Container>
            </section>

            {/* ===================== HOW INVENKA HELPS ===================== */}

            <section className="bg-gray-100">
                <Container>
                    <motion.div {...fadeUp} className={sectionSpacing}>
                        <SectionHeading
                            title="How Invenka helps"
                            text="The tools your team needs to stay organised and in control."
                        />

                        <ul
                            role="list"
                            className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 md:grid-cols-3"
                        >
                            {benefits.map(({ title, text }) => (
                                <li key={title}>
                                    <Card>
                                        <div
                                            aria-hidden="true"
                                            className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-subtle text-primary"
                                        >
                                            <TbCircleCheck className="h-6 w-6" />
                                        </div>
                                        <h3 className="mt-5 text-lg font-semibold heading-text">
                                            {title}
                                        </h3>
                                        <p className="mt-2 text-base leading-7 text-muted">
                                            {text}
                                        </p>
                                    </Card>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </Container>
            </section>

            {/* ===================== WHAT YOU CAN TRACK ===================== */}

            <section className="bg-gray-50">
                <Container>
                    <motion.div {...fadeUp} className={sectionSpacing}>
                        <SectionHeading
                            title="What you can track"
                            text="Typical items and records managed in Invenka by this industry."
                        />

                        <ul
                            role="list"
                            className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3"
                        >
                            {tracks.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4"
                                >
                                    <TbCircleCheck
                                        aria-hidden="true"
                                        className="shrink-0 text-xl text-primary"
                                    />
                                    <span className="text-base font-medium heading-text">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </Container>
            </section>

            <LandingFooter />
        </main>
    )
}

export default IndustryDetail
