'use client';

import { motion } from 'framer-motion';
import { Truck, Plane, Ship, Warehouse, FileCheck, Package } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Package,
    title: 'Express & Courier',
    subtitle: 'Time-Critical Delivery',
    description:
      'Fast, flexible services perfect for urgent and last-mile needs, supported by competitive corporate rates and add-on packing.',
    features: ['Same-day delivery', 'Corporate rates', 'Packaging services', 'Door-to-door'],
    gradient: 'from-blue-500 to-blue-600',
    link: '/services/express-courier',
    image: '/images/express-courier.png',
  },
  {
    icon: Truck,
    title: 'Regional Cross-Border',
    subtitle: 'Seamless Regional Connectivity',
    description:
      'Compliant cross-border trucking (SG, MY, TH) managed by expert teams and trusted vendors for hassle-free movement.',
    features: ['Singapore-Malaysia-Thailand', 'Customs compliance', 'Expert handling', 'Trusted network'],
    gradient: 'from-purple-500 to-purple-600',
    link: '/services/cross-border',
    image: '/images/trucks.png',
  },
  {
    icon: Plane,
    title: 'Air Freight',
    subtitle: 'IATA-Certified Global Reach',
    description:
      'Urgent and regular cargo solutions connecting major airports worldwide, featuring specialized handling (AOG/NFO) and live tracking.',
    features: ['Global coverage', 'IATA certified', 'AOG/NFO handling', 'Live tracking'],
    gradient: 'from-red-500 to-red-600',
    link: '/services/air-freight',
    image: '/images/air_frieght.png',
  },
  {
    icon: Ship,
    title: 'Ocean Freight',
    subtitle: 'Extensive Network & Competitive Rates',
    description:
      'Secure handling of all sea cargo with competitive rates and an extensive network for reliable and cost-effective international shipping.',
    features: ['FCL & LCL', 'Worldwide ports', 'Competitive pricing', 'Secure handling'],
    gradient: 'from-cyan-500 to-cyan-600',
    link: '/services/ocean-freight',
    image: '/images/big_ship_with_containers.png',
  },
  {
    icon: Warehouse,
    title: 'Warehousing & Storage',
    subtitle: 'Advanced Security & Facilities',
    description:
      'Advanced security measures and state-of-the-art facilities to meet all your inventory management and storage requirements.',
    features: ['Climate control', '24/7 security', 'Inventory management', 'Flexible storage'],
    gradient: 'from-green-500 to-green-600',
    link: '/services/warehousing',
    image: '/images/ware_house.png',
  },
  {
    icon: FileCheck,
    title: 'Customs Clearance',
    subtitle: 'Expert Compliance Support',
    description:
      'Simplify international trade. Our experienced team expertly navigates complex regulations to ensure seamless, compliant procedures.',
    features: ['Documentation support', 'Regulatory compliance', 'Fast processing', 'Expert consultation'],
    gradient: 'from-orange-500 to-orange-600',
    link: '/services/customs-clearance',
    image: '/images/customs.png',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
            <Truck className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Logistics Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From local deliveries to international freight forwarding.
            <br />
            Your supply chain starts here.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full">
                {/* Icon Header */}
                <div className={`relative p-8 text-white overflow-hidden`}>
                  {/* Background Image with Blend */}
                  <div className="absolute inset-0">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(${service.image})`,
                        opacity: 0.7
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient}`} style={{ opacity: 0.15 }} />
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
                  <service.icon className="w-12 h-12 mb-4 relative z-10" />
                  <h3 className="text-2xl font-bold mb-1 relative z-10">{service.title}</h3>
                  <p className="text-white/90 text-sm relative z-10">{service.subtitle}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link href={service.link}>
                    <button className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all group-hover:scale-105`}>
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Can't Find What You're Looking For?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                We offer customized logistics solutions tailored to your specific needs.
                Let's discuss your requirements.
              </p>
              <a
                href="#quote"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl"
              >
                <span>Get Custom Quote</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
