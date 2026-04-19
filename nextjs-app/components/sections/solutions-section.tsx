"use client";

import Link from "next/link";
import Image from "next/image";
import { TrendingUp, Shield, Home, BookOpen, ArrowRight, Check } from "lucide-react";

export default function SolutionsSection() {
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Wealth Building - lg:col-span-7 */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl flex flex-col justify-between border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <TrendingUp className="h-5 w-5 text-teal-600" />
                <h3 className="text-xl font-bold text-slate-900">Wealth Building</h3>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed max-w-lg mb-6">
                Harness precision-engineered investment strategies designed to capture market momentum while maintaining strict risk controls.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-teal-50 rounded-full p-1 border border-teal-100 flex-shrink-0">
                      <Check className="h-3 w-3 text-teal-600" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-medium text-slate-700">Diversified Mutual Funds</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-teal-50 rounded-full p-1 border border-teal-100 flex-shrink-0">
                      <Check className="h-3 w-3 text-teal-600" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-medium text-slate-700">Digital Gold & Global Assets</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-teal-50 rounded-full p-1 border border-teal-100 flex-shrink-0">
                      <Check className="h-3 w-3 text-teal-600" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-medium text-slate-700">AIF & Portfolio Management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-teal-50 rounded-full p-1 border border-teal-100 flex-shrink-0">
                      <Check className="h-3 w-3 text-teal-600" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-medium text-slate-700">Private Equity Opportunities</span>
                  </div>
                </div>
              </div>
            </div>
            
            <Link href="/solutions#wealth" className="text-[#006a63] font-semibold text-sm flex items-center gap-2 hover:text-teal-800 transition-colors mt-auto inline-flex w-fit">
              Explore Wealth Solutions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Protection - lg:col-span-5 */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl flex flex-col justify-between border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Shield className="h-5 w-5 text-teal-600" />
                <h3 className="text-xl font-bold text-slate-900">Protection</h3>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                Secure your family's future against life's uncertainties with premium coverage.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-teal-50 rounded-full p-1 border border-teal-100 flex-shrink-0">
                    <Check className="h-3 w-3 text-teal-600" strokeWidth={3} />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-[#1e293b]">TERM INSURANCE</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-teal-50 rounded-full p-1 border border-teal-100 flex-shrink-0">
                    <Check className="h-3 w-3 text-teal-600" strokeWidth={3} />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-[#1e293b]">CRITICAL ILLNESS</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-teal-50 rounded-full p-1 border border-teal-100 flex-shrink-0">
                    <Check className="h-3 w-3 text-teal-600" strokeWidth={3} />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-[#1e293b]">HEALTH FRAMEWORKS</span>
                </div>
              </div>
            </div>
            
            <Link href="/solutions#protection" className="text-[#006a63] font-semibold text-sm flex items-center gap-2 hover:text-teal-800 transition-colors mt-auto inline-flex w-fit">
              Explore <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Financing - lg:col-span-4 */}
          <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-2xl flex flex-col justify-between border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
             <div>
              <div className="flex items-center gap-3 mb-5">
                <Home className="h-5 w-5 text-teal-600" />
                <h3 className="text-xl font-bold text-slate-900">Financing</h3>
              </div>
              <p className="text-slate-500 leading-relaxed mb-6 text-sm">
                Intelligent liquidity and structured financing for major acquisitions or expansion.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-teal-50 rounded-full p-1 border border-teal-100 flex-shrink-0">
                    <Check className="h-3 w-3 text-teal-600" strokeWidth={3} />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-[#1e293b]">HOME & PROPERTY</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-teal-50 rounded-full p-1 border border-teal-100 flex-shrink-0">
                    <Check className="h-3 w-3 text-teal-600" strokeWidth={3} />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-[#1e293b]">BUSINESS EXPANSION</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-teal-50 rounded-full p-1 border border-teal-100 flex-shrink-0">
                    <Check className="h-3 w-3 text-teal-600" strokeWidth={3} />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-[#1e293b]">ASSET BACKED LOANS</span>
                </div>
              </div>
            </div>
            
            <Link href="/solutions#financing" className="text-[#006a63] font-semibold text-sm flex items-center gap-2 hover:text-teal-800 transition-colors mt-auto inline-flex w-fit">
              Explore <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Expert Advisory - lg:col-span-8 */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row gap-6 justify-between border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
            
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <BookOpen className="h-5 w-5 text-teal-600" />
                  <h3 className="text-xl font-bold text-slate-900">Expert Advisory</h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed max-w-md mb-6">
                  Professional guidance for tax planning, financial education, and multi-generational wealth strategy.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-[#006a63] font-semibold text-sm mb-1">Tax Consultancy</h4>
                    <p className="text-slate-500 text-sm">Optimization of complex structures</p>
                  </div>
                  <div>
                    <h4 className="text-[#006a63] font-semibold text-sm mb-1">Portfolio Review</h4>
                    <p className="text-slate-500 text-sm">Deep audit of existing assets</p>
                  </div>
                </div>
              </div>
              
              <Link href="/solutions#advisory" className="text-[#006a63] font-semibold text-sm flex items-center gap-2 hover:text-teal-800 transition-colors mt-auto inline-flex w-fit">
                Book a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Right Image */}
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
            {/* Mobile Image */}
            <div className="sm:hidden relative w-full h-[250px] rounded-xl overflow-hidden mt-6 border border-slate-100 shadow-sm bg-white">
              <Image
                src="/team/minakshi maheshwari-medium.jpg"
                alt="Expert Advisory - Minakshi Maheshwari"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}