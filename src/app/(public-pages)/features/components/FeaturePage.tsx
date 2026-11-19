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
    'group flex h-full flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition duration-200 dark:border-gray-800 dark:bg-gray-950'

const CardBody = ({ card }: { card: FeatureCard }) => (
    <>
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-subtle text-primary">
            {card.Icon && <card.Icon size={24} aria-hidden="true" />}
            {card.image && (
                <img src={card.image} alt="" className="max-h-7" />
            )}
        </span>
        <span>
            <span className="block text-lg font-semibold heading-text">
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

    // Keep the selected tab visible when the tab bar scrolls on small screens
    useEffect(() => {
        if (!hasInteracted.current) return
        tabRefs.current[activeIndex]?.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest',
        })
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

                <section className="relative z-10 pt-28 pb-10 md:pt-36">
                    <Container>
                        <motion.div
                            className="mx-auto max-w-3xl text-center"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                                Features
                            </h1>
                            <p className="mt-6 text-base md:text-xl text-muted dark:text-muted-dark">
                                {hero.subtitle}
                            </p>
                        </motion.div>
                    </Container>
                </section>
            </div>

            {/* --------------------- Vertical nav + tab content --------------------- */}
            <section className="relative z-20 pb-10 md:pb-20">
                <Container>
                    <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
                        {/* Category navigation: vertical on desktop, scrollable strip below lg */}
                        <div className="lg:sticky lg:top-28 lg:self-start">
                            <div
                                role="tablist"
                                aria-label="Feature categories"
                                aria-orientation="vertical"
                                onKeyDown={handleKeyDown}
                                className="no-visible-scrollbar flex overflow-x-auto border-b border-gray-200 dark:border-gray-800 lg:flex-col lg:overflow-visible lg:border-b-0 lg:border-l"
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
                                                'relative shrink-0 whitespace-nowrap px-4 py-3 text-left text-base font-semibold transition-colors duration-200 lg:w-full lg:px-5 lg:py-3.5 lg:text-lg',
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
                                                    className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-primary lg:-left-px lg:bottom-2 lg:top-2 lg:h-auto lg:w-0.5"
                                                    transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                                                />
                                            )}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Tab content */}
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
                                className="grid items-start gap-8 rounded-3xl bg-gray-100 px-6 py-10 focus-visible:outline-none dark:bg-gray-800 md:px-10 xl:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] xl:gap-10"
                            >
                                {/* Left: category info */}
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                                        {active.label}
                                    </p>
                                    <h2 className="mt-3 text-3xl md:text-4xl">
                                        {active.heading}
                                    </h2>
                                    <p className="mt-6 max-w-[550px] text-lg">
                                        {active.description}
                                    </p>
                                    {active.points.length > 0 && (
                                        <ul className="mt-8 flex flex-col gap-4">
                                            {active.points.map((point) => (
                                                <li key={point} className="flex items-center gap-2">
                                                    <TbCircleCheck className="shrink-0 text-xl text-primary" />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    <div className="mt-8">
                                        <Button variant="solid" onClick={() => router.push('/sign-up')}>
                                            Start Free Trial
                                        </Button>
                                    </div>
                                </div>

                                {/* Right: feature cards */}
                                <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
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
                </Container>
            </section>

            <LandingFooter mode={mode} />
        </main>
    )
}

export default FeaturesPage
