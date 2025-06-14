import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
    { path: '/blog', label: 'Blog' },
  ];

  const socialLinks = [
    { icon: FaInstagram, href: 'https://instagram.com/lumaestudio', label: 'Instagram' },
    { icon: FaFacebook, href: 'https://facebook.com/lumaestudio', label: 'Facebook' },
    { icon: FaEnvelope, href: 'mailto:hello@lumaestudio.com', label: 'Email' },
  ];

  return (
    <footer className="bg-primary/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-cursive text-textPrimary">
              Studio Lumae
            </Link>
            <p className="text-textSecondary text-sm">
              Bloom Boldly. Create Fearlessly.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textPrimary hover:text-accent transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-textSecondary hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#branding" className="text-textSecondary hover:text-accent transition-colors text-sm">
                  Branding & Identity
                </Link>
              </li>
              <li>
                <Link to="/services#content" className="text-textSecondary hover:text-accent transition-colors text-sm">
                  Content Creation
                </Link>
              </li>
              <li>
                <Link to="/services#marketing" className="text-textSecondary hover:text-accent transition-colors text-sm">
                  Marketing & Strategy
                </Link>
              </li>
              <li>
                <Link to="/services#web" className="text-textSecondary hover:text-accent transition-colors text-sm">
                  Web & Digital Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-textSecondary">
              <li>
                <a href="mailto:hello@lumaestudio.com" className="hover:text-accent transition-colors">
                  hello@lumaestudio.com
                </a>
              </li>
              <li>Lagos, Nigeria</li>
              <li>Remote-first Agency</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary/20">
          <p className="text-center text-sm text-textSecondary">
            © {currentYear} Studio Lumae. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 