'use client';

import { motion } from 'framer-motion';
import { 
  Award, Users, Globe, TrendingUp, Shield, Heart, 
  Target, Zap, CheckCircle, Package, Clock, DollarSign 
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About 1Way Global Logistics
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Your trusted partner in global logistics since 2010.
              <br />
              Connecting businesses worldwide with reliable shipping solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in 2010, 1Way Global Logistics began with a simple mission: 
                  to make international shipping accessible, reliable, and efficient for businesses of all sizes.
                </p>
                <p>
                  What started as a small courier service has grown into a comprehensive logistics 
                  provider, serving over 50 countries and handling more than 10,000 shipments monthly.
                </p>
                <p>
                  Our success is built on three pillars: cutting-edge technology, experienced professionals, 
                  and an unwavering commitment to customer satisfaction. We don't just move packages—we 
                  build partnerships that help businesses thrive in the global marketplace.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '50+', label: 'Countries' },
                  { number: '10K+', label: 'Monthly Shipments' },
                  { number: '99.9%', label: 'On-Time Rate' },
                  { number: '5000+', label: 'Happy Clients' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl text-center border border-blue-100"
                  >
                    <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-semibold">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Mission, Vision & Values
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                description: 'To provide seamless, reliable, and cost-effective logistics solutions that empower businesses to reach their full global potential.',
                gradient: 'from-blue-500 to-blue-600',
              },
              {
                icon: Globe,
                title: 'Our Vision',
                description: "To be the world's most trusted logistics partner, recognized for innovation, sustainability, and exceptional customer service.",
                gradient: 'from-purple-500 to-purple-600',
              },
              {
                icon: Heart,
                title: 'Our Values',
                description: 'Integrity, Innovation, Customer-Centricity, Excellence, and Sustainability guide everything we do.',
                gradient: 'from-pink-500 to-pink-600',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center mb-6`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Businesses Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technology, expertise, and dedication to deliver unmatched logistics solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Expert Team', description: '50+ certified logistics professionals' },
              { icon: Shield, title: 'Fully Insured', description: 'Complete cargo protection coverage' },
              { icon: Clock, title: '24/7 Support', description: 'Round-the-clock customer assistance' },
              { icon: Globe, title: 'Global Network', description: 'Presence in 50+ countries worldwide' },
              { icon: Zap, title: 'Fast Processing', description: 'Quick customs and documentation' },
              { icon: DollarSign, title: 'Competitive Rates', description: 'Best prices with no hidden fees' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-blue-50 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick FAQ Preview */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: 'How do I track my shipment?',
                answer: 'Use our online tracking system on the homepage. Enter your tracking number to get real-time updates on your shipment location and status.',
              },
              {
                question: 'What countries do you serve?',
                answer: 'We serve 50+ countries across Asia, Europe, Americas, and Oceania. Contact us for specific country availability.',
              },
              {
                question: 'How long does international shipping take?',
                answer: 'Delivery times vary by service: Express (2-3 days), Air Freight (5-7 days), Ocean Freight (15-30 days). Custom quotes available.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-8">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/faq"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg"
            >
              <span>View All FAQs</span>
              <CheckCircle className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-white rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Ship with Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses that trust us with their logistics needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all shadow-xl"
              >
                <Package className="w-5 h-5" />
                <span>Get a Quote</span>
              </Link>
              <Link
                href="/#tracking"
                className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
              >
                <span>Track Shipment</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
