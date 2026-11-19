'use client'

import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { TbCircleCheck } from 'react-icons/tb'
import Button from '@/components/ui/Button'
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
import type { FeatureCard } from '../data/featuresPageData'

const focusRingClass =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'

const cardClass =
    'group flex h-full min-w-0 flex-col gap-3 break-words rounded-2xl border border-gray-200 bg-white p-4 transition duration-200 dark:border-gray-800 dark:bg-gray-950 sm:gap-4 sm:p-5'

const CardBody = ({ card }: { card: FeatureCard }) => (
    <>
        <span className="flex h-11 w-11 shrink-0 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary-subtle text-primary">
            {card.Icon && <card.Icon size={24} aria-hidden="true" />}
            {card.image && (
                <img src={card.image} alt="" className="max-h-7" />
            )}
        </span>
        <span>
            <span className="block text-base font-semibold heading-text sm:text-lg">
                {card.title}
            </span>
            <span className="mt-1 block text-muted dark:text-muted-dark">
                {card.description}
            </span>
        </span>
    </>
)

const FeaturesPage = () => {
    const router = useRouter()
    const mode = useTheme((state) => state.mode)
    const setMode = useTheme((state) => state.setMode)
    const schema = useTheme((state) => state.themeSchema)

    const [activeId, setActiveId] = useState(featureCategories[0].id)
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
    const contentRef = useRef<HTMLDivElement>(null)
    const hasInteracted = useRef(false)

    // Same theme handling as the landing page
    useEffect(() => {
        applyTheme('red', mode, presetThemeSchemaConfig)
        return () => {
            applyTheme(schema || 'default', mode, presetThemeSchemaConfig)
        }
    }, [mode])

    const activeIndex = featureCategories.findIndex((c) => c.id === activeId)
    const active = featureCategories[activeIndex]

    // On small screens the content is BELOW the category list, so after a tap
    // bring the content into view (the list is vertical on every screen size)
    useEffect(() => {
        if (!hasInteracted.current) return
        if (window.matchMedia('(min-width: 1024px)').matches) return
        contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, [activeIndex])

    const selectTab = (index: number) => {
        hasInteracted.current = true
        setActiveId(featureCategories[index].id)
    }

    // Arrow keys / Home / End move between tabs
    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        const last = featureCategories.length - 1
        let next = -1
        if (event.key === 'ArrowDown' || event.key === 'ArrowRight')
            next = activeIndex === last ? 0 : activeIndex + 1
        if (event.key === 'ArrowUp' || event.key === 'ArrowLeft')
            next = activeIndex === 0 ? last : activeIndex - 1
        if (event.key === 'Home') next = 0
        if (event.key === 'End') next = last
        if (next < 0) return
        event.preventDefault()
        selectTab(next)
        tabRefs.current[next]?.focus()
    }

    return (
        <main className="px-4 lg:px-0 text-base bg-white dark:bg-gray-900">
            <NavigationBar
                mode={mode}
                toggleMode={() => setMode(mode === MODE_LIGHT ? MODE_DARK : MODE_LIGHT)}
            />

            <div className="relative">
                <div
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='50' height='50' fill='none' stroke='${mode === MODE_LIGHT ? 'rgb(0 0 0 / 0.04)' : 'rgb(255 255 255 / 0.04)'}'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
                    }}
                    className="absolute inset-0 [mask-image:linear-gradient(to_bottom,white_5%,transparent_70%)] pointer-events-none select-none"
                />

                <section className="relative z-10 pt-24 pb-6 sm:pt-28 md:pt-36 md:pb-10">
                    <Container>
                        <motion.div
                            className="mx-auto max-w-3xl text-center"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
                                Features
                            </h1>
                            <p className="mt-4 text-base text-muted dark:text-muted-dark md:mt-6 md:text-xl">
                                {hero.subtitle}
                            </p>
                        </motion.div>
                    </Container>
                </section>
            </div>

            {/* --------------------- Vertical nav + tab content --------------------- */}
            <section className="relative z-20 pb-10 md:pb-20">
                <Container>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
                        {/* Category navigation: vertical on every screen size */}
                        <div className="lg:sticky lg:top-28 lg:self-start">
                            <div
                                role="tablist"
                                aria-label="Feature categories"
                                aria-orientation="vertical"
                                onKeyDown={handleKeyDown}
                                className="flex flex-col border-l border-gray-200 dark:border-gray-800"
                            >
                                {featureCategories.map((category, index) => {
                                    const isActive = category.id === activeId
                                    return (
                                        <button
                                            key={category.id}
                                            ref={(el) => {
                                                tabRefs.current[index] = el
                                            }}
                                            type="button"
                                            role="tab"
                                            id={`tab-${category.id}`}
                                            aria-selected={isActive}
                                            aria-controls={`panel-${category.id}`}
                                            tabIndex={isActive ? 0 : -1}
                                            onClick={() => selectTab(index)}
                                            className={classNames(
                                                'relative w-full px-4 py-3 text-left text-base font-semibold transition-colors duration-200 sm:px-5 lg:py-3.5 lg:text-lg',
                                                isActive
                                                    ? 'text-primary'
                                                    : 'text-muted hover:text-gray-900 dark:text-muted-dark dark:hover:text-gray-100',
                                                focusRingClass,
                                            )}
                                        >
                                            {category.label}
                                            {isActive && (
                                                <motion.span
                                                    layoutId="featuresTabIndicator"
                                                    className="absolute -left-px inset-y-2 w-0.5 rounded-full bg-primary"
                                                    transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                                                />
                                            )}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Tab content */}
                        <div ref={contentRef} className="min-w-0 scroll-mt-24">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={active.id}
                                role="tabpanel"
                                id={`panel-${active.id}`}
                                aria-labelledby={`tab-${active.id}`}
                                tabIndex={0}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.25 }}
                                className="grid grid-cols-1 items-start gap-6 rounded-3xl bg-gray-100 px-4 py-6 focus-visible:outline-none dark:bg-gray-800 sm:gap-8 sm:px-6 sm:py-8 md:px-10 md:py-10 xl:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] xl:gap-10"
                            >
                                {/* Left: category info */}
                                <div className="min-w-0">
                                    <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                                        {active.label}
                                    </p>
                                    <h2 className="mt-3 break-words text-2xl sm:text-3xl md:text-4xl">
                                        {active.heading}
                                    </h2>
                                    <p className="mt-4 max-w-[550px] text-base sm:mt-6 sm:text-lg">
                                        {active.description}
                                    </p>
                                    {active.points.length > 0 && (
                                        <ul className="mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4">
                                            {active.points.map((point) => (
                                                <li key={point} className="flex items-start gap-2">
                                                    <TbCircleCheck className="mt-0.5 shrink-0 text-xl text-primary" />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    <div className="mt-6 sm:mt-8 [&>button]:w-full sm:[&>button]:w-auto">
                                        <Button variant="solid" onClick={() => router.push('/sign-up')}>
                                            Start Free Trial
                                        </Button>
                                    </div>
                                </div>

                                {/* Right: feature cards */}
                                <ul className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-1">
                                    {active.cards.map((card, index) => (
                                        <motion.li
                                            key={card.title}
                                            initial={{ opacity: 0, y: 16 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.25, delay: 0.05 + index * 0.05 }}
                                        >
                                            {card.href ? (
                                                <Link
                                                    href={card.href}
                                                    className={classNames(
                                                        cardClass,
                                                        'hover:border-primary',
                                                        focusRingClass,
                                                    )}
                                                >
                                                    <CardBody card={card} />
                                                </Link>
                                            ) : (
                                                <div className={cardClass}>
                                                    <CardBody card={card} />
                                                </div>
                                            )}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </AnimatePresence>
                        </div>
                    </div>
                </Container>
            </section>

            <LandingFooter mode={mode} />
        </main>
    )
}

export default FeaturesPage
