import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaPlay } from 'react-icons/fa';
import { useState } from 'react';

const teamMembers = [
  {
    name: 'Tega Akpoyibo',
    role: 'CEO',
    bio: 'Leading Studio Lumae with vision and strategic direction, Tega brings extensive experience in creative leadership and business development.',
    image: '/baby.jpeg', // Placeholder
    social: {
      instagram: 'https://instagram.com/tegaakpoyibo',
      linkedin: 'https://linkedin.com/in/tegaakpoyibo'
    }
  },
  {
    name: 'Ogunbawo Adebusola',
    role: 'Social Media Coordinator',
    bio: 'Adebusola orchestrates our social media presence, ensuring cohesive and engaging content across all platforms.',
    image: '/busola.jpeg', // Placeholder
    social: {
      instagram: 'https://instagram.com/adebusola',
      linkedin: 'https://linkedin.com/in/adebusola'
    }
  },
  {
    name: 'Alagbe Oyetope',
    role: 'Social Media Manager',
    bio: 'Oyetope leads our social media strategy, creating impactful campaigns that drive engagement and brand growth.',
    image: '/omot.jpeg', // Placeholder
    social: {
      instagram: 'https://instagram.com/oyetope',
      linkedin: 'https://linkedin.com/in/oyetope'
    }
  },
  {
    name: 'Gracious Okim',
    role: 'Social Media Specialist',
    bio: 'Gracious brings expertise in social media optimization and content strategy to help brands thrive in the digital space.',
    image: '/gracious.jpeg', // Placeholder
    social: {
      instagram: 'https://instagram.com/graciousokim',
      linkedin: 'https://linkedin.com/in/graciousokim'
    }
  },
  {
    name: 'Favour Akpoyibo',
    role: 'Video Editor',
    bio: 'Favour transforms raw footage into compelling visual stories that captivate audiences and elevate brand messaging.',
    image: '/ese.jpeg', // Placeholder
    social: {
      instagram: 'https://instagram.com/favourakpoyibo',
      linkedin: 'https://linkedin.com/in/favourakpoyibo'
    }
  },
  {
    name: 'Jewell Dafione',
    role: 'Content Creator',
    bio: 'Jewell crafts engaging and authentic content that resonates with audiences and brings brand stories to life.',
    image: '/Jewell.jpeg', // Placeholder
    social: {
      instagram: 'https://instagram.com/jewelldafione',
      linkedin: 'https://linkedin.com/in/jewelldafione'
    }
  }
];

const values = [
  {
    title: 'Intentional Design',
    description: 'We create purposeful visuals that elevate your brand and make it stand out in the digital landscape.',
    icon: '✨'
  },
  {
    title: 'Strategic Creativity',
    description: 'Every creative decision is backed by strategy to ensure your brand achieves its goals.',
    icon: '🎯'
  },
  {
    title: 'Brand Elevation',
    description: 'We help brands find their unique voice and visual identity to glow up both online and offline.',
    icon: '💫'
  },
  {
    title: 'Women-Led Innovation',
    description: 'Founded by six passionate women, we bring fresh perspectives and creative excellence to every project.',
    icon: '👩‍💼'
  }
];

const services = [
  {
    title: 'Branding & Identity Design',
    description: 'Creating unique and memorable brand identities that resonate with your audience and set you apart.',
    icon: '🎨'
  },
  {
    title: 'Content Creation & Styling',
    description: 'Crafting compelling visual content that tells your brand story and engages your audience.',
    icon: '📸'
  },
  {
    title: 'Social Media Strategy & Management',
    description: 'Developing and executing strategic social media plans that grow your brand presence.',
    icon: '📱'
  },
  {
    title: 'Creative Direction',
    description: 'Providing expert creative direction for product and lifestyle brands to achieve their vision.',
    icon: '🎬'
  }
];

const About = () => {
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
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="heading-xl mb-6">Our Story</h1>
            <p className="text-lg text-textSecondary mb-8">
              Studio Lumaé is a Lagos-based creative agency founded by six women with a shared passion for design, 
              storytelling, and brand elevation. We exist to bring intentional visuals, compelling content, and 
              strategic creativity to brands that want to stand out and glow up online and offline.
            </p>
            <p className="text-lg text-textSecondary">
              Whether you're launching something new or refining what already exists, Studio Lumaé is where 
              aesthetic meets strategy and your brand finds its voice, its look, and its magic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4">What We Do</h2>
            <p className="text-textSecondary max-w-2xl mx-auto">
              We specialize in transforming brands through creative excellence and strategic thinking.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-secondary p-6 rounded-lg text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="heading-sm mb-2">{service.title}</h3>
                <p className="text-textSecondary">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4">Our Values</h2>
            <p className="text-textSecondary max-w-2xl mx-auto">
              These core principles guide everything we do at Studio Lumae,
              from how we work with clients to how we support our team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-secondary p-6 rounded-lg text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="heading-sm mb-2">{value.title}</h3>
                <p className="text-textSecondary">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4">Meet Our Team</h2>
            <p className="text-textSecondary max-w-2xl mx-auto">
              We're a diverse team of creative women passionate about helping
              brands thrive in the digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-80 w-full bg-accent/20">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="heading-sm mb-1">{member.name}</h3>
                  <p className="text-accent mb-4">{member.role}</p>
                  <p className="text-textSecondary mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-textPrimary hover:text-accent transition-colors"
                      aria-label={`${member.name}'s Instagram`}
                    >
                      <FaInstagram className="w-5 h-5" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-textPrimary hover:text-accent transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-lg mb-4">Our Location</h2>
              <p className="text-textSecondary mb-6">
                Based in Lagos, Nigeria, we're a remote-first agency working with
                clients globally. Our team collaborates seamlessly across time
                zones to deliver exceptional results.
              </p>
              <div className="space-y-4">
                <p className="text-textPrimary font-medium">Studio Lumae</p>
                <p className="text-textSecondary">Lagos, Nigeria</p>
                <p className="text-textSecondary">Remote-first Agency</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] rounded-lg overflow-hidden bg-accent/20"
            >
              {/* Add map or location image here */}
              <img src="/lagos.jpeg" className='relative h-[400px] rounded-lg overflow-hidden bg-accent/20 w-[700px]' style={{ objectFit: 'cover'}}/>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="section bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4">Our Work</h2>
            <p className="text-textSecondary max-w-2xl mx-auto">
              Watch how we bring brands to life through compelling visual storytelling.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video Thumbnail 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative group cursor-pointer"
              onClick={() => handleVideoClick('/videos/showreel.mp4')}
            >
              <div className="relative h-64 rounded-lg overflow-hidden bg-accent/20">
                <img 
                  src="/video-thumbnail-1.jpg" 
                  alt="Video thumbnail" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <FaPlay className="w-12 h-12 text-white transform group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-medium">Brand Showreel</h3>
            </motion.div>

            {/* Add more video thumbnails as needed */}
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

export default About; 