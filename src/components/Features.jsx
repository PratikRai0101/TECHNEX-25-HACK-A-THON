import React from 'react';
import { Shield, Zap, Users, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      title: "Secure Platform",
      description: "Enterprise-grade security for all users"
    },
    {
      icon: <Zap className="w-12 h-12 text-purple-500" />,
      title: "Lightning Fast",
      description: "Optimized performance across all devices"
    },
    {
      icon: <Users className="w-12 h-12 text-purple-500" />,
      title: "Community Driven",
      description: "Built with user feedback at its core"
    },
    {
      icon: <Globe className="w-12 h-12 text-purple-500" />,
      title: "Global Access",
      description: "Connect from anywhere in the world"
    }
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Us</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;