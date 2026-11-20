'use client'
// Handles the theme and stacks sections in order .
import { useEffect } from 'react'
import NavigationBar from './NavigationBar'
import HeroContent from './HeroContent'
import OtherFeatures from './OtherFeatures'
import LandingFooter from './LandingFooter'
import useTheme from '@/utils/hooks/useTheme'
import applyTheme from '@/utils/applyThemeSchema'
import presetThemeSchemaConfig from '@/configs/preset-theme-schema.config'
import { MODE_DARK, MODE_LIGHT } from '@/constants/theme.constant'

const Landing = () => {
    const mode = useTheme((state) => state.mode)
    const setMode = useTheme((state) => state.setMode)
    const schema = useTheme((state) => state.themeSchema)

    useEffect(() => {
    applyTheme('red', mode, presetThemeSchemaConfig)

    return () => {
        applyTheme(schema || 'default', mode, presetThemeSchemaConfig)
    }
    }, [mode])

    return (
        <main className="px-4 lg:px-0 text-base bg-white dark:bg-gray-900">
            <NavigationBar
                mode={mode}
                toggleMode={() => setMode(mode === MODE_LIGHT ? MODE_DARK : MODE_LIGHT)}
            />
            <div className="relative">
                <HeroContent mode={mode} />
            </div>
            <OtherFeatures />
            <LandingFooter mode={mode} />
        </main>
    )
}

export default Landing
