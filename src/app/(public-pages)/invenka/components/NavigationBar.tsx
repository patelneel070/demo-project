'use client'

import Container from './LandingContainer'
import { useEffect, useRef, useState } from 'react'
import Drawer from '@/components/ui/Drawer'
import classNames from '@/utils/classNames'
import useScrollTop from '@/utils/hooks/useScrollTop'
import Image from 'next/image'
import { TbChevronDown, TbMenu2 } from 'react-icons/tb'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'
import MegaDropdown from './MegaDropdown'
import {
    featureItems,
    featuresPageHref,
    solutionsPageHref,
    solutionItems,
    industriesItems,
    industriesPageHref,
    resourceItems,
    resourcesPageHref,
} from '../data/landingData'

const focusRingClass =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'

const navItemClass =
    'flex items-center gap-1 px-5 py-2 rounded-xl heading-text transition duration-200'

const Navigation = () => {
    const { isSticky } = useScrollTop()
    const router = useRouter()
    const pathname = usePathname()

    const [isOpen, setIsOpen] = useState(false)

    const [openDropdown, setOpenDropdown] = useState<
        'features' | 'solutions' | 'industries' | 'resources' | null
    >(null)

    const [isMobileFeaturesOpen, setIsMobileFeaturesOpen] =
        useState(false)

    const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] =
        useState(false)

    const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] =
        useState(false)

    const [isMobileResourcesOpen, setIsMobileResourcesOpen] =
        useState(false)

    const featuresPanelRef = useRef<HTMLDivElement>(null)
    const solutionsPanelRef = useRef<HTMLDivElement>(null)
    const industriesPanelRef = useRef<HTMLDivElement>(null)
    const resourcePanelRef = useRef<HTMLDivElement>(null)

    const featuresButtonRef = useRef<HTMLButtonElement>(null)
    const solutionsButtonRef = useRef<HTMLButtonElement>(null)
    const industriesButtonRef = useRef<HTMLButtonElement>(null)
    const resourceButtonRef = useRef<HTMLButtonElement>(null)

    const isFeaturesOpen = openDropdown === 'features'
    const isSolutionsOpen = openDropdown === 'solutions'
    const isIndustriesOpen = openDropdown === 'industries'
    const isResourcesOpen = openDropdown === 'resources'

    const closeDropdown = () => {
        setOpenDropdown(null)
    }

    const closeDrawer = () => {
        setIsOpen(false)
    }

    // Close everything whenever the route changes
    useEffect(() => {
        setOpenDropdown(null)
        setIsOpen(false)
    }, [pathname])

    // Close dropdown on outside click and Escape
    useEffect(() => {
        if (!openDropdown) return

        const handleMouseDown = (event: MouseEvent) => {
            const target = event.target as Node

            const clickedInsideFeatures =
                featuresPanelRef.current?.contains(target)

            const clickedInsideSolutions =
                solutionsPanelRef.current?.contains(target)

            const clickedFeaturesButton =
                featuresButtonRef.current?.contains(target)

            const clickedSolutionsButton =
                solutionsButtonRef.current?.contains(target)

            const clickedInsideIndustries =
                industriesPanelRef.current?.contains(target)

            const clickedIndustriesButton =
                industriesButtonRef.current?.contains(target)

            const clickedResources =
                resourcePanelRef.current?.contains(target)

            const clickedResourcesButton =
                resourceButtonRef.current?.contains(target)

            if (
                !clickedInsideFeatures &&
                !clickedInsideSolutions &&
                !clickedFeaturesButton &&
                !clickedSolutionsButton &&
                !clickedIndustriesButton &&
                !clickedInsideIndustries &&
                !clickedResources &&
                !clickedResourcesButton
            ) {
                setOpenDropdown(null)
            }
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                const currentDropdown = openDropdown

                setOpenDropdown(null)

                if (currentDropdown === 'features') {
                    featuresButtonRef.current?.focus()
                } else if (currentDropdown === 'solutions') {
                    solutionsButtonRef.current?.focus()
                } else if (currentDropdown === 'industries') {
                    industriesButtonRef.current?.focus()
                } else if (currentDropdown === 'resources') {
                    resourceButtonRef.current?.focus()
                }
            }
        }

        document.addEventListener('mousedown', handleMouseDown)
        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('mousedown', handleMouseDown)
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [openDropdown])

    const isActive = (href: string) => pathname === href

    return (
        <>
            {/* Dim the page behind the mega dropdown (desktop only) */}
            <div
                aria-hidden="true"
                className={classNames(
                    'fixed inset-0 z-[45] hidden bg-black/30 transition-opacity duration-200 lg:block',
                    openDropdown
                        ? 'opacity-100'
                        : 'pointer-events-none opacity-0',
                )}
            />

            <div
                style={{ transition: 'all 0.2s ease-in-out' }}
                className="fixed inset-x-0 top-0 z-[50] w-full bg-gray-50"
            >
                <div
                    onMouseLeave={() => setOpenDropdown(null)}
                    className={classNames(
                        'relative z-[60] w-full transition duration-200',
                        isSticky
                            ? 'bg-gray-50 shadow-lg'
                            : 'bg-transparent',
                    )}
                >
                    <Container>
                        <div className="flex w-full flex-row items-center justify-between self-start py-3">
                            <button
                                type="button"
                                aria-label="Open menu"
                                onClick={() => setIsOpen(true)}
                                className="flex items-center gap-4 lg:hidden"
                            >
                                <TbMenu2 size={24} />
                            </button>

                            {/* ------------------------ Mobile drawer ------------------------ */}

                            <Drawer
                                title="Navigation"
                                isOpen={isOpen}
                                onClose={closeDrawer}
                                onRequestClose={closeDrawer}
                                width={280}
                                placement="left"
                            >
                                <div className="flex flex-col gap-1">
                                    {/* ------------------------ Mobile Features ------------------------ */}

                                    <button
                                        type="button"
                                        aria-expanded={isMobileFeaturesOpen}
                                        onClick={() =>
                                            setIsMobileFeaturesOpen(
                                                (open) => !open,
                                            )
                                        }
                                        className="flex items-center justify-between rounded-xl px-3 py-2 font-semibold heading-text hover:bg-gray-100"
                                    >
                                        Features

                                        <TbChevronDown
                                            size={16}
                                            className={classNames(
                                                'transition-transform duration-200',
                                                isMobileFeaturesOpen &&
                                                    'rotate-180',
                                            )}
                                        />
                                    </button>

                                    {isMobileFeaturesOpen && (
                                        <div className="ml-3 flex flex-col border-l border-gray-200 pl-3">
                                            {featureItems.map(
                                                ({ title, slug, Icon }) => (
                                                    <Link
                                                        key={slug}
                                                        href={`/${slug}`}
                                                        onClick={closeDrawer}
                                                        className="flex items-center gap-2 rounded-lg px-2 py-2 heading-text hover:bg-gray-100"
                                                    >
                                                        <Icon
                                                            size={18}
                                                            className="text-primary"
                                                        />
                                                        {title}
                                                    </Link>
                                                ),
                                            )}

                                            <Link
                                                href={featuresPageHref}
                                                onClick={closeDrawer}
                                                className="px-2 py-2 font-semibold text-primary"
                                            >
                                                See all features
                                            </Link>
                                        </div>
                                    )}

                                    {/* ------------------------ Mobile Solutions ------------------------ */}

                                    <button
                                        type="button"
                                        aria-expanded={isMobileSolutionsOpen}
                                        onClick={() =>
                                            setIsMobileSolutionsOpen(
                                                (open) => !open,
                                            )
                                        }
                                        className="flex items-center justify-between rounded-xl px-3 py-2 font-semibold heading-text hover:bg-gray-100"
                                    >
                                        Solutions

                                        <TbChevronDown
                                            size={16}
                                            className={classNames(
                                                'transition-transform duration-200',
                                                isMobileSolutionsOpen &&
                                                    'rotate-180',
                                            )}
                                        />
                                    </button>

                                    {isMobileSolutionsOpen && (
                                        <div className="ml-3 flex flex-col border-l border-gray-200 pl-3">
                                            {solutionItems.map(
                                                ({ title, slug, Icon }) => (
                                                    <Link
                                                        key={slug}
                                                        href={`/${slug}`}
                                                        onClick={closeDrawer}
                                                        className="flex items-center gap-2 rounded-lg px-2 py-2 heading-text hover:bg-gray-100"
                                                    >
                                                        <Icon
                                                            size={18}
                                                            className="text-primary"
                                                        />
                                                        {title}
                                                    </Link>
                                                ),
                                            )}

                                            <Link
                                                href={solutionsPageHref}
                                                onClick={closeDrawer}
                                                className="px-2 py-2 font-semibold text-primary"
                                            >
                                                See all solutions
                                            </Link>
                                        </div>
                                    )}

                                    {/* ------------------------ Mobile Industries ------------------------ */}

                                    <button
                                        type="button"
                                        aria-expanded={isMobileIndustriesOpen}
                                        onClick={() =>
                                            setIsMobileIndustriesOpen(
                                                (open) => !open,
                                            )
                                        }
                                        className="flex items-center justify-between rounded-xl px-3 py-2 font-semibold heading-text hover:bg-gray-100"
                                    >
                                        Industries

                                        <TbChevronDown
                                            size={16}
                                            className={classNames(
                                                'transition-transform duration-200',
                                                isMobileIndustriesOpen &&
                                                    'rotate-180',
                                            )}
                                        />
                                    </button>

                                    {isMobileIndustriesOpen && (
                                        <div className="ml-3 flex flex-col border-l border-gray-200 pl-3">
                                            {industriesItems.map(
                                                ({ title, slug, Icon }) => (
                                                    <Link
                                                        key={slug}
                                                        href={`/${slug}`}
                                                        onClick={closeDrawer}
                                                        className="flex items-center gap-2 rounded-lg px-2 py-2 heading-text hover:bg-gray-100"
                                                    >
                                                        <Icon
                                                            size={18}
                                                            className="text-primary"
                                                        />
                                                        {title}
                                                    </Link>
                                                ),
                                            )}

                                            <Link
                                                href={industriesPageHref}
                                                onClick={closeDrawer}
                                                className="px-2 py-2 font-semibold text-primary"
                                            >
                                                See all industries
                                            </Link>
                                        </div>
                                    )}

                                    {/* ------------------------ Mobile Resources ------------------------ */}

                                    <button
                                        type="button"
                                        aria-expanded={isMobileResourcesOpen}
                                        onClick={() =>
                                            setIsMobileResourcesOpen(
                                                (open) => !open,
                                            )
                                        }
                                        className="flex items-center justify-between rounded-xl px-3 py-2 font-semibold heading-text hover:bg-gray-100"
                                    >
                                        Resources

                                        <TbChevronDown
                                            size={16}
                                            className={classNames(
                                                'transition-transform duration-200',
                                                isMobileResourcesOpen &&
                                                    'rotate-180',
                                            )}
                                        />
                                    </button>

                                    {isMobileResourcesOpen && (
                                        <div className="ml-3 flex flex-col border-l border-gray-200 pl-3">
                                            {featureItems.map(
                                                ({ title, slug, Icon }) => (
                                                    <Link
                                                        key={slug}
                                                        href={`/${slug}`}
                                                        onClick={closeDrawer}
                                                        className="flex items-center gap-2 rounded-lg px-2 py-2 heading-text hover:bg-gray-100"
                                                    >
                                                        <Icon
                                                            size={18}
                                                            className="text-primary"
                                                        />
                                                        {title}
                                                    </Link>
                                                ),
                                            )}

                                            <Link
                                                href={resourcesPageHref}
                                                onClick={closeDrawer}
                                                className="px-2 py-2 font-semibold text-primary"
                                            >
                                                See all resources
                                            </Link>
                                        </div>
                                    )}

                                    {/* ------------------------ Mobile Pricing ------------------------ */}

                                    <Link
                                        href="/invenka/pricing"
                                        onClick={closeDrawer}
                                        className="rounded-xl px-3 py-2 font-semibold heading-text hover:bg-gray-100"
                                    >
                                        Pricing
                                    </Link>
                                </div>
                            </Drawer>

                            {/* ----------------------------- Logo ----------------------------- */}

                            <Link href="/invenka">
                                <Image
                                    src="/img/logo/invenka logo-png.png"
                                    width={120}
                                    height={120}
                                    alt="logo"
                                />
                            </Link>

                            {/* --------------------- Desktop nav items ---------------------- */}

                            <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center text-sm font-medium pointer-events-none lg:flex">
                                <div className="flex items-center pointer-events-auto">
                                    {/* -------------------------- Features -------------------------- */}

                                    <button
                                        ref={featuresButtonRef}
                                        type="button"
                                        aria-haspopup="true"
                                        aria-expanded={isFeaturesOpen}
                                        aria-controls="features-mega-menu"
                                        onMouseEnter={() =>
                                            setOpenDropdown('features')
                                        }
                                        onClick={() =>
                                            setOpenDropdown('features')
                                        }
                                        className={classNames(
                                            navItemClass,
                                            focusRingClass,
                                        )}
                                    >
                                        Features

                                        <TbChevronDown
                                            size={16}
                                            aria-hidden="true"
                                            className={classNames(
                                                'transition-transform duration-200',
                                                isFeaturesOpen &&
                                                    'rotate-180',
                                            )}
                                        />
                                    </button>

                                    {/* -------------------------- Solutions -------------------------- */}

                                    <button
                                        ref={solutionsButtonRef}
                                        type="button"
                                        aria-haspopup="true"
                                        aria-expanded={isSolutionsOpen}
                                        aria-controls="solutions-mega-menu"
                                        onMouseEnter={() =>
                                            setOpenDropdown('solutions')
                                        }
                                        onClick={() =>
                                            setOpenDropdown('solutions')
                                        }
                                        className={classNames(
                                            navItemClass,
                                            focusRingClass,
                                        )}
                                    >
                                        Solutions

                                        <TbChevronDown
                                            size={16}
                                            aria-hidden="true"
                                            className={classNames(
                                                'transition-transform duration-200',
                                                isSolutionsOpen &&
                                                    'rotate-180',
                                            )}
                                        />
                                    </button>

                                    {/* -------------------------- Industries -------------------------- */}

                                    <button
                                        ref={industriesButtonRef}
                                        type="button"
                                        aria-haspopup="true"
                                        aria-expanded={isIndustriesOpen}
                                        aria-controls="industries-mega-menu"
                                        onMouseEnter={() =>
                                            setOpenDropdown('industries')
                                        }
                                        onClick={() =>
                                            setOpenDropdown('industries')
                                        }
                                        className={classNames(
                                            navItemClass,
                                            focusRingClass,
                                        )}
                                    >
                                        Industries

                                        <TbChevronDown
                                            size={16}
                                            aria-hidden="true"
                                            className={classNames(
                                                'transition-transform duration-200',
                                                isIndustriesOpen &&
                                                    'rotate-180',
                                            )}
                                        />
                                    </button>

                                    
                                    {/* -------------------------- Pricing -------------------------- */}

                                    <Link
                                        href="/invenka/pricing"
                                        className={classNames(
                                            navItemClass,
                                            isActive('/invenka/pricing') &&
                                                'text-primary',
                                            focusRingClass,
                                        )}
                                    >
                                        Pricing
                                    </Link>

                                    {/* -------------------------- Resources -------------------------- */}

                                    <button
                                        ref={resourceButtonRef}
                                        type="button"
                                        aria-haspopup="true"
                                        aria-expanded={isResourcesOpen}
                                        aria-controls="resources-mega-menu"
                                        onMouseEnter={() =>
                                            setOpenDropdown('resources')
                                        }
                                        onClick={() =>
                                            setOpenDropdown('resources')
                                        }
                                        className={classNames(
                                            navItemClass,
                                            focusRingClass,
                                        )}
                                    >
                                        Resources

                                        <TbChevronDown
                                            size={16}
                                            aria-hidden="true"
                                            className={classNames(
                                                'transition-transform duration-200',
                                                isResourcesOpen &&
                                                    'rotate-180',
                                            )}
                                        />
                                    </button>

                                </div>
                            </div>

                            {/* --------------------- Right side buttons --------------------- */}

                            <div className="relative z-10 flex items-center gap-2">
                                <Link
                                    href="#"
                                    className="hidden px-3 py-2 font-semibold heading-text sm:block"
                                >
                                    Sign in
                                </Link>

                                <Button
                                    variant="solid"
                                    onClick={() => router.push('/#')}
                                >
                                    Start Free Trial
                                </Button>
                            </div>
                        </div>

                        {/* ======================== FEATURES DROPDOWN ======================== */}

                        <MegaDropdown
                            id="features-mega-menu"
                            ariaLabel="Features"
                            isOpen={isFeaturesOpen}
                            items={featureItems}
                            image="/img/invenka/nav/features-preview.png"
                            imageAlt="Invenka features"
                            heading="Manage your inventory with ease"
                            description="Track stock, manage items, get alerts and keep your entire inventory organized from one place."
                            seeAllText="See All Features"
                            seeAllHref={featuresPageHref}
                            onClose={closeDropdown}
                            panelRef={featuresPanelRef}
                        />

                        {/* ======================== SOLUTIONS DROPDOWN ======================== */}

                        <MegaDropdown
                            id="solutions-mega-menu"
                            ariaLabel="Solutions"
                            isOpen={isSolutionsOpen}
                            items={solutionItems}
                            image="/img/invenka/nav/solutions-preview.svg"
                            imageAlt="Invenka solutions"
                            heading="Solutions built for your business"
                            description="Choose the solution that fits your workflow and manage your inventory more efficiently from one place."
                            seeAllText="See All Solutions"
                            seeAllHref={solutionsPageHref}
                            onClose={closeDropdown}
                            panelRef={solutionsPanelRef}
                        />

                        {/* ======================== INDUSTRIES DROPDOWN ======================== */}

                        <MegaDropdown
                            id="industries-mega-menu"
                            ariaLabel="Industries"
                            isOpen={isIndustriesOpen}
                            items={industriesItems}
                            image="/img/invenka/nav/solutions-preview.svg"
                            imageAlt="Invenka solutions"
                            heading="Powering Inventory Across Industries"
                            description="Discover how Invenka helps businesses across industries simplify inventory management, improve visibility, and stay in control of their stock."
                            seeAllText="See All Industries"
                            seeAllHref={industriesPageHref}
                            onClose={closeDropdown}
                            panelRef={industriesPanelRef}
                        />

                        {/* =============================== RESOURCES DROPDOWN ============================= */}

                        {/* Resources dropdown */}
                        <div
                            id="resources-mega-menu"
                            ref={resourcePanelRef}
                            className={classNames(
                                'absolute left-1/2 top-full w-full max-w-[900px] -translate-x-1/2 rounded-b-2xl bg-white p-5 shadow-xl transition-all duration-200',
                                isResourcesOpen
                                    ? 'visible translate-y-0 opacity-100'
                                    : 'invisible -translate-y-2 opacity-0',
                            )}
                        >
                            <div className="grid grid-cols-3 gap-4">
                                {resourceItems.map(
                                    ({ title, slug, description, Icon }) => (
                                        <Link
                                            key={slug}
                                            href={`/${slug}`}
                                            onClick={closeDropdown}
                                            className="group rounded-xl border border-gray-200 p-5 transition duration-200 hover:border-primary/30 hover:bg-gray-50"
                                        >
                                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                                <Icon
                                                    size={22}
                                                    className="text-primary"
                                                />
                                            </div>

                                            <h3 className="mb-2 text-base font-semibold heading-text">
                                                {title}
                                            </h3>

                                            <p className="text-sm leading-6 text-gray-500">
                                                {description}
                                            </p>

                                            <div className="mt-4 text-sm font-semibold text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                                Explore →
                                            </div>
                                        </Link>
                                    ),
                                )}
                            </div>
                        </div>
                                            </Container>
                                        </div>
                                    </div>
                                </>
                            )
                        }

export default Navigation