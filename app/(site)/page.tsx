import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import WhatsAppButton from "@/components/Floating-Whatsapp/whatsAppButton";

export const metadata: Metadata = {
  title: "online assignment help | help with assignment - Assignmentswallah",
  description: "Get expert assignment help services from a reliable assignment helper. Fast, plagiarism-free solutions to boost your grades and academic performance."
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <About />
      <FeaturesTab />
      <Testimonial />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Contact />
      <Blog />
      <WhatsAppButton/>
    </main>
  );
}
