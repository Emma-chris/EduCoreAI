"use client"

import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="font-body text-body-md overflow-x-hidden">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 bg-surface border-b border-outline-variant">
        <div className="flex items-center gap-stack-lg">
          <span className="text-headline-md font-display font-bold text-primary">EduCore AI</span>
          <div className="hidden md:flex gap-stack-md">
            <a className="text-secondary font-bold border-b-2 border-secondary font-body-md py-1" href="#features">Features</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors font-body-md py-1" href="#pricing">Pricing</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors font-body-md py-1" href="#about">About</a>
          </div>
        </div>
        <div className="flex items-center gap-stack-md">
          <Link href="/login" className="hidden md:block text-on-surface-variant hover:text-secondary font-label-md px-4 py-2">Login</Link>
          <Link href="/register" className="bg-secondary text-on-secondary px-6 py-2 rounded-lg font-label-md hover:opacity-90 transition-all">Book Demo</Link>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-surface py-20 lg:py-32 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto grid lg:grid-cols-2 gap-gutter items-center">
            <div className="z-10">
              <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full mb-6">
                <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                <span className="font-label-sm uppercase tracking-wider">Next-Gen Education</span>
              </div>
              <h1 className="font-display-lg text-display-lg text-primary mb-6 leading-tight">
                The AI Operating System for African Schools
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
                Streamline administration, empower teachers with AI-driven lesson planning, and provide data-backed insights for student success. Built for excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register" className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-label-md shadow-lg hover:shadow-xl transition-all text-center">
                  Book a Demo
                </Link>
                <Link href="/register" className="bg-surface-container-lowest border border-outline-variant text-on-surface px-8 py-4 rounded-xl font-label-md hover:bg-surface-container transition-all text-center">
                  Start Free Trial
                </Link>
              </div>
              <div className="mt-12 flex items-center gap-4 text-on-surface-variant">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-highest overflow-hidden flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-surface-variant">person</span>
                    </div>
                  ))}
                </div>
                <p className="font-label-md">Trusted by 200+ Institutions across Africa</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-on-tertiary-container/10 rounded-full blur-3xl" />
              <div className="bg-white p-4 rounded-2xl border border-outline-variant shadow-2xl relative z-10 ai-gradient-border">
                <div className="rounded-xl w-full bg-surface-container h-64 md:h-80 flex items-center justify-center">
                  <div className="text-center p-6">
                    <span className="material-symbols-outlined text-[64px] text-secondary">dashboard_customize</span>
                    <p className="text-on-surface-variant mt-4 font-label-md">School Analytics Dashboard Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section id="features" className="py-24 bg-surface-container-low px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Centralized Intelligence for Schools</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                One platform to manage every aspect of your educational ecosystem with AI-powered precision.
              </p>
            </div>
            <div className="grid grid-cols-12 gap-gutter">
              {/* Feature 1 */}
              <div className="col-span-12 md:col-span-8 bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant hover:border-secondary transition-all">
                <div className="flex flex-col md:flex-row gap-gutter items-center">
                  <div className="flex-1">
                    <span className="material-symbols-outlined text-secondary text-[40px] mb-4">psychology</span>
                    <h3 className="font-headline-md text-headline-md text-primary mb-3">AI Lesson Planner</h3>
                    <p className="text-on-surface-variant mb-6">
                      Empower teachers to generate comprehensive, curriculum-aligned lesson plans in seconds. Our AI adapts to local standards across different African regions.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 font-label-md text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                        Curriculum Alignment
                      </li>
                      <li className="flex items-center gap-2 font-label-md text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                        Resource Suggestions
                      </li>
                    </ul>
                  </div>
                  <div className="flex-1 bg-surface-container p-4 rounded-xl w-full">
                    <div className="bg-white rounded-lg shadow-sm p-4 border border-outline-variant">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-label-sm text-on-surface-variant uppercase">Lesson Preview</span>
                        <div className="h-2 w-24 bg-secondary-container rounded-full" />
                      </div>
                      <div className="space-y-3">
                        <div className="h-4 w-3/4 bg-surface-container rounded" />
                        <div className="h-4 w-full bg-surface-container rounded" />
                        <div className="h-4 w-5/6 bg-surface-container rounded" />
                        <div className="h-4 w-2/3 bg-secondary-container rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="col-span-12 md:col-span-4 bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant hover:border-secondary transition-all">
                <span className="material-symbols-outlined text-secondary text-[40px] mb-4">settings_suggest</span>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">Core Operations</h3>
                <p className="text-on-surface-variant">Automate scheduling, attendance, and record-keeping with a resilient cloud infrastructure.</p>
              </div>

              {/* Feature 3 */}
              <div className="col-span-12 md:col-span-4 bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant hover:border-secondary transition-all">
                <span className="material-symbols-outlined text-secondary text-[40px] mb-4">payments</span>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">Financial Oversight</h3>
                <p className="text-on-surface-variant">Secure fee collection, payroll management, and real-time financial reporting for transparent growth.</p>
              </div>

              {/* Feature 4 */}
              <div className="col-span-12 md:col-span-8 bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant hover:border-secondary transition-all">
                <div className="flex flex-col md:flex-row gap-gutter">
                  <div className="md:w-1/2">
                    <span className="material-symbols-outlined text-secondary text-[40px] mb-4">group</span>
                    <h3 className="font-headline-md text-headline-md text-primary mb-3">Unified Management</h3>
                    <p className="text-on-surface-variant">
                      Holistic profiles for students and faculty. Track performance metrics, professional development, and disciplinary records in one place.
                    </p>
                  </div>
                  <div className="md:w-1/2 flex items-center justify-center">
                    <div className="relative w-full h-32 bg-surface-container rounded-xl overflow-hidden">
                      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #006c49 1px, transparent 0)", backgroundSize: "20px 20px" }} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-secondary font-bold text-headline-md">360° Profiles</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-surface px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
              {[
                { value: "10,000+", label: "Students Managed" },
                { value: "500+", label: "Active Schools" },
                { value: "98%", label: "Uptime" },
                { value: "₦2B+", label: "Fees Processed" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <h3 className="font-display-lg text-display-lg text-primary">{stat.value}</h3>
                  <p className="text-on-surface-variant font-label-md">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-surface-container-low px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Simple, Transparent Pricing</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                Choose the plan that fits your school. All plans include a 30-day free trial.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-gutter max-w-4xl mx-auto">
              {[
                { name: "Starter", price: "Free", schools: "1 School", students: "Up to 100", features: ["Core Management", "Basic Reports", "Email Support"] },
                { name: "Professional", price: "₦150,000", schools: "1 School", students: "Unlimited", features: ["Everything in Starter", "AI Lesson Planner", "Parent Portal", "Fee Management", "Priority Support"] },
                { name: "Enterprise", price: "Custom", schools: "Multiple", students: "Unlimited", features: ["Everything in Professional", "Custom AI Models", "Dedicated Account Manager", "API Access", "On-premise Option"] },
              ].map((plan) => (
                <div key={plan.name} className={`bg-surface-container-lowest p-stack-lg rounded-2xl border ${plan.name === "Professional" ? "border-secondary shadow-lg" : "border-outline-variant"} hover:shadow-xl transition-shadow`}>
                  {plan.name === "Professional" && (
                    <div className="bg-secondary text-on-secondary text-label-sm font-label px-3 py-1 rounded-full inline-block mb-4">Most Popular</div>
                  )}
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">{plan.name}</h3>
                  <p className="font-display-lg text-display-lg text-primary mb-1">{plan.price}</p>
                  <p className="text-label-sm text-on-surface-variant mb-4">{plan.schools} • {plan.students}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-body-md">
                        <span className="material-symbols-outlined text-secondary text-[18px]">check</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/register" className={`block text-center py-3 rounded-xl font-bold transition-all ${plan.name === "Professional" ? "bg-secondary text-on-secondary hover:opacity-90" : "border border-outline-variant text-on-surface hover:bg-surface-container"}`}>
                    {plan.name === "Enterprise" ? "Contact Us" : "Start Free Trial"}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary-container px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto text-center">
            <h2 className="font-headline-lg text-headline-lg text-on-primary mb-4">Ready to Transform Your School?</h2>
            <p className="font-body-lg text-body-lg text-on-primary-container mb-8 max-w-2xl mx-auto">
              Join hundreds of African schools already using EduCore AI to streamline operations and improve student outcomes.
            </p>
            <Link href="/register" className="inline-block bg-secondary text-on-secondary px-10 py-4 rounded-xl font-label-md shadow-lg hover:shadow-xl transition-all">
              Get Started Free
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-surface border-t border-outline-variant px-margin-mobile md:px-margin-desktop py-12">
          <div className="max-w-container-max mx-auto grid md:grid-cols-4 gap-gutter">
            <div>
              <h4 className="font-headline-md text-headline-md text-primary mb-4">EduCore AI</h4>
              <p className="text-body-md text-on-surface-variant">The AI Operating System for African Schools.</p>
            </div>
            <div>
              <h5 className="font-label-md font-bold text-primary mb-3">Product</h5>
              <ul className="space-y-2 text-body-md text-on-surface-variant">
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#">Demo</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-label-md font-bold text-primary mb-3">Company</h5>
              <ul className="space-y-2 text-body-md text-on-surface-variant">
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-label-md font-bold text-primary mb-3">Legal</h5>
              <ul className="space-y-2 text-body-md text-on-surface-variant">
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-container-max mx-auto mt-12 pt-6 border-t border-outline-variant text-center text-body-md text-on-surface-variant">
            &copy; {new Date().getFullYear()} EduCore AI. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  )
}
