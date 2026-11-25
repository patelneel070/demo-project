'use client'

import Link from 'next/link'
import classNames from '@/utils/classNames'
import { TbArrowRight } from 'react-icons/tb'
import type { IconType } from 'react-icons'

type MegaDropdownItem = {
    title: string
    slug: string
    description: string
    Icon: IconType
}

type MegaDropdownProps = {
    id: string
    ariaLabel: string
    isOpen: boolean
    items: MegaDropdownItem[]
    image: string
    imageAlt: string
    heading: string
    description: string
    seeAllText: string
    seeAllHref: string
    onClose: () => void
    panelRef: React.RefObject<HTMLDivElement | null>
}

const MegaDropdown = ({
    id,
    ariaLabel,
    isOpen,
    items,
    image,
    imageAlt,
    heading,
    description,
    seeAllText,
    seeAllHref,
    onClose,
    panelRef,
}: MegaDropdownProps) => {
    return (
        <div
            ref={panelRef}
            id={id}
            role="region"
            aria-label={ariaLabel}
            className={classNames(
                'fixed left-[136px] right-[170px] z-[55] hidden overflow-hidden rounded-b-2xl border border-gray-200 bg-gray-50 shadow-2xl transition-all duration-200 lg:block',
                'max-h-[calc(100vh-4.5rem)]',
                isOpen
                    ? 'visible translate-y-0 opacity-100'
                    : 'invisible -translate-y-2 opacity-0',
            )}
        >
            <div className="grid grid-cols-1 lg:grid-cols-3">

                {/* LEFT */}
                <div className="min-w-0 p-6 lg:col-span-2 lg:p-8">
                    <ul className="grid grid-cols-2 gap-2 xl:grid-cols-3">
                        {items.map(
                            ({
                                title,
                                slug,
                                description,
                                Icon,
                            }) => (
                                <li key={slug}>
                                    <Link
                                        href={`/${slug}`}
                                        onClick={onClose}
                                        className="flex h-full flex-col gap-3 rounded-2xl p-4 transition duration-200 hover:bg-gray-100"
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

                {/* RIGHT */}
                <div className="min-w-0 flex flex-col justify-center border-l border-gray-200 p-6 lg:p-8">
                    <div className="mb-5 flex w-full items-center justify-center overflow-hidden rounded-2xl">
                        <img
                            src={image}
                            alt={imageAlt}
                            className="block h-auto max-h-40 w-full max-w-full object-contain"
                        />
                    </div>

                    <h3 className="text-xl font-semibold heading-text">
                        {heading}
                    </h3>

                    <p className="mt-2 text-sm text-muted">
                        {description}
                    </p>

                    <Link
                        href={seeAllHref}
                        onClick={onClose}
                        className="mt-5 flex items-center gap-1 font-semibold text-primary"
                    >
                        {seeAllText}
                        <TbArrowRight
                            size={16}
                            aria-hidden="true"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MegaDropdown