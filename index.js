export default function Home() {
  return (
    <div className="bg-[#0a0f1a] text-white min-h-screen flex flex-col">
      <header className="py-4 max-w-6xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-semibold">Rich Capital</h1>
        <nav className="space-x-6">
          <a href="#services" className="hover:text-gray-300">Services</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </nav>
      </header>

      <section className="flex-1 flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          Unlock 0% Business Funding
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Fast, flexible capital for entrepreneurs ready to grow.
        </p>
        <a
          href="#apply"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition"
        >
          Apply Now
        </a>

        {/* Trust Logos (optional) */}
        <div className="flex space-x-6 mt-12">
          <img src="/trust1.png" alt="Trusted by Logo 1" className="h-8" />
          <img src="/trust2.png" alt="Trusted by Logo 2" className="h-8" />
        </div>
      </section>

      <section id="services" className="bg-[#0f1626] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h3 className="text-3xl font-bold">What We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Startup Capital', desc: 'Get approved for up to $150k at 0% interest.' },
              { title: 'Credit Building', desc: 'Establish and scale your business credit fast.' },
              { title: 'Funding Strategy', desc: 'Tailored funding plans to power your growth.' }
            ].map((s) => (
              <div key={s.title} className="text-left space-y-2">
                <h4 className="text-xl font-semibold">{s.title}</h4>
                <p className="text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
