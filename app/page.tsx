import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Services } from "@/components/home/Services";
import { OneTimePaymentUSP } from "@/components/home/OneTimePaymentUSP";
import { PortfolioBento } from "@/components/home/PortfolioBento";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { ERPCRMSpotlight } from "@/components/home/ERPCRMSpotlight";
import { ImpactNumbers } from "@/components/home/ImpactNumbers";
import { Testimonials } from "@/components/home/Testimonials";
import { BookingContact } from "@/components/home/BookingContact";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <OneTimePaymentUSP />
        <PortfolioBento />
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
