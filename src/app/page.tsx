"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

export default function LandingPage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const statsSectionRef = useRef<HTMLElement | null>(null);
  const metrics = useMemo(
    () => [
      {
        label: "Total Pips",
        target: 1505.7,
        decimals: 1,
        prefix: "+",
        suffix: "",
        darkColor: "text-emerald-400",
        lightColor: "text-emerald-500",
      },
      {
        label: "Win Rate",
        target: 96.3,
        decimals: 1,
        prefix: "",
        suffix: "%",
        darkColor: "text-blue-400",
        lightColor: "text-blue-500",
      },
      {
        label: "Hit TP",
        target: 88.4,
        decimals: 1,
        prefix: "",
        suffix: "%",
        darkColor: "text-white",
        lightColor: "text-[#0f172a]",
      },
      {
        label: "Drawdown",
        target: 4.2,
        decimals: 1,
        prefix: "",
        suffix: "%",
        darkColor: "text-rose-500",
        lightColor: "text-rose-600",
      },
    ],
    [],
  );
  const [animatedMetrics, setAnimatedMetrics] = useState<number[]>(() => metrics.map(() => 0));
  const [animationRunId, setAnimationRunId] = useState(0);
  const t = {
    navTagline: "Profitable Discipline Starts Here",
    badge: "Elite XAUUSD Signal Intelligence",
    hero: "Profit Consistently Like a Pro Trader Even as a Newbie.",
    desc: "Straight to the point. Follow a simple A-B-C flow with professional risk guidance and precise execution.",
    cta: "Join The Mission",
    login: "Log In",
    pricingTitle: "Choose Your Access Key_",
    pricingSub: "Choose your mission duration and unlock disciplined execution.",
    testimonialsTitle: "Mission Reports (Testimonials)_",
    faqTitle: "Tactical Briefing (FAQ)_",
  };
  const isDark = theme === "dark";
  const trustPoints = ["Live XAUUSD Focus", "One-Device Security", "Realtime Alerts", "Risk-First Framework"];
  const onboardingSteps = [
    { title: "Choose Package", desc: "Pick 7D, 15D, or 30D mission based on your trading cycle." },
    { title: "Receive Access Key", desc: "Instant delivery after registration with secure key locking." },
    { title: "Execute With Planner", desc: "Follow Entry, TP, SL and lot guidance inside your dashboard." },
  ];
  const comparisons = [
    { title: "Signal Clarity", kafra: "Entry + TP1-TP3 + SL in one clean flow", generic: "Mixed messages and unclear setup quality" },
    { title: "Risk Control", kafra: "Built-in tactical lot planner", generic: "No consistent position sizing guide" },
    { title: "Performance Tracking", kafra: "Structured log with outcome distribution", generic: "No reliable record to review edge" },
    { title: "Execution Simplicity", kafra: "Mobile-ready tactical dashboard", generic: "Fragmented alerts across multiple chats" },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem("KAFRA-landing-theme");
    if (saved === "dark" || saved === "light") setTheme(saved);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("KAFRA-landing-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (!statsSectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setAnimationRunId((prev) => prev + 1);
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(statsSectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (animationRunId === 0) return;

    let frameId = 0;
    const durationMs = 1400;
    const start = performance.now();

    setAnimatedMetrics(metrics.map(() => 0));

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedMetrics(metrics.map((metric) => metric.target * eased));
      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [animationRunId, metrics]);

  return (
    <main className={`min-h-screen ${isDark ? "bg-[#020617] text-white" : "bg-[#dbe5f3] text-[#0f172a]"}`}>
      <div
        className={`fixed inset-0 -z-10 [background-size:40px_40px] ${
          isDark
            ? "bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.05)_1px,transparent_0)]"
            : "bg-[radial-gradient(circle_at_2px_2px,rgba(15,23,42,0.07)_1px,transparent_0)]"
        }`}
      />

      <nav className={`sticky top-0 z-50 backdrop-blur-lg ${isDark ? "border-b border-white/10 bg-[#020617]/90" : "border-b border-[#0f172a]/10 bg-[#dbe5f3]/90"}`}>
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-6">
          <div className="flex items-center gap-3">
            <Image
              src="/kafra-logo-nav.png"
              alt="KAFRA logo"
              width={44}
              height={44}
              className="h-11 w-11 rounded-xl object-cover shadow-[0_6px_16px_rgba(37,99,235,0.35)]"
              priority
            />
            <div>
            <p className="text-2xl font-black tracking-tight text-blue-500">
              KAFRA <span className={isDark ? "text-white" : "text-[#0f172a]"}>SIGNAL</span>
            </p>
            <p className={`text-[9px] uppercase tracking-[0.3em] ${isDark ? "text-white/40" : "text-[#0f172a]/45"}`}>{t.navTagline}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
              className={`rounded-xl border px-4 py-2 text-xs font-bold uppercase tracking-widest ${isDark ? "border-white/20 bg-white/5 text-white hover:bg-white/10" : "border-[#0f172a]/20 bg-white text-[#0f172a] hover:bg-slate-100"}`}
            >
              {isDark ? "Light" : "Dark"}
            </button>
            <Link
              href="/access"
              className={`rounded-xl border px-4 py-2 text-xs font-bold uppercase tracking-widest ${isDark ? "border-white/20 bg-white/5 text-white hover:bg-white/10" : "border-[#0f172a]/20 bg-white text-[#0f172a] hover:bg-slate-100"}`}
            >
              {t.login}
            </Link>
          </div>
        </div>
      </nav>

      <header className="mx-auto max-w-5xl px-6 pb-20 pt-24 text-center">
        <div className={`rounded-[2rem] px-6 py-10 md:px-10 ${isDark ? "" : "border border-[#0f172a]/10 bg-white/45 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl"}`}>
          <div className={`mb-8 inline-block rounded-full px-4 py-1 text-[10px] font-black uppercase tracking-widest backdrop-blur-md ${isDark ? "border border-blue-400/40 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 text-blue-300 shadow-[0_0_30px_rgba(37,99,235,0.35)]" : "border border-blue-400/50 bg-blue-100 text-blue-700 shadow-[0_8px_22px_rgba(37,99,235,0.2)]"}`}>
            {t.badge}
          </div>
          <h1 className={`mx-auto mb-8 max-w-4xl text-5xl font-extrabold leading-[1.04] tracking-tight md:text-7xl ${isDark ? "text-white" : "text-[#0f172a]"}`}>
            {t.hero.split("Pro Trader").map((part, index, arr) => (
              <span key={index}>
                {part}
                {index < arr.length - 1 && (
                  <span className={`italic ${isDark ? "text-blue-500 drop-shadow-[0_0_16px_rgba(37,99,235,0.65)]" : "text-blue-600 drop-shadow-[0_4px_12px_rgba(37,99,235,0.22)]"}`}>
                    Pro Trader
                  </span>
                )}
              </span>
            ))}
          </h1>
          <p className={`mx-auto mb-12 max-w-2xl text-lg leading-relaxed md:text-xl ${isDark ? "text-slate-400" : "text-slate-700"}`}>{t.desc}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#pricing"
              className="inline-flex min-w-[260px] items-center justify-center rounded-2xl border border-blue-300/20 bg-gradient-to-r from-blue-600 to-blue-500 px-10 py-5 text-sm font-extrabold uppercase tracking-[0.18em] text-white shadow-[0_20px_50px_rgba(37,99,235,0.5)] transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-blue-400"
            >
              {t.cta}
            </a>
            <Link
              href="/access"
              className={`inline-flex min-w-[220px] items-center justify-center rounded-2xl border px-10 py-5 text-sm font-extrabold uppercase tracking-[0.18em] transition ${
                isDark ? "border-white/20 bg-white/5 text-white hover:bg-white/10" : "border-[#0f172a]/20 bg-white text-[#0f172a] hover:bg-slate-100"
              }`}
            >
              {t.login}
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto grid w-full max-w-7xl gap-4 px-6 pb-10 sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map((point) => (
          <div
            key={point}
            className={`live-glass-card rounded-2xl border px-4 py-3 text-center text-[11px] font-black uppercase tracking-[0.14em] ${
              isDark ? "border-white/15 bg-white/5 text-slate-200" : "border-[#0f172a]/15 bg-white/75 text-slate-700"
            }`}
          >
            <span className="live-pill">
              <span className="live-dot" />
              {point}
            </span>
          </div>
        ))}
      </section>

      <section ref={statsSectionRef} className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-6 px-6 pb-8 md:grid-cols-4">
          {metrics.map((item, index) => (
          <div key={item.label} className={`live-glass-card rounded-3xl border p-6 text-center backdrop-blur-xl ${isDark ? "border-white/12 bg-gradient-to-b from-slate-800/55 to-slate-900/45 shadow-[0_16px_40px_rgba(2,6,23,0.45)]" : "border-[#0f172a]/12 bg-gradient-to-b from-white/90 to-[#eef4ff] shadow-[0_16px_40px_rgba(15,23,42,0.15)]"}`}>
            <p className={`mb-2 text-[10px] font-black uppercase tracking-[0.18em] ${isDark ? "text-white/40" : "text-[#0f172a]/45"}`}>{item.label}</p>
            <p className={`font-mono text-3xl font-black ${isDark ? item.darkColor : item.lightColor}`}>
              {item.prefix}
              {animatedMetrics[index].toFixed(item.decimals)}
              {item.suffix}
            </p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="mb-8 text-center text-3xl font-black uppercase tracking-tight">How KAFRA Works_</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {onboardingSteps.map((step, index) => (
            <div
              key={step.title}
              className={`live-glass-card rounded-3xl border p-6 backdrop-blur-xl ${
                isDark
                  ? "border-white/12 bg-gradient-to-b from-slate-800/55 to-slate-900/45 shadow-[0_16px_40px_rgba(2,6,23,0.45)]"
                  : "border-[#0f172a]/12 bg-gradient-to-b from-white/90 to-[#eef4ff] shadow-[0_16px_40px_rgba(15,23,42,0.15)]"
              }`}
            >
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.16em] text-blue-500">Step {index + 1}</p>
              <h3 className="mb-3 text-xl font-black uppercase">{step.title}</h3>
              <p className={`${isDark ? "text-slate-400" : "text-slate-600"}`}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="mb-8 text-center text-3xl font-black uppercase tracking-tight">Why KAFRA_</h2>
        <div
          className={`overflow-hidden rounded-3xl border ${
            isDark ? "border-white/12 bg-slate-900/40" : "border-[#0f172a]/12 bg-white/70"
          }`}
        >
          <div className={`grid grid-cols-3 px-5 py-4 text-xs font-black uppercase tracking-[0.12em] ${isDark ? "bg-white/5" : "bg-[#eef4ff]"}`}>
            <p>Category</p>
            <p className="text-blue-500">KAFRA SIGNAL</p>
            <p className={isDark ? "text-slate-300" : "text-slate-700"}>Generic Signal Group</p>
          </div>
          {comparisons.map((row) => (
            <div key={row.title} className={`grid grid-cols-3 gap-4 px-5 py-4 text-sm ${isDark ? "border-t border-white/10" : "border-t border-[#0f172a]/10"}`}>
              <p className="font-bold">{row.title}</p>
              <p className={isDark ? "text-slate-200" : "text-slate-800"}>{row.kafra}</p>
              <p className={isDark ? "text-slate-400" : "text-slate-600"}>{row.generic}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-10 text-center text-3xl font-black uppercase tracking-tight">{t.testimonialsTitle}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { text: '"Las señales llegan claras y rápido. Ahora opero con más calma y menos dudas."', name: "Carlos M., Spain" },
            { text: '"Me gusta porque todo está ordenado: entrada, TP y SL en un solo flujo."', name: "Lucia R., Spain" },
            { text: '"?????,????????,?????????"', name: "Li Wei, China" },
            { text: '"????????,?????????????"', name: "Chen Yu, China" },
            { text: '"??????????????????? ??????????????????????????????????"', name: "Narin S., Thailand" },
            { text: '"??????????? ?????????????????????? ??????????????????????????"', name: "Pimchanok L., Thailand" },
            { text: '"Clean dashboard, fast alerts, and the risk planner actually keeps me disciplined."', name: "Daniel K., UK" },
            { text: '"I finally trade with structure instead of random entries, and my confidence is back."', name: "Mia T., Australia" },
            { text: '"???????? ????? ????? ???? ????? ??????? ??????? ?????? ????? ????."', name: "Omar A., UAE" },
            { text: '"???? ??? ?? KAFRA ?? ??????: ????? ?????? ???? ????? ?? ???? ????."', name: "Faisal N., Saudi Arabia" },
            { text: '"Fuhhh.. Signal KAFRA ni memang paduu.. Saya ikut plan jer, emosi lebih tenang bhai.."', name: "Hafiz M., Malaysia" },
            { text: '"Dulu overtrade, sekarang lebih disiplin sebab KAFRA dah bagi waktu bila kena ready Entry market, nak kemas rumah pun boleh fokus"', name: "Aina R., Malaysia" },
            { text: '"Scalping 30 minit memang ngam untuk saya yang kerja office, sempat check signal tanpa ganggu kerja."', name: "Shafiq Z., Malaysia" },
            { text: '"Saya suka karena alurnya simpel, tinggal ikuti setup dan atur risiko. Nggak bikin pusing."', name: "Rizky A., Indonesia" },
            { text: '"Intraday-nya enak dipakai, jadi saya gak perlu mantengin chart terus seharian."', name: "Nanda P., Indonesia" },
            { text: '"Dulu sering FOMO, sekarang trading lebih rapi dan konsisten karena sudah ada panduan jelas."', name: "Fadli K., Indonesia" },
          ].map((item) => (
            <div key={item.name} className={`live-glass-card rounded-3xl border p-6 backdrop-blur-xl ${isDark ? "border-white/12 bg-gradient-to-b from-slate-800/55 to-slate-900/45 shadow-[0_16px_40px_rgba(2,6,23,0.45)]" : "border-[#0f172a]/12 bg-gradient-to-b from-white/90 to-[#eef4ff] shadow-[0_16px_40px_rgba(15,23,42,0.15)]"}`}>
              <p className={`mb-4 text-sm italic ${isDark ? "text-slate-400" : "text-slate-600"}`}>{item.text}</p>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-blue-500">- {item.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="mb-10 text-4xl font-black uppercase tracking-tight">{t.pricingTitle}</h2>
        <p className={`mx-auto mb-10 max-w-2xl text-sm md:text-base ${isDark ? "text-slate-400" : "text-slate-600"}`}>{t.pricingSub}</p>
        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {[
            { name: "7 Days", original: "129 USD", promo: "99 USD", save: "Save 30 USD", active: false, badge: "" },
            { name: "15 Days", original: "249 USD", promo: "199 USD", save: "Save 50 USD", active: true, badge: "Most Popular" },
            { name: "30 Days", original: "299 USD", promo: "249 USD", save: "Save 50 USD", active: false, badge: "" },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`live-glass-card rounded-[2rem] border p-8 backdrop-blur-xl ${plan.active ? isDark ? "scale-[1.03] border-blue-500 bg-gradient-to-b from-blue-600/25 to-slate-900/65 shadow-[0_24px_60px_rgba(37,99,235,0.35)]" : "scale-[1.03] border-blue-400 bg-gradient-to-b from-[#dce8ff] to-[#c5d7fb] shadow-[0_24px_60px_rgba(37,99,235,0.22)]" : isDark ? "border-white/12 bg-gradient-to-b from-slate-800/55 to-slate-900/45 shadow-[0_16px_40px_rgba(2,6,23,0.45)]" : "border-[#0f172a]/12 bg-gradient-to-b from-white/90 to-[#eef4ff] shadow-[0_16px_40px_rgba(15,23,42,0.15)]"}`}
            >
              {plan.badge && (
                <p className={`mb-4 inline-block rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] ${isDark ? "border border-blue-400/50 bg-blue-500/20 text-blue-300" : "border border-blue-500/40 bg-blue-100 text-blue-700"}`}>
                  {plan.badge}
                </p>
              )}
              <h3 className={`text-xl font-black uppercase ${isDark ? "text-white" : "text-[#0f172a]"}`}>{plan.name}</h3>
              <div className="my-6">
                <p className={`text-sm font-semibold line-through ${isDark ? "text-slate-400" : "text-slate-500"}`}>{plan.original}</p>
                <p className={`font-mono text-5xl font-black ${plan.active ? "text-blue-600" : isDark ? "text-white" : "text-[#0f172a]"}`}>{plan.promo}</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-emerald-400">Promo Active</p>
                <p className={`mt-1 text-[11px] font-bold uppercase tracking-[0.14em] ${isDark ? "text-blue-300" : "text-blue-700"}`}>{plan.save}</p>
              </div>
              <ul className={`mb-6 min-h-[220px] space-y-2 text-left text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                <li>* Realtime XAUUSD Signals</li>
                <li>* Scalping Every 30 Min</li>
                <li>* Intraday 6 Times</li>
                <li>* Tactical Risk Planner</li>
                <li>* Group Support Access</li>
                <li>* Instant Notifications</li>
                <li>* Performance Dashboard</li>
              </ul>
              <Link
                href="/access"
                className={`mt-auto block w-full rounded-2xl py-4 text-xs font-black uppercase tracking-[0.16em] ${plan.active ? "bg-blue-600 hover:bg-blue-700 text-white" : isDark ? "border border-white/20 bg-white/5 text-white hover:bg-white/10" : "border border-[#0f172a]/20 bg-white text-[#0f172a] hover:bg-slate-100"}`}
              >
                Get Access
              </Link>
              <p className={`mt-3 text-[10px] uppercase tracking-[0.12em] ${isDark ? "text-slate-500" : "text-slate-600"}`}>Instant key delivery after registration</p>
            </div>
          ))}
        </div>
        <p className={`mt-6 text-xs uppercase tracking-[0.14em] ${isDark ? "text-slate-500" : "text-slate-600"}`}>Secure Key * One Device Policy * Instant Access</p>
        <p className={`mt-3 text-[11px] ${isDark ? "text-slate-400" : "text-slate-700"}`}>Promo slots are reviewed weekly based on active demand.</p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <h2 className="mb-10 text-center text-3xl font-black uppercase tracking-tight">{t.faqTitle}</h2>
        <div className="space-y-4">
          {[
            {
              q: "Newbie friendly?",
              a: "Yes. You get Entry, TP, and SL, then execute with your own risk plan.",
            },
            {
              q: "Signal frequency?",
              a: "Scalping cycles every 30 minutes and intraday cycles every 4 hours.",
            },
            {
              q: "Mobile friendly?",
              a: "Yes, the system is optimized for phone and desktop workflows.",
            },
            {
              q: "Need to watch chart all day?",
              a: "No. Wait for the alert and execute only valid setups.",
            },
            {
              q: "Which pair is traded?",
              a: "We focus fully on Gold (XAUUSD).",
            },
            {
              q: "How to renew subscription?",
              a: "Contact admin before expiry to get a new access key.",
            },
            {
              q: "Is key locked to one device?",
              a: "Yes. One key is active on one device at one time.",
            },
            {
              q: "Is this auto trading?",
              a: "No. This is manual execution signal guidance.",
            },
            {
              q: "What if I miss a signal?",
              a: "No issue. Wait for the next cycle signal.",
            },
            {
              q: "Any risk management support?",
              a: "Yes, tactical lot planner is provided in dashboard.",
            },
            {
              q: "Suitable for beginner traders?",
              a: "Yes. The flow is beginner-friendly and disciplined.",
            },
          ].map((faq) => (
            <details key={faq.q} className={`live-glass-card rounded-3xl border p-6 backdrop-blur-xl ${isDark ? "border-white/12 bg-gradient-to-b from-slate-800/55 to-slate-900/45 shadow-[0_14px_30px_rgba(2,6,23,0.35)]" : "border-[#0f172a]/12 bg-gradient-to-b from-white/90 to-[#eef4ff] shadow-[0_14px_30px_rgba(15,23,42,0.15)]"}`}>
              <summary className="cursor-pointer list-none text-left text-xs font-bold uppercase tracking-[0.16em]">{faq.q}</summary>
              <p className={`pt-4 text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className={`border-t py-10 text-center text-[10px] font-black uppercase tracking-[0.22em] ${isDark ? "border-white/10 text-white/30" : "border-[#0f172a]/10 text-[#0f172a]/40"}`}>
        (C) 2026 KAFRA SIGNAL SYSTEM | Powered by EZ Ecosystem
      </footer>

      <div className={`fixed bottom-0 left-0 right-0 z-40 border-t p-3 md:hidden ${isDark ? "border-white/15 bg-[#020617]/95" : "border-[#0f172a]/15 bg-[#dbe5f3]/95"}`}>
        <div className="mx-auto flex max-w-7xl gap-3">
          <a
            href="#pricing"
            className="flex-1 rounded-xl bg-blue-600 px-4 py-3 text-center text-xs font-black uppercase tracking-[0.14em] text-white"
          >
            Get Access
          </a>
          <Link
            href="/access"
            className={`flex-1 rounded-xl border px-4 py-3 text-center text-xs font-black uppercase tracking-[0.14em] ${
              isDark ? "border-white/20 bg-white/5 text-white" : "border-[#0f172a]/20 bg-white text-[#0f172a]"
            }`}
          >
            Log In
          </Link>
        </div>
      </div>
    </main>
  );
}

