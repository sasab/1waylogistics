'use client';

import { motion } from 'framer-motion';
import { Truck, Clock, DollarSign, CheckCircle, ArrowRight, Globe, MapPin, Phone, Shield, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CrossBorderPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/trucks.png)',
              opacity: 0.7
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 opacity-30" />
          <div className="absolute inset-0 opacity-20">
            <motion.div
              animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
              transition={{ duration: 20, repeat: Infinity }}
              className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">
              <Truck className="w-6 h-6" />
              <span className="font-semibold">Regional Cross-Border Trucking</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Seamless Regional Connectivity
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto mb-8">
              Compliant cross-border trucking across Singapore, Malaysia, and Thailand with expert handling
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center space-x-2 bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition-all shadow-xl"
              >
                <span>Get Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Expert Cross-Border Solutions
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our regional cross-border trucking service specializes in seamless cargo movement between 
                Singapore, Malaysia, and Thailand. With dedicated teams and trusted vendor networks, we ensure 
                hassle-free customs clearance and on-time deliveries across ASEAN borders.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We handle all complexities of cross-border logistics including customs documentation, regulatory 
                compliance, duty payments, and route optimization. Your cargo moves smoothly without delays or 
                complications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Highlights</h3>
              <div className="space-y-4">
                {[
                  'Direct routes: Singapore ↔ Malaysia ↔ Thailand',
                  'Full customs clearance assistance',
                  'Dedicated cross-border specialists',
                  'Real-time border crossing updates',
                  'Temperature-controlled options available',
                  'Consolidation and LCL services',
                  'Door-to-door delivery across regions',
                  'Flexible scheduling and pickup',
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Delivery Times */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transit Timeframes
            </h2>
            <p className="text-gray-600 text-lg">
              Reliable delivery schedules across all major routes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Singapore ↔ Malaysia',
                time: '1-2 Days',
                description: 'Fast cross-border delivery between Singapore and major Malaysian cities',
                routes: 'KL, Penang, JB',
                icon: Truck,
                gradientFrom: 'from-purple-500',
                gradientTo: 'to-purple-600',
                bgColor: 'bg-purple-100',
                textColor: 'text-purple-700',
              },
              {
                title: 'Singapore ↔ Thailand',
                time: '3-4 Days',
                description: 'Direct trucking service from Singapore to Thailand via Malaysia',
                routes: 'Bangkok, Phuket',
                icon: MapPin,
                gradientFrom: 'from-pink-500',
                gradientTo: 'to-pink-600',
                bgColor: 'bg-pink-100',
                textColor: 'text-pink-700',
              },
              {
                title: 'Malaysia ↔ Thailand',
                time: '2-3 Days',
                description: 'Efficient land transport between Malaysia and Thailand',
                routes: 'Border regions',
                icon: Globe,
                gradientFrom: 'from-purple-500',
                gradientTo: 'to-purple-600',
                bgColor: 'bg-purple-100',
                textColor: 'text-purple-700',
              },
            ].map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 h-full relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${tier.gradientFrom} ${tier.gradientTo} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.gradientFrom} ${tier.gradientTo} text-white flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <tier.icon className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.title}</h3>
                    <div className="text-4xl font-bold text-purple-600 mb-4">{tier.time}</div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{tier.description}</p>
                    <div className={`inline-flex items-center ${tier.bgColor} ${tier.textColor} px-4 py-2 rounded-full font-semibold text-sm`}>
                      {tier.routes}
                    </div>
                  </div>
                  <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${tier.gradientFrom} ${tier.gradientTo} rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500`} />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 inline-block">
              <p className="text-gray-700 font-semibold flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-yellow-600" />
                <span>Transit times and rates are negotiable based on cargo volume and frequency</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Customs & Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Customs & Compliance Expertise
            </h2>
            <p className="text-gray-600 text-lg">
              We handle all regulatory requirements for seamless cross-border movement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: FileText,
                title: 'Documentation Support',
                items: [
                  'Commercial invoices and packing lists',
                  'Certificates of origin',
                  'Import/export permits',
                  'Customs declarations (K1, K2, K3, K8)',
                  'Dangerous goods documentation',
                  'Phytosanitary certificates',
                ],
                gradient: 'from-purple-500 to-purple-600',
              },
              {
                icon: Shield,
                title: 'Compliance Services',
                items: [
                  'ASEAN customs regulations',
                  'Duty and tax calculation',
                  'Harmonized System (HS) code classification',
                  'ATA Carnet processing',
                  'Restricted goods handling',
                  'Post-clearance audit support',
                ],
                gradient: 'from-purple-500 to-pink-600',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${service.gradient} rounded-3xl p-8 text-white`}
              >
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Structure */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-gray-600 text-lg">
              Clear rates with no hidden charges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { title: 'Transport Costs', items: ['Base trucking rate', 'Fuel surcharge', 'Toll fees', 'Border crossing fees'] },
              { title: 'Customs Charges', items: ['Import/export duties', 'Processing fees', 'Inspection charges', 'Documentation fees'] },
              { title: 'Value-Added', items: ['Insurance coverage', 'Warehousing (if needed)', 'Special handling', 'Express clearance'] },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Volume Discounts Available</h3>
            <p className="text-purple-100 mb-6">
              Regular shippers get up to 20% discount on transportation costs. Contact us for customized corporate rates.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center space-x-2 bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition-all shadow-lg"
            >
              <DollarSign className="w-5 h-5" />
              <span>Request Custom Quote</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Ship Across Borders?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get a competitive quote for your cross-border trucking needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center space-x-2 bg-purple-600 text-white px-8 py-4 rounded-full font-bold hover:bg-purple-700 transition-all shadow-lg"
              >
                <ArrowRight className="w-5 h-5" />
                <span>Get Started</span>
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center space-x-2 border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition-all"
              >
                <span>View All Services</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer gradientFrom="from-purple-900" gradientVia="via-purple-800" gradientTo="to-pink-900" />
    </main>
  );
}
