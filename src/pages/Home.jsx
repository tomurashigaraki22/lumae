import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const services = [
  {
    id: 'branding',
    title: 'Branding & Identity',
    description: 'Create a unique and memorable brand identity that resonates with your audience.',
    icon: '🎨'
  },
  {
    id: 'content',
    title: 'Content Creation',
    description: 'Engaging content that tells your story and connects with your audience.',
    icon: '📸'
  },
  {
    id: 'marketing',
    title: 'Marketing & Strategy',
    description: 'Strategic marketing solutions to grow your brand and reach your goals.',
    icon: '📈'
  },
  {
    id: 'web',
    title: 'Web & Digital Design',
    description: 'Beautiful, functional websites that convert visitors into customers.',
    icon: '💻'
  }
];

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-left"
            >
              <motion.h1
                variants={fadeInUp}
                className="heading-xl mb-6 text-textPrimary"
              >
                Bloom Boldly.
                <br />
                Create Fearlessly.
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-textSecondary mb-8"
              >
                A women-led creative agency helping brands blossom through identity-building,
                content creation, and digital experiences.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link
                  to="/contact"
                  className="btn-primary group"
                >
                  Let's Create Together
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[400px] rounded-lg overflow-hidden bg-accent/10"
            >
              {/* Add creative agency image here */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20" /> */}
              <img src="https://www.shutterstock.com/image-photo/confident-professional-young-latin-business-600nw-2343597925.jpg" alt='Hero Image' className='inset-0 absolute bg-gradient-to-br from-accent/20 to-primary/20'/>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4">Our Services</h2>
            <p className="text-textSecondary max-w-2xl mx-auto">
              We offer a comprehensive suite of creative services to help your brand
              thrive in the digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-secondary p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="heading-sm mb-2">{service.title}</h3>
                <p className="text-textSecondary">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/services" className="btn-secondary">
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-lg mb-4">Meet Studio Lumae</h2>
              <p className="text-textSecondary mb-6">
                We're a team of creative women passionate about helping brands
                find their voice and make their mark in the digital world. Based
                in Lagos but working globally, we bring a fresh perspective to
                every project.
              </p>
              <Link to="/about" className="btn-primary">
                Our Story
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <img 
                src='/logo.jpg' 
                alt="Studio Lumae Team"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-lg mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let's create something beautiful together. Whether you're starting
              from scratch or looking to refresh your brand, we're here to help.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-accent hover:bg-opacity-90 px-8 py-3 rounded-md font-medium transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 