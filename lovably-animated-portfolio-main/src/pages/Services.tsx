import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  Zap,
  Check,
  Star,
  Clock,
  Users,
  Shield,
  Headphones
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      icon: Code,
      description: 'Custom web applications built with modern technologies like React, Next.js, and TypeScript.',
      features: [
        'Responsive Design',
        'SEO Optimization',
        'Performance Optimization',
        'Cross-browser Compatibility',
        'Modern UI/UX',
        'Content Management'
      ],
      price: '$2,500 - $15,000'
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: [
        'React Native Development',
        'Native iOS/Android',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality',
        'Performance Monitoring'
      ],
      price: '$3,000 - $20,000'
    },
    {
      title: 'E-commerce Solutions',
      icon: Globe,
      description: 'Complete e-commerce platforms with payment integration and inventory management.',
      features: [
        'Payment Gateway Integration',
        'Inventory Management',
        'Order Processing',
        'Customer Analytics',
        'Multi-vendor Support',
        'Mobile Commerce'
      ],
      price: '$5,000 - $25,000'
    },
    {
      title: 'API Development',
      icon: Database,
      description: 'RESTful and GraphQL APIs for seamless data integration and backend services.',
      features: [
        'RESTful APIs',
        'GraphQL Implementation',
        'Authentication & Authorization',
        'Rate Limiting',
        'API Documentation',
        'Testing & Monitoring'
      ],
      price: '$1,500 - $8,000'
    },
    {
      title: 'Cloud Solutions',
      icon: Cloud,
      description: 'Cloud infrastructure setup and deployment using AWS, Azure, or Google Cloud.',
      features: [
        'AWS/Azure/GCP Setup',
        'CI/CD Pipeline',
        'Auto-scaling',
        'Security Configuration',
        'Monitoring & Logging',
        'Disaster Recovery'
      ],
      price: '$2,000 - $12,000'
    },
    {
      title: 'Performance Optimization',
      icon: Zap,
      description: 'Speed up your existing applications and improve user experience.',
      features: [
        'Code Optimization',
        'Database Optimization',
        'CDN Implementation',
        'Caching Strategies',
        'Load Testing',
        'Performance Monitoring'
      ],
      price: '$1,000 - $5,000'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your requirements and creating a detailed project plan.',
      icon: Users
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Creating wireframes and design mockups for your approval.',
      icon: Check
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building your application with clean, maintainable code.',
      icon: Code
    },
    {
      step: '04',
      title: 'Testing & Quality',
      description: 'Thorough testing to ensure everything works perfectly.',
      icon: Shield
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'Launching your application to production with monitoring.',
      icon: Cloud
    },
    {
      step: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance to keep your app running smoothly.',
      icon: Headphones
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Daksh delivered our e-commerce platform on time and exceeded our expectations. The performance is incredible!',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Founder, MobileApp',
      content: 'The mobile app he built for us has over 50k downloads. His attention to detail is outstanding.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, DigitalCorp',
      content: 'Working with Daksh was a pleasure. He understood our needs perfectly and delivered beyond our requirements.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive web development solutions tailored to your business needs. 
              From concept to deployment, I handle every aspect of your digital presence.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock size={20} />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Shield size={20} />
                <span>Quality Assured</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Headphones size={20} />
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What I Offer</h2>
            <p className="text-lg text-gray-600">Comprehensive solutions for your digital needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Check className="text-green-500" size={16} />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Process</h2>
            <p className="text-lg text-gray-600">How I bring your ideas to life</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Testimonials</h2>
            <p className="text-lg text-blue-100">What my clients say about my work</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400" size={16} />
                  ))}
                </div>
                <p className="text-white mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-blue-200 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss your requirements and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                Get Free Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                View Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services; 