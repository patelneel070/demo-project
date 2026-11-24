'use client'
import { useEffect, useState } from 'react'
import ThemeContext from './ThemeContext'
import ConfigProvider from '@/components/ui/ConfigProvider'
import appConfig from '@/configs/app.config'
import { MODE_LIGHT } from '@/constants/theme.constant'
import applyTheme from '@/utils/applyThemeSchema'
import { setTheme as setThemeCookies } from '@/server/actions/theme'
import presetThemeSchemaConfig from '@/configs/preset-theme-schema.config'
import type { Theme } from '@/@types/theme'
import type { CommonProps } from '@/@types/common'

interface ThemeProviderProps extends CommonProps {
    theme: Theme
    locale?: string
}

// Light theme only: always light mode, always the Sea Glass ("default") schema.
// This also ignores any old cookie that still says "dark" or "red".
const SCHEMA = 'default'

const ThemeProvider = ({ children, theme, locale }: ThemeProviderProps) => {
    const [themeState, setThemeState] = useState<Theme>({
        ...theme,
        mode: MODE_LIGHT,
    })

    useEffect(() => {
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
    }, [])

    const handleSetTheme = async (payload: (param: Theme) => Theme | Theme) => {
        const setTheme = async (theme: Theme) => {
            const lightTheme: Theme = { ...theme, mode: MODE_LIGHT as Theme['mode'] }
            setThemeState(lightTheme)
            await setThemeCookies(JSON.stringify({ state: lightTheme }))
        }

        if (typeof payload === 'function') {
            const nextTheme = payload(themeState)
            await setTheme(nextTheme)
        } else {
            await setTheme(payload)
        }
    }

    return (
        <ThemeContext.Provider
            value={{
                theme: themeState,
                setTheme: handleSetTheme,
            }}
        >
            <ConfigProvider
                value={{
                    ...themeState,
                    locale: locale || appConfig.locale,
                }}
            >
                {children}
            </ConfigProvider>
            <script
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: `(${applyTheme.toString()})(${JSON.stringify([
                        SCHEMA,
                        MODE_LIGHT,
                        presetThemeSchemaConfig,
                    ]).slice(1, -1)})`,
                }}
            />
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
