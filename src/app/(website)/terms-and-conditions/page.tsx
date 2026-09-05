import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
<<<<<<< HEAD
import Link from "next/link";
import { FileText, ShieldCheck, CheckCircle2, AlertCircle, ArrowRight, Lock, ExternalLink, RefreshCw, AlertTriangle } from "lucide-react";
=======
import TermsAndConditionsView from "@/components/terms-and-conditions/TermsAndConditionsView";
>>>>>>> 8f73f54 (privacy policies and terms and conditions pages updated)

export const metadata: Metadata = {
  title: "Terms and Conditions | Digital Raiz",
  description: "Read the official Terms and Conditions of DigitalRaiz Creative Solutions PVT LTD outlining rules, regulations, licensing, and policies for using our website.",
  alternates: {
    canonical: "https://digitalraiz.com/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans select-none text-slate-800 lg:pr-[80px]">
      <Header />
<<<<<<< HEAD

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative py-12 sm:py-16 bg-white text-slate-900 overflow-hidden border-b border-slate-200/80">
          <div className="absolute inset-0 bg-[radial-gradient(#0000000a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 w-full text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200/80 text-pink-600 text-xs font-mono font-bold uppercase tracking-widest shadow-2xs">
              <FileText className="w-4 h-4 text-pink-500" />
              <span>Terms of Service</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900">
              Terms &amp; Conditions for <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">DigitalRaiz</span>
            </h1>

            <p className="text-slate-600 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
              Welcome to DigitalRaiz Creative Solutions PVT LTD! These terms and conditions outline the rules and regulations for the use of DigitalRaiz's Website, located at{" "}
              <a href="https://www.digitalraiz.com/" target="_blank" rel="noopener noreferrer" className="text-pink-600 font-semibold underline">
                https://www.digitalraiz.com/
              </a>
              .
            </p>
          </div>
        </section>

        {/* MAIN DOCUMENTATION CONTENT */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 w-full space-y-12">

            {/* 01. Welcome & Agreement */}
            <div className="space-y-4 p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500 text-white flex items-center justify-center font-bold shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1. Welcome &amp; Agreement</h2>
              </div>
              <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                <p className="font-semibold text-slate-800">
                  Welcome to DigitalRaiz Creative Solutions PVT LTD!
                </p>
                <p>
                  By accessing this website we assume you accept these terms and conditions. Do not continue to use DigitalRaiz if you do not agree to take all of the terms and conditions stated on this page.
                </p>
                <p>
                  The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                </p>
              </div>
            </div>

            {/* 02. Cookies */}
            <div className="space-y-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center font-bold shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">2. Cookies</h2>
              </div>
              <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                <p>
                  We employ the use of cookies. By accessing DigitalRaiz, you agreed to use cookies in agreement with the DigitalRaiz Privacy Policy.
                </p>
                <p>
                  Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                </p>
              </div>
            </div>

            {/* 03. License & Intellectual Property */}
            <div className="space-y-4 p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">3. License</h2>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                Unless otherwise stated, DigitalRaiz and/or its licensors own the intellectual property rights for all material on DigitalRaiz. All intellectual property rights are reserved. You may access this from DigitalRaiz for your own personal use subjected to restrictions set in these terms and conditions.
              </p>
              <p className="text-slate-800 font-bold text-xs sm:text-sm pt-1">You must not:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {[
                  "Republish material from DigitalRaiz",
                  "Sell, rent or sub-license material from DigitalRaiz",
                  "Reproduce, duplicate or copy material from DigitalRaiz",
                  "Redistribute content from DigitalRaiz"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium p-3 rounded-xl bg-white border border-slate-200/80">
                    <AlertCircle className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 04. Comments & User Content */}
            <div className="space-y-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-2xs">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">4. User Comments &amp; Content</h2>
              <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                <p>
                  This Agreement shall begin on the date hereof.
                </p>
                <p>
                  Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. DigitalRaiz does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of DigitalRaiz, its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, DigitalRaiz shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
                </p>
                <p>
                  DigitalRaiz reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
                </p>
                <p className="font-semibold text-slate-800 pt-1">You warrant and represent that:</p>
                <ul className="space-y-2">
                  {[
                    "You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;",
                    "The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;",
                    "The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy;",
                    "The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity."
                  ].map((warrant, wIdx) => (
                    <li key={wIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                      <span>{warrant}</span>
                    </li>
                  ))}
                </ul>
                <p className="pt-2">
                  You hereby grant DigitalRaiz a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.
                </p>
              </div>
            </div>

            {/* 05. Refund Policy */}
            <div className="space-y-4 p-6 sm:p-8 rounded-3xl bg-pink-50/70 border border-pink-200/80 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500 text-white flex items-center justify-center font-bold shrink-0">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">5. Refund Policy</h2>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-pink-200 text-pink-700 font-bold text-sm sm:text-base shadow-2xs">
                Digitalraiz dont have any refund policy
              </div>
            </div>

            {/* 06. Hyperlinking to our Content */}
            <div className="space-y-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold shrink-0">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">6. Hyperlinking to our Content</h2>
              </div>
              <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                <p>
                  The following organizations may link to our Website without prior written approval:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {[
                    "Government agencies",
                    "Search engines",
                    "News organizations",
                    "Online directory distributors",
                    "System wide Accredited Businesses"
                  ].map((org, oIdx) => (
                    <li key={oIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span>{org}</span>
                    </li>
                  ))}
                </ul>
                <p className="pt-2">
                  These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.
                </p>
                <p>
                  We may consider and approve other link requests from commonly-known consumer/business information sources, dot.com community sites, charity groups, online directory distributors, internet portals, accounting/law/consulting firms, and educational institutions.
                </p>
                <p>
                  If you are interested in linking to our website, you must inform us by sending an e-mail to DigitalRaiz. Please include your name, your organization name, contact information, the URL of your site, and a list of URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
                </p>
                <p>
                  No use of DigitalRaiz's logo or other artwork will be allowed for linking absent a trademark license agreement.
                </p>
              </div>
            </div>

            {/* 07. iFrames & Content Liability */}
            <div className="space-y-4 p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80 shadow-2xs">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">7. iFrames &amp; Content Liability</h2>
              <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                <p className="font-semibold text-slate-800">iFrames:</p>
                <p>
                  Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
                </p>
                <p className="font-semibold text-slate-800 pt-2">Content Liability:</p>
                <p>
                  We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
                </p>
                <p className="font-semibold text-slate-800 pt-2">Your Privacy:</p>
                <p>
                  Please read our{" "}
                  <Link href="/privacy-policy" className="text-pink-600 font-semibold underline">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>

            {/* 08. Reservation of Rights & Removal of Links */}
            <div className="space-y-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-2xs">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">8. Reservation of Rights &amp; Removal of Links</h2>
              <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                <p>
                  We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
                </p>
                <p className="font-semibold text-slate-800 pt-2">Removal of links from our website:</p>
                <p>
                  If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
                </p>
                <p>
                  We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
                </p>
              </div>
            </div>

            {/* 09. Disclaimer */}
            <div className="space-y-4 p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">9. Disclaimer</h2>
              </div>
              <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                <p>
                  To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
                </p>
                <ul className="space-y-2 pt-1">
                  {[
                    "limit or exclude our or your liability for death or personal injury;",
                    "limit or exclude our or your liability for fraud or fraudulent misrepresentation;",
                    "limit any of our or your liabilities in any way that is not permitted under applicable law; or",
                    "exclude any of our or your liabilities that may not be excluded under applicable law."
                  ].map((disc, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium p-3 rounded-xl bg-white border border-slate-200/80">
                      <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{disc}</span>
                    </li>
                  ))}
                </ul>
                <p className="pt-2">
                  The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
                </p>
                <p>
                  As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
                </p>
              </div>
            </div>

            {/* 10. Contact Us Banner */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 border border-pink-200/80 text-center space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Need Clarification on Our Terms?</h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
                If you have questions regarding DigitalRaiz Creative Solutions PVT LTD terms and conditions, feel free to connect with our legal team.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-widest shadow-md hover:scale-105 transition-all"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>
      </main>

=======
      <TermsAndConditionsView />
>>>>>>> 8f73f54 (privacy policies and terms and conditions pages updated)
      <Footer />
    </div>
  );
}
