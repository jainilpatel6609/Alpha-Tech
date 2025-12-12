import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import { Code, Smartphone, Cloud, PenTool, Database, Shield } from 'lucide-react';

const services = [
    {
        icon: Code,
        title: "Web Development",
        description: "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js."
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter."
    },
    {
        icon: Cloud,
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure setup, migration, and management on AWS, Azure, and Google Cloud."
    },
    {
        icon: PenTool,
        title: "UI/UX Design",
        description: "User-centric design solutions that create engaging and intuitive digital experiences."
    },
    {
        icon: Database,
        title: "Data Analytics",
        description: "Transform your raw data into actionable insights with our advanced analytics solutions."
    },
    {
        icon: Shield,
        title: "Cybersecurity",
        description: "Protect your digital assets with our comprehensive security audits and implementation services."
    }
];

const Home = () => {
    return (
        <div className="bg-dark min-h-screen">
            <Hero />

            {/* Services Section */}
            <section className="py-20 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Expertise</h2>
                        <p className="text-gray-400 text-lg">
                            We deliver end-to-end digital solutions tailored to your business goals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-secondary to-accent rounded-3xl p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2"></div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Digital Presence?</h2>
                            <p className="text-white/90 text-lg mb-8">
                                Join hundreds of successful businesses who have trusted AlphaTech Solution with their digital journey.
                            </p>
                            <Button size="lg" className="bg-white text-secondary hover:bg-gray-100 shadow-xl shadow-black/20">
                                Get a Free Consultation
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
