import React from 'react'

function Footer() {
    return (
        <div>

            <footer className="bg-[#2D1CE5] text-white">
                <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-6 gap-10">

                    {/* Logo */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2">
                            <img src="/logo.svg" alt="logo" className="h-8" />

                        </div>
                    </div>

                    {/* WEBSITE */}
                    <div>
                        <h4 className="uppercase text-sm font-semibold mb-4">Website</h4>
                        <ul className="space-y-2 text-sm text-indigo-100">
                            <li>Home</li>
                            <li>About</li>
                            <li>Awards</li>
                            <li>Career</li>
                            <li>Certificate</li>
                        </ul>
                    </div>

                    {/* SERVICES */}
                    <div>
                        <h4 className="uppercase text-sm font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-indigo-100">
                            <li>Start-up & Growth Advisory</li>
                            <li>Accounting & Financial Management</li>
                            <li>Taxation & Compliance Consulting</li>
                            <li>Corporate & Legal Solutions</li>
                            <li>Audit & Assurance Services</li>
                        </ul>
                    </div>

                    {/* RESOURCES */}
                    <div>
                        <h4 className="uppercase text-sm font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm text-indigo-100">
                            <li>Blog</li>
                            <li>Guide</li>
                            <li>Documents</li>
                            <li>Case Study</li>
                        </ul>
                    </div>

                    {/* SUPPORT */}
                    <div>
                        <h4 className="uppercase text-sm font-semibold mb-4">Support</h4>
                        <ul className="space-y-2 text-sm text-indigo-100">
                            <li>Contact Us</li>
                            <li>FAQs</li>
                            <li>Help Center</li>
                        </ul>
                    </div>

                    {/* LEGAL */}
                    <div>
                        <h4 className="uppercase text-sm font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-indigo-100">
                            <li>Terms of Services</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom copyright */}
                <div className="border-t border-indigo-400/30 py-6 text-center text-sm text-indigo-200">
                    © 2026 Advigen Global. All rights reserved.
                </div>
            </footer>
        </div>
    )
}

export default Footer