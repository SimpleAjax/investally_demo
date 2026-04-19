"use client";

import { useState, useRef, useEffect } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How is InvestAlly different from other financial advisors?",
    answer: "We give you a written financial plan — not vague advice. Every client gets quarterly scheduled reviews (not 'when you ask'), WhatsApp access to your advisor with 4-hour response times, and the freedom to exit anytime with zero penalties. Plus, we clean up your existing portfolio within 30 days — most clients go from 15+ overlapping funds to 5 purposeful ones."
  },
  {
    question: "Do you charge hidden fees or commissions?",
    answer: "Absolutely not. Our fees are disclosed upfront before you invest a single rupee. We don't take hidden trail commissions from fund houses. What we quote is what you pay — no surprises, ever."
  },
  {
    question: "I already have investments. Can you help clean them up?",
    answer: "Yes — in fact, we start there. Within 30 days of onboarding, we audit your existing portfolio, remove duplicates, consolidate overlapping funds, and create a lean, purposeful investment strategy. Average client sees 15 funds reduced to 5 optimized ones."
  },
  {
    question: "How often will we review my portfolio?",
    answer: "Every 90 days, guaranteed. These aren't 'call me when you need' reviews — they're scheduled in advance on our calendar. We proactively rebalance, discuss life changes, and update your plan so it always matches your goals."
  },
  {
    question: "What if I want to stop or withdraw my money?",
    answer: "Your money is always yours. There are no lock-in periods, no exit penalties, and no minimum commitment. You can stop SIPs, switch funds, or withdraw completely — anytime, no questions asked."
  },
  {
    question: "How quickly can I reach my advisor?",
    answer: "You'll have direct WhatsApp access to your SEBI-registered advisor — not a relationship manager or call center. We respond within 4 hours during business hours. For urgent matters, you can always call."
  },
  {
    question: "Is there a minimum investment required?",
    answer: "We work with clients starting from ₹50,000 in investable assets. Whether you're just starting out or have a substantial portfolio, we create plans that fit your current situation and grow with you."
  },
  {
    question: "How do I get started?",
    answer: "Book a free 30-minute discovery call. We'll understand your goals, review your current portfolio, and explain exactly how we can help. No obligation, no sales pressure — just honest advice. If it's a fit, we onboard you within 48 hours."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [itemsVisible, setItemsVisible] = useState<boolean[]>(new Array(faqs.length).fill(false));
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          setTimeout(() => setHeaderVisible(true), 100);
          
          faqs.forEach((_, i) => {
            setTimeout(() => {
              setItemsVisible((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, 200 + i * 80);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-12 md:py-16 bg-white relative overflow-hidden"
    >
      {/* Subtle background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-teal-50 to-transparent rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-t from-amber-50/50 to-transparent rounded-full blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div 
          className={`text-center mb-10 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-teal-50 rounded-full px-4 py-2 border border-teal-100 mb-6">
            <HelpCircle className="h-4 w-4 text-teal-600" />
            <span className="text-teal-700 text-sm font-medium">Got Questions?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto">
            Everything you need to know about working with InvestAlly.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const isVisible = itemsVisible[index];

            return (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <div
                  className={`bg-slate-50 rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? "border-teal-200 shadow-lg shadow-teal-100/50 bg-white" 
                      : "border-slate-100 hover:border-slate-200 hover:shadow-md"
                  }`}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left group"
                  >
                    <span className={`text-base md:text-lg font-bold transition-colors duration-300 ${
                      isOpen ? "text-teal-700" : "text-slate-900 group-hover:text-teal-700"
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isOpen 
                        ? "bg-teal-600 rotate-180" 
                        : "bg-white border border-slate-200 group-hover:border-teal-200"
                    }`}>
                      <ChevronDown className={`h-5 w-5 transition-colors duration-300 ${
                        isOpen ? "text-white" : "text-slate-400 group-hover:text-teal-600"
                      }`} />
                    </div>
                  </button>

                  {/* Answer */}
                  <div 
                    className={`transition-all duration-400 ease-out overflow-hidden ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-5">
                      <div className="h-px bg-gradient-to-r from-teal-100 to-transparent mb-4" />
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
