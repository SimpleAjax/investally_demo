"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  TrendingUp,
  Wallet,
  DollarSign,
  Shield,
  Heart,
  Activity,
  Users,
  Building2,
  Briefcase,
  Receipt,
  Calendar,
  PieChart,
  FileText,
  Globe,
  Download,
  Compass,
  Scale,
  Zap,
  ShieldCheck,
  Stethoscope,
  Umbrella,
  Home,
  BriefcaseBusiness,
  Coins,
  LineChart,
  BarChart3,
  History,
  Plane,
  Brain
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { getGridCardClasses } from "@/lib/grid-utils";
import ScrollReveal from "@/components/scroll-reveal";

// --- WEALTH BUILDING DATA ---
const wealthSolutions = [
  {
    id: "mutual-funds",
    title: "Mutual Funds",
    description: "Curated selection of high-performance domestic and international funds aligned with your risk appetite.",
    icon: TrendingUp,
    features: ["Equity & Debt Mix", "Automated Rebalancing", "Tax-Efficient Structures"],
    detailedContent: "Our mutual fund framework utilizes proprietary screening models to identify top quintile alpha-generating funds. We don't just pick funds; we build portfolios that address specific liquidity and growth needs, ensuring a balanced core for your investment strategy.",
    image: "https://images.unsplash.com/photo-1611974714851-482061384736?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "pms",
    title: "Portfolio Management",
    description: "Discretionary and non-discretionary services designed for bespoke investment philosophies.",
    icon: Wallet,
    features: ["Direct Stock Execution", "Active Risk Monitoring", "Direct Fund Access"],
    detailedContent: "Bespoke stock portfolios managed with absolute precision. Our PMS partners provide professional management of your equity assets, offering a level of customization and transparency impossible through traditional retail products.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "aif",
    title: "AIF & PMS",
    description: "Exclusive access to Alternative Investment Funds and professional Portfolio Management Schemes.",
    icon: Coins,
    features: ["Venture Capital Access", "Private Equity Participation", "Hedged Strategies"],
    detailedContent: "Unlock access to the growing alternative investment landscape. We provide entry to high-potential venture capital, real estate, and distressed asset funds that were previously reserved only for institutional players.",
    image: "https://images.unsplash.com/photo-1633156189776-614264663923?auto=format&fit=crop&q=80&w=800"
  }
];

// --- INSURANCE DATA ---
const insuranceSolutions = [
  {
    id: "term",
    title: "Term Insurance",
    description: "Pure protection plans for maximum coverage at low cost.",
    icon: ShieldCheck,
    features: ["High Sum Assured", "Flexible Tenure", "Add-on Riders"],
    detailedContent: "The absolute foundation of any robust financial plan. Our term solutions focus on high claim-settlement ratios and comprehensive critical illness riders to ensure your family's future is bulletproof. These plans act as a financial safety net, providing peace of mind through every life stage.",
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "health",
    title: "Health Insurance",
    description: "Comprehensive medical covers for individuals and families.",
    icon: Heart,
    features: ["Cashless Treatments", "Global Coverage", "Zero Deductibles"],
    detailedContent: "High-net-worth medical insurance provides access to the world's best hospitals without geographical boundaries. We prioritize plans that include global access and maternity benefits for sovereign transitions, ensuring you receive world-class care wherever you are.",
    image: "https://images.unsplash.com/photo-1505751172107-160a2b027d9c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "critical",
    title: "Critical Illness",
    description: "Specialized covers for life-threatening diseases.",
    icon: Activity,
    features: ["Lump Sum Payouts", "Income Replacement", "Second Opinion"],
    detailedContent: "A financial shield for health crises. These plans provide a substantial lump sum upon diagnosis of specific life-altering conditions, ensuring you have the capital for the best treatments while protecting your existing savings and maintaining your lifestyle.",
    image: "https://images.unsplash.com/photo-1454165833767-152e535e6488?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "family-office",
    title: "Family Office Cover",
    description: "Global protection for families across multiple jurisdictions.",
    icon: Globe,
    features: ["Jurisdictional Planning", "Cyber Protection", "Reputational Risk"],
    detailedContent: "Holistic asset and life protection scaled for multi-generational families. We integrate insurance with legal structures to protect against kidnap, ransom, cyber extortion, and complex liability issues that can arise in global wealth management.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800"
  }
];

