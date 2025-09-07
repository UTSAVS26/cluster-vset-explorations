import { Link } from 'react-router-dom';
import { MessageCircle, Instagram, Linkedin, Github, MessageSquare, Twitter } from 'lucide-react';

const Footer = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Projects', path: '/projects' },
  ];

  const resourceLinks = [
    { name: 'Learning Guides', path: '/resources' },
    { name: 'Tools', path: '/resources' },
    { name: 'Datasets', path: '/resources' },
    { name: 'Blog', path: '/blog' },
  ];

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/+917303357810',
      color: 'hover:text-green-400'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/dsclub.vips/',
      color: 'hover:text-pink-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/cluster-vips',
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/CLUSTER-DS-Club/',
      color: 'hover:text-gray-300'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/cluster_dsclub',
      description: 'Follow us for the latest news, announcements, and tech insights.',
      color: 'hover:text-sky-400'
    },
    {
      name: 'Discord',
      icon: MessageSquare,
      url: 'https://discord.gg/6QN83D89vx',
      color: 'hover:text-indigo-400'
    },
  ];

  return (
    <footer className="bg-card/50 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="DS CLUB Logo.jpg" alt="CLUSTER-VSET Logo" className="w-8 h-8" />
              <span className="text-2xl font-bold text-gradient-primary">
                CLUSTER-VSET
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Collaborative Learning Using Statistical Trends & Exploratory Research.
              Empowering students through data science, research, and academic collaboration.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground transition-all duration-300 hover-glow-primary ${social.color}`}
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/leadership"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 CLUSTER-VSET. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;