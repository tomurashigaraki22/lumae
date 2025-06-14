import { motion } from 'framer-motion';
import { FaInstagram, FaPlay } from 'react-icons/fa';
import { useState } from 'react';

const projects = [
  {
    title: 'Bloomingtales',
    type: 'Full Branding',
    image: '/bloomingtales.jpg', // Placeholder
    description: 'A full brand identity for a beauty and fashion brand.',
    link: '#',
  },
  {
    title: 'Urban Muse',
    type: 'Fashion',
    image: '/fashion.jpg', // Placeholder
    description: 'Social media content and campaign for a fashion label.',
    link: '#',
  },
  {
    title: 'Luxe Events',
    type: 'Digital',
    image: '/event.jpg', // Placeholder
    description: 'Digital assets for a luxury event planner.',
    link: '#',
  },
];

const reels = [
  {
    video: '/ugcshii.mp4',
    thumbnail: 'https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1698201147/catalog/1716175120490258432/p8vrokulb6comadfn1ar.jpg', // Add thumbnail image
    caption: 'UGC campaign for Urban Muse',
  }
];

const Portfolio = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const handleVideoClick = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setCurrentVideo('');
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
                className="bg-secondary rounded-lg overflow-hidden shadow-lg flex flex-col group"
              >
                <div className="relative h-80 bg-accent/10 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="heading-md mb-2">{project.title}</h3>
                  <p className="text-accent mb-1 text-sm font-medium">{project.type}</p>
                  <p className="text-textSecondary mb-4 flex-1">{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      className="text-accent hover:underline text-sm font-medium mt-auto inline-flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
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
                <div 
                  className="relative h-64 bg-accent/10 cursor-pointer group"
                  onClick={() => handleVideoClick(reel.video)}
                >
                  <img 
                    src={reel.thumbnail} 
                    alt={reel.caption}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <FaPlay className="w-12 h-12 text-white transform group-hover:scale-110 transition-transform" />
                  </div>
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

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeVideoModal}
        >
          <div className="relative w-full h-full max-w-7xl mx-auto p-4">
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <video
              src={currentVideo}
              className="w-full h-full object-contain"
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio; 