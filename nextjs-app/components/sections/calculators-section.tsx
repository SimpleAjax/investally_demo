"use client";

import { useState } from "react";
import { BarChart2, Target, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CalculatorsSection({ showViewAllLink = true }: { showViewAllLink?: boolean }) {
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
    <section id="calculators" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Plan Your Future</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-4">
            Financial <span className="gradient-text">Calculators</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Make informed decisions with our easy-to-use calculators. See exactly how your money can grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <h3 className="text-2xl font-bold text-slate-900">Goal-Based</h3>
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
          <div className="bg-white rounded-2xl shadow-lg p-8 card-hover">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-900">Cost of Delay</h3>
              <div className="bg-orange-100 p-3 rounded-xl">
                <Clock className="text-orange-600 h-6 w-6" />
              </div>
            </div>

            <div className="space-y-4">
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
              <Button onClick={calculateDelay} className="w-full bg-orange-600 hover:bg-orange-700">
                Calculate
              </Button>
            </div>

            <div className="mt-6 p-4 bg-orange-50 rounded-lg">
              <p className="text-sm text-slate-600">Potential Loss Due to Delay</p>
              <p className="text-3xl font-bold text-orange-600">{delayResult || "₹--"}</p>
            </div>
          </div>
        </div>

        {/* More Calculators Link */}
        {showViewAllLink && (
          <div className="text-center mt-12">
            <Link href="/calculators" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold text-lg">
              View All Calculators
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
