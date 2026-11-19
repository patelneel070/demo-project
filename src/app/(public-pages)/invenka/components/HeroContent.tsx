import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'
import TextGenerateEffect from '../../landing/components/TextGenerateEffect'
import { MODE_DARK, MODE_LIGHT } from '@/constants/theme.constant'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import type { Mode } from '@/@types/theme'
import { hero, featuresPageHref } from './data/landingData'

const HeroContent = ({ mode }: { mode: Mode }) => {
    const router = useRouter()

    const handleSeeFeatures = () => {
        router.push(featuresPageHref)
    }

    return (
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-between">
            <div className="flex flex-col pt-28 md:pt-36 relative overflow-hidden">
                <div>
                    <TextGenerateEffect
                        wordClassName="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto text-center mt-6 relative z-10"
                        words={hero.title}
                        wordsCallbackClass={({ word }) =>
                            hero.highlight.includes(word) ? 'text-primary' : ''
                        }
                    />
                    <motion.p
                        initial={{ opacity: 0, translateY: 40 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                        className="text-center mt-6 text-base md:text-xl text-muted dark:text-muted-dark max-w-3xl mx-auto relative z-10 font-normal"
                    >
                        {hero.subtitle}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, translateY: 40 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-10 relative z-10"
                    >
                        <Button variant="solid" onClick={() => router.push('/sign-up')}>
                            {hero.primaryCta}
                        </Button>
                        <Button onClick={handleSeeFeatures}>{hero.secondaryCta}</Button>
                    </motion.div>
                </div>
                <div className="p-2 lg:p-4 border border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-700 rounded-2xl lg:rounded-[32px] mt-16 relative">
                    <div className="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent via-white to-white dark:via-black/50 dark:to-black scale-[1.1] pointer-events-none" />
                    <div className="bg-white dark:bg-black dark:border-gray-700 border border-gray-200 rounded-[24px]">
                        {mode === MODE_LIGHT && (
                            <Image className="rounded-2xl lg:rounded-[24px]" src={hero.imageLight} width={1800} height={1080} alt={hero.imageAlt} />
                        )}
                        {mode === MODE_DARK && (
                            <Image className="rounded-2xl lg:rounded-[24px]" src={hero.imageDark} width={1800} height={1080} alt={hero.imageAlt} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroContent
