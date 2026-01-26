import React, { useState } from 'react';
import { ChevronDown, Phone, Mail, MessageCircle, Send } from 'lucide-react';

export default function AboutUs() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const stats = [
    { number: '500+', label: 'No.of client Served' },
    { number: '250+', label: 'No.Year-Over-Year Growth' },
    { number: '1200+', label: 'Still there in Market' }
  ];

  const coreTeam = [
    {
      name: 'Umang Agarwal',
      role: 'Lorem & ipsum sit sit dolor consectetur adipiscing',
      image: '/api/placeholder/150/150',
      bio: 'It was by far the cleanest and all group were calling our. It is indeed a clean and all group were calling our. It is indeed are getting 24 hours response and usually to our 24 hours which we got a nice fully. Simply they can look and all groups.'
    },
    {
      name: 'Umang Agarwal',
      role: 'Lorem & ipsum sit sit dolor consectetur adipiscing',
      image: '/api/placeholder/150/150',
      bio: 'It was by far the cleanest and all group were calling our. It is indeed a clean and all group were calling our. It is indeed are getting 24 hours response and usually to our 24 hours which we got a nice fully. Simply they can look and all groups.'
    },
    {
      name: 'Umang Agarwal',
      role: 'Lorem & ipsum sit sit dolor consectetur adipiscing',
      image: '/api/placeholder/150/150',
      bio: 'It was by far the cleanest and all group were calling our. It is indeed a clean and all group were calling our. It is indeed are getting 24 hours response and usually to our 24 hours which we got a nice fully. Simply they can look and all groups.'
    }
  ];

  const salesPartners = [
    { name: 'Mr. Shivam Raj', role: 'Noida Sector 24 Uttar Pradesh', image: '/api/placeholder/150/150' },
    { name: 'Mr. Shivam Raj', role: 'Noida Sector 24 Uttar Pradesh', image: '/api/placeholder/150/150' },
    { name: 'Mr. Shivam Raj', role: 'Noida Sector 24 Uttar Pradesh', image: '/api/placeholder/150/150' },
    { name: 'Mr. Shivam Raj', role: 'Noida Sector 24 Uttar Pradesh', image: '/api/placeholder/150/150' }
  ];

  const testimonials = [
    {
      name: 'Santosh',
      rating: 5,
      text: 'It is by far the cleanest. There are on time. But they only 1 was, it is really good and fast service.'
    },
    {
      name: 'Santosh',
      rating: 5,
      text: 'It is by far the cleanest. There are on time. But they only 1 was, it is really good and fast service.'
    },
    {
      name: 'Santosh',
      rating: 5,
      text: 'It is by far the cleanest. There are on time. But they only 1 was, it is really good and fast service.'
    },
    {
      name: 'Santosh',
      rating: 5,
      text: 'It is by far the cleanest. There are on time. But they only 1 was, it is really good and fast service.'
    },
    {
      name: 'Santosh',
      rating: 5,
      text: 'It is by far the cleanest. There are on time. But they only 1 was, it is really good and fast service.'
    },
    {
      name: 'Santosh',
      rating: 5,
      text: 'It is by far the cleanest. There are on time. But they only 1 was, it is really good and fast service.'
    },
    {
      name: 'Santosh',
      rating: 5,
      text: 'It is by far the cleanest. There are on time. But they only 1 was, it is really good and fast service.'
    },
    {
      name: 'Santosh',
      rating: 5,
      text: 'It is by far the cleanest. There are on time. But they only 1 was, it is really good and fast service.'
    }
  ];

  const faqs = [
    'What industries do you serve?',
    'What industries do you serve?',
    'What industries do you serve?',
    'What industries do you serve?',
    'What industries do you serve?',
    'What industries do you serve?'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50/30 via-white to-pink-50/20">
      {/* Navigation */}
      <nav className="bg-[#ffffff] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-700 rounded-md flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11h5v-6h4v6h5V7l-7-5z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">logoipsum®</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-sm font-medium text-gray-700 hover:text-indigo-600">Home</a>
              <a href="#services" className="text-sm font-medium text-gray-700 hover:text-indigo-600">Services</a>
              <a href="#company" className="text-sm font-medium text-gray-700 hover:text-indigo-600">Company</a>
              <a href="#resources" className="text-sm font-medium text-gray-700 hover:text-indigo-600">Resources</a>
              <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-indigo-600">Contact</a>
            </div>

            <button className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors">
              Let's talk
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-[#FEEDEF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                About us
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Partner in the CA Journey Since 2015
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At M/S. Jhalani Associates & Company, we are proudly your universal
                traditional and versatile legal team specialized in tax litigations and
                its laws. The 7 partners supported are qualified Senior executives associated under
                the statutory requirements under the applicable Indian laws (such as is straight obligations)
                and maintain meticulous tax returns to this front. Read what measures has implemented.
              </p>
            </div>

            <div>
              <p className="text-gray-600 leading-relaxed">
                At M/S. Jhalani Associates & Company, we are proudly your universal traditional and versatile legal
                team specialized in tax litigations and its laws. The 7 partners supported are qualified Senior executives
                associated under the statutory requirements under the applicable Indian laws (such as is straight obligations)
                and maintain meticulous tax returns to this front. Read what measures has implemented.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 bg-[#FEEDEF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wrapper with Background */}
      <div className="bg-[#FEEDEF]">

        {/* Why We Are Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

              {/* Text */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Why We Are
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At M/S Jhalani Associates & Company, each member understands the
                  complex requirements posed by diverse organizational structures,
                  industries, and regulatory frameworks.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We believe in straightforward obligations towards our clients by
                  aligning expertise, capability, and methodical execution.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  In short, we deliver clarity, compliance, and confidence.
                </p>
              </div>

              {/* Image */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img
                  src="/api/placeholder/600/400"
                  alt="Team working"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Our Mission (Text Left, Image Right) */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Text */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our mission is to provide ethical, reliable, and professional
                  advisory services rooted in strong academic and practical
                  foundations.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We aim to support individuals, businesses, and institutions with
                  precise guidance and long-term value.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We focus on trust, transparency, and excellence.
                </p>
              </div>

              {/* Image */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img
                  src="/api/placeholder/600/400"
                  alt="Our Mission"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision Section (Image Left, Text Right) */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Image */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img
                  src="/api/placeholder/600/400"
                  alt="Our Vision"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our vision is to be a trusted professional firm recognized for
                  integrity, expertise, and client-centric solutions.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We aspire to create lasting impact by enabling informed decisions
                  and sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Core & Advisory Team */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">CORE & ADVISORY TEAM</h2>
          <p className="text-gray-600 mb-12">25+ CA, Adv & Other Incorporation</p>

          <div className="space-y-12">
            {coreTeam.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="grid md:grid-cols-[200px,1fr] gap-8">
                  <div className="flex flex-col items-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mb-4"
                    />
                    <h4 className="text-xl font-bold text-gray-900 text-center">{member.name}</h4>
                    <p className="text-sm text-gray-600 text-center mt-2">{member.role}</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Sales Partners */}
      <section className="py-16 px-6 bg-pink-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technology Team */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Technology & Sales Partners</h3>
              <div className="grid grid-cols-2 gap-6">
                {salesPartners.map((partner, index) => (
                  <div key={index} className="text-center">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                    />
                    <h4 className="font-bold text-gray-900">{partner.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{partner.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Channel Tech */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Channel Tech</h3>
              <div className="grid grid-cols-2 gap-6">
                {salesPartners.map((partner, index) => (
                  <div key={index} className="text-center">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                    />
                    <h4 className="font-bold text-gray-900">{partner.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{partner.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border-2 border-dashed border-gray-300"
              >
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">{testimonial.name}</h4>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-amber-400">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Chat CTA */}
      <section className="py-16 px-6 bg-pink-50/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Chat</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We don't just talk boom, we take action too. A call of action questions are present asking to fill-in up for us. So if you want, yes please do ask us. It's important as it work for you!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Contact Us</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none"
                  />
                </div>

                <input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none"
                />

                <textarea
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-indigo-700 hover:bg-indigo-800 text-white py-3.5 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  Send message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-pink-50 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Chat to support</h4>
                <a href="mailto:gporgiavaoung@example.com" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                  gporgiavaoung@example.com
                </a>
              </div>

              <div className="bg-pink-50 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Call us</h4>
                <a href="tel:+916398424742" className="text-gray-900 font-bold text-xl">
                  +91 6398 424 742
                </a>
              </div>

              <div className="bg-pink-50 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-4">Connect with us</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:border-indigo-500 transition-colors">
                    <Phone className="w-5 h-5 text-gray-600" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:border-indigo-500 transition-colors">
                    <Mail className="w-5 h-5 text-gray-600" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:border-indigo-500 transition-colors">
                    <MessageCircle className="w-5 h-5 text-gray-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-pink-50/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Have Question?</h2>

              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <button
                    key={index}
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full flex items-center justify-between py-4 px-5 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all text-left"
                  >
                    <span className="text-gray-700 font-medium">{faq}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform ${expandedFaq === index ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Don't See The Answer You Need?
              </h3>
              <p className="text-gray-300 mb-6">
                It's only 2 or 3 clicks away to the answer to your question, send us a message and we usually reply as soon as we read your message and fully understand.
              </p>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}