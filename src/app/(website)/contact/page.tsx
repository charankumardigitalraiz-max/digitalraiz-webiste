import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactPageContent from "@/components/contact/ContactPageContent";

export const metadata = {
  title: "Contact Our Agency | Digital Raiz",
  description: "Get in touch with our experts in Hyderabad for a free consultation regarding SEO, digital marketing, or app development.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow bg-white">
        <ContactPageContent />
      </main>
      <Footer />
    </div>
  );
}
