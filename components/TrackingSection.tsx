'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Package, MapPin, Clock, CheckCircle, Truck, AlertCircle } from 'lucide-react';

type TrackingStatus = 'pending' | 'picked-up' | 'in-transit' | 'out-for-delivery' | 'delivered';

interface TrackingInfo {
  trackingNumber: string;
  status: TrackingStatus;
  currentLocation: string;
  estimatedDelivery: string;
  timeline: Array<{
    status: string;
    location: string;
    timestamp: string;
    completed: boolean;
  }>;
}

export default function TrackingSection() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingInfo, setTrackingInfo] = useState<TrackingInfo | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Demo data
      setTrackingInfo({
        trackingNumber: trackingNumber,
        status: 'in-transit',
        currentLocation: 'Singapore Distribution Center',
        estimatedDelivery: 'Dec 28, 2024',
        timeline: [
          {
            status: 'Order Placed',
            location: 'Mumbai, India',
            timestamp: 'Dec 20, 2024 - 10:30 AM',
            completed: true,
          },
          {
            status: 'Picked Up',
            location: 'Mumbai Warehouse',
            timestamp: 'Dec 20, 2024 - 2:45 PM',
            completed: true,
          },
          {
            status: 'In Transit',
            location: 'Singapore Hub',
            timestamp: 'Dec 22, 2024 - 8:00 AM',
            completed: true,
          },
          {
            status: 'Out for Delivery',
            location: 'Local Delivery Center',
            timestamp: 'Pending',
            completed: false,
          },
          {
            status: 'Delivered',
            location: 'Destination',
            timestamp: 'Pending',
            completed: false,
          },
        ],
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="tracking" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
            <Package className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-semibold">Shipment Tracking</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Track Your Shipment
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-time tracking for complete visibility of your cargo
          </p>
        </motion.div>

        {/* Tracking Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <form onSubmit={handleTrack} className="relative">
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="Enter your tracking number (e.g., 1WGL123456789)"
              className="w-full px-6 py-5 pr-32 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-lg shadow-lg"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-all flex items-center space-x-2 disabled:opacity-50"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  <span className="hidden sm:inline">Track</span>
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Tracking Results */}
        {trackingInfo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto"
          >
            {/* Status Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                  <p className="text-gray-600 mb-2">Tracking Number</p>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {trackingInfo.trackingNumber}
                  </h3>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-semibold">
                    <Truck className="w-5 h-5" />
                    <span>In Transit</span>
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Current Location</p>
                    <p className="text-gray-900 font-semibold text-lg">
                      {trackingInfo.currentLocation}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Estimated Delivery</p>
                    <p className="text-gray-900 font-semibold text-lg">
                      {trackingInfo.estimatedDelivery}
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />
                {trackingInfo.timeline.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex items-start space-x-6 mb-8 last:mb-0"
                  >
                    <div
                      className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center ${
                        event.completed
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      {event.completed ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <AlertCircle className="w-6 h-6" />
                      )}
                    </div>
                    <div className="flex-1 pt-2">
                      <h4
                        className={`font-semibold text-lg mb-1 ${
                          event.completed ? 'text-gray-900' : 'text-gray-400'
                        }`}
                      >
                        {event.status}
                      </h4>
                      <p
                        className={`text-sm mb-1 ${
                          event.completed ? 'text-gray-600' : 'text-gray-400'
                        }`}
                      >
                        {event.location}
                      </p>
                      <p
                        className={`text-sm ${
                          event.completed ? 'text-gray-500' : 'text-gray-400'
                        }`}
                      >
                        {event.timestamp}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 flex items-start space-x-4">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Need Help?</h4>
                <p className="text-gray-600 mb-3">
                  For any questions about your shipment, contact our 24/7 customer support team.
                </p>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                >
                  Call +1 (234) 567-890
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
