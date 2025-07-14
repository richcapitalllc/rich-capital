import React from "react";

export default function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <section className="text-center py-24 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          We get you funded at 0% or you don’t pay Rich Capital
        </h1>
        <p className="text-lg md:text-xl mb-8">
          500K+ businesses helped • $1B+ funded
        </p>
        <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded">
          Get 0% Funding
        </a>
      </section>

      <section className="bg-white text-gray-900 py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">How It Works</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-5xl mb-4">📋</div>
            <h3 className="font-bold text-xl mb-2">1. Optimize Profile</h3>
            <p>We help you polish your borrower profile to qualify for the best terms.</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🏦</div>
            <h3 className="font-bold text-xl mb-2">2. Invite 0% Offers</h3>
            <p>Our network of lenders competes to give you 0% interest deals.</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="font-bold text-xl mb-2">3. Secure Funding</h3>
            <p>You get fast capital with no interest and no upfront risk.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 text-gray-900 py-16 px-6">
        <h2 className="text-2xl text-center font-semibold mb-10">Backed by Top Lending Partners</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-32 h-16 bg-gray-300 rounded"></div>
          <div className="w-32 h-16 bg-gray-300 rounded"></div>
          <div className="w-32 h-16 bg-gray-300 rounded"></div>
          <div className="w-32 h-16 bg-gray-300 rounded"></div>
        </div>
      </section>

      <section className="bg-white text-gray-900 py-20 px-6">
        <h2 className="text-2xl text-center font-semibold mb-10">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h3 className="font-semibold">How is 0% funding possible?</h3>
            <p>We leverage a competitive bidding network of lenders that offer promotional 0% interest periods to acquire new clients.</p>
          </div>
          <div>
            <h3 className="font-semibold">Do I pay anything upfront?</h3>
            <p>No. If we can’t secure 0% interest funding, you don’t pay anything.</p>
          </div>
          <div>
            <h3 className="font-semibold">Is this a loan or a line of credit?</h3>
            <p>It depends on what you qualify for—most commonly it’s revolving credit at 0% interest.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-blue-600 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Schedule a Free Consultation</h2>
        <p className="mb-6">Let’s talk about how Rich Capital can get you funded—fast and interest-free.</p>
        <a href="mailto:info@richcapital.biz" className="bg-white text-blue-600 font-semibold py-3 px-6 rounded">
          Email Us Now
        </a>
      </section>

      <footer className="bg-gray-800 text-gray-400 text-center py-6 text-sm">
        <p>© {new Date().getFullYear()} Rich Capital LLC. All rights reserved.</p>
        <p className="mt-2">Referral disclosure: We connect clients with financial institutions and may earn a referral fee. This does not affect your cost.</p>
      </footer>
    </div>
  );
}