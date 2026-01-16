import React from "react";

export default function ConsultingLandingPage() {
  return (
    <div className="font-sans text-gray-800">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex justify-between items-center gap-20 bg-white">
        <div className="w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Global Consulting for <br />
            <span className="text-indigo-600">Businesses That Intend to Scale</span>
          </h1>

          <p className="mt-6">
            Advigen Global is a multidisciplinary consulting firm helping startups,
            enterprises, and global businesses expand across India, UAE, and the US.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">
              Book a Free Consultation
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg">
              Explore Our Services
            </button>
          </div>
        </div>

        <img src="hero-build.svg" alt="Hero" />
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-indigo-600 font-semibold">• ABOUT</p>
            <h2 className="text-3xl font-semibold mt-3">Who we are</h2>
          </div>

          <div className="leading-relaxed">
            <p>
              We simplify finance, taxation, and compliance for individuals,
              startups, and global businesses.
            </p>
            <p className="mt-4">
              Our mission is to deliver transparent and stress-free advisory
              services that fuel long-term growth.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 mt-20 text-center">
          <div>
            <p className="text-5xl font-bold">500+</p>
            <p>Satisfied Clients Served</p>
          </div>
          <div>
            <p className="text-5xl font-bold">250+</p>
            <p>Startups Registered</p>
          </div>
          <div>
            <p className="text-5xl font-bold">1200+</p>
            <p>GST Returns Filed</p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES (STICKY) ================= */}
      <section className="bg-[#F5F5F5]">
        <div className="p-20 pt-40 space-y-24 min-h-[200vh]">

          <div className="bg-white sticky top-32 z-10 rounded-2xl shadow-sm p-8 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold">Startup & Founder Advisory</h3>
              <ul className="mt-6 space-y-2 text-sm text-gray-600">
                <li>✓ Incorporation & structuring</li>
                <li>✓ Founder equity planning</li>
                <li>✓ Investor readiness</li>
                <li>✓ ESOP frameworks</li>
              </ul>
            </div>
            <img src="sr-img.svg" alt="" />
          </div>

          <div className="bg-white sticky top-32 z-20 rounded-2xl shadow-sm p-8 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold">Virtual CFO & Finance Leadership</h3>
              <ul className="mt-6 space-y-2 text-sm text-gray-600">
                <li>✓ Financial strategy</li>
                <li>✓ Budgeting & forecasting</li>
                <li>✓ MIS reporting</li>
                <li>✓ Cash flow optimization</li>
              </ul>
            </div>
            <img src="sr-img.svg" alt="" />
          </div>

          <div className="bg-white sticky top-32 z-30 rounded-2xl shadow-sm p-8 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold">Compliance & Regulatory Advisory</h3>
              <ul className="mt-6 space-y-2 text-sm text-gray-600">
                <li>✓ GST & tax filings</li>
                <li>✓ Regulatory compliance</li>
                <li>✓ Audit coordination</li>
                <li>✓ Risk management</li>
              </ul>
            </div>
            <img src="sr-img.svg" alt="" />
          </div>

          <div className="h-[60vh]" />
        </div>
      </section>

      {/* ================= BLOG ================= */}
<section className="bg-pink-50 py-24">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <p className="text-indigo-600 text-sm font-semibold">BLOG</p>
    <h2 className="text-3xl font-bold mt-2">
      Your Knowledge Hub for Global <br /> Business Success
    </h2>
    <p className="mt-3 text-gray-600">
      Explore our latest articles on finance, taxation, compliance,
      and business strategy.
    </p>

    {/* Featured blog */}
    <div className="mt-16 bg-white rounded-2xl shadow grid md:grid-cols-2 overflow-hidden">
      <img src="cali.svg" alt="Blog" className="h-full w-full object-cover" />
      <div className="p-8 text-left">
        <h3 className="text-xl font-semibold">
          How to Start a Business in India as a Foreign Company
        </h3>
        <p className="mt-4 text-sm text-gray-600">
          Foreign companies can establish a presence in India by
          registering as a liaison office, branch office, or wholly
          owned subsidiary.
        </p>
        <p className="mt-6 text-xs text-gray-400">COMPANY · OCT 10, 2025</p>
      </div>
    </div>

    {/* Blog cards */}
    <div className="grid md:grid-cols-3 gap-8 mt-12">
      <div className="bg-white rounded-xl shadow">
        <img src="cali.svg" alt="" />
        <div className="p-4 text-left">
          <h4 className="font-semibold">Business Setup & Expansion</h4>
          <p className="text-xs text-gray-400 mt-2">COMPANY · OCT 08, 2025</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow">
        <img src="cali.svg" alt="" />
        <div className="p-4 text-left">
          <h4 className="font-semibold">Business Setup & Expansion</h4>
          <p className="text-xs text-gray-400 mt-2">COMPANY · OCT 08, 2025</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow">
        <img src="cali.svg" alt="" />
        <div className="p-4 text-left">
          <h4 className="font-semibold">Business Setup & Expansion</h4>
          <p className="text-xs text-gray-400 mt-2">COMPANY · OCT 08, 2025</p>
        </div>
      </div>
    </div>

    <button className="mt-12 border border-indigo-600 text-indigo-600 px-6 py-2 rounded-lg">
      Explore More →
    </button>
  </div>
</section>

{/* ================= TESTIMONIALS ================= */}
<section className="bg-pink-50 py-24">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <p className="text-indigo-600 text-sm font-semibold">TESTIMONIALS</p>
    <h2 className="text-3xl font-bold mt-2">What Our Clients Say</h2>

    <div className="grid md:grid-cols-4 gap-6 mt-14">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="bg-white rounded-xl p-4 text-sm shadow">
          <p>
            The team was extremely professional and supportive.
            They helped us navigate complex compliance smoothly.
          </p>
          <p className="mt-4 font-semibold">Santosh</p>
          <p className="text-xs text-gray-400">Director</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ================= LET’S CHAT ================= */}
