import React, { useState } from 'react';
import { ChevronDown, Phone, Mail, MessageCircle, Send } from 'lucide-react';

export default function LitigationServicePage() {
    const [expandedService, setExpandedService] = useState(null);
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const services = [
        {
            title: "Accountant & Scrutiny Proceedings",
            description: "Handling complex and assessment proceedings for income tax, VAT, CST free with accuracy. We can handle you with assessments in every step."
        },
        {
            title: "Appeals & Representation",
            description: "Expert representation before tax tribunals and appellate authorities to protect your interests."
        },
        {
            title: "Search, Return & Survey Cases",
            description: "Comprehensive support during tax department searches, surveys and return filing procedures."
        },
        {
            title: "GST Show Cause Notices (SCN) & Audit Defense",
            description: "Strategic defense against GST notices and comprehensive audit support."
        },
        {
            title: "Tax Dispute Resolution & Strategy",
            description: "Proactive strategies to resolve tax disputes efficiently and minimize financial impact."
        }
    ];

    const testimonials = [
        {
            name: "Santosh",
            rating: 5,
            text: "It was an outstanding within the fees. After a long period of waiting they was on time. But the only it was, it was really good."
        },
        {
            name: "Santosh",
            rating: 5,
            text: "In I've read 3 months. They was on time. But they only it was, it's really good. They always want to help me."
        },
        {
            name: "Santosh",
            rating: 5,
            text: "In I've read 3 months. They was on time for only it was, it's really good and fast service."
        },
        {
            name: "Santosh",
            rating: 5,
            text: "In I've had 3 months. They was on time for only it was, it's really good. I really recommend."
        }
    ];

    const faqs = [
        "What industries do you serve?",
        "What industries do you serve?",
        "What industries do you serve?",
        "What industries do you serve?",
        "What industries do you serve?",
        "What industries do you serve?",
        "What industries do you serve?"
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-rose-50">
            {/* Hero Section */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-block">
                                <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase bg-indigo-50 px-3 py-1.5 rounded-full">
                                    Legal Excellence
                                </span>
                            </div>

                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
                                    Litigation Support in
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                    Direct & Indirect Taxes
                                </span>
                            </h1>

                            <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                                At M/S. Jhalani Associates & Company, we are proudly your universal traditional and
                                versatile legal team specialized in tax litigations and its laws. The 7 partners supported are
                                qualified Senior executives associated under the statutory requirements under the applicable
                                Indian laws (such as is straight obligations) and maintain meticulous tax returns to this front.
                                Read what measures has implemented.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200/40 to-purple-200/40 rounded-3xl blur-3xl"></div>
                            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200/60">
                                <img
                                    src="/api/placeholder/600/400"
                                    alt="Professional working on laptop"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-6 bg-gradient-to-b from-white to-slate-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">Our Services Include</h2>

                    <div className="space-y-3">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-indigo-200"
                            >
                                <button
                                    onClick={() => setExpandedService(expandedService === index ? null : index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                                >
                                    <span className="font-semibold text-slate-900">{service.title}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-indigo-600 transition-transform duration-300 ${expandedService === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${expandedService === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <p className="px-6 pb-5 text-slate-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Can Do Section */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-4">
                        <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase">Other Services</span>
                    </div>

                    <h2 className="text-4xl font-bold text-slate-900 text-center mb-6">
                        What We Can Do<br />for You
                    </h2>

                    <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16">
                        Expert financial, taxation, and service setup for diverse sectors to help showcase and enhance grow we will craft with us.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={i}
                                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100"
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src="/api/placeholder/400/300"
                                        alt="Service illustration"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                        Litigation Support in Direct & Indirect Taxes
                                    </h3>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-6 bg-gradient-to-b from-rose-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-4">
                        <span className="text-xs font-bold tracking-wider text-rose-600 uppercase">Testimonials</span>
                    </div>

                    <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
                        What Our Clients Say
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {testimonials.map((testimonial, i) => (
                            <div
                                key={i}
                                className="bg-white p-6 rounded-xl border-2 border-dashed border-slate-300 hover:border-indigo-400 transition-all duration-300"
                            >
                                <div className="mb-4">
                                    <h4 className="font-bold text-slate-900 mb-2">{testimonial.name}</h4>
                                    <div className="flex gap-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <span key={i} className="text-amber-400">★</span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {testimonial.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-6 bg-gradient-to-b from-white to-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Let's Chat</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            We don't just talk boom, we take action too. A call of action questions are present asking to
                            fill-in up for us. So if you want, yes please do ask us. It's important as it work for you!
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Us</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                                    />
                                </div>

                                <input
                                    type="tel"
                                    placeholder="Phone"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                                />

                                <textarea
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all resize-none"
                                />

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3.5 rounded-lg font-semibold shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/40 flex items-center justify-center gap-2"
                                >
                                    Send message
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
                                <h4 className="font-bold text-slate-900 mb-4">Chat to support</h4>
                                <a href="mailto:gporgiavaoung@example.com" className="text-indigo-600 hover:text-indigo-700 font-semibold flex items-center gap-2">
                                    <Mail className="w-5 h-5" />
                                    gporgiavaoung@example.com
                                </a>
                            </div>

                            <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl p-8 border border-rose-100">
                                <h4 className="font-bold text-slate-900 mb-4">Call us</h4>
                                <a href="tel:+916398424742" className="text-rose-600 hover:text-rose-700 font-bold text-xl flex items-center gap-2">
                                    <Phone className="w-5 h-5" />
                                    +91 6398 424 742
                                </a>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border border-green-100">
                                <h4 className="font-bold text-slate-900 mb-4">Connect with us</h4>
                                <div className="flex gap-4">
                                    <a href="#" className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 hover:border-green-500 flex items-center justify-center transition-all hover:shadow-lg">
                                        <Phone className="w-5 h-5 text-slate-600" />
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 hover:border-green-500 flex items-center justify-center transition-all hover:shadow-lg">
                                        <Mail className="w-5 h-5 text-slate-600" />
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 hover:border-green-500 flex items-center justify-center transition-all hover:shadow-lg">
                                        <MessageCircle className="w-5 h-5 text-slate-600" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase">FAQ</span>
                            <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6">Have Question?</h2>

                            <div className="space-y-3">
                                {faqs.map((faq, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                                        className="w-full flex items-center justify-between py-4 px-5 bg-white rounded-lg border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all text-left"
                                    >
                                        <span className="text-slate-700 font-medium">{faq}</span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-slate-400 transition-transform flex-shrink-0 ml-4 ${expandedFaq === index ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white lg:sticky lg:top-24">
                            <h3 className="text-2xl font-bold mb-4">
                                Don't See The Answer You Need?
                            </h3>
                            <p className="text-slate-300 mb-6">
                                It's only 2 or 3 click away to the answer to your question, send us a message and we usually reply as soon as we read your message and fully understand.
                            </p>
                            <button className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors w-full">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );      
}