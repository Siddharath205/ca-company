import React, { useState } from 'react';
import { ChevronDown, ArrowRight, Twitter, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    email: '',
    message: ''
  });

  const faqs = [
    'What industries do you serve?',
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-700 rounded-md flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11h5v-6h4v6h5V7l-7-5z"/>
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
      <section className="py-16 px-6 bg-gradient-to-b from-pink-50/40 to-pink-50/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Let's Chat
          </h1>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We love hearing from you and our team can help answer questions and provide styling advice, so if you have any questions for us, we're here and ready to help in any way we can.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-pink-50/20 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="px-4 py-3.5 rounded-lg border border-gray-300 bg-pink-50/30 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all placeholder:text-gray-500"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="px-4 py-3.5 rounded-lg border border-gray-300 bg-pink-50/30 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all placeholder:text-gray-500"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Contact"
                    value={formData.contact}
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    className="px-4 py-3.5 rounded-lg border border-gray-300 bg-pink-50/30 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all placeholder:text-gray-500"
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="px-4 py-3.5 rounded-lg border border-gray-300 bg-pink-50/30 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all placeholder:text-gray-500"
                  />
                </div>
                
                <textarea
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="5"
                  className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-pink-50/30 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all resize-none placeholder:text-gray-500"
                />
                
                <button 
                  type="submit"
                  className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-3.5 rounded-lg font-semibold transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Send message
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 lg:pt-20">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-3">Chat to support</h3>
                <a 
                  href="mailto:georgia.young@example.com" 
                  className="text-2xl font-bold text-gray-900 hover:text-indigo-700 transition-colors"
                >
                  georgia.young@example.com
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-3">Call us</h3>
                <a 
                  href="tel:+916398424742" 
                  className="text-2xl font-bold text-gray-900 hover:text-indigo-700 transition-colors"
                >
                  +91 6398 424 742
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-4">Connect with us</h3>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-pink-50 border border-gray-200 flex items-center justify-center hover:bg-indigo-700 hover:border-indigo-700 hover:text-white transition-all group"
                  >
                    <Twitter className="w-5 h-5 text-gray-700 group-hover:text-white" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-pink-50 border border-gray-200 flex items-center justify-center hover:bg-indigo-700 hover:border-indigo-700 hover:text-white transition-all group"
                  >
                    <Instagram className="w-5 h-5 text-gray-700 group-hover:text-white" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-pink-50 border border-gray-200 flex items-center justify-center hover:bg-indigo-700 hover:border-indigo-700 hover:text-white transition-all group"
                  >
                    <Facebook className="w-5 h-5 text-gray-700 group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr,400px] gap-12">
            <div>
              <div className="mb-8">
                <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider">• FAQ</span>
                <h2 className="text-5xl font-bold text-gray-900 mt-4">Have Question?</h2>
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <button
                    key={index}
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full flex items-center justify-between py-5 text-left border-b border-gray-200 hover:border-gray-300 transition-colors group"
                  >
                    <span className="text-lg font-medium text-gray-900 group-hover:text-indigo-700 transition-colors">
                      {faq}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ml-4 ${
                        expandedFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-24 self-start">
              <div className="bg-gray-900 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Don't See The Answer You Need?
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  If you don't see the answer to your question, send us a message and we will answer you as soon as possible, within a few hours.
                </p>
                <button className="w-full bg-white text-gray-900 px-6 py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact US
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}