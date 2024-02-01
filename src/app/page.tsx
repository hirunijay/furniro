import HeroSection from "@/components/HeroSection"
import RangeSection from "@/components/RangeSection"
import HowWorksSection from "@/components/HowWorksSection"
import InspirationSection from "@/components/InspirationSection"
import BannerSection from "@/components/BannerSection"

export default function Home() {
  return (
    <main className="overflow-hidden">
     <HeroSection /> 
     <InspirationSection />
     <BannerSection />
     <RangeSection />
     <HowWorksSection />
    </main>
  )
}
