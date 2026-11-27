import { auth } from '@/auth'
import AuthProvider from '@/components/auth/AuthProvider'
import ThemeProvider from '@/components/template/Theme/ThemeProvider'
import pageMetaConfig from '@/configs/page-meta.config'
import LocaleProvider from '@/components/template/LocaleProvider'
import NavigationProvider from '@/components/template/Navigation/NavigationProvider'
import { getNavigation } from '@/server/actions/navigation/getNavigation'
import { getTheme } from '@/server/actions/theme'
import { getLocale, getMessages } from 'next-intl/server'
import { Inter, Poppins, JetBrains_Mono } from 'next/font/google'
import type { ReactNode } from 'react'
import '../assets/styles/app.css'
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400','500', '600', '700'],
    variable: '--font-poppins',
    display: 'swap',
})

const mono = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-mono',
    display: 'swap',
})

export const metadata = {
    ...pageMetaConfig,
    other: { 'color-scheme': 'light' },
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    const session = await auth()

    const locale = await getLocale()

    const messages = await getMessages()

    const navigationTree = await getNavigation()

    const theme = await getTheme()

    // Light theme only: ignore any saved "dark" mode (old cookies, defaults)
    const lightTheme = { ...theme, mode: 'light' as const }

    return (
        <AuthProvider session={session}>
            <html
                className={`light ${inter.variable} ${poppins.variable} ${mono.variable}`}
                style={{ colorScheme: 'light' }}
                lang={locale}
                dir={lightTheme.direction}
                suppressHydrationWarning
            >
                <body suppressHydrationWarning>
                    <LocaleProvider locale={locale} messages={messages}>
                        <ThemeProvider locale={locale} theme={lightTheme}>
                            <NavigationProvider navigationTree={navigationTree}>
                                {children}
                            </NavigationProvider>
                        </ThemeProvider>
                    </LocaleProvider>
                </body>
            </html>
        </AuthProvider>
    )
}