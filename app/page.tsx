import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ProductsSection from '@/components/sections/products-section';
import ContactSection from '@/components/sections/contact-section';
import FeaturesSection from '@/components/sections/features-section';
import TestimonialsSection from '@/components/sections/testimonials-section';

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      <HeroSection />
      <AboutSection />
      {/* <FeaturesSection /> */}
      <ProductsSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
    </div>
  );
}