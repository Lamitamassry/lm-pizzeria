import { useState } from 'react';

/**
 * Contact Page Component
 * Contact form and restaurant information
 */
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send data to a backend
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
            });
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <div className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
                        Get in <span className="text-accent-rose">Touch</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Have questions or want to make a reservation? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-3xl font-display font-bold text-gray-100 mb-8">
                            Visit Us
                        </h2>

                        <div className="space-y-6">
                            {/* Address */}
                            <div className="card p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-rose to-accent-pink flex items-center justify-center flex-shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-100 mb-2">Address</h3>
                                        <p className="text-gray-400">
                                            123 Gourmet Street
                                            <br />
                                            Downtown City Center
                                            <br />
                                            New York, NY 10001
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="card p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-rose to-accent-pink flex items-center justify-center flex-shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-100 mb-2">Phone</h3>
                                        <p className="text-gray-400">
                                            (555) 123-4567
                                            <br />
                                            <span className="text-sm">Available during business hours</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="card p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-rose to-accent-pink flex items-center justify-center flex-shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-100 mb-2">Email</h3>
                                        <p className="text-gray-400">
                                            hello@lmpizzeria.com
                                            <br />
                                            <span className="text-sm">We&apos;ll respond within 24 hours</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="card p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-rose to-accent-pink flex items-center justify-center flex-shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-100 mb-2">Opening Hours</h3>
                                        <div className="text-gray-400 space-y-1 text-sm">
                                            <p>Monday - Thursday: 5:00 PM - 11:00 PM</p>
                                            <p>Friday - Saturday: 5:00 PM - 12:00 AM</p>
                                            <p>Sunday: 4:00 PM - 10:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h2 className="text-3xl font-display font-bold text-gray-100 mb-8">
                            Send Us a Message
                        </h2>

                        <div className="card p-8">
                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-rose/20 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-8 w-8 text-accent-rose"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-gray-100 mb-2">
                                        Thank You!
                                    </h3>
                                    <p className="text-gray-400">
                                        Your message has been received. We&apos;ll get back to you soon!
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name Input */}
                                    <div>
                                        <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-charcoal-light border border-charcoal-light rounded-lg text-gray-100 focus:outline-none focus:border-accent-rose focus:ring-2 focus:ring-accent-rose/20 transition-all duration-300"
                                            placeholder="Your full name"
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <div>
                                        <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-charcoal-light border border-charcoal-light rounded-lg text-gray-100 focus:outline-none focus:border-accent-rose focus:ring-2 focus:ring-accent-rose/20 transition-all duration-300"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    {/* Phone Input */}
                                    <div>
                                        <label htmlFor="phone" className="block text-gray-300 font-medium mb-2">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-charcoal-light border border-charcoal-light rounded-lg text-gray-100 focus:outline-none focus:border-accent-rose focus:ring-2 focus:ring-accent-rose/20 transition-all duration-300"
                                            placeholder="(555) 123-4567"
                                        />
                                    </div>

                                    {/* Message Input */}
                                    <div>
                                        <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                                            Message / Reservation Details *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="5"
                                            className="w-full px-4 py-3 bg-charcoal-light border border-charcoal-light rounded-lg text-gray-100 focus:outline-none focus:border-accent-rose focus:ring-2 focus:ring-accent-rose/20 transition-all duration-300 resize-none"
                                            placeholder="Tell us about your inquiry or reservation details (date, time, party size)..."
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full px-6 py-4 bg-gradient-to-r from-accent-rose to-accent-pink text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-accent-rose/50 transform hover:-translate-y-0.5 transition-all duration-300"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
