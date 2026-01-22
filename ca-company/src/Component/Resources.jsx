import React from 'react';

export default function Resources() {
  const resources = [
    {
      category: 'Finance',
      title: 'Business Setup & Expansion',
      description: 'Strategic tax management designed to maximize savings and ensure full compliance.',
      image: '/api/placeholder/400/300'
    },
    {
      category: 'Finance',
      title: 'Business Setup & Expansion',
      description: 'Strategic tax management designed to maximize savings and ensure full compliance.',
      image: '/api/placeholder/400/300'
    },
    {
      category: 'Finance',
      title: 'Business Setup & Expansion',
      description: 'Strategic tax management designed to maximize savings and ensure full compliance.',
      image: '/api/placeholder/400/300'
    },
    {
      category: 'Finance',
      title: 'Business Setup & Expansion',
      description: 'Strategic tax management designed to maximize savings and ensure full compliance.',
      image: '/api/placeholder/400/300'
    },
    {
      category: 'Finance',
      title: 'Business Setup & Expansion',
      description: 'Strategic tax management designed to maximize savings and ensure full compliance.',
      image: '/api/placeholder/400/300'
    },
    {
      category: 'Finance',
      title: 'Business Setup & Expansion',
      description: 'Strategic tax management designed to maximize savings and ensure full compliance.',
      image: '/api/placeholder/400/300'
    },
    {
      category: 'Finance',
      title: 'Business Setup & Expansion',
      description: 'Strategic tax management designed to maximize savings and ensure full compliance.',
      image: '/api/placeholder/400/300'
    },
    {
      category: 'Finance',
      title: 'Business Setup & Expansion',
      description: 'Strategic tax management designed to maximize savings and ensure full compliance.',
      image: '/api/placeholder/400/300'
    },
    {
      category: 'Finance',
      title: 'Business Setup & Expansion',
      description: 'Strategic tax management designed to maximize savings and ensure full compliance.',
      image: '/api/placeholder/400/300'
    },
    {
      category: 'Finance',
      title: 'Business Setup & Expansion',
      description: 'Strategic tax management designed to maximize savings and ensure full compliance.',
      image: '/api/placeholder/400/300'
    },
    {
      category: 'Finance',
      title: 'Business Setup & Expansion',
      description: 'Strategic tax management designed to maximize savings and ensure full compliance.',
      image: '/api/placeholder/400/300'
    },
    {
      category: 'Finance',
      title: 'Business Setup & Expansion',
      description: 'Strategic tax management designed to maximize savings and ensure full compliance.',
      image: '/api/placeholder/400/300'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/30 via-white to-purple-50/20">
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
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4">
            <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
              Resources
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Empower Your Growth with Expert Knowledge
          </h1>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Access free templates, checklists, reports, and other ready-to-use resources to simplify your work and save time.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="overflow-hidden">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Business setup"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-3">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Marketing
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  How to Start a Business in India as a Foreign Company
                </h2>
                
                <p className="text-gray-600 leading-relaxed">
                  Expanding into India offers tremendous growth potential, but understanding the legal and regulatory framework is crucial. In this guide, we break down the incorporation process, required documentation, and key compliance steps to help you start smoothly and confidently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="overflow-hidden">
                  <img 
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {resource.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}