import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPalette, FaCamera, FaChartLine, FaLaptopCode } from 'react-icons/fa';

const services = [
  {
    id: 'branding',
    title: 'Branding & Identity',
    image: '/in2.jpeg',
    icon: FaPalette,
    description: 'Create a unique and memorable brand identity that resonates with your audience.',
    features: [
      'Brand Strategy Development',
      'Visual Identity Design',
      'Brand Guidelines',
      'Logo Design',
      'Brand Voice & Messaging'
    ],
    process: [
      'Discovery & Research',
      'Strategy Development',
      'Concept Creation',
      'Design & Refinement',
      'Implementation & Guidelines'
    ]
  },
  {
    id: 'content',
    title: 'Content Creation',
    icon: FaCamera,
    image: '/in1.jpeg',
    description: 'Engaging content that tells your story and connects with your audience.',
    features: [
      'Photography & Videography',
      'Social Media Content',
      'Blog Writing',
      'Email Marketing',
      'Content Strategy'
    ],
    process: [
      'Content Planning',
      'Creative Direction',
      'Production',
      'Editing & Refinement',
      'Distribution Strategy'
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing & Strategy',
    icon: FaChartLine,
    image: '/ini4.jpeg',
    description: 'Strategic marketing solutions to grow your brand and reach your goals.',
    features: [
      'Digital Marketing Strategy',
      'Social Media Management',
      'Email Marketing',
      'Analytics & Reporting',
      'Campaign Management'
    ],
    process: [
      'Market Research',
      'Strategy Development',
      'Campaign Planning',
      'Implementation',
      'Analysis & Optimization'
    ]
  },
  {
    id: 'web',
    title: 'Web & Digital Design',
    icon: FaLaptopCode,
    image: '/ini3.jpeg',
    description: 'Beautiful, functional websites that convert visitors into customers.',
    features: [
      'Website Design & Development',
      'E-commerce Solutions',
      'UI/UX Design',
      'Website Maintenance',
      'Performance Optimization'
    ],
    process: [
      'Discovery & Planning',
      'Design & Prototyping',
      'Development',
      'Testing & Quality Assurance',
      'Launch & Support'
    ]
  }
];

const Services = () => {
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
            <h1 className="heading-xl mb-6">Our Services</h1>
            <p className="text-lg text-textSecondary">
              We offer a comprehensive suite of creative services to help your brand
              thrive in the digital landscape. From branding to web design, we're
              here to bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={`order-2 lg:order-${index % 2 === 0 ? '1' : '2'}`}>
                  <div className="flex items-center mb-6">
                    <service.icon className="w-8 h-8 text-accent mr-4" />
                    <h2 className="heading-lg">{service.title}</h2>
                  </div>
                  <p className="text-textSecondary mb-8">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-display text-lg font-semibold mb-4">What We Offer</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-textSecondary">
                            <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold mb-4">Our Process</h3>
                      <ul className="space-y-2">
                        {service.process.map((step, i) => (
                          <li key={step} className="flex items-center text-textSecondary">
                            <span className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center text-accent text-sm mr-3">
                              {i + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`order-1 lg:order-${index % 2 === 0 ? '2' : '1'} relative h-[400px] rounded-lg overflow-hidden bg-accent/20`}>
                  {/* Add service-specific image here */}
                  <img src={service.image} className='relative rounded-lg overflow-hidden bg-accent/20 object-cover' style={{ objectFit: 'cover'}}/>
                </div>
              </motion.div>
            ))}
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
            <h2 className="heading-lg mb-4">Ready to Transform Your Brand?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals and create
              something extraordinary together.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-accent hover:bg-opacity-90 px-8 py-3 rounded-md font-medium transition-colors group"
            >
              Get Started
              <FaArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services; 