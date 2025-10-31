'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, HelpCircle, Package, Truck, Globe, DollarSign, Clock, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const faqCategories = [
  {
    icon: Package,
    title: 'General',
    color: 'blue',
    faqs: [
      {
        question: 'How do I track my shipment?',
        answer: 'You can track your shipment using our online tracking system on the homepage. Simply enter your unique tracking number (format: 1WGL-XXXXXXXXX) in the tracking box. You\'ll see real-time updates including current location, transit history, and estimated delivery time. You can also enable email/SMS notifications for automatic updates.',
      },
      {
        question: 'What countries do you serve?',
        answer: 'We serve over 50 countries across Asia Pacific, Europe, Americas, and Middle East. Major markets include Singapore, Malaysia, Thailand, USA, UK, Germany, Australia, and more. Contact us for specific country availability or special destination requests.',
      },
      {
        question: 'Do you offer insurance for shipments?',
        answer: 'Yes, all our shipments include basic insurance coverage. Additional insurance can be purchased based on cargo value. We offer comprehensive coverage options for high-value goods, fragile items, and specialized cargo. Insurance claims are processed within 7-14 business days.',
      },
      {
        question: 'How can I create a corporate account?',
        answer: 'Creating a corporate account is easy! Contact our sales team at corporate@1wayglobal.com or call +1 (234) 567-890. You\'ll get access to volume discounts, dedicated account management, priority support, flexible payment terms, and monthly consolidated invoicing.',
      },
    ],
  },
  {
    icon: Clock,
    title: 'Delivery Times',
    color: 'green',
    faqs: [
      {
        question: 'How long does international shipping take?',
        answer: 'Delivery times vary by service type: Express Courier (1-3 days), Air Freight (5-7 days), Ocean Freight FCL (15-30 days), Ocean Freight LCL (20-35 days). Times may vary based on origin, destination, customs clearance, and current global conditions.',
      },
      {
        question: 'Do you offer same-day delivery?',
        answer: 'Yes! Same-day delivery is available for express courier services within major cities. Orders must be placed before 10 AM local time for same-day delivery. Service area, package size, and weight restrictions apply. Contact us to confirm availability in your area.',
      },
      {
        question: 'What happens if my shipment is delayed?',
        answer: 'We monitor all shipments 24/7. If delays occur, we proactively notify you via email/SMS with updated delivery estimates and reasons. For significant delays, you may be eligible for service credits or refunds based on our service guarantee terms. Our support team works to resolve issues quickly.',
      },
      {
        question: 'Can I expedite my shipment after booking?',
        answer: 'Yes, upgrades are possible for shipments not yet in transit. Contact customer support with your tracking number. Additional charges may apply based on current location and destination. We\'ll provide updated costs and delivery estimates before confirming the upgrade.',
      },
    ],
  },
  {
    icon: DollarSign,
    title: 'Pricing & Payments',
    color: 'purple',
    faqs: [
      {
        question: 'How is shipping cost calculated?',
        answer: 'Shipping costs are based on: package weight and dimensions (volumetric weight), origin and destination, service type selected, declared value for insurance, special handling requirements, and current fuel surcharges. Use our online quote calculator for instant estimates.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept credit/debit cards (Visa, Mastercard, AmEx), bank transfers, PayPal, corporate accounts with NET-30 terms, and cash on delivery (select locations). All transactions are secure and PCI-DSS compliant.',
      },
      {
        question: 'Are there any hidden fees?',
        answer: 'No hidden fees! All costs are transparent and disclosed upfront. Quote includes: base shipping rate, fuel surcharge, insurance (if selected), customs clearance fees (international), remote area surcharges (if applicable), and applicable taxes. No surprise charges.',
      },
      {
        question: 'Do you offer volume discounts?',
        answer: 'Absolutely! We offer tiered discounts based on monthly volume: 5% off for 50+ shipments/month, 10% off for 100+ shipments/month, 15% off for 250+ shipments/month. Custom enterprise pricing available for larger volumes. Contact sales for a personalized quote.',
      },
    ],
  },
  {
    icon: Truck,
    title: 'Shipping Process',
    color: 'red',
    faqs: [
      {
        question: 'How do I prepare my shipment?',
        answer: 'Use sturdy packaging appropriate for contents, wrap fragile items individually with bubble wrap, fill empty space with cushioning, seal securely with strong tape, clearly label with delivery and return addresses, include commercial invoice for international shipments, and attach our shipping label securely. Packaging services available if needed.',
      },
      {
        question: 'Do you provide packaging materials?',
        answer: 'Yes! We offer free packaging materials for corporate accounts, or purchase individual supplies: boxes (various sizes), bubble wrap, packing tape, fragile stickers, and international shipping envelopes. Professional packaging services also available at pickup.',
      },
      {
        question: 'What items cannot be shipped?',
        answer: 'Prohibited items include: hazardous materials (explosives, flammable liquids), illegal substances, weapons and ammunition, perishable foods (unless approved), live animals, human remains, and counterfeit goods. Restricted items may require special permits. Check our complete list or contact us.',
      },
      {
        question: 'Can I schedule a pickup?',
        answer: 'Yes! Schedule pickups online, by phone, or through our app. Available Monday-Saturday, 9 AM - 6 PM. Same-day pickup available for requests before noon. Recurring pickups can be arranged for businesses. No pickup fee for corporate accounts; small fee may apply for individual shipments.',
      },
    ],
  },
  {
    icon: Globe,
    title: 'International Shipping',
    color: 'cyan',
    faqs: [
      {
        question: 'What documents do I need for international shipping?',
        answer: 'Required documents: Commercial invoice (3 copies), Packing list, Certificate of origin (some countries), Export/import licenses (if applicable), Special permits (for restricted goods). We can assist with documentation - our customs team ensures compliance with all regulations.',
      },
      {
        question: 'How does customs clearance work?',
        answer: 'Our customs team handles all paperwork and coordination with customs authorities. Process includes: document verification, duty/tax calculation, customs inspection coordination, and clearance confirmation. Most shipments clear within 1-3 days. We keep you updated throughout.',
      },
      {
        question: 'Who pays for customs duties and taxes?',
        answer: 'Typically, the recipient pays import duties and taxes unless otherwise arranged. We offer DDP (Delivered Duty Paid) service where sender pays all charges. Duties/taxes vary by country and product. We provide estimates but final amount determined by customs authorities.',
      },
      {
        question: 'Can you ship to remote areas?',
        answer: 'Yes! We serve remote and rural areas worldwide. Remote area surcharges may apply (typically $25-50). Delivery times may be 1-2 days longer. Use our coverage checker on the website or contact us to confirm service availability and pricing for your specific location.',
      },
    ],
  },
  {
    icon: Shield,
    title: 'Safety & Support',
    color: 'orange',
    faqs: [
      {
        question: 'How do I file a claim for damaged goods?',
        answer: 'File claims within 7 days of delivery: Take photos of damage and packaging, keep all packaging materials, fill out online claim form with tracking number, attach photos and receipts, submit claim. Our team reviews within 48 hours. Most claims resolved within 10-14 business days with full or partial refund.',
      },
      {
        question: 'Is 24/7 customer support really available?',
        answer: 'Yes! Our customer support team is available 24/7/365 via: phone (+1 234 567 890), email (support@1wayglobal.com), live chat on website/app, and WhatsApp business. Average response time: phone (under 2 min), email (under 1 hour), chat (under 5 min).',
      },
      {
        question: 'What if my package is lost?',
        answer: 'Lost packages are extremely rare (0.01% of shipments). If package not located within 7 days: File lost package claim online, provide detailed description and value, we investigate thoroughly, compensation provided per insurance coverage, full refund if uninsured packages under $100. We work tirelessly to locate every shipment.',
      },
      {
        question: 'How can I provide feedback?',
        answer: 'We value your feedback! Share via: post-delivery surveys (emailed after each shipment), online feedback form on website, email feedback@1wayglobal.com, social media (@1wayglobal), or Google/Trustpilot reviews. All feedback reviewed by management and used to improve our services.',
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const toggleFAQ = (categoryIndex: number, faqIndex: number) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  const filteredCategories = faqCategories.filter(category =>
    selectedCategory ? category.title === selectedCategory : true
  ).map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      searchTerm
        ? faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
        : true
    ),
  })).filter(category => category.faqs.length > 0);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <HelpCircle className="w-20 h-20 mx-auto mb-6 text-white" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find quick answers to common questions about our logistics services
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 focus:outline-none focus:border-white/40 text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === null
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Categories
            </button>
            {faqCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.title)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category.title
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <HelpCircle className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600 mb-6">Try different keywords or browse all categories</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory(null);
                }}
                className="text-blue-600 font-semibold hover:text-blue-700"
              >
                Clear filters
              </button>
            </motion.div>
          ) : (
            filteredCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${category.color}-500 to-${category.color}-600 text-white flex items-center justify-center`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                </div>

                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const key = `${categoryIndex}-${faqIndex}`;
                    const isOpen = openIndex === key;

                    return (
                      <motion.div
                        key={faqIndex}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-lg font-bold text-gray-900 pr-4">
                            {faq.question}
                          </span>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-6 h-6 text-blue-600 flex-shrink-0" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our support team is here to help 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all shadow-xl"
              >
                <span>Call +1 (234) 567-890</span>
              </a>
              <Link
                href="/#quote"
                className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
              >
                <span>Get a Quote</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
