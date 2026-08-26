import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Digital Marketing & App Development Services | Digital Raiz",
  description: "Explore our digital marketing, SEO, custom web design, and mobile app development services in Hyderabad.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow pt-32 pb-24 bg-white bg-grid-pattern relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-50 border border-primary/20 text-xs font-semibold text-primary mb-6">
            Capabilities
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
            Our Digital & Tech Services
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-16">
            We provide full-spectrum digital marketing, search engine optimization, web application creation, and cross-platform mobile application development to scale your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="glass-panel rounded-3xl p-8 border border-zinc-200/60 shadow-sm">
              <h2 className="text-xl font-bold text-zinc-900 mb-2">Digital Marketing & SEO</h2>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                Develop visibility across search engines, drive high-intent visitors, and optimize conversion funnels.
              </p>
              <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider block">Service page template</span>
            </div>

            <div className="glass-panel rounded-3xl p-8 border border-zinc-200/60 shadow-sm">
              <h2 className="text-xl font-bold text-zinc-900 mb-2">Web & App Development</h2>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                Custom website redesign, business platforms, responsive interfaces, and cross-platform native applications.
              </p>
              <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider block">Service page template</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
