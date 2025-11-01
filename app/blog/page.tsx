'use client';

import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight, TrendingUp, Package, Globe, Lightbulb } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: '10 Ways to Optimize Your Supply Chain in 2025',
    excerpt: 'Discover cutting-edge strategies to streamline your logistics operations, reduce costs, and improve delivery times in the modern supply chain landscape.',
    author: 'Sarah Johnson',
    date: 'January 15, 2025',
    readTime: '8 min read',
    category: 'Supply Chain',
    icon: TrendingUp,
    gradient: 'from-blue-500 to-blue-600',
    image: '📊',
  },
  {
    id: 2,
    title: 'The Future of Last-Mile Delivery: Trends to Watch',
    excerpt: 'Explore emerging technologies and innovations shaping the future of last-mile delivery, including drones, autonomous vehicles, and sustainable solutions.',
    author: 'Michael Chen',
    date: 'January 12, 2025',
    readTime: '6 min read',
    category: 'Innovation',
    icon: Package,
    gradient: 'from-purple-500 to-purple-600',
    image: '🚚',
  },
  {
    id: 3,
    title: 'Navigating International Shipping Regulations in 2025',
    excerpt: 'A comprehensive guide to understanding customs requirements, documentation, and compliance for successful international shipping operations.',
    author: 'Emily Rodriguez',
    date: 'January 10, 2025',
    readTime: '10 min read',
    category: 'Compliance',
    icon: Globe,
    gradient: 'from-green-500 to-green-600',
    image: '🌍',
  },
  {
    id: 4,
    title: 'Sustainable Logistics: Reducing Your Carbon Footprint',
    excerpt: 'Learn how to implement eco-friendly practices in your logistics operations while maintaining efficiency and reducing environmental impact.',
    author: 'David Kumar',
    date: 'January 8, 2025',
    readTime: '7 min read',
    category: 'Sustainability',
    icon: Lightbulb,
    gradient: 'from-emerald-500 to-emerald-600',
    image: '♻️',
  },
  {
    id: 5,
    title: 'Air Freight vs Ocean Freight: Making the Right Choice',
    excerpt: 'Compare the pros and cons of air and ocean freight to determine the best shipping method for your business needs and budget.',
    author: 'John Smith',
    date: 'January 5, 2025',
    readTime: '9 min read',
    category: 'Shipping Methods',
    icon: Package,
    gradient: 'from-cyan-500 to-cyan-600',
    image: '✈️',
  },
  {
    id: 6,
    title: 'How Technology is Revolutionizing Warehouse Management',
    excerpt: 'Discover how AI, IoT, and automation are transforming modern warehouses into smart, efficient distribution centers.',
    author: 'Sarah Johnson',
    date: 'January 3, 2025',
    readTime: '8 min read',
    category: 'Technology',
    icon: TrendingUp,
    gradient: 'from-orange-500 to-orange-600',
    image: '🏭',
  },
];

const categories = ['All', 'Supply Chain', 'Innovation', 'Compliance', 'Sustainability', 'Shipping Methods', 'Technology'];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/blog.png)',
              opacity: 0.7
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 opacity-30" />
          <div className="absolute inset-0 opacity-20">
            <motion.div
              animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 25, repeat: Infinity }}
              className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
              transition={{ duration: 20, repeat: Infinity }}
              className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
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
              <Lightbulb className="w-5 h-5" />
              <span className="font-semibold">Insights & Resources</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Logistics Blog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Expert insights, industry trends, and practical tips for optimizing your supply chain
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center p-8 md:p-12">
              <div>
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 text-white">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-semibold">Featured Article</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-blue-100 text-lg mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center space-x-6 text-blue-200 mb-8">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <Link
                  href={`/blog/${blogPosts[0].id}`}
                  className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="flex items-center justify-center text-9xl">
                {blogPosts[0].image}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full font-semibold transition-all bg-white text-gray-700 hover:bg-blue-600 hover:text-white shadow-sm hover:shadow-md"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
              >
                {/* Image/Icon Header */}
                <div className={`bg-gradient-to-br ${post.gradient} p-12 flex items-center justify-center text-6xl`}>
                  {post.image}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center space-x-2 bg-gradient-to-r ${post.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                      <post.icon className="w-4 h-4" />
                      <span>{post.category}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {post.author.charAt(0)}
                      </div>
                      <span className="font-semibold text-gray-700">{post.author}</span>
                    </div>

                    <Link
                      href={`/blog/${post.id}`}
                      className="flex items-center space-x-1 text-blue-600 font-semibold hover:text-blue-700 group-hover:translate-x-1 transition-all"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest logistics insights and industry trends delivered to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg"
              >
                Subscribe
              </motion.button>
            </form>
            <p className="text-sm text-blue-200 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
