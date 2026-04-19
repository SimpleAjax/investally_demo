"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TrendingUp, Shield, Home, BookOpen, ArrowRight, Check } from "lucide-react";

export default function SolutionsSection() {
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const scrollPos = useRef(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

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
  }, [isMobile, isInteracting]);

  const handleManualScroll = () => {
    if (scrollRef.current && isMobile) {
      scrollPos.current = scrollRef.current.scrollLeft;
    }
  };

  const solutions = [
    {
      id: "wealth",
      icon: TrendingUp,
      title: "Wealth Building",
      description: "Harness precision-engineered investment strategies designed to capture market momentum while maintaining strict risk controls.",
      features: [
        "Diversified Mutual Funds",
        "AIF & Portfolio Management",
        "Digital Gold & Global Assets",
        "Private Equity Opportunities"
      ],
      link: "/solutions#wealth",
      colSpan: "lg:col-span-7"
    },
    {
      id: "protection",
      icon: Shield,
      title: "Protection",
      description: "Secure your family's future against life's uncertainties with premium coverage.",
      features: [
        "TERM INSURANCE",
        "CRITICAL ILLNESS",
        "HEALTH FRAMEWORKS"
      ],
      link: "/solutions#protection",
      colSpan: "lg:col-span-5"
    },
    {
      id: "financing",
      icon: Home,
      title: "Financing",
      description: "Intelligent liquidity and structured financing for major acquisitions or expansion.",
      features: [
        "HOME & PROPERTY",
        "BUSINESS EXPANSION",
        "ASSET BACKED LOANS"
      ],
      link: "/solutions#financing",
      colSpan: "lg:col-span-4"
    },
    {
      id: "advisory",
      icon: BookOpen,
      title: "Expert Advisory",
      description: "Professional guidance for tax planning, financial education, and multi-generational wealth strategy.",
      features: [
        "Tax Consultancy",
        "Portfolio Review"
      ],
      link: "/solutions#advisory",
      colSpan: "lg:col-span-8",
      hasImage: true
    }
  ];

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
          onTouchStart={() => setIsInteracting(true)}
          onTouchEnd={() => setIsInteracting(false)}
          onScroll={handleManualScroll}
          className="flex overflow-x-auto pb-8 gap-6 lg:grid lg:grid-cols-12 lg:pb-0 custom-scrollbar"
        >
          {(isMobile ? [...solutions, ...solutions] : solutions).map((item, index) => (
            <div 
              key={`${item.id}-${index}`}
              className={`flex-shrink-0 w-[85vw] sm:w-[500px] lg:w-auto ${item.colSpan} bg-white p-6 sm:p-8 rounded-2xl flex flex-col justify-between border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow ${item.hasImage ? 'sm:flex-row' : ''} gap-6`}
            >
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <item.icon className="h-5 w-5 text-teal-600" />
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-lg mb-6">
                    {item.description}
                  </p>
                  
                  <div className={`grid grid-cols-1 ${item.id === 'wealth' || item.id === 'advisory' ? 'sm:grid-cols-2' : ''} gap-4 mb-8`}>
                    {item.features.map((feature, fIdx) => (
                      <div key={fIdx} className={item.id === 'advisory' ? '' : 'flex items-center gap-3'}>
                        {item.id === 'advisory' ? (
                          <>
                            <h4 className="text-[#006a63] font-semibold text-sm mb-1">{feature}</h4>
                            <p className="text-slate-500 text-sm">
                              {fIdx === 0 ? 'Optimization of complex structures' : 'Deep audit of existing assets'}
                            </p>
                          </>
                        ) : (
                          <>
                            <div className="bg-teal-50 rounded-full p-1 border border-teal-100 flex-shrink-0">
                              <Check className="h-3 w-3 text-teal-600" strokeWidth={3} />
                            </div>
                            <span className={`text-sm font-medium ${item.id === 'wealth' ? 'text-slate-700' : 'text-xs font-bold tracking-widest text-[#1e293b] uppercase'}`}>
                              {feature}
                            </span>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link href={item.link} className="text-[#006a63] font-semibold text-sm flex items-center gap-2 hover:text-teal-800 transition-colors mt-auto inline-flex w-fit">
                  {item.id === 'wealth' ? 'Explore Wealth Solutions' : item.id === 'advisory' ? 'Book a Consultation' : 'Explore'} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {item.hasImage && (
                <div className="hidden sm:flex shrink-0 relative items-center justify-center">
                  <div className="w-[140px] h-[180px] rounded-xl overflow-hidden border border-slate-100 shadow-sm relative object-cover bg-white">
                    <Image
                      src="/team/minakshi maheshwari-medium.jpg"
                      alt="Expert Advisory - Minakshi Maheshwari"
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'top' }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}