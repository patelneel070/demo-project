'use client'
import { useEffect, useRef, useState } from 'react'
import Drawer from '@/components/ui/Drawer'
import classNames from '@/utils/classNames'
import useScrollTop from '@/utils/hooks/useScrollTop'
import Image from 'next/image'
import { TbArrowRight, TbChevronDown, TbMenu2 } from 'react-icons/tb'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'
import {
    featureItems,
    featuresPageHref,
    navLinks,
} from '../data/landingData'

const focusRingClass =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'

const navItemClass =
    'flex items-center gap-1 px-5 py-2 rounded-xl heading-text transition duration-200 hover:bg-gray-100'

const Navigation = () => {
    const { isSticky } = useScrollTop()
    const router = useRouter()
    const pathname = usePathname()

    const [isOpen, setIsOpen] = useState(false)
    const [isFeaturesOpen, setIsFeaturesOpen] = useState(false)
    const [isMobileFeaturesOpen, setIsMobileFeaturesOpen] = useState(false)

    const panelRef = useRef<HTMLDivElement>(null)
    const featuresButtonRef = useRef<HTMLButtonElement>(null)

    const closeFeatures = () => setIsFeaturesOpen(false)
    const closeDrawer = () => setIsOpen(false)

    // Close everything whenever the route changes
    useEffect(() => {
        setIsFeaturesOpen(false)
        setIsOpen(false)
    }, [pathname])

    // While the mega dropdown is open: close on outside click and on Escape
    useEffect(() => {
        if (!isFeaturesOpen) return

        const handleMouseDown = (event: MouseEvent) => {
            const target = event.target as Node
            if (
                !panelRef.current?.contains(target) &&
                !featuresButtonRef.current?.contains(target)
            ) {
                setIsFeaturesOpen(false)
            }
        }
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsFeaturesOpen(false)
                featuresButtonRef.current?.focus()
            }
        }

        document.addEventListener('mousedown', handleMouseDown)
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('mousedown', handleMouseDown)
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [isFeaturesOpen])

    const isActive = (href: string) => pathname === href

    return (
        <>
            {/* Dim the page behind the mega dropdown (desktop only) */}
            <div
                aria-hidden="true"
                className={classNames(
                    'fixed inset-0 z-[45] hidden bg-black/30 transition-opacity duration-200 lg:block',
                    isFeaturesOpen
                        ? 'opacity-100'
                        : 'pointer-events-none opacity-0',
                )}
            />

            <div
                style={{ transition: 'all 0.2s ease-in-out' }}
                className={classNames(
                    'w-full fixed inset-x-0 top-0 bg-gray-50  z-[50]',
                )}
            >
                <div
                    className={classNames(
                        'flex flex-row self-start items-center justify-between py-3 px-4 w-full relative z-[60] transition duration-200',
                        isSticky || isFeaturesOpen
                            ? 'bg-gray-50 shadow-lg'
                            : 'bg-transparent',
                    )}
                >
                    <button
                        type="button"
                        aria-label="Open menu"
                        onClick={() => setIsOpen(true)}
                        className="flex lg:hidden items-center gap-4"
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
                            <button
                                type="button"
                                aria-expanded={isMobileFeaturesOpen}
                                onClick={() =>
                                    setIsMobileFeaturesOpen((open) => !open)
                                }
                                className="flex items-center justify-between rounded-xl px-3 py-2 font-semibold heading-text hover:bg-gray-100"
                            >
                                Features
                                <TbChevronDown
                                    size={16}
                                    className={classNames(
                                        'transition-transform duration-200',
                                        isMobileFeaturesOpen && 'rotate-180',
                                    )}
                                />
                            </button>
                            {isMobileFeaturesOpen && (
                                <div className="ml-3 flex flex-col border-l border-gray-200 pl-3">
                                    {featureItems.map(({ title, slug, Icon }) => (
                                        <Link
                                            key={slug}
                                            href={`$/${slug}`}
                                            onClick={closeDrawer}
                                            className="flex items-center gap-2 rounded-lg px-2 py-2 heading-text hover:bg-gray-100"
                                        >
                                            <Icon size={18} className="text-primary" />
                                            {title}
                                        </Link>
                                    ))}
                                    <Link
                                        href={featuresPageHref}
                                        onClick={closeDrawer}
                                        className="px-2 py-2 font-semibold text-primary"
                                    >
                                        See all features
                                    </Link>
                                </div>
                            )}
                            {navLinks.map(({ title, href }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={closeDrawer}
                                    className="rounded-xl px-3 py-2 font-semibold heading-text hover:bg-gray-100"
                                >
                                    {title}
                                </Link>
                            ))}
                        </div>
                    </Drawer>

                    <Link href="/invenka">
                        <Image
                            src="/img/logo/invenka logo-png.png"
                            width={120}
                            height={120}
                            alt="logo"
                        />
                    </Link>

                    {/* --------------------- Desktop nav items ---------------------- */}
                    <div className="lg:flex flex-row flex-1 absolute inset-0 hidden items-center justify-center text-sm font-medium pointer-events-none ">
                        <div className="pointer-events-auto flex items-center">
                            <button
                                ref={featuresButtonRef}
                                type="button"
                                aria-haspopup="true"
                                aria-expanded={isFeaturesOpen}
                                aria-controls="features-mega-menu"
                                onClick={() => setIsFeaturesOpen((open) => !open)}
                                className={classNames(
                                    navItemClass,
                                    isFeaturesOpen && 'bg-gray-100',
                                    focusRingClass,
                                )}
                            >
                                Features
                                <TbChevronDown
                                    size={16}
                                    aria-hidden="true"
                                    className={classNames(
                                        'transition-transform duration-200',
                                        isFeaturesOpen && 'rotate-180',
                                    )}
                                />
                            </button>

                            {navLinks.map(({ title, href }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className={classNames(
                                        navItemClass,
                                        isActive(href) && 'text-primary',
                                        focusRingClass,
                                    )}
                                >
                                    {title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* `relative z-10` keeps these buttons above the nav layer */}
                    <div className="relative z-10 flex items-center gap-2">
                        <Link
                            href="/sign-in"
                            className="hidden sm:block px-3 py-2 font-semibold heading-text"
                        >
                            Sign in
                        </Link>

                        <Button
                            variant="solid"
                            onClick={() => router.push('/sign-up')}
                        >
                            Start Free Trial
                        </Button>
                    </div>
                </div>

                {/*
                    Features mega dropdown (desktop).
                    It is a sibling of the nav row (not inside the overflow/perspective
                    layer) so `fixed` positions it against the viewport. It is almost
                    full width and up to ~full height, but slightly smaller than the screen.
                */}
                <div
                    ref={panelRef}
                    id="features-mega-menu"
                    role="region"
                    aria-label="Features"
                    className={classNames(
                         'fixed left-1/2 z-[55] hidden w-[calc(100%-2rem)] max-w-[1280px] -translate-x-1/2 overflow-y-auto rounded-b-2xl border border-gray-200 bg-gray-50 shadow-2xl transition-all duration-200 lg:block',
                        'min-h-[320px] max-h-[45vh]',   
                        // isSticky ? 'top-[5.5rem]' : 'top-[4.5rem]',
                        isFeaturesOpen
                            ? 'visible translate-y-0 opacity-100'
                            : 'invisible -translate-y-2 opacity-0',
                    )}
                >
                    <div className="w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-3">

                            {/* LEFT — Features */}
                            <div className="lg:col-span-2 p-6 lg:p-8">
                                <ul className="grid grid-cols-2 xl:grid-cols-3 gap-2">
                                    {featureItems.map(
                                        ({ title, slug, description, Icon }) => (
                                            <li key={slug}>
                                                <Link
                                                    href={`/${slug}`}
                                                    onClick={closeFeatures}
                                                    className={classNames(
                                                        'flex h-full flex-col gap-3 rounded-2xl p-4 transition duration-200 hover:bg-gray-100',
                                                        focusRingClass,
                                                    )}
                                                >
                                                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-subtle text-primary">
                                                        <Icon
                                                            size={22}
                                                            aria-hidden="true"
                                                        />
                                                    </span>

                                                    <span>
                                                        <span className="block text-base font-semibold heading-text">
                                                            {title}
                                                        </span>

                                                        <span className="mt-1 block text-sm text-muted line-clamp-2">
                                                            {description}
                                                        </span>
                                                    </span>
                                                </Link>
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </div>

                            {/* RIGHT — Image + Text */}
                            <div className="border-l border-gray-200 p-6 lg:p-8 flex flex-col justify-center">

                                <div className="overflow-hidden rounded-2xl mb-5">
                                    <img
                                        src="/img/invenka/nav/features-preview.png"
                                        alt="Invenka features"
                                        className="w-full h-40 object-cover"
                                    />
                                </div>

                                <h3 className="text-xl font-semibold heading-text">
                                    Manage your inventory with ease
                                </h3>

                                <p className="mt-2 text-sm text-muted">
                                    Track stock, manage items, get alerts and keep your
                                    entire inventory organized from one place.
                                </p>

                                <Link
                                    href={featuresPageHref}
                                    onClick={closeFeatures}
                                    className={classNames(
                                        'mt-5 flex items-center gap-1 font-semibold text-primary',
                                        focusRingClass,
                                    )}
                                >
                                    See All Features
                                    <TbArrowRight size={16} aria-hidden="true" />
                                </Link>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation
