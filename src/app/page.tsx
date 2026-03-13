import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
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
        <Expertise />
        <GourmateProduct />
        <CompanyOverview />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
