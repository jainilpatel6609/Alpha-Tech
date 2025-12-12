import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Send, User, MessageSquare, Smartphone } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add logic to handle form submission (e.g., API call)
    };

    return (
        <div className="min-h-screen bg-dark text-white font-sans">
            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-b from-primary to-dark">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
                            Get In Touch
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Want to get in touch? We'd love to hear from you.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Text & Context */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-4">Have Some Questions?</h2>
                            <p className="text-gray-400 leading-relaxed">
                                Whether you're interested in our IT services, need a consultation, or just want to say hello, we're here to help.
                                At <span className="text-secondary font-semibold">AlphaTech Solution</span>, we bridge the gap between your ideas and reality.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white mb-4">How Can We Help You?</h2>
                            <p className="text-gray-400 leading-relaxed">
                                Fill out the form and our team will get back to you within 24 hours. Let's build something amazing together.
                            </p>
                        </div>

                        <div className="hidden lg:block pt-8">
                            <div className="p-6 bg-primary/50 rounded-2xl border border-gray-800 backdrop-blur-sm">
                                <h3 className="text-xl font-semibold text-white mb-2">Office Hours</h3>
                                <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p className="text-gray-400">Saturday: 10:00 AM - 2:00 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-primary/30 p-8 md:p-10 rounded-3xl border border-gray-800 shadow-2xl backdrop-blur-md">
                        <h3 className="text-2xl font-bold mb-6 text-white border-l-4 border-secondary pl-4">
                            Submit the details and we will contact you
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Full Name */}
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 group-focus-within:text-secondary transition-colors">
                                        <User size={20} />
                                    </div>
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Full Name"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 bg-dark/50 border border-gray-700 rounded-xl focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary text-white placeholder-gray-500 transition-all"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 group-focus-within:text-secondary transition-colors">
                                        <Mail size={20} />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 bg-dark/50 border border-gray-700 rounded-xl focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary text-white placeholder-gray-500 transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Mobile */}
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 group-focus-within:text-secondary transition-colors">
                                        <Smartphone size={20} />
                                    </div>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        placeholder="Mobile Number"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 bg-dark/50 border border-gray-700 rounded-xl focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary text-white placeholder-gray-500 transition-all"
                                    />
                                </div>

                                {/* Subject */}
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 group-focus-within:text-secondary transition-colors">
                                        <MessageSquare size={20} />
                                    </div>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="What are you looking for?"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 bg-dark/50 border border-gray-700 rounded-xl focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary text-white placeholder-gray-500 transition-all"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="relative group pb-2">
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Describe your requirement briefly..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-4 bg-dark/50 border border-gray-700 rounded-xl focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary text-white placeholder-gray-500 transition-all resize-none"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-secondary to-blue-600 rounded-xl font-bold text-white shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <span>Submit Request</span>
                                <Send size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Other Ways to Connect */}
            <section className="py-24 bg-primary/20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">
                        Other ways to connect with us
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Facebook */}
                        <a href="#" className="group p-8 bg-primary rounded-3xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 text-center">
                            <div className="w-16 h-16 mx-auto mb-6 bg-blue-600/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Facebook size={32} className="text-blue-500 group-hover:text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">Facebook</h3>
                            <p className="text-gray-400 text-sm">Follow our updates and news</p>
                        </a>

                        {/* Instagram */}
                        <a href="#" className="group p-8 bg-primary rounded-3xl border border-gray-800 hover:border-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10 text-center">
                            <div className="w-16 h-16 mx-auto mb-6 bg-pink-600/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Instagram size={32} className="text-pink-500 group-hover:text-pink-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">Instagram</h3>
                            <p className="text-gray-400 text-sm">See our latest creative works</p>
                        </a>

                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/alphatech-solution-576055394" target="_blank" rel="noopener noreferrer" className="group p-8 bg-primary rounded-3xl border border-gray-800 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/10 text-center">
                            <div className="w-16 h-16 mx-auto mb-6 bg-blue-400/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Linkedin size={32} className="text-blue-400 group-hover:text-blue-300" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">LinkedIn</h3>
                            <p className="text-gray-400 text-sm">Connect for professional opportunities</p>
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact Info Footer Block */}
            <section className="py-20 bg-darker border-t border-gray-800">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-5xl mx-auto">

                        {/* Address */}
                        <div className="flex items-start gap-6 group hover:translate-x-2 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                                <MapPin className="text-secondary" size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white mb-1">Office</h4>
                                <p className="text-gray-400 leading-relaxed max-w-xs">
                                    20, Astavinayak, Nugar Bypass, Mehsana-2
                                </p>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="flex items-start gap-6 group hover:translate-x-2 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                                <Phone className="text-secondary" size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white mb-1">Contact Us</h4>
                                <p className="text-gray-400 mb-1">+91 9898573586</p>
                                <p className="text-gray-400">+91 9327807331</p>
                            </div>
                        </div>

                        {/* Email/Whatsapp */}
                        <div className="flex items-start gap-6 group hover:translate-x-2 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                                <Mail className="text-secondary" size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white mb-1">Email & Chat</h4>
                                <p className="text-gray-400 mb-1">alphatech1825@gmail.com</p>
                                <p className="text-green-400 text-sm flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                    WhatsApp Available
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;
