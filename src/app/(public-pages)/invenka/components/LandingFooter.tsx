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
                        className="w-full "
                        auroraClassName="w-full"
                    ><Container>
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
                                    onClick={() =>
                                        router.push('/#')
                                    }
                                >
                                    Start Free Trial
                                </Button>

                                <Button
                                    onClick={() =>
                                        router.push('/#')
                                    }
                                >
                                    Sign in
                                </Button>
                            </div>
                        </motion.div>
                        </Container>
                    </AuroraBackground>
            </div>

            {/* ===================== FOOTER ===================== */}

            <div className="w-full border-t border-gray-200 py-12 bg-gray-100">
                <Container>
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        <div className="col-span-2 md:col-span-1">
                            <Link href="/">
                                <img
                                    src="/img/logo/invenka logo-png.png"
                                    width={120}
                                    height={40}
                                    alt="logo"
                                />
                            </Link>

                            <p className="mt-4 max-w-xs">
                                {footer.tagline}
                            </p>
                        </div>

                        {footer.columns.map((column) => (
                            <div key={column.title}>
                                <h6 className="mb-4 font-bold heading-text">
                                    {column.title}
                                </h6>

                                <ul className="flex flex-col gap-2">
                                    {column.links.map((link) => (
                                        <li key={link}>
                                            <Link
                                                href="#"
                                                className="hover:text-primary"
                                            >
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <p className="mt-10 text-center md:text-left">
                        Copyright © {year} {footer.company}. All rights
                        reserved.
                    </p>
                </Container>
            </div>
        </div>
    )
}

export default LandingFooter