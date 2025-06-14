import { motion } from 'framer-motion';

const posts = [
  {
    title: '5 Brand-Building Tips for 2025',
    date: 'June 3, 2025',
    excerpt: 'Discover the latest strategies for building a memorable brand in todays digital world.',
    image: 'https://media.licdn.com/dms/image/v2/D5612AQHfHKmU2f_m6g/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1685961874701?e=1754524800&v=beta&t=3RH_HnlPZEa1k7GJQOYek6pVCtoUiSIQ7xKvEuRaiUk', // Placeholder
    link: '#',
  },
  {
    title: 'Social Media Trends Every Business Should Know',
    date: 'May 20, 2024',
    excerpt: 'Stay ahead of the curve with these must-know social media trends for creative brands.',
    image: '/post2.png', // Placeholder
    link: '#',
  },
  {
    title: 'Behind the Scenes at Studio Lumae',
    date: 'May 10, 2024',
    excerpt: 'A peek into our creative process and what makes our team unique.',
    image: '/post3.png', // Placeholder
    link: '#',
  },
];

export default function Blog(){
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
            <h1 className="heading-xl mb-6">Lumae Blog</h1>
            <p className="text-lg text-textSecondary">
              Brand tips, social media trends, and a look behind the scenes at Studio Lumae.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog List */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-secondary rounded-lg overflow-hidden shadow-lg flex flex-col"
              >
                <div className="relative h-48 bg-accent/10">
                  {/* Add blog image here */}
                  {/* <img src={post.image} alt={post.title} className='bg-accent/10 h-48' style={{ objectFit: 'cover'}}/> */}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="heading-md mb-2">{post.title}</h3>
                  <p className="text-accent mb-1 text-sm">{post.date}</p>
                  <p className="text-textSecondary mb-4 flex-1">{post.excerpt}</p>
                  {post.link && (
                    <a
                      href={post.link}
                      className="text-accent hover:underline text-sm font-medium mt-auto"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

