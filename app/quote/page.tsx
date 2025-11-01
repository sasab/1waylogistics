'use client';

import { motion } from 'framer-motion';
import { FileText, Clock, DollarSign, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteSection from '@/components/QuoteSection';

export default function QuotePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/get_quote.png)',
              opacity: 0.7
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-30" />
          <div className="absolute inset-0 opacity-20">
            <motion.div
              animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
              transition={{ duration: 20, repeat: Infinity }}
              className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"
            />
            <motion.div
              animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
              transition={{ duration: 25, repeat: Infinity }}
              className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"
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
              <FileText className="w-6 h-6" />
              <span className="font-semibold">Get Your Custom Quote</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Fast, Competitive Quotes
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-pink-200">
                Tailored to Your Needs
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Fill out the form below and our team will provide you with a competitive quote within 24 hours
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { icon: Clock, label: '24hr Response', color: 'text-blue-300' },
                { icon: DollarSign, label: 'Best Rates', color: 'text-green-300' },
                { icon: CheckCircle, label: 'No Obligation', color: 'text-purple-300' },
                { icon: Phone, label: '24/7 Support', color: 'text-pink-300' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
                >
                  <item.icon className={`w-8 h-8 ${item.color} mx-auto mb-2`} />
                  <p className="text-white font-semibold text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Form Section */}
      <QuoteSection />

      {/* Why Get a Quote Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Request a Quote?
            </h2>
            <p className="text-gray-600 text-lg">
              Experience the difference of working with professionals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Competitive Pricing',
                description: 'Get the best rates tailored to your specific shipping needs and volume',
                icon: '💰',
                gradient: 'from-green-500 to-emerald-600',
              },
              {
                title: 'Fast Response',
                description: 'Receive your customized quote within 24 hours of submission',
                icon: '⚡',
                gradient: 'from-blue-500 to-cyan-600',
              },
              {
                title: 'Expert Consultation',
                description: 'Get personalized advice from our logistics specialists',
                icon: '👥',
                gradient: 'from-purple-500 to-pink-600',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-100 h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} text-white flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { stat: '50+', label: 'Countries Served' },
              { stat: '10K+', label: 'Shipments Monthly' },
              { stat: '99.9%', label: 'On-Time Delivery' },
              { stat: '5000+', label: 'Happy Clients' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.stat}
                </div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
