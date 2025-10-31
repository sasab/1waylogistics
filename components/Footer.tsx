'use client';

import { motion } from 'framer-motion';
import { Package, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

interface FooterProps {
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
}

export default function Footer({ 
  gradientFrom = 'from-indigo-900', 
  gradientVia = 'via-purple-900', 
  gradientTo = 'to-pink-900' 
}: FooterProps = {}) {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Express & Courier', href: '/services/express-courier' },
    { name: 'Regional Cross-Border', href: '/services/cross-border' },
    { name: 'Air Freight', href: '/services/air-freight' },
    { name: 'Ocean Freight', href: '/services/ocean-freight' },
    { name: 'Warehousing & Storage', href: '/services/warehousing' },
    { name: 'Customs Clearance', href: '/services/customs-clearance' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Track Shipment', href: '/#tracking' },
    { name: 'Get Quote', href: '/quote' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '/quote' },
  ];

  return (
    <footer className={`bg-gradient-to-br ${gradientFrom} ${gradientVia} ${gradientTo} text-white relative overflow-hidden`}>
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [180, 0, 180],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-400 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Stay Updated with Our Newsletter
                </h3>
                <p className="text-blue-200">
                  Get the latest updates on shipping rates, industry news, and exclusive offers
                </p>
              </div>
              <div className="w-full md:w-auto">
                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm focus:outline-none focus:border-blue-400 text-white placeholder-blue-200 min-w-[300px]"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Package className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold">1Way Global</span>
              </div>
              <p className="text-blue-200 mb-6 leading-relaxed">
                Your trusted partner in global logistics solutions. From local deliveries to international freight forwarding.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Instagram, href: '#' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-bold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={service.href}
                      className="text-blue-200 hover:text-white transition-colors flex items-center space-x-2 group"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      <span>{service.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-blue-200 hover:text-white transition-colors flex items-center space-x-2 group"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      <span>{link.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span className="text-blue-200">
                    123 Logistics Avenue<br />
                    Singapore 123456
                  </span>
                </li>
                <li>
                  <a
                    href="tel:+1234567890"
                    className="flex items-center space-x-3 text-blue-200 hover:text-white transition-colors group"
                  >
                    <Phone className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                    <span>+1 (234) 567-890</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@1wayglobal.com"
                    className="flex items-center space-x-3 text-blue-200 hover:text-white transition-colors group"
                  >
                    <Mail className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                    <span>info@1wayglobal.com</span>
                  </a>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="text-sm text-blue-200 mb-2">Business Hours</p>
                <p className="text-white font-semibold">24/7 Customer Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-blue-200 text-sm text-center md:text-left">
                © {currentYear} 1Way Global Logistics. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  Shipping Policy
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
