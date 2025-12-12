import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Globe, Smartphone, PenTool, Code, Cloud,
    BarChart, Cpu, ArrowRight
} from 'lucide-react';
import ServiceModal from '../components/ServiceModal';

const servicesData = [
    {
        id: 1,
        title: "Website Development",
        icon: Globe,
        shortDesc: "High-performance, responsive websites tailored to your brand.",
        longDescription: "We build pixel-perfect, highly responsive, and scalable websites that drive results. From corporate sites to complex web applications, our solutions are designed to provide an exceptional user experience across all devices.",
        features: [
            "Responsive & Mobile-First Design",
            "SEO Optimization built-in",
            "Fast Loading Speeds",
            "Content Management Systems (CMS)"
        ],
        techStack: ["React", "Next.js", "Tailwind CSS", "Node.js", "WordPress"],
        benefits: [
            "Increased online visibility",
            "Better user engagement",
            "Scalable infrastructure"
        ]
    },
    {
        id: 2,
        title: "Mobile App Development",
        icon: Smartphone,
        shortDesc: "Native and cross-platform apps for iOS and Android.",
        longDescription: "Transform your ideas into powerful mobile applications. We create intuitive and feature-rich apps for both iOS and Android platforms, ensuring high performance and a seamless user experience.",
        features: [
            "Cross-Platform Compatibility",
            "Native Performance",
            "Offline Capabilities",
            "Push Notifications"
        ],
        techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
        benefits: [
            "Reach users on the go",
            "Higher customer retention",
            "Direct marketing channel"
        ]
    },
    {
        id: 3,
        title: "UI/UX Design",
        icon: PenTool,
        shortDesc: "User-centric designs that drive engagement and retention.",
        longDescription: "Great products start with great design. Our UI/UX team creates intuitive, accessible, and aesthetically pleasing interfaces that simplify complex user journeys and delight your customers.",
        features: [
            "User Research & Personas",
            "Wireframing & Prototyping",
            "Design Systems",
            "Usability Testing"
        ],
        techStack: ["Figma", "Adobe XD", "Sketch", "Protopie"],
        benefits: [
            "Higher conversion rates",
            "Reduced development costs",
            "Increased customer loyalty"
        ]
    },
    {
        id: 4,
        title: "Software Development",
        icon: Code,
        shortDesc: "Custom software solutions to streamline your operations.",
        longDescription: "We deliver custom software solutions tailored to your specific business needs. Whether it's enterprise resource planning (ERP), customer relationship management (CRM), or automation tools, we have you covered.",
        features: [
            "Custom Architecture",
            "API Integration",
            "Legacy System Modernization",
            "Automated Testing"
        ],
        techStack: ["Python", "Java", "C#", ".NET", "PostgreSQL"],
        benefits: [
            "Optimized workflows",
            "Data-driven decision making",
            "Enhanced security"
        ]
    },
    {
        id: 5,
        title: "Cloud Solutions",
        icon: Cloud,
        shortDesc: "Scalable cloud infrastructure and migration services.",
        longDescription: "Leverage the power of the cloud to scale your business. We offer end-to-end cloud services, including migration, architecture design, and management, ensuring high availability and cost-efficiency.",
        features: [
            "Cloud Migration Strategies",
            "Serverless Architecture",
            "CI/CD Pipelines",
            "24/7 Monitoring"
        ],
        techStack: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes"],
        benefits: [
            "Reduced IT infrastructure costs",
            "Global scalability",
            "Disaster recovery"
        ]
    },
    {
        id: 6,
        title: "Digital Marketing",
        icon: BarChart,
        shortDesc: "Data-driven strategies to grow your online presence.",
        longDescription: "Grow your brand and reach your target audience with our comprehensive digital marketing services. We use data-driven strategies to maximize ROI and drive sustainable growth.",
        features: [
            "Search Engine Optimization (SEO)",
            "Social Media Marketing",
            "Pay-Per-Click (PPC)",
            "Email Marketing"
        ],
        techStack: ["Google Analytics", "SEmrush", "HubSpot", "Meta Ads"],
        benefits: [
            "Targeted lead generation",
            "Measurable ROI",
            "Brand awareness"
        ]
    },
    {
        id: 7,
        title: "Custom IT Solutions",
        icon: Cpu,
        shortDesc: "Bespoke technology consulting and implementation.",
        longDescription: "Every business is unique. We provide specialized consulting and custom IT implementation to tackle your specific challenges, from blockchain integration to AI-powered analytics.",
        features: [
            "Technology Consulting",
            "Blockchain Solutions",
            "AI & Machine Learning Integration",
            "IoT Development"
        ],
        techStack: ["TensorFlow", "Solidity", "Raspberry Pi", "OpenAI API"],
        benefits: [
            "Competitive advantage",
            "Future-proof technology",
            "Solved niche problems"
        ]
    }
];

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <div className="bg-dark min-h-screen pt-20">
            {/* Hero */}
            <section className="py-20 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Our <span className="text-secondary">Expertise</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Comprehensive technology solutions designed to scale your business and accelerate innovation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Grid */}
            <section className="pb-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.map((service, idx) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 hover:border-secondary/50 hover:bg-gray-900/60 transition-all duration-300 group cursor-pointer flex flex-col"
                                onClick={() => setSelectedService(service)}
                            >
                                <div className="bg-gray-800 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                                    <service.icon className="w-7 h-7 text-secondary group-hover:text-white transition-colors" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-gray-400 mb-6 flex-grow">{service.shortDesc}</p>

                                <div className="flex items-center text-secondary font-medium group-hover:text-white transition-colors mt-auto">
                                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            <ServiceModal
                service={selectedService}
                isOpen={!!selectedService}
                onClose={() => setSelectedService(null)}
            />
        </div>
    );
};

export default Services;
