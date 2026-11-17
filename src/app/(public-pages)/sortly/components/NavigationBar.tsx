'use client'
import { useState } from 'react'
import NavList from '../../landing/components/NavList'
import Drawer from '@/components/ui/Drawer'
import classNames from '@/utils/classNames'
import useScrollTop from '@/utils/hooks/useScrollTop'
import Image from 'next/image'
import { TbMenu2, TbMoon, TbSun } from 'react-icons/tb'
import Link from 'next/link'
import type { Mode } from '@/@types/theme'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'

type NavigationProps = {
    toggleMode: () => void
    mode: Mode
}

const navMenu = [
    { title: 'Features', value: 'features', to: 'features' },
    { title: 'Integrations', value: 'integrations', to: 'integrations' },
    { title: 'Mobile App', value: 'mobile', to: 'mobile' },
    { title: 'Contact', value: 'contact', to: 'footer' },
]

const Navigation = ({ toggleMode, mode }: NavigationProps) => {
    const { isSticky } = useScrollTop()
    const router = useRouter()

    const [isOpen, setIsOpen] = useState(false)

    const openDrawer = () => {
        setIsOpen(true)
    }

    const onDrawerClose = () => {
        setIsOpen(false)
    }

    return (
        <div
            style={{ transition: 'all 0.2s ease-in-out' }}
            className={classNames(
                'w-full fixed inset-x-0 z-[50]',
                isSticky ? 'top-4' : 'top-0',
            )}
        >
            <div
                className={classNames(
                    'flex flex-row self-start items-center justify-between py-3 max-w-7xl mx-auto px-4 rounded-xl relative z-[60] w-full transition duration-200',
                    isSticky
                        ? 'bg-white dark:bg-gray-800 shadow-lg'
                        : 'bg-transparent dark:bg-transparent',
                )}
            >
                <button
                    type="button"
                    aria-label="Open menu"
                    onClick={openDrawer}
                    className="flex lg:hidden items-center gap-4"
                >
                    <TbMenu2 size={24} />
                </button>
                <Drawer
                    title="Navigation"
                    isOpen={isOpen}
                    onClose={onDrawerClose}
                    onRequestClose={onDrawerClose}
                    width={250}
                    placement="left"
                >
                    <div className="flex flex-col gap-4">
                        <NavList onTabClick={onDrawerClose} tabs={navMenu} />
                    </div>
                </Drawer>
                <Link href="/">
                    {mode === 'light' && (
                        <Image
                            src="/img/logo/logo-light-full.png"
                            width={120}
                            height={40}
                            alt="logo"
                        />
                    )}
                    {mode === 'dark' && (
                        <Image
                            src="/img/logo/logo-dark-full.png"
                            width={120}
                            height={40}
                            alt="logo"
                        />
                    )}
                </Link>

                {/*
                    FIX 1: this layer is `absolute inset-0`, so on laptop screens
                    (lg and up) it covers the WHOLE navbar, including the buttons on
                    the right. `pointer-events-none` makes the empty layer click-through;
                    the inner wrapper switches pointer events back on for the tabs only.
                */}
                <div className="lg:flex flex-row flex-1 absolute inset-0 hidden items-center justify-center text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200 [perspective:1000px] overflow-auto sm:overflow-visible no-visible-scrollbar pointer-events-none">
                    <div className="pointer-events-auto flex items-center">
                        <NavList tabs={navMenu} />
                    </div>
                </div>

                {/*
                    FIX 2: `relative z-10` puts the buttons in a higher stacking layer
                    than the overlay above, so they stay clickable even if the overlay
                    is ever changed.
                */}
                <div className="relative z-10 flex items-center gap-2">
                    <button
                        type="button"
                        onClick={toggleMode}
                        className="flex items-center justify-center rounded-xl p-2 text-neutral-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                        aria-label="Toggle theme"
                    >
                        {mode === 'light' ? (
                            <TbMoon size={20} />
                        ) : (
                            <TbSun size={20} />
                        )}
                    </button>
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
        </div>
    )
}

export default Navigation