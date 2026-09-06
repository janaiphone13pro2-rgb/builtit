import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Services } from "@/components/home/Services";
import { OneTimePaymentUSP } from "@/components/home/OneTimePaymentUSP";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { ERPCRMSpotlight } from "@/components/home/ERPCRMSpotlight";
import { ImpactNumbers } from "@/components/home/ImpactNumbers";
import { Testimonials } from "@/components/home/Testimonials";
import { BookingContact } from "@/components/home/BookingContact";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <Services />
        <OneTimePaymentUSP />
        <FeaturedWork />
        <ProcessTimeline />
        <ERPCRMSpotlight />
        <ImpactNumbers />
        <Testimonials />
        <BookingContact />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
