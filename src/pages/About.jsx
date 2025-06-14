import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Tega Akpoyibo',
    role: 'CEO',
    bio: 'Leading Studio Lumae with vision and strategic direction, Tega brings extensive experience in creative leadership and business development.',
    image: '/team/tega.jpg', // Placeholder
    social: {
      instagram: 'https://instagram.com/tegaakpoyibo',
      linkedin: 'https://linkedin.com/in/tegaakpoyibo'
    }
  },
  {
    name: 'Ogunbawo Adebusola',
    role: 'Social Media Coordinator',
    bio: 'Adebusola orchestrates our social media presence, ensuring cohesive and engaging content across all platforms.',
    image: '/team/adebusola.jpg', // Placeholder
    social: {
      instagram: 'https://instagram.com/adebusola',
      linkedin: 'https://linkedin.com/in/adebusola'
    }
  },
  {
    name: 'Alagbe Oyetope',
    role: 'Social Media Manager',
    bio: 'Oyetope leads our social media strategy, creating impactful campaigns that drive engagement and brand growth.',
    image: '/team/oyetope.jpg', // Placeholder
    social: {
      instagram: 'https://instagram.com/oyetope',
      linkedin: 'https://linkedin.com/in/oyetope'
    }
  },
  {
    name: 'Gracious Okim',
    role: 'Social Media Specialist',
    bio: 'Gracious brings expertise in social media optimization and content strategy to help brands thrive in the digital space.',
    image: '/team/gracious.jpg', // Placeholder
    social: {
      instagram: 'https://instagram.com/graciousokim',
      linkedin: 'https://linkedin.com/in/graciousokim'
    }
  },
  {
    name: 'Favour Akpoyibo',
    role: 'Video Editor',
    bio: 'Favour transforms raw footage into compelling visual stories that captivate audiences and elevate brand messaging.',
    image: '/team/favour.jpg', // Placeholder
    social: {
      instagram: 'https://instagram.com/favourakpoyibo',
      linkedin: 'https://linkedin.com/in/favourakpoyibo'
    }
  },
  {
    name: 'Jewell Dafione',
    role: 'Content Creator',
    bio: 'Jewell crafts engaging and authentic content that resonates with audiences and brings brand stories to life.',
    image: '/team/jewell.jpg', // Placeholder
    social: {
      instagram: 'https://instagram.com/jewelldafione',
      linkedin: 'https://linkedin.com/in/jewelldafione'
    }
  }
];

const values = [
  {
    title: 'Creativity First',
    description: 'We believe in pushing boundaries and thinking outside the box to create unique solutions.',
    icon: '✨'
  },
  {
    title: 'Empowerment',
    description: 'We empower women in the creative industry and support their growth and development.',
    icon: '💪'
  },
  {
    title: 'Authenticity',
    description: 'We help brands find and express their authentic voice in the digital world.',
    icon: '🎯'
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from strategy to execution.',
    icon: '⭐'
  }
];

const About = () => {
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
            <h1 className="heading-xl mb-6">Our Story</h1>
            <p className="text-lg text-textSecondary">
              Founded in 2025, Studio Lumae emerged from a vision to create a space
              where creativity meets strategy, and where women lead the way in
              digital innovation.
            </p>
          </motion.div>
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
                <div className="relative h-80 bg-accent/20">
                  {/* Add team member image here */}
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
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 