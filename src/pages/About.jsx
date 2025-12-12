import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Heart, Lightbulb, Shield } from 'lucide-react';
import Button from '../components/Button';

const SectionHeader = ({ title, subtitle }) => (
    <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <div className="h-1 w-20 bg-secondary mx-auto rounded-full mb-4"></div>
        <p className="text-gray-400 text-lg">{subtitle}</p>
    </div>
);

const About = () => {
    const stats = [
        { label: "Years Experience", value: "5+" },
        { label: "Projects Completed", value: "60+" },
        { label: "Team Members", value: "10+" },
        { label: "Client Satisfaction", value: "99%" },
    ];

    const values = [
        {
            icon: Lightbulb,
            title: "Innovation",
            desc: "Pushing boundaries with creative solutions."
        },
        {
            icon: Shield,
            title: "Integrity",
            desc: "Honest and transparent in all our dealings."
        },
        {
            icon: Users,
            title: "Collaboration",
            desc: "Working together to achieve greatness."
        },
        {
            icon: Heart,
            title: "Passion",
            desc: "Dedicated to delivering excellence."
        }
    ];

    return (
        <div className="bg-dark min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/2"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-4 block">Who We Are</span>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                            Driving Digital Transformation for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                                Tomorrow's Leaders
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed mb-8">
                            At <strong className="text-white">AlphaTech Solution</strong>, we believe in the power of technology to change the world.
                            We are a team of visionary developers, designers, and strategists dedicated to building
                            scalable, modern, and impactful digital solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-10 border-y border-gray-800 bg-gray-900/30">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-gray-500 text-sm uppercase tracking-wide">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-900/50 p-10 rounded-3xl border border-gray-800 hover:border-secondary/30 transition-colors"
                        >
                            <div className="bg-secondary/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                <Target className="w-8 h-8 text-secondary" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                            <p className="text-gray-400 leading-relaxed">
                                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital era. We strive to be the bridge between complex problems and elegant, user-centric software.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-900/50 p-10 rounded-3xl border border-gray-800 hover:border-accent/30 transition-colors"
                        >
                            <div className="bg-accent/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                <Eye className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                            <p className="text-gray-400 leading-relaxed">
                                To be the global partner of choice for digital transformation, recognized for our technical excellence, creative design, and unwavering commitment to client success. We envision a future where technology amplifies human potential.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-gray-900/20">
                <div className="container mx-auto px-6">
                    <SectionHeader
                        title="Our Core Values"
                        subtitle="The principles that guide our work and shape our culture."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-dark p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all hover:-translate-y-1"
                            >
                                <div className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                                    <item.icon className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-3xl mx-auto bg-gradient-to-b from-gray-900 to-dark border border-gray-800 p-12 rounded-3xl">
                        <h2 className="text-3xl font-bold text-white mb-6">Want to work with us?</h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            We are always looking for talented individuals to join our growing team.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link to="/careers">
                                <Button>Join Our Team</Button>
                            </Link>
                            <Link to="/contact">
                                <Button variant="outline">Contact Us</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
