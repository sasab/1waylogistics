'use client';

import { motion } from 'framer-motion';
import { Warehouse, Clock, DollarSign, CheckCircle, ArrowRight, Shield, Phone, Package, TrendingUp, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function WarehousingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-green-600 to-emerald-800 overflow-hidden">
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
              <Warehouse className="w-6 h-6" />
              <span className="font-semibold">Warehousing & Storage Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Secure Storage Facilities
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto mb-8">
              Advanced security and climate-controlled facilities for short and long-term storage needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center space-x-2 bg-white text-indigo-600 px-8 py-4 rounded-full font-bold hover:bg-indigo-50 transition-all shadow-xl"
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
                Advanced Security & Facilities
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our state-of-the-art warehousing facilities provide secure, climate-controlled storage 
                for goods of all types. With 24/7 security monitoring, advanced inventory management 
                systems, and flexible storage options, we ensure your cargo is safe and accessible.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From short-term storage during transit to long-term warehousing solutions, we offer 
                scalable services that adapt to your business needs. Our strategic locations near major 
                ports and transportation hubs ensure efficient distribution and quick order fulfillment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Highlights</h3>
              <div className="space-y-4">
                {[
                  '24/7 security and CCTV monitoring',
                  'Climate-controlled storage zones',
                  'Real-time inventory management',
                  'Flexible storage durations',
                  'Container stripping/stuffing',
                  'Pick and pack services',
                  'Distribution and fulfillment',
                  'Bonded warehouse options',
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

      {/* Storage Solutions */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Storage Solutions
            </h2>
            <p className="text-gray-600 text-lg">
              Flexible options for every business requirement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Short-Term Storage',
                duration: 'Days to Weeks',
                description: 'Ideal for goods in transit or temporary overflow storage needs',
                features: ['Immediate access', 'No minimum commitment', 'Quick in/out processing'],
                icon: Clock,
                gradientFrom: 'from-green-500',
                gradientTo: 'to-blue-600',
                bgColor: 'bg-green-100',
                textColor: 'text-green-700',
              },
              {
                title: 'Long-Term Storage',
                duration: 'Months to Years',
                description: 'Cost-effective solutions for inventory management and seasonal goods',
                features: ['Volume discounts', 'Inventory reports', 'Flexible access'],
                icon: Warehouse,
                gradientFrom: 'from-green-500',
                gradientTo: 'to-indigo-600',
                bgColor: 'bg-indigo-100',
                textColor: 'text-indigo-700',
              },
              {
                title: 'Distribution Center',
                duration: 'Ongoing Operations',
                description: 'Full-service fulfillment and distribution hub for your business',
                features: ['Order fulfillment', 'Shipping integration', 'Returns handling'],
                icon: TrendingUp,
                gradientFrom: 'from-emerald-500',
                gradientTo: 'to-purple-600',
                bgColor: 'bg-purple-100',
                textColor: 'text-purple-700',
              },
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 h-full relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradientFrom} ${solution.gradientTo} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradientFrom} ${solution.gradientTo} text-white flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <solution.icon className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                    <div className="text-lg font-semibold text-indigo-600 mb-4">{solution.duration}</div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                    <div className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-gray-700">
                          <div className={`w-2 h-2 rounded-full ${solution.gradientFrom.replace('from-', 'bg-')}`} />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${solution.gradientFrom} ${solution.gradientTo} rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500`} />
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
                <span>Pricing per square foot negotiable based on volume and duration</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facility Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              World-Class Facilities
            </h2>
            <p className="text-gray-600 text-lg">
              State-of-the-art infrastructure for optimal storage conditions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: 'Security Features',
                items: [
                  '24/7 security personnel on-site',
                  'CCTV surveillance system',
                  'Access control and visitor logs',
                  'Perimeter fencing and lighting',
                  'Fire detection and suppression',
                  'Insurance and liability coverage',
                ],
                gradient: 'from-red-500 to-orange-600',
              },
              {
                icon: Package,
                title: 'Operational Capabilities',
                items: [
                  'Forklift and material handling equipment',
                  'Loading docks and ramps',
                  'Pallet racking systems',
                  'Container stripping/stuffing',
                  'Labeling and repackaging',
                  'Quality inspection services',
                ],
                gradient: 'from-green-500 to-purple-600',
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

      {/* Specialized Storage */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Specialized Storage Options
            </h2>
            <p className="text-gray-600 text-lg">
              Customized solutions for specific cargo requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Climate-Controlled',
                description: 'Temperature and humidity-controlled zones for sensitive goods',
                temp: '15-25°C',
                uses: 'Electronics, Pharmaceuticals, Food',
              },
              {
                title: 'Cold Storage',
                description: 'Refrigerated facilities for perishable products',
                temp: '-25°C to 8°C',
                uses: 'Frozen Food, Medical Supplies',
              },
              {
                title: 'Hazmat Storage',
                description: 'Licensed facilities for dangerous goods storage',
                temp: 'Regulated',
                uses: 'Chemicals, Flammables, Gases',
              },
              {
                title: 'Bonded Warehouse',
                description: 'Customs-approved storage for duty-deferred goods',
                temp: 'Standard',
                uses: 'Import/Export, Transit Goods',
              },
              {
                title: 'High-Value Storage',
                description: 'Enhanced security for valuable merchandise',
                temp: 'Controlled',
                uses: 'Electronics, Jewelry, Art',
              },
              {
                title: 'Bulk Storage',
                description: 'Large-capacity areas for oversized items',
                temp: 'Standard',
                uses: 'Machinery, Construction, Materials',
              },
            ].map((storage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{storage.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{storage.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Temperature</p>
                    <p className="font-semibold text-indigo-600">{storage.temp}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 mb-1">Ideal For</p>
                    <p className="font-semibold text-gray-700 text-sm">{storage.uses}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inventory Management */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-8 text-white">
                <FileText className="w-12 h-12 mb-6" />
                <h3 className="text-3xl font-bold mb-6">Advanced Inventory Management</h3>
                <div className="space-y-4">
                  {[
                    'Real-time stock level monitoring',
                    'Barcode and RFID tracking',
                    'Automated reporting and alerts',
                    'FIFO/LIFO inventory rotation',
                    'Batch and lot number tracking',
                    'Integration with your ERP/WMS',
                    'Regular cycle counts',
                    'Online portal access 24/7',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Complete Visibility & Control
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our warehouse management system (WMS) provides real-time visibility into your 
                inventory levels, movements, and storage conditions. Access detailed reports 
                and analytics through our secure online portal.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Track every item from receiving to dispatch with barcode scanning and RFID 
                technology. Set up automated alerts for low stock levels, expiration dates, 
                and special handling requirements.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all"
              >
                <span>Request Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Structure */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
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
              Flexible rates based on your storage needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { title: 'Storage Fees', desc: 'Per sq ft/month' },
              { title: 'Handling Charges', desc: 'In/out processing' },
              { title: 'Value-Added Services', desc: 'Picking, packing, labeling' },
              { title: 'Special Services', desc: 'Climate control, security' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md text-center"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Volume Discounts Available</h3>
            <p className="text-indigo-100 mb-6">
              Long-term contracts and high-volume storage get preferential rates. Contact us for a customized quote.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center space-x-2 bg-white text-indigo-600 px-8 py-4 rounded-full font-bold hover:bg-indigo-50 transition-all shadow-lg"
            >
              <DollarSign className="w-5 h-5" />
              <span>Get Custom Quote</span>
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
              Need Storage Solutions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us to discuss your warehousing requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center space-x-2 bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg"
              >
                <ArrowRight className="w-5 h-5" />
                <span>Get Started</span>
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center space-x-2 border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full font-bold hover:bg-indigo-50 transition-all"
              >
                <span>View All Services</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer gradientFrom="from-green-900" gradientVia="via-emerald-800" gradientTo="to-teal-900" />
    </main>
  );
}
