import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 border border-gray-800 hover:border-secondary/50 p-8 rounded-2xl transition-all duration-300 hover:bg-gray-800/50 group"
        >
            <div className="bg-gray-800 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <Icon className="w-7 h-7 text-secondary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-400 leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
};

export default ServiceCard;
