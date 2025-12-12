import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark border-t border-gray-800 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">AlphaTech Solution</h3>
                        <p className="text-gray-400">
                            Transforming ideas into digital reality. We build scalable, modern, and high-performance solutions for your business.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-secondary transition-colors text-white">
                                <Twitter size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/alphatech-solution-576055394/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-secondary transition-colors text-white">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-secondary transition-colors text-white">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-secondary transition-colors text-white">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="text-gray-400 hover:text-secondary transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-secondary transition-colors">Services</Link></li>
                            <li><Link to="/portfolio" className="text-gray-400 hover:text-secondary transition-colors">Portfolio</Link></li>
                            <li><Link to="/careers" className="text-gray-400 hover:text-secondary transition-colors">Careers</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-secondary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
                        <ul className="space-y-3">
                            <li className="text-gray-400">Web Development</li>
                            <li className="text-gray-400">Mobile Apps</li>
                            <li className="text-gray-400">UI/UX Design</li>
                            <li className="text-gray-400">Cloud Solutions</li>
                            <li className="text-gray-400">Digital Marketing</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="text-secondary shrink-0" />
                                <span>20, Astavinayak, Nugar Bypass, Mehsana-2</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="text-secondary shrink-0" />
                                <div className="flex flex-col">
                                    <span>+91 9898573586</span>
                                    <span>+91 9327807331</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="text-secondary shrink-0" />
                                <span>alphatech1825@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} AlphaTech Solution. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
