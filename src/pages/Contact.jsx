import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaEnvelope, FaTiktok } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate with an email service or backend
    setSubmitted(true);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading-xl mb-6">Contact Us</h1>
            <p className="text-lg text-textSecondary">
              Ready to start your project or have a question? Fill out the form below or reach out via email or social media.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-secondary p-8 rounded-lg shadow-lg"
            >
              {submitted ? (
                <div className="text-center">
                  <h2 className="heading-md mb-4">Thank you!</h2>
                  <p className="text-textSecondary">Your message has been sent. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-textPrimary mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-primary/30 focus:border-accent focus:outline-none bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-textPrimary mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-primary/30 focus:border-accent focus:outline-none bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-textPrimary mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 rounded-md border border-primary/30 focus:border-accent focus:outline-none bg-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-display text-lg font-semibold mb-2">Business Email</h3>
                <a href="mailto:studiolumaeco@gmail.com" className="text-accent hover:underline">
                  studiolumaeco@gmail.com
                </a>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-2">Social Media</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/studio_lumae_co?igsh=Mjh5cm02Zm1wbGRr&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textPrimary hover:text-accent transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://tiktok.com/@studio.lumae?_t=ZM-8xCletazHmf&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textPrimary hover:text-accent transition-colors"
                    aria-label="Facebook"
                  >
                    <FaTiktok className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:studiolumaeco@gmail.com"
                    className="text-textPrimary hover:text-accent transition-colors"
                    aria-label="Email"
                  >
                    <FaEnvelope className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-2">Location</h3>
                <p className="text-textSecondary">Operating remotely with Lagos as base city</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 