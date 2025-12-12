import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ArrowRight, Code, Smartphone, Globe, Layout } from 'lucide-react';
import ProjectModal from '../components/ProjectModal';

const projectsData = [
    {
        id: 1,
        title: 'Asset Management System',
        category: 'Website',
        shortDescription: 'Comprehensive solution for tracking and managing company assets.',
        fullDescription: 'A robust web-based Asset Management System designed to streamline the tracking, maintenance, and reporting of organizational assets. It allows for real-time inventory updates, depreciation calculation, and custodial assignment, ensuring complete visibility and control over valuable resources.',
        techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
        features: ['Real-time Asset Tracking', 'Automated Depreciation Reports', 'User Role Management', 'QR Code Integration', 'Maintenance Scheduling']
    },
    {
        id: 2,
        title: 'Face Recognition Attendance',
        category: 'Desktop App',
        shortDescription: 'AI-powered biometric attendance system for secure logging.',
        fullDescription: 'An advanced attendance system leveraging facial recognition technology to provide contactless, secure, and efficient employee time-tracking. It eliminates proxy attendance and integrates seamlessly with HR payroll systems.',
        techStack: ['Python', 'OpenCV', 'TensorFlow', 'PyQt5', 'SQLite'],
        features: ['Live Face Detection', 'Spoofing Prevention', 'Automated Reporting', 'Cloud Sync', 'Shift Management']
    },
    {
        id: 3,
        title: 'E-Commerce Mobile App',
        category: 'Mobile App',
        shortDescription: 'Seamless shopping experience with secure payment integration.',
        fullDescription: 'A cross-platform mobile application providing a fluid shopping experience. Features include personalized recommendations, secure checkout, real-time order tracking, and push notifications for engagement.',
        techStack: ['React Native', 'Firebase', 'Redux', 'Stripe API'],
        features: ['User-friendly Interface', 'Secure Payment Gateway', 'Order History & Tracking', 'Push Notifications', 'Wishlist Functionality']
    },
    {
        id: 4,
        title: 'Corporate Dashboard',
        category: 'Website',
        shortDescription: 'Interactive analytics dashboard for business intelligence.',
        fullDescription: 'A high-performance data visualization dashboard for corporate decision-makers. It aggregates data from various sources to present key performance indicators (KPIs) in an intuitive and interactive format.',
        techStack: ['Vue.js', 'D3.js', 'Laravel', 'MySQL'],
        features: ['Interactive Charts', 'Real-time Data Updates', 'Customizable Widgets', 'Export to PDF/Excel', 'Dark/Light Mode']
    },
    {
        id: 5,
        title: 'Social Networking Platform',
        category: 'Website',
        shortDescription: 'Community platform for connecting professionals.',
        fullDescription: 'A scalable social networking platform tailored for professionals to connect, share insights, and collaborate. Includes features like messaging, groups, events, and a news feed algorithm.',
        techStack: ['Next.js', 'GraphQL', 'PostgreSQL', 'Socket.io', 'AWS'],
        features: ['Real-time Messaging', 'News Feed Algorithm', 'Group Creation', 'Event Management', 'Profile Customization']
    },
    {
        id: 6,
        title: 'Fitness Tracker App',
        category: 'Mobile App',
        shortDescription: 'Health monitoring app with workout plans and diet tracking.',
        fullDescription: 'A comprehensive fitness companion app that tracks workouts, monitors nutrition, and visualizes progress. It syncs with wearable devices to provide holistic health insights.',
        techStack: ['Flutter', 'Dart', 'Google Fit API', 'Node.js'],
        features: ['Workout Logging', 'Calorie Counter', 'Step Tracking', 'Goal Setting', 'Community Challenges']
    }
];

const categories = ['All', 'Website', 'Mobile App', 'Desktop App'];

const Portfolio = () => {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = filter === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    return (
        <div className="min-h-screen bg-dark text-white font-sans">
            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-b from-primary to-dark overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
                            Our Portfolio
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Our work is distinguished among a wide variety. Below are a few of our projects which may help you trust us better.
                    </p>
                </div>
            </section>

            {/* Filter & Grid Section */}
            <section className="py-12 pb-24">
                <div className="container mx-auto px-6">

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${filter === cat
                                        ? 'bg-secondary border-secondary text-white shadow-lg shadow-blue-500/25 scale-105'
                                        : 'bg-transparent border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    key={project.id}
                                    className="group relative bg-primary rounded-3xl overflow-hidden border border-gray-800 shadow-xl hover:shadow-2xl hover:shadow-secondary/10 hover:border-secondary/30 transition-all duration-500"
                                >
                                    {/* Image Placeholder */}
                                    <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-pattern opacity-10"></div>

                                        {/* Icon based on category (Dynamic Placeholder) */}
                                        <div className="text-gray-700 group-hover:scale-110 transition-transform duration-500">
                                            {project.category === 'Website' && <Globe size={64} strokeWidth={1} />}
                                            {project.category === 'Mobile App' && <Smartphone size={64} strokeWidth={1} />}
                                            {project.category === 'Desktop App' && <Layout size={64} strokeWidth={1} />}
                                        </div>

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-dark/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <button
                                                onClick={() => setSelectedProject(project)}
                                                className="bg-secondary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-600"
                                            >
                                                <span>Visit Project</span>
                                                <Eye size={18} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-8">
                                        <span className="text-secondary text-xs font-bold uppercase tracking-wider mb-2 block">
                                            {project.category}
                                        </span>
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                                            {project.shortDescription}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.slice(0, 3).map((tech, idx) => (
                                                <span key={idx} className="px-2 py-1 bg-gray-800 rounded-md text-gray-500 text-xs border border-gray-700">
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.techStack.length > 3 && (
                                                <span className="px-2 py-1 bg-gray-800 rounded-md text-gray-500 text-xs border border-gray-700">
                                                    +{project.techStack.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">No projects found in this category.</p>
                        </div>
                    )}

                </div>
            </section>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />

        </div>
    );
};

export default Portfolio;
