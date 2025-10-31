import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrackingSection from '@/components/TrackingSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrackingSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <Footer />
    </main>
  );
}

