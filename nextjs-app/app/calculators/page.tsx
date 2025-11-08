"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Link from "next/link";
import { ArrowLeft, BarChart2, Target, Clock, ArrowRight, Briefcase, Shield, Home, TrendingUp, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CalculatorsPage() {
  const [sipInputs, setSipInputs] = useState({ monthly: "", return: "", years: "" });
  const [goalInputs, setGoalInputs] = useState({ target: "", years: "", return: "" });
  const [delayInputs, setDelayInputs] = useState({ monthly: "", delay: "", return: "", years: "" });

  const [sipResult, setSipResult] = useState("");
  const [goalResult, setGoalResult] = useState("");
  const [delayResult, setDelayResult] = useState("");

  const calculateSIP = () => {
    const P = parseFloat(sipInputs.monthly);
    const r = parseFloat(sipInputs.return) / 100 / 12;
    const n = parseFloat(sipInputs.years) * 12;

    if (P && r && n) {
      const maturityValue = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
      setSipResult(`₹${Math.round(maturityValue).toLocaleString('en-IN')}`);
    }
  };

  const calculateGoal = () => {
    const target = parseFloat(goalInputs.target);
    const years = parseFloat(goalInputs.years);
    const r = parseFloat(goalInputs.return) / 100 / 12;
    const n = years * 12;

    if (target && years && r && n) {
      // Calculate monthly SIP required to reach target
      const monthlySIP = target / (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
      setGoalResult(`₹${Math.round(monthlySIP).toLocaleString('en-IN')}`);
    }
  };

  const calculateDelay = () => {
    const monthly = parseFloat(delayInputs.monthly);
    const delay = parseFloat(delayInputs.delay);
    const r = parseFloat(delayInputs.return) / 100 / 12;
    const totalYears = parseFloat(delayInputs.years);

    if (monthly && delay && r && totalYears) {
      // Calculate value if started now
      const nNow = totalYears * 12;
      const valueNow = monthly * (((Math.pow(1 + r, nNow) - 1) / r) * (1 + r));

      // Calculate value if delayed
      const nDelayed = (totalYears - delay) * 12;
      const valueDelayed = monthly * (((Math.pow(1 + r, nDelayed) - 1) / r) * (1 + r));

      // Cost of delay
      const cost = valueNow - valueDelayed;
      setDelayResult(`₹${Math.round(cost).toLocaleString('en-IN')}`);
    }
  };

  return (
    <>
      <Navigation />
      <div className="bg-slate-50 min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/" className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Plan Your Future</span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-4">
              Financial <span className="gradient-text">Calculators</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Make informed decisions with our easy-to-use calculators. See exactly how your money can grow.
            </p>
          </div>

          {/* Main Content with Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calculators Grid (Left - 2 columns) */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* SIP Calculator */}
                <div className="bg-white rounded-2xl shadow-lg p-8 card-hover">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-slate-900">SIP Calculator</h3>
                    <div className="bg-teal-100 p-3 rounded-xl">
                      <BarChart2 className="text-teal-600 h-6 w-6" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Monthly Investment (₹)</label>
                      <input
                        type="number"
                        placeholder="5,000"
                        value={sipInputs.monthly}
                        onChange={(e) => setSipInputs({ ...sipInputs, monthly: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Expected Return (% p.a.)</label>
                      <input
                        type="number"
                        placeholder="12"
                        value={sipInputs.return}
                        onChange={(e) => setSipInputs({ ...sipInputs, return: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Time Period (Years)</label>
                      <input
                        type="number"
                        placeholder="10"
                        value={sipInputs.years}
                        onChange={(e) => setSipInputs({ ...sipInputs, years: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                    <Button onClick={calculateSIP} className="w-full bg-teal-600 hover:bg-teal-700">
                      Calculate
                    </Button>
                  </div>

                  <div className="mt-6 p-4 bg-teal-50 rounded-lg">
                    <p className="text-sm text-slate-600">Estimated Maturity Value</p>
                    <p className="text-3xl font-bold text-teal-600">{sipResult || "₹--"}</p>
                  </div>
                </div>

                {/* Goal-Based Calculator */}
                <div className="bg-white rounded-2xl shadow-lg p-8 card-hover">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-slate-900">Goal-Based Calculator</h3>
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <Target className="text-blue-600 h-6 w-6" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Target Amount (₹)</label>
                      <input
                        type="number"
                        placeholder="10,00,000"
                        value={goalInputs.target}
                        onChange={(e) => setGoalInputs({ ...goalInputs, target: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Time Period (Years)</label>
                      <input
                        type="number"
                        placeholder="5"
                        value={goalInputs.years}
                        onChange={(e) => setGoalInputs({ ...goalInputs, years: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Expected Return (% p.a.)</label>
                      <input
                        type="number"
                        placeholder="12"
                        value={goalInputs.return}
                        onChange={(e) => setGoalInputs({ ...goalInputs, return: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <Button onClick={calculateGoal} className="w-full bg-blue-600 hover:bg-blue-700">
                      Calculate
                    </Button>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-slate-600">Monthly SIP Required</p>
                    <p className="text-3xl font-bold text-blue-600">{goalResult || "₹--"}</p>
                  </div>
                </div>

                {/* Cost of Delay Calculator */}
                <div className="bg-white rounded-2xl shadow-lg p-8 card-hover md:col-span-2">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-slate-900">Cost of Delay Calculator</h3>
                    <div className="bg-orange-100 p-3 rounded-xl">
                      <Clock className="text-orange-600 h-6 w-6" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Monthly Investment (₹)</label>
                      <input
                        type="number"
                        placeholder="5,000"
                        value={delayInputs.monthly}
                        onChange={(e) => setDelayInputs({ ...delayInputs, monthly: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Delay Period (Years)</label>
                      <input
                        type="number"
                        placeholder="2"
                        value={delayInputs.delay}
                        onChange={(e) => setDelayInputs({ ...delayInputs, delay: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Expected Return (% p.a.)</label>
                      <input
                        type="number"
                        placeholder="12"
                        value={delayInputs.return}
                        onChange={(e) => setDelayInputs({ ...delayInputs, return: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Total Investment Period (Years)</label>
                      <input
                        type="number"
                        placeholder="20"
                        value={delayInputs.years}
                        onChange={(e) => setDelayInputs({ ...delayInputs, years: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                  </div>
                  <Button onClick={calculateDelay} className="w-full bg-orange-600 hover:bg-orange-700 mt-4">
                    Calculate
                  </Button>

                  <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                    <p className="text-sm text-slate-600">Potential Loss Due to Delay</p>
                    <p className="text-3xl font-bold text-orange-600">{delayResult || "₹--"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar (Right - 1 column) */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Product Metrics 2x2 */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 text-teal-600 mr-2" />
                    Our Products
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Link href="/#products" className="group bg-gradient-to-br from-teal-50 to-teal-100 p-4 rounded-lg hover:shadow-md transition">
                      <div className="bg-teal-600 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                        <Briefcase className="text-white h-5 w-5" />
                      </div>
                      <p className="font-bold text-slate-900 text-sm mb-1">PMS</p>
                      <p className="text-xs text-slate-600">₹50L+ min</p>
                    </Link>

                    <Link href="/#products" className="group bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg hover:shadow-md transition">
                      <div className="bg-green-600 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                        <Shield className="text-white h-5 w-5" />
                      </div>
                      <p className="font-bold text-slate-900 text-sm mb-1">Insurance</p>
                      <p className="text-xs text-slate-600">₹500/mo</p>
                    </Link>

                    <Link href="/#products" className="group bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg hover:shadow-md transition">
                      <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                        <Home className="text-white h-5 w-5" />
                      </div>
                      <p className="font-bold text-slate-900 text-sm mb-1">Loans</p>
                      <p className="text-xs text-slate-600">8.5% p.a.</p>
                    </Link>

                    <Link href="/#products" className="group bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg hover:shadow-md transition">
                      <div className="bg-purple-600 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                        <TrendingUp className="text-white h-5 w-5" />
                      </div>
                      <p className="font-bold text-slate-900 text-sm mb-1">Mutual Funds</p>
                      <p className="text-xs text-slate-600">SIP ₹500+</p>
                    </Link>
                  </div>
                </div>

                {/* Quick Calculators - Show other calculators */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                    <Calculator className="h-5 w-5 text-teal-600 mr-2" />
                    Financial Tools
                  </h3>
                  <div className="space-y-3">
                    <Link href="/#blog" className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition group">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-slate-900 text-sm mb-1">Knowledge Center</p>
                          <p className="text-xs text-slate-600">Read our blog</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-teal-600 group-hover:translate-x-1 transition" />
                      </div>
                    </Link>

                    <Link href="/#about" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition group">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-slate-900 text-sm mb-1">About Us</p>
                          <p className="text-xs text-slate-600">Learn more about Investally</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition" />
                      </div>
                    </Link>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl shadow-lg p-6 text-white">
                  <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Need Expert Advice?</h3>
                  <p className="text-teal-50 text-sm mb-4">Get personalized financial guidance from our SEBI-registered experts.</p>
                  <Link href="/#contact" className="block w-full px-4 py-3 bg-white text-teal-600 font-bold text-center rounded-lg hover:bg-teal-50 transition">
                    Book Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