<section className="bg-pink-50 py-24">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
    <div>
      <h2 className="text-3xl font-bold">Let’s Chat</h2>
      <p className="mt-3 text-gray-600">
        We’re here to help. Fill out the form and our team will
        reach out to you shortly.
      </p>

      <form className="mt-8 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input className="border p-3 rounded" placeholder="First Name" />
          <input className="border p-3 rounded" placeholder="Last Name" />
        </div>
        <input className="w-full border p-3 rounded" placeholder="Email" />
        <textarea
          className="w-full border p-3 rounded"
          placeholder="Message"
        />
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">
          Send message →
        </button>
      </form>
    </div>

    <div>
      <h4 className="font-semibold">Chat to support</h4>
      <p className="mt-2 text-sm">georgia.young@example.com</p>
      <p className="mt-2 text-sm">+91 6389 424 742</p>

      <h4 className="font-semibold mt-6">Connect with us</h4>
      <div className="flex gap-4 mt-3">
        <div className="w-8 h-8 bg-gray-200 rounded-full" />
        <div className="w-8 h-8 bg-gray-200 rounded-full" />
        <div className="w-8 h-8 bg-gray-200 rounded-full" />
      </div>
    </div>
  </div>
</section>

{/* ================= FAQ ================= */}
<section className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
    <div>
      <p className="text-indigo-600 text-sm font-semibold">FAQ</p>
      <h2 className="text-3xl font-bold mt-2">Have Question?</h2>

      <div className="mt-8 space-y-4">
        {Array(6).fill(0).map((_, i) => (
          <div key={i} className="border rounded-lg p-4">
            What industries do you serve?
          </div>
        ))}
      </div>
    </div>

    <div className="bg-gray-50 rounded-2xl p-8">
      <h3 className="font-semibold text-lg">
        Don’t See the Answer You Need?
      </h3>
      <p className="mt-3 text-sm text-gray-600">
        If you didn’t see an answer to your question,
        you can contact us and we’ll respond as soon as possible.
      </p>
      <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg">
        Contact Us
      </button>
    </div>
  </div>
</section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-indigo-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          © 2026 Advigen Global. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
