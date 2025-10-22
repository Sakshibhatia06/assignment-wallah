import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../app/globals.css";
import Testimonial from "@/components/Testimonial";
import WhatsAppButton from "@/components/Floating-Whatsapp/whatsAppButton";
import CTA from "@/components/CTA";

interface SubjectLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function SubjectLayout({
  title,
  description,
  children,
}: SubjectLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <Header/>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "80vh",
          backgroundColor: "#fff",
          paddingTop: "90px", // 👈 Pushes content below navbar
        }}
      >
        {/* Page Content */}
        <div
          style={{
            width: "100%",
            maxWidth: "100vw",
          }}
        >
          {children}
        </div>
      </main>
      <CTA/>
      <Testimonial/>
    <WhatsAppButton/>

      <Footer />
    </>
  );
}
