import HeroSection from "@/components/HeroSection"
import RangeSection from "@/components/RangeSection"
import ProductSection from "@/components/ProductSection"
import InspirationSection from "@/components/InspirationSection"
import BannerSection from "@/components/BannerSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="overflow-hidden">
     <HeroSection />
     {/* <RangeSection /> */}
     {/* <ProductSection /> */}
     <InspirationSection />
     <BannerSection />
     {/* <Footer /> */}
    </main>
  )
}
