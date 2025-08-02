import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  ExternalLink, 
  Github, 
  Globe, 
  Smartphone, 
  Code,
  Filter,
  Search,
  Eye,
  Calendar,
  Tag
} from 'lucide-react';

// Import images
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'api', label: 'API Development' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'ecommerce',
      image: portfolio1,
      description: 'A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      features: [
        'Payment Gateway Integration',
        'Inventory Management',
        'Order Processing',
        'Admin Dashboard',
        'Mobile Responsive',
        'SEO Optimized'
      ],
      year: '2024'
    },
    {
      id: 2,
      title: 'Sports Analytics App',
      category: 'mobile',
      image: portfolio2,
      description: 'Mobile application for sports analytics with real-time data visualization and performance tracking.',
      technologies: ['React Native', 'Firebase', 'Chart.js', 'Redux'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      features: [
        'Real-time Data',
        'Performance Analytics',
        'Push Notifications',
        'Offline Support',
        'Social Features',
        'Custom Dashboard'
      ],
      year: '2024'
    },
    {
      id: 3,
      title: 'REST API Service',
      category: 'api',
      image: portfolio3,
      description: 'Scalable REST API service with authentication, rate limiting, and comprehensive documentation.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      features: [
        'RESTful API Design',
        'JWT Authentication',
        'Rate Limiting',
        'API Documentation',
        'Error Handling',
        'Testing Suite'
      ],
      year: '2023'
    },
    {
      id: 4,
      title: 'Corporate Website',
      category: 'web',
      image: portfolio1,
      description: 'Modern corporate website with CMS integration, blog functionality, and contact management.',
      technologies: ['Next.js', 'TypeScript', 'Strapi', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      features: [
        'Content Management',
        'Blog System',
        'Contact Forms',
        'SEO Optimization',
        'Performance Optimized',
        'Responsive Design'
      ],
      year: '2023'
    },
    {
      id: 5,
      title: 'Food Delivery App',
      category: 'mobile',
      image: portfolio2,
      description: 'Food delivery mobile application with real-time tracking, payment integration, and restaurant management.',
      technologies: ['React Native', 'Node.js', 'Socket.io', 'PayPal'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      features: [
        'Real-time Tracking',
        'Payment Integration',
        'Restaurant Dashboard',
        'Order Management',
        'Push Notifications',
        'Rating System'
      ],
      year: '2023'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      category: 'web',
      image: portfolio3,
      description: 'Personal portfolio website with modern design, animations, and contact functionality.',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      features: [
        'Modern Design',
        'Smooth Animations',
        'Contact Forms',
        'Project Showcase',
        'Responsive Layout',
        'Performance Optimized'
      ],
      year: '2024'
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' ? true : project.category === activeFilter
  );

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

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
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collection of projects that showcase my skills in web development, 
              mobile applications, and modern technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
                  onClick={() => openProjectModal(project)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Eye className="text-white" size={32} />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500">{project.year}</span>
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex space-x-3">
                      <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm">
                        <Globe size={16} />
                        <span>Live</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 text-sm">
                        <Github size={16} />
                        <span>Code</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">4+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  ×
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
                  <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6">{selectedProject.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
                    <ul className="space-y-1">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <ExternalLink size={16} />
                    <span>View Live</span>
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Portfolio; 