import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, url: "https://twitter.com/yourbrand" },
    { icon: <Facebook className="w-5 h-5" />, url: "https://facebook.com/yourbrand" },
    { icon: <Instagram className="w-5 h-5" />, url: "https://instagram.com/yourbrand" },
    { icon: <Linkedin className="w-5 h-5" />, url: "https://linkedin.com/company/yourbrand" }
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;