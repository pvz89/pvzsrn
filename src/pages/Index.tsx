import React from 'react';
import Hero from '../components/Hero';
import ArticleContent from '../components/ArticleContent';
import DownloadSection from '../components/DownloadSection';

const articleContent = [
  { type: 'paragraph', text: 'Plants vs. Zombies 2 MOD APK is an exciting tower defense game where players use various plants to defend their home from zombie attacks.' },
  { type: 'heading2', text: 'Features' },
  { type: 'heading3', text: 'Unlimited Coins' },
  { type: 'paragraph', text: 'Get unlimited coins to upgrade your plants and unlock new features.' },
  { type: 'heading3', text: 'All Plants Unlocked' },
  { type: 'paragraph', text: 'Access all plants from the start and create your ultimate defense strategy.' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Hero 
          title="Plants vs. Zombies 2 MOD APK" 
          image="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ArticleContent content={articleContent} />
          </div>
          
          <div className="lg:col-span-1">
            <DownloadSection 
              version="17.9.3"
              size="150MB"
              downloadUrl="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;