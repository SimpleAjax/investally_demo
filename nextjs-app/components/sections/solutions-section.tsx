"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { TrendingUp, Shield, Home, BookOpen, ArrowRight, Check } from "lucide-react";

export default function SolutionsSection() {
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [hasManualScroll, setHasManualScroll] = useState(false);
  const scrollPos = useRef(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile || hasManualScroll) return;

    let animationFrameId: number;
    const scrollSpeed = 0.5;

    const scrollLoop = () => {
      if (scrollRef.current && !isInteracting) {
        scrollPos.current += scrollSpeed;
        if (scrollPos.current >= scrollRef.current.scrollWidth / 2) {
          scrollPos.current = 0;
        }
        scrollRef.current.scrollLeft = scrollPos.current;
      }
      animationFrameId = requestAnimationFrame(scrollLoop);
    };

    animationFrameId = requestAnimationFrame(scrollLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isMobile, isInteracting, hasManualScroll]);

  useEffect(() => {
    if (!isMobile || !hasManualScroll || !scrollRef.current) return;

    const clampScrollPosition = () => {
      if (!scrollRef.current) return;
      const maxScrollLeft = Math.max(0, scrollRef.current.scrollWidth - scrollRef.current.clientWidth);
      const nextScrollLeft = Math.min(scrollPos.current, maxScrollLeft);
      scrollPos.current = nextScrollLeft;
      scrollRef.current.scrollLeft = nextScrollLeft;
    };

    const frameId = requestAnimationFrame(clampScrollPosition);
    return () => cancelAnimationFrame(frameId);
  }, [isMobile, hasManualScroll]);

  const handleManualScroll = () => {
    if (scrollRef.current && isMobile) {
      scrollPos.current = scrollRef.current.scrollLeft;
    }
  };

  const enableFiniteManualScroll = () => {
    if (!isMobile || hasManualScroll) return;
    setHasManualScroll(true);
  };

  const solutions = [
    {
      id: "wealth",
      icon: TrendingUp,
      title: "Wealth Building",
      highlights: ["Mutual Funds", "PMS", "AIF", "Global Investing"],
      description: "Precision investment strategies across Indian and global markets.",
      features: [
        "Portfolio Management Services (PMS)",
        "International Direct & Feeder Funds, ETFs.",
        "Mutual Funds & MLDs",
        "Fractional Real Estate Ownership",
        "Alternative Investment Funds (AIFs)",
      ],
      link: "/solutions#wealth",
      colSpan: "lg:col-span-7"
    },
    {
      id: "protection",
      icon: Shield,
      title: "Insurance & Protection",
      highlights: ["Life Insurance", "Health Cover", "Group Plans"],
      description: "Comprehensive cover for life, health, assets, and your workforce.",
      features: [
        "Life Insurance",
        "General Insurance",
        "Group Mediclaim",
        "Group Term Insurance"
      ],
      link: "/solutions#protection",
      colSpan: "lg:col-span-5"
    },
    {
      id: "financing",
      icon: Home,
      title: "Loans & Financing",
      highlights: ["Home Loans", "MSME Loans", "Business Finance"],
      description: "Smart lending solutions for life's biggest goals and business growth.",
      features: [
        "Home Loans",
        "MSME & Business Loans",
        "Loan Against Securities",
        "Business Expansion Finance"
      ],
      link: "/solutions#financing",
      colSpan: "lg:col-span-5"
    },
    {
      id: "advisory",
      icon: BookOpen,
      title: "Expert Advisory",
      highlights: ["Tax Planning", "Wealth Strategy", "Education"],
      description: "Certified advisors for tax, multi-generational wealth strategy, and financial education.",
      features: [
        "Tax Planning & Optimisation",
        "Portfolio Review & Rebalancing",
        "Wealth & Succession Planning",
        "Financial Education Workshops"
      ],
      link: "/solutions#advisory",
      colSpan: "lg:col-span-7"
    }
  ];

  const mobileSolutions = isMobile && !hasManualScroll ? [...solutions, ...solutions] : solutions;

  return (
    <section id="solutions" className="py-12 md:py-16 bg-[#f8fafa]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-2 block">
            Our Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-[1.1] tracking-tight">
            Everything You Need,{" "}
            <span className="gradient-text">Under One Roof</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From growing your wealth to protecting your family — we cover the complete spectrum
            of your financial life, so you never have to juggle multiple advisors again.
          </p>
        </div>

        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={() => setIsInteracting(false)}
          onTouchStart={() => {
            enableFiniteManualScroll();
            setIsInteracting(true);
          }}
          onTouchEnd={() => setIsInteracting(false)}
          onScroll={handleManualScroll}
          className="flex overflow-x-auto pb-8 gap-6 lg:grid lg:grid-cols-12 lg:overflow-visible lg:pb-0 custom-scrollbar"
        >
          {mobileSolutions.map((item, index) => (
            <div 
              key={`${item.id}-${index}`}
              className={`flex-shrink-0 w-[85vw] sm:w-[500px] lg:w-auto ${item.colSpan} bg-white p-6 sm:p-8 rounded-2xl flex flex-col justify-between border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow gap-6 ${(item.id === "protection" || item.id === "financing") ? "lg:min-h-[360px]" : ""}`}
            >
              <div className="flex-1 flex flex-col">
                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-5">
                    <item.icon className="h-5 w-5 text-teal-600" />
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-[#006a63]"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-lg mb-6">
                    {item.description}
                  </p>
                  
                  <div className={`grid grid-cols-1 ${item.id === 'wealth' || item.id === 'advisory' || item.id === 'protection' || item.id === 'financing' ? 'sm:grid-cols-2' : ''} gap-4 ${item.id === 'protection' || item.id === 'financing' ? 'flex-1 content-center' : 'mb-8'}`}>
                    {item.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <div className="bg-teal-50 rounded-full p-1 border border-teal-100 flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-teal-600" strokeWidth={3} />
                        </div>
                        <span className="text-sm font-medium text-slate-700 leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link href={item.link} className={`text-[#006a63] font-semibold text-sm flex items-center gap-2 hover:text-teal-800 transition-colors mt-auto inline-flex w-fit ${item.id === 'protection' || item.id === 'financing' ? 'pt-6' : ''}`}>
                  {item.id === 'wealth' ? 'Explore Wealth Solutions' : item.id === 'advisory' ? 'Book a Consultation' : 'Explore'} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
