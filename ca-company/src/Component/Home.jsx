import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-[#eef3f8] py-24">
        <div className="max-w-5xl mx-auto text-center px-6">

          <h1 className="text-5xl md:text-6xl font-bold text-[#0b1c6d] leading-tight">
            Simplifying Global Business
            <br />
            <span className="text-blue-500">Expansion</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
            We help startups and enterprises turn international ambitions into real
            success — with end-to-end CA, legal, and business advisory services.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
            <button className="flex items-center justify-center gap-3 bg-[#0b1c6d] text-white px-7 py-3 rounded-xl font-medium hover:bg-[#0a175a] transition">
              Book a Free Consultation
              <span className="bg-cyan-400 text-[#0b1c6d] px-2 py-1 rounded-md">
                <FaArrowRight />
              </span>
            </button>

            <button className="flex items-center justify-center gap-3 bg-white border border-gray-300 text-[#0b1c6d] px-7 py-3 rounded-xl font-medium hover:bg-gray-100 transition">
              Explore Our Services
              <span className="bg-cyan-400 text-[#0b1c6d] px-2 py-1 rounded-md">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </section>

     {/* ABOUT SECTION */}
<section className="bg-[#eaf4ff] p-10">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-2 gap-20 items-start">

      {/* LEFT */}
      <div>
        {/* About us – upar, left */}
        <h1 className=" text-5xl font-semibold font-bold  ">
          About us
        </h1>

        {/* Big Heading */}
        <p className="text-2xl pt-10  uppercase font-bold  ">
          Your Trusted Partner in the CA
          <br />
          Journey Since 2015
        </p>

        <p className="mt-6 text-gray-600">
          10,000+ Students | 1,200+ All India Ranks | 7+ Years of Excellence
        </p>
      </div>

      {/* RIGHT */}
      <div className="text-gray-600 text-base leading-relaxed pt-20 ">
        <p>
          At <span className="font-medium">[Your Firm Name]</span>, we simplify
          finance, taxation, and compliance for individuals, startups, and
          growing businesses.
        </p>

        <p>
          Our mission is simple — deliver accurate, transparent, and
          stress-free financial solutions that help you focus on what truly
          matters: growing your business.
        </p>

        <p>
          With a team of experienced Chartered Accountants, financial analysts,
          and compliance experts, we bring deep domain knowledge and modern
          tools together to offer reliable, fast, and result-driven services.
        </p>
      </div>
    </div>

    {/* STATS */}
    <div className="grid sm:grid-cols-3 gap-16 mt-28 text-center">

      <div>
        <h3 className="text-5xl font-bold">500+</h3>
        <p className="mt-3 text-gray-600">
          Satisfied Clients Served
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-bold">250+</h3>
        <p className="mt-3 text-gray-600">
          Startups Successfully Registered
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-bold">1200+</h3>
        <p className="mt-3 text-gray-600">
          GST Returns Filed Annually
        </p>
      </div>

    </div>

  </div>
</section>

    </>
  );
}

