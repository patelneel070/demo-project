'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import Container from '../../invenka/components/LandingContainer'
import NavigationBar from '../../invenka/components/NavigationBar'
import LandingFooter from '../../invenka/components/LandingFooter'
import { solutionItems } from '../../invenka/data/landingData'
import {
    getSolutionIcon,
    solutionsHero,
    solutionsSection,
} from '../data/solutionsPageData'

// Same fade-up used on the other public pages
const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.3, type: 'spring', bounce: 0.1 },
    viewport: { once: true, amount: 0.1 },
} as const

// Only the fields this page needs; any extra fields on the items are ignored
type Solution = {
    title: string
    description: string
    slug: string
}

const solutions: Solution[] = solutionItems

const SolutionsLanding = () => {
    const router = useRouter()

    return (
        <main className="overflow-x-clip bg-gray-50 text-base">
            <NavigationBar />

            {/* ===================== HERO ===================== */}

            <section className="bg-gray-50 pb-14 pt-28 sm:pb-16 md:pb-20 md:pt-32 lg:pb-24 lg:pt-36">
                <Container>
                    <motion.div
                        className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* HERO TEXT - LEFT */}
                        <div className="max-w-2xl text-center lg:text-left">
                            <p className="inline-flex items-center rounded-full bg-primary-subtle px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                {solutionsHero.tag}
                            </p>

                            <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                                {solutionsHero.titleStart}{' '}
                                <span className="text-primary">
                                    {solutionsHero.titleHighlight}
                                </span>{' '}
                                {solutionsHero.titleEnd}
                            </h1>

                            <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg md:mt-6 md:text-xl">
                                {solutionsHero.text}
                            </p>

                            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                                <Button
                                    variant="solid"
                                    onClick={() => router.push('/sign-up')}
                                >
                                    {solutionsHero.primaryCta}
                                </Button>

                                {/* View Plans replaces the old View Solutions button */}
                                <Button onClick={() => router.push('/plans')}>
                                    View Plans
                                </Button>
                            </div>
                        </div>

                        {/* HERO IMAGE - RIGHT */}
                        <div className="flex w-full items-center justify-center lg:justify-end">
                            <div className="relative w-full max-w-[620px] overflow-hidden rounded-3xl">
                                <Image
                                    src={solutionsHero.image}
                                    alt={solutionsHero.imageAlt}
                                    width={1200}
                                    height={850}
                                    priority
                                    className="h-auto w-full object-contain"
                                    sizes="(max-width: 1023px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </section>

            {/* ===================== SOLUTIONS ===================== */}

            <section id={solutionsSection.id} className="bg-gray-100">
                <Container>
                    <motion.div
                        {...fadeUp}
                        className="py-14 sm:py-16 md:py-20 lg:py-24"
                    >
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                                {solutionsSection.title}
                            </h2>

                            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
                                {solutionsSection.text}
                            </p>
                        </div>

                        {/* SOLUTION CARDS */}
                        <ul
                            role="list"
                            className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6"
                        >
                            {solutions.map(
                                ({ title, description, slug }, index) => {
                                    const Icon = getSolutionIcon(title)
                                    const isPrimaryAccent = index % 2 === 0

                                    return (
                                        <li key={slug} className="flex">
                                            <motion.article
                                                whileHover={{ y: -4 }}
                                                transition={{ duration: 0.16 }}
                                                className="group relative flex h-full w-full flex-col items-center justify-between gap-7 rounded-sm bg-white px-6 pb-9 pt-6 text-center sm:px-7"
                                            >
                                                {/* Top-right accent bar */}
                                                <span
                                                    className={`absolute right-0 top-0 h-7 w-1.5 ${
                                                        isPrimaryAccent
                                                            ? 'bg-primary'
                                                            : 'bg-primary-subtle'
                                                    }`}
                                                    aria-hidden="true"
                                                />

                                                {/* Number */}
                                                <div className="flex w-full items-center justify-between">
                                                    <span className="font-mono text-xs tabular-nums text-muted">
                                                        {String(index + 1).padStart(
                                                            2,
                                                            '0',
                                                        )}
                                                    </span>
                                                </div>

                                                {/* Large visual / icon frame */}
                                                <div className="relative my-1 flex h-24 w-24 shrink-0 items-center justify-center">
                                                    <span
                                                        className="absolute left-0 top-0 h-3 w-3 border-l border-t border-gray-300"
                                                        aria-hidden="true"
                                                    />
                                                    <span
                                                        className="absolute right-0 top-0 h-3 w-3 border-r border-t border-gray-300"
                                                        aria-hidden="true"
                                                    />
                                                    <span
                                                        className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-gray-300"
                                                        aria-hidden="true"
                                                    />
                                                    <span
                                                        className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-gray-300"
                                                        aria-hidden="true"
                                                    />

                                                    <Icon
                                                        aria-hidden="true"
                                                        className="h-14 w-14"
                                                        strokeWidth={1.5}
                                                    />
                                                </div>

                                                {/* Title + description */}
                                                <div className="flex flex-1 flex-col items-center gap-2.5">
                                                    <h3 className="text-lg font-semibold heading-text">
                                                        {title}
                                                    </h3>

                                                    <p className="text-sm leading-6 text-muted sm:text-base">
                                                        {description}
                                                    </p>
                                                </div>

                                                {/* CTA */}
                                                <footer className="pt-1">
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            router.push(
                                                                `/${slug}`,
                                                            )
                                                        }
                                                        className="inline-flex min-h-10 items-center justify-center rounded-full bg-primary px-7 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                                    >
                                                        Learn More
                                                    </button>
                                                </footer>
                                            </motion.article>
                                        </li>
                                    )
                                },
                            )}
                        </ul>
                    </motion.div>
                </Container>
            </section>

            <LandingFooter />
        </main>
    )
}

export default SolutionsLanding
