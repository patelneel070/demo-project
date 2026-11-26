import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'
import TextGenerateEffect from './TextGenerateEffect'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { hero } from '../data/landingData'

const HeroContent = () => {
    const router = useRouter()

    const handlePlans = () => {
        router.push('/plans')
    }

    return (
        <section className="w-full bg-gray-100">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid min-h-[calc(100vh-80px)] items-center gap-8 py-14 sm:py-16 lg:grid-cols-2 lg:gap-10 lg:py-16 xl:gap-14">

                    {/* ===================== LEFT CONTENT ===================== */}

                    <div className="flex flex-col items-start text-left">

                        <TextGenerateEffect
                            wordClassName="text-5xl font-bold leading-[0.98] tracking-[-0.03em] text-gray-900 sm:text-6xl lg:text-6xl xl:text-7xl"
                            words={hero.title}
                            wordsCallbackClass={({ word }) =>
                                hero.highlight.includes(word)
                                    ? 'text-primary'
                                    : ''
                            }
                        />

                        <motion.p
                            initial={{
                                opacity: 0,
                                translateY: 30,
                            }}
                            animate={{
                                opacity: 1,
                                translateY: 0,
                            }}
                            transition={{
                                duration: 0.4,
                                delay: 0.5,
                            }}
                            className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl sm:leading-9"
                        >
                            {hero.subtitle}
                        </motion.p>

                        {/* ===================== CTA BUTTONS ===================== */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                translateY: 30,
                            }}
                            animate={{
                                opacity: 1,
                                translateY: 0,
                            }}
                            transition={{
                                duration: 0.4,
                                delay: 0.6,
                            }}
                            className="mt-9 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
                        >
                            <Button
                                variant="solid"
                                onClick={() => router.push('/#')}
                            >
                                {hero.primaryCta}
                            </Button>

                            <Button onClick={handlePlans}>
                                {hero.secondaryCta}
                            </Button>
                        </motion.div>

                        {/* ===================== BENEFITS ===================== */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                translateY: 20,
                            }}
                            animate={{
                                opacity: 1,
                                translateY: 0,
                            }}
                            transition={{
                                duration: 0.4,
                                delay: 0.8,
                            }}
                            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500"
                        >
                            {hero.benefits.map((benefit) => (
                                <span
                                    key={benefit.title}
                                    className="flex items-center gap-2"
                                >
                                    <span className="h-2 w-2 rounded-full bg-primary" />
                                    {benefit.title}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* ===================== RIGHT VISUAL ===================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 50,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.3,
                        }}
                        className="relative w-full"
                    >
                        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
                            <Image
                                src={hero.imageLight}
                                width={1800}
                                height={1080}
                                alt={hero.imageAlt}
                                className="h-auto w-full object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>

                {/* ===================== BOTTOM LINE ===================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        translateY: 20,
                    }}
                    animate={{
                        opacity: 1,
                        translateY: 0,
                    }}
                    transition={{
                        duration: 0.4,
                        delay: 1,
                    }}
                    className="border-t border-gray-200 py-8 sm:py-10"
                >
                    <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 sm:text-sm">
                        Simplify inventory. Improve visibility. Stay in control.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroContent