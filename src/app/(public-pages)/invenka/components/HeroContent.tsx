import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'
import TextGenerateEffect from './TextGenerateEffect'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { hero} from './data/landingData'

const HeroContent = () => {
    const router = useRouter()

    const handlePlans = () => {
        router.push('/plans')
    }

    return (
        <div className="w-full bg-gray-100 mx-auto px-4 pb-10 flex flex-col items-center justify-between">
            <div className="w-full max-w-7xl mx-auto flex flex-col pt-28 md:pt-36 relative overflow-hidden">
                <div >
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
                        className="text-center mt-6 text-base md:text-xl text-muted max-w-3xl mx-auto relative z-10 font-normal"
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
                        <Button onClick={handlePlans}>{hero.secondaryCta}</Button>
                    </motion.div>
                </div>
                <div className="bg-gray-300 rounded-2xl mt-16 relative">
                    <div className="absolute inset-x-0 bottom-0 h-40 w-full" />
                    <div className="bg-gray-50">
                        <Image src={hero.imageLight} width={1800} height={1080} alt={hero.imageAlt} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroContent
