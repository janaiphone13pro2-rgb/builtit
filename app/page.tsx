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
import { BookingContact } from "@/components/home/BookingContact";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <TrustBar />
        <FeaturedWork />
        <Services />
        <OneTimePaymentUSP />
        <ERPCRMSpotlight />
        <ProcessTimeline />
        <ImpactNumbers />
        <BookingContact />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
