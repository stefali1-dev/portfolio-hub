'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className={`text-xl font-bold text-white transform transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Stefan Leustean
            </h1>
            
            {/* Desktop Navigation */}
            <div className={`hidden md:flex space-x-8 transform transition-all duration-700 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <a href="#home" className="text-gray-300 hover:text-amber-300 transition-all duration-300 hover:scale-105 relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="text-gray-300 hover:text-amber-300 transition-all duration-300 hover:scale-105 relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#projects" className="text-gray-300 hover:text-amber-300 transition-all duration-300 hover:scale-105 relative group">
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-gray-300 hover:text-amber-300 transition-all duration-300 hover:scale-105 relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-amber-300 transition-colors duration-300 p-2"
              aria-label="Toggle mobile menu"
            >
              <div className="space-y-1.5">
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="py-4 space-y-4 border-t border-gray-800 mt-4">
              <a href="#home" className="block text-gray-300 hover:text-amber-300 transition-colors duration-300 py-2">
                Home
              </a>
              <a href="#about" className="block text-gray-300 hover:text-amber-300 transition-colors duration-300 py-2">
                About
              </a>
              <a href="#projects" className="block text-gray-300 hover:text-amber-300 transition-colors duration-300 py-2">
                Projects
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-amber-300 transition-colors duration-300 py-2">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center">
            <h2 className={`text-5xl md:text-6xl font-bold text-white mb-6 transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              Full-Stack{' '}
              <span className="text-amber-400 inline-block hover:scale-105 transition-transform duration-300">
                Engineer
              </span>
            </h2>
            <p className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              Building scalable applications with{" "}
              <span className="text-amber-300 font-medium hover:text-amber-200 transition-colors duration-300 cursor-default">Spring Boot</span>,{" "}
              <span className="text-amber-300 font-medium hover:text-amber-200 transition-colors duration-300 cursor-default">Angular</span>, and{" "}
              <span className="text-amber-300 font-medium hover:text-amber-200 transition-colors duration-300 cursor-default">AWS</span>
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <a
                href="#projects"
                className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25 transform active:scale-95"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-gray-600 hover:border-amber-400 text-gray-300 hover:text-amber-300 hover:bg-gray-800/50 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 transform active:scale-95"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* About Preview Section */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className={`grid md:grid-cols-2 gap-12 items-center transform transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-6 relative">
                About Me
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-400 rounded-full"></div>
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Curious full-stack engineer with expertise in web technologies.
              </p>

              <a
                href="#about"
                className="inline-flex items-center text-amber-400 hover:text-amber-300 font-medium transition-all duration-300 hover:translate-x-2 group"
              >
                Learn more about my background 
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-[1.02]">
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 animate-pulse"></span>
                Technologies I Work With
              </h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="text-amber-400 font-medium text-sm uppercase tracking-wider">Frontend</div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="hover:text-amber-300 transition-colors duration-300 cursor-default">Angular</li>
                    <li className="hover:text-amber-300 transition-colors duration-300 cursor-default">React / Next.js</li>
                    <li className="hover:text-amber-300 transition-colors duration-300 cursor-default">Tailwind CSS</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="text-amber-400 font-medium text-sm uppercase tracking-wider">Backend & Cloud</div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="hover:text-amber-300 transition-colors duration-300 cursor-default">Spring Boot</li>
                    <li className="hover:text-amber-300 transition-colors duration-300 cursor-default">AWS Services</li>
                    <li className="hover:text-amber-300 transition-colors duration-300 cursor-default">PostgreSQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className={`grid md:grid-cols-3 gap-8 transform transition-all duration-1000 delay-1200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="group bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-700 hover:border-amber-400/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-amber-400/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-amber-400/20 transition-colors duration-300">
                  <div className="w-6 h-6 border-2 border-amber-400 rounded-sm"></div>
                </div>
                <h4 className="text-xl font-semibold text-white group-hover:text-amber-300 transition-colors duration-300">
                  Recent Projects
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Explore my latest work
                </p>
                <a
                  href="#projects"
                  className="inline-flex items-center text-amber-400 hover:text-amber-300 font-medium transition-all duration-300 hover:translate-x-2 group"
                >
                  View Projects 
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
            
            <div className="group bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-700 hover:border-amber-400/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-amber-400/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-amber-400/20 transition-colors duration-300">
                  <div className="w-6 h-6 border-2 border-amber-400 rounded-full"></div>
                </div>
                <h4 className="text-xl font-semibold text-white group-hover:text-amber-300 transition-colors duration-300">
                  Technical Blog
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Insights from my development journey
                </p>
                <a
                  href="/blog"
                  className="inline-flex items-center text-amber-400 hover:text-amber-300 font-medium transition-all duration-300 hover:translate-x-2 group"
                >
                  Read Articles 
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
            
            <div className="group bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-700 hover:border-amber-400/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-amber-400/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-amber-400/20 transition-colors duration-300">
                  <div className="w-6 h-6 border-2 border-amber-400 border-dashed rounded-full"></div>
                </div>
                <h4 className="text-xl font-semibold text-white group-hover:text-amber-300 transition-colors duration-300">
                  Let's Connect
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Open to new opportunities and interesting conversations
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-amber-400 hover:text-amber-300 font-medium transition-all duration-300 hover:translate-x-2 group"
                >
                  Contact Me 
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
            © 2025{' '}
            <span className="text-amber-400 hover:text-amber-300 transition-colors duration-300">Stefan Leustean</span>
            . Built with Next.js and deployed on AWS.
          </p>
        </div>
      </footer>
    </div>
  );
}
