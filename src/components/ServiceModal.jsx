import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Smartphone, Code, ArrowRight } from 'lucide-react';
import Button from './Button';

const ServiceModal = ({ service, isOpen, onClose }) => {
    if (!service) return null;

    const Icon = service.icon;

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
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-dark border border-gray-800 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 bg-gray-800 rounded-full hover:bg-gray-700 text-white transition-colors z-10"
                            >
                                <X size={20} />
                            </button>

                            {/* Header Image/Gradient */}
                            <div className="h-48 bg-gradient-to-r from-secondary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
                                <div className="bg-dark/50 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex items-center gap-4">
                                    <Icon className="w-12 h-12 text-secondary" />
                                    <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                                </div>
                            </div>

                            {/* Content Body */}
                            <div className="p-8 md:p-12">
                                <p className="text-xl text-gray-300 leading-relaxed mb-10">
                                    {service.longDescription}
                                </p>

                                <div className="grid md:grid-cols-2 gap-12 mb-12">
                                    {/* Features */}
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                            KEY FEATURES
                                        </h3>
                                        <ul className="space-y-4">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-gray-400">
                                                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Benefits */}
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-6">
                                            BENEFITS
                                        </h3>
                                        <div className="space-y-4">
                                            {service.benefits.map((benefit, idx) => (
                                                <div key={idx} className="bg-gray-900/50 p-4 rounded-xl border border-gray-800">
                                                    <p className="text-gray-300 text-sm">{benefit}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Tech Stack */}
                                <div className="mb-12">
                                    <h3 className="text-xl font-bold text-white mb-6">TECHNOLOGIES USED</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {service.techStack.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-4 py-2 bg-gray-800 rounded-full text-secondary text-sm font-medium border border-gray-700"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="flex justify-end gap-4 pt-8 border-t border-gray-800">
                                    <Button variant="outline" onClick={onClose}>Close</Button>
                                    <Button className="group">
                                        Get a Quote
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ServiceModal;