// --- LOANS DATA ---
const loansSolutions = [
  {
    id: "home-loan",
    title: "Home Loans",
    description: "Efficient financing for luxury real estate and commercial properties.",
    icon: Home,
    features: ["Sovereign Interest Rates", "Quick Processing", "Tax Benefit Optimization"],
    detailedContent: "Acquire high-value real estate with optimized debt structures. We assist in securing large-ticket home loans for properties in premium micro-markets, focusing on the lowest interest rates and flexible repayment terms that fit your long-term wealth strategy.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "business-loan",
    title: "Business Loans",
    description: "Structured capital for business expansion and inventory financing.",
    icon: BriefcaseBusiness,
    features: ["Collateral-Free Options", "Flexible Credit Lines", "Strategic Leverage"],
    detailedContent: "Fuel your entrepreneurial ventures with bespoke corporate debt. Whether it's working capital, asset financing, or acquisition debt, we provide the strategic leverage needed to scale your business legacy while maintaining optimal control.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800"
  }
];

// --- ADVISORY DATA ---
const advisorySolutions = [
  { 
    id: "tax", 
    title: "Tax Consultancy", 
    icon: Receipt,
    description: "Optimizing your tax liabilities through legal structures and cross-border planning.",
    features: ["Tax-Efficient Structures", "Cross-Border Planning", "Compliance Monitoring"]
  },
  { 
    id: "financial", 
    title: "Financial Planning", 
    icon: PieChart,
    description: "Holistic mapping of life goals against cash flows and projected market returns.",
    features: ["Goal-Based Mapping", "Cash Flow Analysis", "Risk Profiling"]
  },
  { 
    id: "portfolio", 
    title: "Portfolio Review", 
    icon: LineChart,
    description: "Periodic deep-dives into asset performance and structural health of your holdings.",
    features: ["Asset Audit", "Structural Health Check", "Objective Benchmarking"]
  },
  { 
    id: "estate", 
    title: "Estate Planning", 
    icon: Scale,
    description: "Securing your legacy through trusts, wills, and succession structures.",
    features: ["Trust Formation", "Succession Planning", "Will Management"]
  },
  { 
    id: "global", 
    title: "Global Advisory", 
    icon: Globe,
    description: "Access to international markets, foreign currency management, and residency planning.",
    features: ["International Access", "Currency Hedge", "Offshore Compliance"]
  }
];

