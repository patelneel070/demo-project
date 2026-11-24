'use client'
// Stacks the landing page sections in order.
import NavigationBar from './NavigationBar'
import HeroContent from './HeroContent'
import OtherFeatures from './OtherFeatures'
import LandingFooter from './LandingFooter'

const Landing = () => {
    return (
        <main className="px-4 lg:px-0 text-base bg-gray-50">
            <NavigationBar />
            <div className="relative">
                <HeroContent />
            </div>
            <OtherFeatures />
            <LandingFooter />
        </main>
    )
}

export default Landing
