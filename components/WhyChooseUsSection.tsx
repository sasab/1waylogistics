'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Zap, Heart, Award, TrendingUp, Shield, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'John Smith',
    position: 'CEO, Global Trade Corp',
    company: 'Global Trade Corp',
    image: 'JS',
    rating: 5,
    text: '1Way Global Logistics has transformed our supply chain. Their professionalism and attention to detail are unmatched. We\'ve seen a 40% improvement in delivery times.',
  },
  {
    name: 'Sarah Johnson',
    position: 'Supply Chain Manager, Tech Innovations',
    company: 'Tech Innovations',
    image: 'SJ',
    rating: 5,
    text: 'Outstanding service! The real-time tracking and responsive customer support make them our go-to logistics partner. They handle our delicate electronics with utmost care.',
  },
  {
    name: 'Michael Chen',
    position: 'Operations Director, Fashion Forward',
    company: 'Fashion Forward',
    image: 'MC',
    rating: 5,
    text: 'From air freight to customs clearance, 1Way handles everything seamlessly. Their expertise in international shipping has been crucial for our global expansion.',
  },
  {
    name: 'Emily Rodriguez',
    position: 'Logistics Coordinator, Pharma Plus',
    company: 'Pharma Plus',
    image: 'ER',
    rating: 5,
    text: 'The temperature-controlled warehousing and express delivery services are exceptional. They understand the critical nature of pharmaceutical logistics.',
  },
  {
    name: 'David Kumar',
    position: 'Founder, Eco Goods',
    company: 'Eco Goods',
    image: 'DK',
    rating: 5,
    text: 'As a startup, we needed a reliable logistics partner who could scale with us. 1Way has exceeded all expectations with their flexible solutions and competitive rates.',
  },
];

const features = [
  {
    icon: Users,
    title: 'Professional Team',
    subtitle: 'Experienced Staff',
    description:
      'Our team of experienced professionals ensures the safe and timely delivery of your goods, providing peace of mind and reliable service.',
    stats: '50+ Expert Professionals',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-blue-600',
    bgFrom: 'from-blue-50',
    bgTo: 'to-blue-100',
    textColor: 'text-blue-600',
    bgColor: 'bg-blue-100',
    badgeText: 'text-blue-700',
    cornerFrom: 'from-blue-200',
    cornerTo: 'to-blue-300',
  },
  {
    icon: Zap,
    title: 'Efficient Logistics',
    subtitle: 'Streamlined Operations',
    description:
      'We use state-of-the-art logistics systems to optimize our operations, ensuring efficiency, accuracy, and cost-effectiveness in every delivery.',
    stats: '99.9% Success Rate',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-purple-600',
    bgFrom: 'from-purple-50',
    bgTo: 'to-purple-100',
    textColor: 'text-purple-600',
    bgColor: 'bg-purple-100',
    badgeText: 'text-purple-700',
    cornerFrom: 'from-purple-200',
    cornerTo: 'to-purple-300',
  },
  {
    icon: Heart,
    title: 'Customer Focus',
    subtitle: 'Client Satisfaction',
    description:
      'At 1Way Global Logistics, customer satisfaction is our priority. We listen to your needs and tailor our services to meet and exceed your expectations.',
    stats: '5000+ Happy Clients',
    gradientFrom: 'from-pink-500',
    gradientTo: 'to-pink-600',
    bgFrom: 'from-pink-50',
    bgTo: 'to-pink-100',
    textColor: 'text-pink-600',
    bgColor: 'bg-pink-100',
    badgeText: 'text-pink-700',
    cornerFrom: 'from-pink-200',
    cornerTo: 'to-pink-300',
  },
];

const achievements = [
  {
    icon: Award,
    title: 'Industry Leader',
    description: 'Recognized excellence in logistics',
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Complete cargo protection',
  },
  {
    icon: TrendingUp,
    title: 'Fast Growing',
    description: 'Expanding global network',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400 rounded-full blur-3xl"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
            <Award className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-semibold">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Success Is Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference with 1Way Global Logistics.
            <br />
            We don't just move packages—we deliver promises.
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-gray-100 overflow-hidden">
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.bgFrom} ${feature.bgTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo} text-white mb-6 shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className={`${feature.textColor} font-semibold mb-4`}>
                    {feature.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Stats Badge */}
                  <div className={`inline-flex items-center ${feature.bgColor} ${feature.badgeText} px-4 py-2 rounded-full font-semibold text-sm`}>
                    {feature.stats}
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${feature.cornerFrom} ${feature.cornerTo} rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          {/* Animated Background */}
          <motion.div
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.1) 75%)',
              backgroundSize: '20px 20px',
            }}
          />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Trusted by Leading Businesses Worldwide
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl mb-4">
                    <achievement.icon className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{achievement.title}</h4>
                  <p className="text-blue-100">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Customer Testimonials Carousel */}
        <TestimonialsCarousel />
      </div>
    </section>
  );
}

function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16"
    >
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          What Our Clients Say
        </h3>
        <p className="text-gray-600">Trusted by businesses worldwide</p>
      </div>

      <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 overflow-hidden">
        {/* Decorative Quote */}
        <div className="absolute top-8 left-8 opacity-10">
          <Quote className="w-24 h-24 text-blue-600" />
        </div>

        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="w-8 h-8 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 italic text-center leading-relaxed">
                "{currentTestimonial.text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {currentTestimonial.image}
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900 text-lg">{currentTestimonial.name}</p>
                  <p className="text-gray-600">{currentTestimonial.position}</p>
                  <p className="text-blue-600 font-semibold">{currentTestimonial.company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Pagination Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-md mx-auto bg-gray-200 rounded-full h-1">
            <motion.div
              className="bg-blue-600 h-1 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
