import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

const projects = [
  {
    title: 'Blossom Cosmetics',
    type: 'Branding & Web',
    image: '/portfolio/blossom.jpg', // Placeholder
    description: 'A full brand identity and e-commerce website for a beauty brand.',
    link: '#',
  },
  {
    title: 'Urban Muse',
    type: 'Content Creation',
    image: '/portfolio/urbanmuse.jpg', // Placeholder
    description: 'Social media content and campaign for a fashion label.',
    link: '#',
  },
  {
    title: 'GlowUp App',
    type: 'UI/UX & Strategy',
    image: '/portfolio/glowup.jpg', // Placeholder
    description: 'App UI/UX design and launch strategy for a wellness startup.',
    link: '#',
  },
  {
    title: 'Luxe Events',
    type: 'Web & Digital',
    image: '/portfolio/luxe.jpg', // Placeholder
    description: 'Website and digital assets for a luxury event planner.',
    link: '#',
  },
];

const reels = [
  {
    video: '/portfolio/reel1.mp4', // Placeholder
    caption: 'Behind the scenes: Brand shoot for Blossom Cosmetics',
  },
  {
    video: '/portfolio/reel2.mp4', // Placeholder
    caption: 'UGC campaign for Urban Muse',
  },
];

const Portfolio = () => {
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
            <h1 className="heading-xl mb-6">Our Portfolio</h1>
            <p className="text-lg text-textSecondary">
              Explore some of our favorite projects and creative collaborations. We help brands blossom through beautiful design, content, and digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4">Featured Work</h2>
            <p className="text-textSecondary max-w-2xl mx-auto">
              From branding to web design, here are some highlights from our portfolio.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-secondary rounded-lg overflow-hidden shadow-lg flex flex-col"
              >
                <div className="relative h-56 bg-accent/10">
                  {/* Add project image here */}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="heading-md mb-2">{project.title}</h3>
                  <p className="text-accent mb-1 text-sm">{project.type}</p>
                  <p className="text-textSecondary mb-4 flex-1">{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      className="text-accent hover:underline text-sm font-medium mt-auto"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reels/UGC Carousel */}
      <section className="section bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4">Instagram Reels & UGC</h2>
            <p className="text-textSecondary max-w-2xl mx-auto">
              We love to create and collaborate! Check out some of our video reels and user-generated content.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {reels.map((reel, idx) => (
              <motion.div
                key={reel.caption}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="w-full md:w-1/2 bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-64 bg-accent/10 flex items-center justify-center">
                  {/* Add video here */}
                  <video
                    src={reel.video}
                    controls
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-textSecondary text-sm mb-2">{reel.caption}</p>
                  <a
                    href="https://instagram.com/lumaestudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent hover:underline text-sm"
                  >
                    <FaInstagram className="mr-1" /> See more on Instagram
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio; 