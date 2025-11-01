'use client';

import { motion } from 'framer-motion';
import { Ship, Clock, DollarSign, CheckCircle, ArrowRight, Anchor, Phone, Container, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function OceanFreightPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/big_ship_with_containers.png)',
              opacity: 0.7
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-blue-800 opacity-30" />
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
              <Ship className="w-6 h-6" />
              <span className="font-semibold">Ocean Freight Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cost-Effective Sea Cargo
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto mb-8">
              Extensive network and competitive rates for FCL and LCL shipments worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center space-x-2 bg-white text-cyan-600 px-8 py-4 rounded-full font-bold hover:bg-cyan-50 transition-all shadow-xl"
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
                Extensive Network & Competitive Rates
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our ocean freight services provide cost-effective solutions for high-volume shipments. 
                With partnerships across major shipping lines and access to ports worldwide, we offer 
                both Full Container Load (FCL) and Less than Container Load (LCL) options.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're shipping a single pallet or multiple containers, our ocean freight experts 
                optimize routes, consolidate cargo, and negotiate the best rates to keep your costs down 
                while maintaining reliable delivery schedules.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 border border-cyan-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Highlights</h3>
              <div className="space-y-4">
                {[
                  'FCL and LCL services available',
                  'Access to 300+ ports worldwide',
                  'Partnerships with major shipping lines',
                  'Container tracking and monitoring',
                  'Customs clearance coordination',
                  'Door-to-door and port-to-port options',
                  'Special equipment (reefer, flat rack, open top)',
                  'Cargo insurance available',
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
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
              Reliable shipping schedules based on service type
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'FCL (Full Container Load)',
                time: '15-25 Days',
                description: 'Exclusive container use for your cargo with direct port-to-port shipping',
                features: [
                  '20ft and 40ft containers',
                  'High cube options',
                  'Reefer containers',
                  'Special equipment available',
                ],
                icon: Container,
                gradientFrom: 'from-cyan-500',
                gradientTo: 'to-cyan-600',
                bgColor: 'bg-cyan-100',
                textColor: 'text-cyan-700',
              },
              {
                title: 'LCL (Less than Container Load)',
                time: '20-35 Days',
                description: 'Cost-effective consolidation service for smaller cargo volumes',
                features: [
                  'Pay only for space used',
                  'Weekly consolidations',
                  'Major trade lanes',
                  'Flexible booking',
                ],
                icon: Ship,
                gradientFrom: 'from-cyan-500',
                gradientTo: 'to-cyan-600',
                bgColor: 'bg-cyan-100',
                textColor: 'text-cyan-700',
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
                    <div className="text-4xl font-bold text-cyan-600 mb-4">{tier.time}</div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{tier.description}</p>
                    <div className="space-y-2">
                      {tier.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-gray-700">
                          <div className={`w-2 h-2 rounded-full ${tier.gradientFrom.replace('from-', 'bg-')}`} />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
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
                <span>Transit times vary by route - Rates negotiable for regular shippers and high volumes</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Container Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Container Options
            </h2>
            <p className="text-gray-600 text-lg">
              Wide range of container types for every cargo need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Standard Containers',
                sizes: ['20ft', '40ft', '40ft HC'],
                capacity: 'Up to 28,000 kg',
                uses: 'General cargo, palletized goods, boxes',
                color: 'from-cyan-500 to-blue-500',
              },
              {
                title: 'Reefer Containers',
                sizes: ['20ft', '40ft'],
                capacity: 'Temperature controlled',
                uses: 'Perishables, pharmaceuticals, chemicals',
                color: 'from-cyan-500 to-teal-500',
              },
              {
                title: 'Open Top',
                sizes: ['20ft', '40ft'],
                capacity: 'Oversized cargo',
                uses: 'Machinery, tall equipment, bulk materials',
                color: 'from-teal-500 to-cyan-500',
              },
              {
                title: 'Flat Rack',
                sizes: ['20ft', '40ft'],
                capacity: 'Heavy/wide cargo',
                uses: 'Vehicles, construction equipment, pipes',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'Tank Containers',
                sizes: ['20ft'],
                capacity: 'Liquid cargo',
                uses: 'Chemicals, food-grade liquids, oils',
                color: 'from-cyan-500 to-blue-500',
              },
              {
                title: 'Special Equipment',
                sizes: ['Various'],
                capacity: 'Custom solutions',
                uses: 'Project cargo, breakbulk, OOG',
                color: 'from-teal-500 to-cyan-500',
              },
            ].map((container, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 h-full">
                  <div className={`h-2 rounded-full bg-gradient-to-r ${container.color} mb-4`} />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{container.title}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Sizes:</span>
                      <span className="font-semibold text-gray-700">{container.sizes.join(', ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Capacity:</span>
                      <span className="font-semibold text-gray-700">{container.capacity}</span>
                    </div>
                    <div className="pt-3 border-t border-gray-100">
                      <p className="text-gray-600 text-xs">{container.uses}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Trade Routes */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Major Trade Routes
            </h2>
            <p className="text-gray-600 text-lg">
              Weekly sailings on major shipping lanes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                route: 'Asia - Europe',
                ports: 'Singapore, Shanghai, Rotterdam, Hamburg',
                frequency: 'Daily',
              },
              {
                route: 'Trans-Pacific',
                ports: 'Hong Kong, Tokyo, LA, Oakland',
                frequency: '2-3x weekly',
              },
              {
                route: 'Asia - Middle East',
                ports: 'Singapore, Dubai, Jebel Ali, Doha',
                frequency: 'Daily',
              },
              {
                route: 'Intra-Asia',
                ports: 'Singapore, Bangkok, Manila, Jakarta',
                frequency: 'Daily',
              },
            ].map((trade, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <Anchor className="w-10 h-10 text-cyan-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{trade.route}</h3>
                <p className="text-sm text-gray-600 mb-4">{trade.ports}</p>
                <div className="inline-flex items-center bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {trade.frequency}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value-Added Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Value-Added Services
            </h2>
            <p className="text-gray-600 text-lg">
              Complete ocean freight solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Customs Clearance',
                items: ['Import/export documentation', 'Duty calculation', 'Regulatory compliance', 'Broker coordination'],
              },
              {
                title: 'Cargo Insurance',
                items: ['All-risk coverage', 'Competitive premiums', 'Claims assistance', 'Certificate issuance'],
              },
              {
                title: 'Warehousing',
                items: ['Container stripping/stuffing', 'Short-term storage', 'Distribution services', 'Inventory management'],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Ship via Ocean Freight?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Get competitive rates for FCL and LCL shipments worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center space-x-2 bg-white text-cyan-600 px-8 py-4 rounded-full font-bold hover:bg-cyan-50 transition-all shadow-lg"
              >
                <ArrowRight className="w-5 h-5" />
                <span>Get Quote</span>
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
              >
                <span>View All Services</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer gradientFrom="from-cyan-900" gradientVia="via-blue-800" gradientTo="to-indigo-900" />
    </main>
  );
}
