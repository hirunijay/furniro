import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import RangeSection from "@/components/RangeSection"
import ProductSection from "@/components/ProductSection"
import InspirationSection from "@/components/InspirationSection"
import CarouselSection from "@/components/CarouselSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="flex overflow-hidden">
     <Navigation />
     <HeroSection />
     <RangeSection />
     <ProductSection />
     <InspirationSection />
     <CarouselSection />
     <Footer />
    </main>
  )
}