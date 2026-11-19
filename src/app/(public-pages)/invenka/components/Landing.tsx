'use client'

import { useEffect } from 'react'
import NavigationBar from './NavigationBar'
import HeroContent from './HeroContent'
import TechStack from './TechStack'
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
                <div
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='50' height='50' fill='none' stroke='${mode === MODE_LIGHT ? 'rgb(0 0 0 / 0.04)' : 'rgb(255 255 255 / 0.04)'}'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
                    }}
                    className="absolute inset-0 [mask-image:linear-gradient(to_bottom,white_5%,transparent_70%)] pointer-events-none select-none"
                ></div>
                <HeroContent mode={mode} />
            </div>
            <TechStack />
            <OtherFeatures />
            <LandingFooter mode={mode} />
        </main>
    )
}

export default Landing
