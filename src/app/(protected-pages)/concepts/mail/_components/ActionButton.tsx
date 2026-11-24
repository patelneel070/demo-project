'use client'

import type { ButtonHTMLAttributes } from 'react'

const ActionButton = ({
    children,
    ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            className="outline-hidden rounded-full p-2 text-xl bg-white hover:bg-gray-200 hover:text-gray-800 "
            {...rest}
        >
            {children}
        </button>
    )
}

export default ActionButton
