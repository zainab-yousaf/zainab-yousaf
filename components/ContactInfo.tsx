"use client";

// components/Contact.tsx
import React, { useState } from "react";
import {
    Mail,
    MapPin,
    Phone,
    Send,
    CheckCircle,
    AlertCircle,
} from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<
        "idle" | "success" | "error"
    >("idle");

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });

            // Reset status after 3 seconds
            setTimeout(() => setSubmitStatus("idle"), 3000);
        }, 2000);
    };

    return (
        <section
            id="contact"
            className="min-h-screen py-12 px-4 bg-gradient-to-br from-gray-50 to-white"
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Get In Touch
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        I'm always open to discussing new projects,
                        opportunities, or collaborations. Let's create something
                        amazing together!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Contact Form */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                            Send me a message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                                        placeholder="Your Email"
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                                    placeholder="Subject"
                                />
                            </div>

                            <div className="relative">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={6}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                                    placeholder="Your Message"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                        Sending...
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center">
                                        <Send className="w-5 h-5 mr-2" />
                                        Send Message
                                    </div>
                                )}
                            </button>

                            {/* Success/Error Messages */}
                            {submitStatus === "success" && (
                                <div className="flex items-center justify-center p-4 bg-green-50 border border-green-200 rounded-xl">
                                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                                    <span className="text-green-800 font-medium">
                                        Message sent successfully!
                                    </span>
                                </div>
                            )}

                            {submitStatus === "error" && (
                                <div className="flex items-center justify-center p-4 bg-red-50 border border-red-200 rounded-xl">
                                    <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                                    <span className="text-red-800 font-medium">
                                        Failed to send message. Please try
                                        again.
                                    </span>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Contact Info & Map */}
                    <div className="space-y-4">
                        {/* Contact Information */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Contact Information
                            </h3>

                            <div className="space-y-4">
                                <a
                                    href="mailto:zainab.yousaf161@gmail.com"
                                    className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl hover:from-blue-100 hover:to-purple-100 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            Email
                                        </p>
                                        <p className="text-gray-600">
                                            zainab.yousaf161@gmail.com
                                        </p>
                                    </div>
                                </a>

                                <div className="flex items-center p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl">
                                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            Location
                                        </p>
                                        <p className="text-gray-600">
                                            Lahore, Pakistan
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            Availability
                                        </p>
                                        <p className="text-gray-600">
                                            Open for opportunities
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Connect With Me
                            </h3>

                            <div className="flex space-x-4">
                                <a
                                    href="https://www.linkedin.com/in/zainabyousaf/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl text-center hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300"
                                >
                                    <div className="text-2xl mb-2">💼</div>
                                    <p className="font-semibold">LinkedIn</p>
                                </a>
                                <a
                                    href="mailto:zainab.yousaf161@gmail.com"
                                    className="flex-1 p-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl text-center hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300"
                                >
                                    <div className="text-2xl mb-2">📧</div>
                                    <p className="font-semibold">Email</p>
                                </a>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                            <div className="h-64">
                                <iframe
                                    title="Lahore Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13622.051190161907!2d74.3344889!3d31.5203696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904c33d37f93f%3A0x84bb61b1b845a70!2sLahore!5e0!3m2!1sen!2s!4v1694100000000!5m2!1sen!2s"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
