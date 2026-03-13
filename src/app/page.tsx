import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import GourmateProduct from "@/components/GourmateProduct";
import CompanyOverview from "@/components/CompanyOverview";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <GourmateProduct />
        <CompanyOverview />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
