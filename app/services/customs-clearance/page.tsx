'use client';

import { motion } from 'framer-motion';
import { FileCheck, Clock, DollarSign, CheckCircle, ArrowRight, Shield, Phone, FileText, Globe, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CustomsClearancePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-orange-600 to-amber-800 overflow-hidden">
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
              <FileCheck className="w-6 h-6" />
              <span className="font-semibold">Customs Clearance Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Expert Customs Compliance
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto mb-8">
              Seamless customs clearance with full regulatory compliance and documentation support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center space-x-2 bg-white text-emerald-600 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-all shadow-xl"
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
                Expert Compliance Support
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Navigate complex international trade regulations with our experienced customs brokerage 
                team. We handle all aspects of customs clearance, from documentation preparation to 
                duty calculation and regulatory compliance across multiple jurisdictions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our licensed customs brokers stay current with changing regulations, tariff codes, 
                and trade agreements to ensure your shipments clear customs quickly without delays 
                or penalties. We manage the entire process so you can focus on your business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border border-orange-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Highlights</h3>
              <div className="space-y-4">
                {[
                  'Licensed customs brokers',
                  'Import and export clearance',
                  'HS code classification',
                  'Duty and tax calculation',
                  'Document preparation and filing',
                  'Compliance consulting',
                  'Restricted goods handling',
                  'Post-clearance support',
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

      {/* Processing Times */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Processing Timeframes
            </h2>
            <p className="text-gray-600 text-lg">
              Fast and reliable customs clearance services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Standard Clearance',
                time: '1-3 Days',
                description: 'Regular processing for most commercial shipments with complete documentation',
                features: ['Most shipments', 'Full documentation', 'Routine inspections'],
                icon: FileText,
                gradientFrom: 'from-orange-500',
                gradientTo: 'to-emerald-600',
                bgColor: 'bg-emerald-100',
                textColor: 'text-emerald-700',
              },
              {
                title: 'Express Clearance',
                time: 'Same Day',
                description: 'Priority processing for urgent shipments requiring immediate release',
                features: ['Urgent shipments', 'Priority handling', 'Fast-track service'],
                icon: Clock,
                gradientFrom: 'from-orange-500',
                gradientTo: 'to-orange-600',
                bgColor: 'bg-orange-100',
                textColor: 'text-orange-700',
              },
              {
                title: 'Complex Clearance',
                time: '3-7 Days',
                description: 'Specialized handling for restricted goods, special permits, or detailed inspections',
                features: ['Special permits', 'Detailed inspection', 'Compliance review'],
                icon: Shield,
                gradientFrom: 'from-amber-500',
                gradientTo: 'to-teal-600',
                bgColor: 'bg-teal-100',
                textColor: 'text-teal-700',
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
                    <div className="text-4xl font-bold text-emerald-600 mb-4">{tier.time}</div>
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
                <span>Service fees negotiable based on shipment volume and frequency</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Customs Services
            </h2>
            <p className="text-gray-600 text-lg">
              End-to-end support for all your customs needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'Documentation Services',
                description: 'Complete preparation and filing of all required customs documents',
                items: ['Commercial invoices', 'Packing lists', 'Certificates of origin', 'Import/export permits'],
              },
              {
                icon: FileCheck,
                title: 'HS Code Classification',
                description: 'Accurate tariff classification for duty calculation and compliance',
                items: ['Product analysis', 'Tariff research', 'Classification advice', 'Binding rulings'],
              },
              {
                icon: DollarSign,
                title: 'Duty Management',
                description: 'Strategic duty planning and calculation to minimize costs',
                items: ['Duty calculation', 'FTA utilization', 'Duty drawback', 'Valuation advice'],
              },
              {
                icon: Shield,
                title: 'Compliance Consulting',
                description: 'Expert guidance on trade regulations and compliance requirements',
                items: ['Regulatory updates', 'Trade agreements', 'Compliance audits', 'Risk assessment'],
              },
              {
                icon: Globe,
                title: 'Multi-Country Support',
                description: 'Customs clearance expertise across multiple jurisdictions',
                items: ['Regional expertise', 'Local partnerships', 'Country-specific rules', 'Multi-modal support'],
              },
              {
                icon: Users,
                title: 'Dedicated Support',
                description: 'Personal account management and 24/7 assistance',
                items: ['Account manager', '24/7 availability', 'Status updates', 'Problem resolution'],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-emerald-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Requirements */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Common Documentation Requirements
            </h2>
            <p className="text-gray-600 text-lg">
              Documents typically needed for customs clearance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: 'Import Documents',
                icon: FileText,
                docs: [
                  'Bill of Lading / Air Waybill',
                  'Commercial Invoice',
                  'Packing List',
                  'Import License / Permit',
                  'Certificate of Origin',
                  'Insurance Certificate',
                  'Product Certificates (if required)',
                  'Letter of Credit (if applicable)',
                ],
                color: 'from-orange-500 to-amber-500',
              },
              {
                category: 'Export Documents',
                icon: FileCheck,
                docs: [
                  'Export Declaration',
                  'Commercial Invoice',
                  'Packing List',
                  'Export License / Permit',
                  'Certificate of Origin',
                  'Shipping Instructions',
                  'Insurance Policy',
                  'Inspection Certificate (if required)',
                ],
                color: 'from-amber-500 to-yellow-500',
              },
            ].map((docType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-md"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${docType.color} text-white flex items-center justify-center mb-6`}>
                  <docType.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{docType.category}</h3>
                <ul className="space-y-3">
                  {docType.docs.map((doc, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{doc}</span>
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
            className="mt-8 text-center"
          >
            <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6 inline-block">
              <p className="text-gray-700">
                <span className="font-semibold">Note:</span> Requirements vary by country, product type, and value. 
                Our team will provide a complete checklist for your specific shipment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Customs Brokerage
            </h2>
            <p className="text-gray-600 text-lg">
              Expertise that makes a difference
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                stat: '20+ Years',
                label: 'Industry Experience',
                icon: Users,
              },
              {
                stat: '50+ Countries',
                label: 'Global Coverage',
                icon: Globe,
              },
              {
                stat: '99.5%',
                label: 'First-Time Clearance',
                icon: CheckCircle,
              },
              {
                stat: '24/7',
                label: 'Support Available',
                icon: Clock,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 text-center border border-orange-100"
              >
                <item.icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{item.stat}</div>
                <div className="text-gray-600 font-semibold">{item.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Licensed & Certified Professionals</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Our team holds all necessary licenses and certifications, stays current with regulatory changes, 
              and maintains relationships with customs authorities worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                Licensed Customs Brokers
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                WCO Certified
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                AEO Authorized
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                ISO Compliant
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Simplify Your Customs Process
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let our experts handle your customs clearance requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center space-x-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-700 transition-all shadow-lg"
              >
                <ArrowRight className="w-5 h-5" />
                <span>Get Started</span>
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center space-x-2 border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-all"
              >
                <span>View All Services</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer gradientFrom="from-orange-900" gradientVia="via-amber-800" gradientTo="to-yellow-900" />
    </main>
  );
}
