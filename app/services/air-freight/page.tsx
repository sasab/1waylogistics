'use client';

import { motion } from 'framer-motion';
import { Plane, Clock, DollarSign, CheckCircle, ArrowRight, Globe, Zap, Phone, Package, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AirFreightPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-red-600 to-orange-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">
              <Plane className="w-6 h-6" />
              <span className="font-semibold">IATA-Certified Air Freight</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Global Air Freight Solutions
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto mb-8">
              Fast, reliable air cargo services connecting you to over 200 destinations worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center space-x-2 bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-red-50 transition-all shadow-xl"
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
                IATA-Certified Global Reach
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                As an IATA-certified air freight forwarder, we provide urgent and regular cargo solutions 
                to destinations worldwide. Our extensive network of airline partnerships ensures competitive 
                rates and flexible scheduling options for all your air cargo needs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From time-sensitive shipments to consolidated cargo, we handle everything with precision. 
                Our expertise includes dangerous goods handling (DGR), temperature-controlled shipments, 
                oversized cargo, and AOG (Aircraft on Ground) emergency services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Highlights</h3>
              <div className="space-y-4">
                {[
                  'IATA-certified operations worldwide',
                  'Door-to-airport and door-to-door options',
                  'Dangerous goods handling (DGR certified)',
                  'Temperature-controlled shipments',
                  'AOG and NFO emergency services',
                  'Real-time tracking and updates',
                  'Customs clearance coordination',
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
              Flexible options for every urgency level
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Express Air',
                time: '2-3 Days',
                description: 'Priority air freight for urgent shipments requiring fastest delivery',
                features: ['Next flight out options', 'Priority handling', 'Weekend delivery'],
                icon: Zap,
                gradientFrom: 'from-red-500',
                gradientTo: 'to-orange-600',
                bgColor: 'bg-red-100',
                textColor: 'text-red-700',
              },
              {
                title: 'Standard Air',
                time: '5-7 Days',
                description: 'Cost-effective air freight solution for regular business shipments',
                features: ['Competitive rates', 'Reliable schedules', 'Full tracking'],
                icon: Plane,
                gradientFrom: 'from-red-500',
                gradientTo: 'to-red-600',
                bgColor: 'bg-red-100',
                textColor: 'text-red-700',
              },
              {
                title: 'Economy Air',
                time: '7-10 Days',
                description: 'Budget-friendly air freight with consolidated cargo shipments',
                features: ['Best rates', 'Flexible booking', 'Volume discounts'],
                icon: Package,
                gradientFrom: 'from-orange-500',
                gradientTo: 'to-orange-600',
                bgColor: 'bg-orange-100',
                textColor: 'text-orange-700',
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
                    <div className="text-4xl font-bold text-red-600 mb-4">{tier.time}</div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{tier.description}</p>
                    <div className="space-y-2">
                      {tier.features.map((feature, idx) => (
                        <div key={idx} className={`${tier.bgColor} ${tier.textColor} px-3 py-2 rounded-lg font-semibold text-sm`}>
                          {feature}
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
                <span>All rates are negotiable based on shipment frequency and volume</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Specialized Air Freight Services
            </h2>
            <p className="text-gray-600 text-lg">
              Expert handling for every type of cargo
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'AOG Services',
                description: 'Aircraft on Ground emergency parts shipping with next flight out guarantee',
                features: ['24/7 availability', 'Immediate response', 'Dedicated handling'],
                color: 'from-red-500 to-orange-500',
              },
              {
                icon: Shield,
                title: 'Dangerous Goods',
                description: 'DGR-certified handling of hazardous materials per IATA regulations',
                features: ['Full compliance', 'Proper packaging', 'Documentation support'],
                color: 'from-orange-500 to-yellow-500',
              },
              {
                icon: Package,
                title: 'Temperature Control',
                description: 'Climate-controlled shipments for pharmaceuticals, food, and sensitive cargo',
                features: ['2-8°C monitoring', 'Real-time alerts', 'Validated containers'],
                color: 'from-red-500 to-orange-500',
              },
              {
                icon: Globe,
                title: 'Oversized Cargo',
                description: 'Specialized handling for heavy and out-of-gauge shipments',
                features: ['Charter options', 'Special equipment', 'Route planning'],
                color: 'from-orange-500 to-red-500',
              },
              {
                icon: Plane,
                title: 'Charter Services',
                description: 'Dedicated aircraft for time-critical or high-volume shipments',
                features: ['Full control', 'Direct routing', 'Custom scheduling'],
                color: 'from-red-500 to-pink-500',
              },
              {
                icon: CheckCircle,
                title: 'Hand Carry',
                description: 'Courier-escorted shipments for maximum security and speed',
                features: ['Personal escort', 'Door-to-door', 'Real-time updates'],
                color: 'from-pink-500 to-red-500',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                  <div className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Global Coverage
            </h2>
            <p className="text-gray-600 text-lg">
              Connecting major business hubs worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { region: 'North America', airports: '50+', cities: 'NYC, LA, Chicago, Toronto' },
              { region: 'Europe', airports: '80+', cities: 'London, Frankfurt, Paris, Amsterdam' },
              { region: 'Asia Pacific', airports: '100+', cities: 'Singapore, Hong Kong, Tokyo, Shanghai' },
              { region: 'Middle East', airports: '30+', cities: 'Dubai, Doha, Abu Dhabi, Riyadh' },
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all text-center"
              >
                <Globe className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{area.region}</h3>
                <div className="text-3xl font-bold text-red-600 mb-2">{area.airports}</div>
                <p className="text-sm text-gray-500">Airports</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-600">{area.cities}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
              Ship Your Cargo Anywhere, Anytime
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get instant quotes for air freight services worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center space-x-2 bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all shadow-lg"
              >
                <ArrowRight className="w-5 h-5" />
                <span>Get Started</span>
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center space-x-2 border-2 border-red-600 text-red-600 px-8 py-4 rounded-full font-bold hover:bg-red-50 transition-all"
              >
                <span>View All Services</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer gradientFrom="from-red-900" gradientVia="via-orange-800" gradientTo="to-pink-900" />
    </main>
  );
}
