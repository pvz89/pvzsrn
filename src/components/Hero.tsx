import React from 'react';

interface HeroProps {
  title: string;
  image: string;
}

const Hero: React.FC<HeroProps> = ({ title, image }) => {
  return (
    <div className="relative w-full h-[400px] mb-8">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover rounded-lg shadow-card"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
        <h1 className="text-white text-4xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default Hero;