export default function SolutionsPage() {
  const SolutionCard = ({ solution, index, total, gridSpan }: { solution: any; index: number; total: number; gridSpan: string }) => {
    return (
      <div
        key={solution.id}
        className={`${gridSpan} bg-[#f8fafa] relative p-6 lg:p-8 rounded-2xl border border-slate-200/50 transition-all hover:shadow-xl overflow-hidden flex flex-col group`}
      >
        <div className="flex flex-col h-full">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-[#006a63]">
                <solution.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-2xl">
                {solution.title}
              </h3>
            </div>

            <p className="text-slate-600 mb-8 leading-relaxed">
              {solution.description}
            </p>

            <ul className="space-y-4 text-sm text-slate-700">
              {solution.features?.map((feature: string, i: number) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center text-[#006a63]">
                    <Check className="h-3 w-3" strokeWidth={4} />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-auto pt-6 text-[#006a63] font-bold text-sm flex items-center gap-2">
            Learn More <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navigation />
      <main className="pt-24 bg-[#f8fafa]">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Link href="/" className="text-[#006a63] hover:underline font-medium inline-flex items-center transition-colors text-sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 text-[#006a63] font-semibold text-xs uppercase tracking-widest border border-teal-100">
              Expert Solutions
            </div>
            <h1 className="font-black text-5xl lg:text-7xl text-slate-900 leading-[1.1] tracking-tight">
              Comprehensive <br />
              <span className="text-[#006a63]">Financial Frameworks</span>
            </h1>
            <p className="text-slate-600 text-lg max-w-xl leading-relaxed">
              At InvestAlly, we transcend traditional asset management. Our frameworks are engineered for the sovereign investor, balancing multi-generational wealth preservation with aggressive growth strategies.
            </p>
            <div className="flex gap-4">
              <Button asChild className="bg-[#006a63] hover:bg-teal-700 text-white px-8 py-6 rounded-lg font-bold text-base flex items-center gap-2 group shadow-lg transition-transform hover:scale-[1.02]">
                <Link href="/#contact">
                  Begin Your Journey
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            <Image
              src="/animations/solutions-hero-section-image.png"
              alt="InvestAlly Financial Freedom"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-teal-600/10 mix-blend-multiply pointer-events-none" />
          </div>
        </section>

        {/* Wealth Building Section */}
        <ScrollReveal>
          <section id="wealth" className="bg-white py-16 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-10">
                <h2 className="font-black text-4xl text-slate-900 mb-4">Wealth Building</h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-[#006a63] to-teal-400 rounded-full" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                {wealthSolutions.map((solution, i) => (
                  <SolutionCard 
                    key={solution.id} 
                    solution={solution} 
                    index={i} 
                    total={wealthSolutions.length} 
                    gridSpan={getGridCardClasses(wealthSolutions.length, i)} 
                  />
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Insurance & Protection Section */}
        <ScrollReveal>
          <section id="insurance" className="bg-[#f2f4f4] py-16 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-10">
                <h2 className="font-black text-4xl text-slate-900 mb-4">Insurance & Protection</h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-[#006a63] to-teal-400 rounded-full" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                {insuranceSolutions.map((solution, i) => (
                  <SolutionCard 
                    key={solution.id} 
                    solution={solution} 
                    index={i} 
                    total={insuranceSolutions.length} 
                    gridSpan={getGridCardClasses(insuranceSolutions.length, i)} 
                  />
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Loans & Financing Section */}
        <ScrollReveal>
          <section id="loans" className="bg-white py-16 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-10">
                <h2 className="font-black text-4xl text-slate-900 mb-4">Loans & Financing</h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-[#006a63] to-teal-400 rounded-full" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                {loansSolutions.map((solution, i) => (
                  <SolutionCard 
                    key={solution.id} 
                    solution={solution} 
                    index={i} 
                    total={loansSolutions.length} 
                    gridSpan={getGridCardClasses(loansSolutions.length, i)} 
                  />
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Expert Advisory Section */}
        <ScrollReveal>
          <section id="advisory" className="bg-slate-900 py-16 relative overflow-hidden scroll-mt-24">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="grid grid-cols-6 h-full">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="border-r border-teal-500/20 last:border-0" />
                ))}
              </div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="mb-12">
                <h2 className="font-black text-4xl text-white mb-4">Expert Advisory</h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-teal-400 to-[#006a63] rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                {advisorySolutions.map((solution, i) => (
                  <div
                    key={solution.id}
                    className={`${getGridCardClasses(advisorySolutions.length, i)} bg-white/5 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center h-full transition-all group hover:bg-white/10`}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-400 mb-6">
                        <solution.icon className="h-7 w-7" />
                      </div>
                      <h3 className="font-bold text-white mb-4 text-xl">{solution.title}</h3>
                      
                      <p className="text-teal-100/60 leading-relaxed mb-8 text-sm">
                         {solution.description}
                      </p>

                      <ul className="space-y-4 text-sm text-teal-100/40 w-full">
                        {solution.features?.map((feature: string, i: number) => (
                          <li key={i} className="flex items-center gap-2 justify-center">
                            <Check className="h-4 w-4 text-teal-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-20 p-12 rounded-3xl bg-gradient-to-br from-teal-600 to-teal-800 text-white relative overflow-hidden shadow-2xl">
                 <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
                    <Globe className="text-[30rem] absolute -top-20 -right-20" />
                 </div>
                 <div className="relative z-10 max-w-3xl">
                    <h3 className="text-3xl font-black mb-6 italic">"A Legacy is built one decision at a time. We ensure every decision is mathematically sound and strategically sovereign."</h3>
                    <p className="text-teal-100 text-lg mb-8 opacity-80">
                      Connect with our advisory board for specialized family office setup, cross-border tax planning, and philanthropic engineering.
                    </p>
                    <Button asChild className="bg-white text-[#006a63] hover:bg-teal-50 px-10 py-7 rounded-full font-bold text-lg shadow-2xl transition-transform hover:scale-105">
                       <Link href="/#contact">Private Consultation</Link>
                    </Button>
                 </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal>
          <section className="bg-white py-16 text-center">
            <div className="max-w-4xl mx-auto px-8">
              <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Ready to Engineer Your Future?</h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                Join the elite investors who trust InvestAlly for their complex financial frameworks. Our specialized advisors are ready to design your sovereign path.
              </p>
              <Button asChild size="lg" className="bg-[#006a63] hover:bg-teal-700 text-white px-10 py-8 rounded-xl font-bold text-lg shadow-xl hover:-translate-y-1 transition-all">
                <Link href="/#contact" className="flex items-center gap-2">
                  Book Private Consultation
                  <ArrowRight className="h-6 w-6" />
                </Link>
              </Button>
              <p className="mt-10 text-slate-400 text-sm italic font-medium">
                At <span className="text-[#006a63] font-bold">InvestAlly</span>, your financial legacy is our masterwork.
              </p>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <Footer />
        </ScrollReveal>
      </main>
    </>
  );
}
