"use client";

import { Workflow, Zap, Users, Sliders, Settings } from "lucide-react";

export default function Features() {
  const highlights = [
    {
      title: "Customized Digital Marketing Strategies",
      description: "Tailored around your target market, competitors, and growth objectives.",
      icon: <Sliders className="w-6 h-6 text-primary" />,
    },
    {
      title: "SEO-Friendly & Professional Web Dev",
      description: "Websites that look stunning, rank on Google, and convert visitors.",
      icon: <Workflow className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Scalable Mobile & Custom Web Apps",
      description: "Future-proof application design optimized for performance and users.",
      icon: <Zap className="w-6 h-6 text-primary-hover" />,
    },
    {
      title: "Clear Communication & Project Planning",
      description: "Transparent updates, responsive support, and structured phases.",
      icon: <Users className="w-6 h-6 text-indigo-500" />,
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-white border-y border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Integrated Solutions */}
          <div>
            <h2 className="text-base font-semibold uppercase tracking-wider text-primary-hover">
              Coordinated Growth
            </h2>
            <h3 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-6">
              Integrated Digital Marketing & Development Solutions
            </h3>
            <p className="text-zinc-600 text-base leading-relaxed mb-6">
              Marketing and technology must work together to create a stronger digital ecosystem. SEO improves organic visibility, social media builds brand engagement, performance marketing drives targeted traffic, while professional websites and mobile applications convert visitors and support interactive customer experiences.
            </p>
            <p className="text-zinc-600 text-base leading-relaxed mb-8">
              At Digital Raiz, we bring these capabilities together through one coordinated approach. This allows your business to maintain brand consistency, streamline campaigns, and build a scalable path for future growth.
            </p>
            
            <div className="flex items-start gap-4 p-5 rounded-2xl glass-panel border border-primary-hover/10 shadow-sm">
              <div className="p-3 rounded-xl bg-pink-50/50 shrink-0">
                <Settings className="w-6 h-6 text-primary-hover" />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 text-sm mb-1">Tailored Combinations</h4>
                <p className="text-zinc-600 text-xs leading-relaxed">
                  Whether you need a complete digital marketing strategy, a new website, or a customized mobile application, we find the ideal mix for your objective.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Why Partner With Us */}
          <div className="glass-panel rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-md border border-zinc-200/60">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
              Why Partner With Digital Raiz?
            </h3>
            <p className="text-zinc-600 text-sm mb-8">
              Choosing a digital partner is about working with a team that understands your business model and objectives to deliver results.
            </p>

            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200/60 shrink-0 h-11 w-11 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 text-sm sm:text-base">
                      {item.title}
                    </h4>
                    <p className="text-zinc-600 text-xs sm:text-sm mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
