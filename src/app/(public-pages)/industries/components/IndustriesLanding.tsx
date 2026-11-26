'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { TbArrowRight, TbLayoutGrid } from 'react-icons/tb'
import Container from '../../invenka/components/LandingContainer'
import NavigationBar from '../../invenka/components/NavigationBar'
import LandingFooter from '../../invenka/components/LandingFooter'
import {
    industries,
    industriesHero,
    industriesSection,
} from '../data/industriesData'
import HeroContent from '../../invenka/components/HeroContent'
// Same fade-up used on the other public pages
const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.3, type: 'spring', bounce: 0.1 },
    viewport: { once: true, amount: 0.05 },
} as const

const IndustriesLanding = () => {

    return (
        <main className="overflow-x-clip bg-gray-50 text-base">
            <NavigationBar />

            <div className="relative">
                <HeroContent
                    title={industriesHero.title}
                    highlight={industriesHero.highlight}
                    subtitle={industriesHero.subtitle}
                    primaryCta={industriesHero.primaryCta}
                    secondaryCta={industriesHero.secondaryCta}
                    imageLight={industriesHero.imageLight}
                    imageAlt={industriesHero.imageAlt}
                    benefits={industriesHero.benefits}
                />
            </div>

            <section id={industriesSection.id} className="bg-gray-50">
                <Container>
                    <motion.div
                        {...fadeUp}
                        className="py-14 sm:py-16 md:py-20 lg:py-24"
                    >
                        <div className="mx-auto max-w-2xl text-center">
                            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                <TbLayoutGrid aria-hidden="true" />
                                {industriesSection.tag}
                            </p>

                            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                                {industriesSection.title}
                            </h2>

                            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
                                {industriesSection.text}
                            </p>
                        </div>

                        <ul
                            role="list"
                            className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
                        >
                            {industries.map(
                                ({ slug, name, tag, Icon, summary }) => (
                                    <li key={slug} className="flex">
                                        <article className="relative flex w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-5">
                                            <div className="flex items-start justify-between gap-3">
                                                <div
                                                    aria-hidden="true"
                                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-subtle text-primary"
                                                >
                                                    <Icon className="h-5 w-5" />
                                                </div>
                                                <span className="pt-1 text-right text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-400">
                                                    {tag}
                                                </span>
                                            </div>

                                            <h3 className="mt-5 text-lg font-semibold heading-text">
                                                {name}
                                            </h3>

                                            <p className="mt-2 text-sm leading-6 text-muted">
                                                {summary}
                                            </p>

                                            {/* Decorative corner icon */}
                                            <Icon
                                                aria-hidden="true"
                                                className="pointer-events-none absolute -bottom-6 -right-6 h-28 w-28 text-primary opacity-[0.08]"
                                                strokeWidth={1.2}
                                            />

                                            <div className="mt-auto flex items-center justify-between gap-3 border-t border-gray-200 pt-4">
                                                <Link
                                                    href={`/industries/${slug}`}
                                                    className="text-xs font-semibold text-primary after:absolute after:inset-0 after:content-['']"
                                                >
                                                    {name} Inventory Management
                                                </Link>
                                                <TbArrowRight
                                                    aria-hidden="true"
                                                    className="shrink-0 text-primary"
                                                />
                                            </div>
                                        </article>
                                    </li>
                                ),
                            )}
                        </ul>
                    </motion.div>
                </Container>
            </section>

            <LandingFooter />
        </main>
    )
}

export default IndustriesLanding
