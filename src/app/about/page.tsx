import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, Medal, Bookmark, Briefcase, Users, UserCheck, Box, Compass } from "lucide-react";

export const metadata = {
  title: "About DigitalRaiz – Your Trusted IT & Software Partner",
  description: "Learn how DigitalRaiz delivers cutting-edge digital solutions. We’re your trusted tech partner for innovation, growth & long-term success.",
};

export default function AboutPage() {
  const stats = [
    { value: "121", label: "Completed Projects", icon: <Briefcase className="w-5 h-5 text-pink-500" /> },
    { value: "98", label: "Happy Clients", icon: <UserCheck className="w-5 h-5 text-indigo-500" /> },
    { value: "27", label: "Employees", icon: <Users className="w-5 h-5 text-pink-500" /> },
    { value: "16", label: "Our Products", icon: <Box className="w-5 h-5 text-indigo-500" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow pt-[80px]">
        {/* Asymmetrical Premium Hero Banner */}
        <div className="relative pt-24 pb-16 bg-gradient-to-r from-primary-mid via-primary to-primary-dark text-white overflow-hidden text-center select-none">
          {/* Decorative background grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-pink-500/10 blur-[120px] pointer-events-none -z-10" />

          <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none">About Us</h1>
            <p className="text-pink-100/70 text-xs sm:text-sm font-medium uppercase tracking-[0.25em]">Your Trusted IT & Software Partner</p>
          </div>
        </div>

        {/* Welcome Section */}
        <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
          {/* Background decorative glows */}
          <div className="absolute top-1/4 left-10 w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none -z-10" />
          <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] rounded-full bg-pink-500/5 blur-[100px] pointer-events-none -z-10" />

          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Brand & Intro */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[10px] font-bold text-pink-650 uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    Company Introduction
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-800 leading-none">
                    Welcome To <br />
                    <span className="text-gradient-primary">DigitalRaiz</span>
                  </h2>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify font-normal">
                  <strong>DigitalRaiz</strong> is the main supplier in IT Development, Software Development, creative Mobile applications Development, web index showcasing and advancement administrations. Our essential subject matters incorporate site improvement (SEO), on page streamlining, search-accommodating web advancement, informal communication and third party referencing. We separate ourselves in our steady capacity to stay up with the changing requests of the business. DigitalRaiz have gone from little new businesses to huge organizations making significant degrees of progress with every customer.
                </p>
              </div>

              {/* Right Column: Vision & Mission Cards */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Vision Box */}
                <div className="bg-white border border-slate-100/80 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/5 rounded-full blur-xl pointer-events-none" />
                  
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100/50 flex items-center justify-center text-pink-500 shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <Medal className="w-5 h-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-black uppercase tracking-tight text-slate-800">Our Vision</h3>
                      <p className="text-slate-550 text-xs sm:text-sm leading-relaxed text-justify font-normal">
                        An individual character and arise as a regarded programming arrangements supplier by building and keeping up durable relationships, conveying quality programming and by giving inventive business arrangements.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mission Box */}
                <div className="bg-white border border-slate-100/80 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-xl pointer-events-none" />

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100/50 flex items-center justify-center text-indigo-500 shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <Bookmark className="w-5 h-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-black uppercase tracking-tight text-slate-800">Mission</h3>
                      <p className="text-slate-550 text-xs sm:text-sm leading-relaxed text-justify font-normal">
                        To give inventive, high calibre and top tier IT Consulting &amp; IT Solutions &amp; Services to our clients, empowering them to accomplish their business objectives. Partners and accomplices while co-operating. also, to keep up and grow our convention of &quot;Greatness through Quality&quot;.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* FID / Stats Card Row */}
            <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-md hover:scale-[1.02] transition-all duration-300">
                  <div className="w-9 h-9 mx-auto rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-800 mb-1">{stat.value}</div>
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
