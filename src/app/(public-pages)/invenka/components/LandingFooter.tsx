import Container from './LandingContainer'
import Button from '@/components/ui/Button'
import AuroraBackground from './AuroraBackground'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { cta, footer } from '../data/landingData'

const LandingFooter = () => {
    const year = new Date().getFullYear()
    const router = useRouter()

    return (
        <div id="footer" className="relative z-20 w-full">
            {/* ===================== CTA ===================== */}

            <div className="w-full py-10 md:py-20">
                <AuroraBackground
                    className="w-full"
                    auroraClassName="w-full"
                >
                    <Container>
                        <motion.div
                            initial={{ opacity: 0.0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.3,
                                ease: 'easeInOut',
                            }}
                            className="relative flex flex-col items-center justify-center gap-4 px-8 py-20 text-center"
                        >
                            <h2 className="text-3xl md:text-5xl">
                                {cta.title}
                            </h2>

                            <p className="mx-auto mt-4 max-w-[450px]">
                                {cta.text}
                            </p>

                            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                                <Button
                                    variant="solid"
                                    onClick={() => router.push('/#')}
                                >
                                    Start Free Trial
                                </Button>

                                <Button
                                    onClick={() => router.push('/#')}
                                >
                                    Sign in
                                </Button>
                            </div>
                        </motion.div>
                    </Container>
                </AuroraBackground>
            </div>

            {/* ===================== FOOTER ===================== */}

            <footer className="w-full bg-gray-100">
                {/* Main footer links */}
                <Container>
                    <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 sm:gap-x-8 md:grid-cols-4 md:py-16 lg:grid-cols-5 lg:gap-12">
                        
                        {/* Brand */}
                        <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
                            <Link
                                href="/"
                                className="inline-flex items-center"
                            >
                                <img
                                    src="/img/logo/invenka logo-png.png"
                                    width={140}
                                    height={45}
                                    alt="Invenka"
                                    className="h-auto w-[130px] sm:w-[140px]"
                                />
                            </Link>

                            <p className="mt-5 max-w-xs text-sm leading-6 text-muted">
                                {footer.tagline}
                            </p>
                        </div>

                        {/* Footer columns */}
                        {footer.columns.map((column) => (
                            <div key={column.title}>
                                <h6 className="mb-5 text-base font-bold heading-text">
                                    {column.title}
                                </h6>

                                <ul className="flex flex-col gap-4">
                                    {column.links.map((link) => (
                                        <li key={link}>
                                            <Link
                                                href="#"
                                                className="text-sm text-muted transition-colors duration-150 hover:text-primary"
                                            >
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Extra column */}
                        <div>
                            <h6 className="mb-5 text-base font-bold heading-text">
                                Get Started
                            </h6>

                            <ul className="flex flex-col gap-4">
                                <li>
                                    <Link
                                        href="/pricing"
                                        className="text-sm text-muted transition-colors duration-150 hover:text-primary"
                                    >
                                        Pricing
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/sign-up"
                                        className="text-sm text-muted transition-colors duration-150 hover:text-primary"
                                    >
                                        Start Free Trial
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="#"
                                        className="text-sm text-muted transition-colors duration-150 hover:text-primary"
                                    >
                                        Help Center
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="#"
                                        className="text-sm text-muted transition-colors duration-150 hover:text-primary"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>

                {/* Bottom footer */}
                <div className="border-t border-gray-200 bg-gray-50">
                    <Container>
                        <div className="flex flex-col gap-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
                            <p>
                                © {year} {footer.company}. All Rights Reserved.
                            </p>

                            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                                <Link
                                    href="#"
                                    className="transition-colors hover:text-primary"
                                >
                                    Privacy Policy
                                </Link>

                                <span className="text-gray-300">—</span>

                                <Link
                                    href="#"
                                    className="transition-colors hover:text-primary"
                                >
                                    Terms of Service
                                </Link>

                                <span className="text-gray-300">—</span>

                                <Link
                                    href="#"
                                    className="transition-colors hover:text-primary"
                                >
                                    Cookie Policy
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>
            </footer>
        </div>
    )
}

export default LandingFooter