import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Zap, Globe } from 'lucide-react';
import Button from './Button';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-dark">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-teal-500/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                            </span>
                            Innovating the Future
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                            Innovating Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-secondary to-accent animate-pulse">
                                Digital Future
                            </span>
                        </h1>

                        <p className="text-gray-400 text-lg lg:text-xl mb-8 leading-relaxed max-w-lg">
                            We craft premium digital experiences that define brands.
                            Elevate your business with AlphaTech Solution's world-class technology solutions.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link to="/services">
                                <Button size="lg" className="group bg-gradient-to-r from-secondary to-blue-600 border-0 hover:scale-105 transition-transform">
                                    Explore Services
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Link to="/portfolio">
                                <Button variant="outline" size="lg" className="hover:bg-white/5 border-gray-700 text-gray-300">
                                    View Portfolio
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Visual/Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            <div className="space-y-4 translate-y-8">
                                <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-6 rounded-2xl">
                                    <Code className="w-10 h-10 text-secondary mb-4" />
                                    <h3 className="text-white font-bold text-lg">Clean Code</h3>
                                    <p className="text-gray-400 text-sm">Scalable architectures built for growth.</p>
                                </div>
                                <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-6 rounded-2xl">
                                    <Globe className="w-10 h-10 text-accent mb-4" />
                                    <h3 className="text-white font-bold text-lg">Global Reach</h3>
                                    <p className="text-gray-400 text-sm">Solutions that connect the world.</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-6 rounded-2xl">
                                    <Zap className="w-10 h-10 text-yellow-500 mb-4" />
                                    <h3 className="text-white font-bold text-lg">Fast Performance</h3>
                                    <p className="text-gray-400 text-sm">Optimized for speed and efficiency.</p>
                                </div>
                                <div className="bg-gradient-to-br from-secondary to-accent p-6 rounded-2xl flex items-center justify-center">
                                    <div className="text-center">
                                        <span className="block text-4xl font-bold text-white mb-1">100+</span>
                                        <span className="text-white/90 text-sm">Projects Delivered</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
