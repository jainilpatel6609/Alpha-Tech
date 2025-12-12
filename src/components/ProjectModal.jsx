import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ExternalLink, Calendar, Code, Layers } from 'lucide-react';
import Button from './Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-dark border border-gray-800 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 bg-black/50 backdrop-blur-md rounded-full hover:bg-secondary transition-colors text-white z-20 border border-white/10"
                            >
                                <X size={20} />
                            </button>

                            {/* Hero Image */}
                            <div className="h-64 md:h-80 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden group">
                                {/* Placeholder for actual project image */}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-90"></div>
                                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                    <div className="flex flex-wrap gap-3 mb-4">
                                        <span className="px-3 py-1 bg-secondary text-white text-xs font-bold uppercase tracking-wider rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{project.title}</h2>
                                    <p className="text-gray-300 text-lg max-w-2xl">{project.shortDescription}</p>
                                </div>
                            </div>

                            {/* Content Body */}
                            <div className="p-8 md:p-12 bg-dark">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                                    {/* Main Content - Left Column */}
                                    <div className="lg:col-span-2 space-y-8">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-4">About the Project</h3>
                                            <p className="text-gray-400 leading-relaxed text-lg">
                                                {project.fullDescription}
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                {project.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-xl border border-gray-800/50">
                                                        <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                                        <span className="text-gray-300 text-sm">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sidebar - Right Column */}
                                    <div className="space-y-8">
                                        {/* Tech Stack */}
                                        <div className="p-6 bg-gray-900/30 rounded-2xl border border-gray-800">
                                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                                <Code className="w-5 h-5 text-secondary" />
                                                Technologies Used
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techStack.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1.5 bg-dark border border-gray-700 rounded-lg text-gray-300 text-xs font-medium"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Project Details */}
                                        <div className="p-6 bg-gray-900/30 rounded-2xl border border-gray-800 space-y-4">
                                            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                                                <Layers className="w-5 h-5 text-secondary" />
                                                Project Info
                                            </h3>
                                            <div className="space-y-3">
                                                <div className="flex justify-between text-sm border-b border-gray-800 pb-2">
                                                    <span className="text-gray-500">Client</span>
                                                    <span className="text-white">Confidential</span>
                                                </div>
                                                <div className="flex justify-between text-sm border-b border-gray-800 pb-2">
                                                    <span className="text-gray-500">Duration</span>
                                                    <span className="text-white">3 Months</span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-gray-500">Status</span>
                                                    <span className="text-green-400">Completed</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* CTA */}
                                        <Button className="w-full justify-center group text-lg py-6" onClick={() => console.log('Visiting project...')}>
                                            <span>Visit Live Project</span>
                                            <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
