'use client';

import { motion } from 'framer-motion';
import { Package, Clock, DollarSign, CheckCircle, ArrowRight, Globe, Truck, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ExpressCourierPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/express-courier.png)',
              opacity: 0.7
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-30" />
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
              <Package className="w-6 h-6" />
              <span className="font-semibold">Express & Courier Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Time-Critical Delivery Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Fast, flexible, and reliable express courier services for urgent and last-mile deliveries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all shadow-xl"
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
                Premium Express Services
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our express and courier services are designed for time-sensitive shipments that require 
                fast and reliable delivery. Whether it's documents, parcels, or urgent cargo, we ensure 
                your items reach their destination on time, every time.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With dedicated customer support, real-time tracking, and flexible pickup options, 
                we make urgent shipping stress-free and efficient. Perfect for businesses that can't 
                afford delays.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Highlights</h3>
              <div className="space-y-4">
                {[
                  'Same-day and next-day delivery options',
                  'Door-to-door pickup and delivery',
                  'Real-time tracking and notifications',
                  'Secure handling of sensitive items',
                  'Corporate account rates available',
                  'Professional packaging services',
                  'Insurance coverage included',
                  'Signature confirmation',
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
              Delivery Timeframes
            </h2>
            <p className="text-gray-600 text-lg">
              Fast and reliable delivery across all service tiers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Same-Day Express',
                time: '4-6 Hours',
                description: 'Ultra-urgent delivery within the same business day',
                price: 'Premium',
                icon: Clock,
                gradientFrom: 'from-red-500',
                gradientTo: 'to-red-600',
                bgColor: 'bg-red-100',
                textColor: 'text-red-700',
              },
              {
                title: 'Next-Day Delivery',
                time: '24 Hours',
                description: 'Guaranteed next business day delivery',
                price: 'Standard',
                icon: Truck,
                gradientFrom: 'from-blue-500',
                gradientTo: 'to-blue-600',
                bgColor: 'bg-blue-100',
                textColor: 'text-blue-700',
              },
              {
                title: 'Economy Express',
                time: '2-3 Days',
                description: 'Cost-effective express delivery option',
                price: 'Budget',
                icon: Package,
                gradientFrom: 'from-green-500',
                gradientTo: 'to-green-600',
                bgColor: 'bg-green-100',
                textColor: 'text-green-700',
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
                  {/* Hover Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tier.gradientFrom} ${tier.gradientTo} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.gradientFrom} ${tier.gradientTo} text-white flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <tier.icon className="w-8 h-8" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.title}</h3>
                    
                    {/* Time */}
                    <div className="text-4xl font-bold text-blue-600 mb-4">{tier.time}</div>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">{tier.description}</p>

                    {/* Price Badge */}
                    <div className={`inline-flex items-center ${tier.bgColor} ${tier.textColor} px-4 py-2 rounded-full font-semibold text-sm`}>
                      {tier.price} Rate
                    </div>
                  </div>

                  {/* Decorative Corner */}
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
                <span>All rates are negotiable based on volume and frequency</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Structure */}
      <section className="py-20 bg-white">
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
              No hidden fees. Clear, competitive rates.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Pricing Factors</h3>
              <ul className="space-y-4">
                {[
                  'Package weight and dimensions',
                  'Distance and destination',
                  'Service tier selected',
                  'Insurance value',
                  'Pickup and delivery locations',
                  'Special handling requirements',
                ].map((factor, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                    <span className="text-gray-700">{factor}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Save More With</h3>
              <ul className="space-y-4">
                {[
                  'Corporate account discounts',
                  'Volume-based pricing',
                  'Monthly subscription plans',
                  'Loyalty program rewards',
                  'Early booking discounts',
                  'Multi-shipment packages',
                ].map((saving, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">{saving}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute inset-0 bg-white rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Globe className="w-16 h-16 mx-auto mb-6 text-blue-300" />
            <h2 className="text-4xl font-bold mb-4">Global Coverage</h2>
            <p className="text-xl text-blue-100">
              Express courier services available in 50+ countries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { region: 'Asia Pacific', countries: '15+ Countries' },
              { region: 'Europe', countries: '20+ Countries' },
              { region: 'Americas', countries: '12+ Countries' },
              { region: 'Middle East', countries: '8+ Countries' },
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
              >
                <h3 className="text-xl font-bold mb-2">{area.region}</h3>
                <p className="text-blue-200">{area.countries}</p>
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
              Ready to Ship Today?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get a custom quote for your express courier needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg"
              >
                <DollarSign className="w-5 h-5" />
                <span>Request Quote</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center space-x-2 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all"
              >
                <span>View All Services</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer gradientFrom="from-blue-900" gradientVia="via-blue-800" gradientTo="to-indigo-900" />
    </main>
  );
}
