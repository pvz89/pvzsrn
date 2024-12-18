import React from 'react';
import Hero from '../components/Hero';
import ArticleContent from '../components/ArticleContent';
import DownloadSection from '../components/DownloadSection';
import { Star } from 'lucide-react';

const articleContent = [
  { type: "heading2" as const, text: 'Master Simple Controls and Conquer Challenging Levels' },
  { type: "paragraph" as const, text: 'Get ready to embark on an epic adventure in Plants vs. Zombies 2 with our specially crafted MOD APK. This version enhances your gaming experience with unlimited coins and all plants unlocked, letting you focus on the pure fun of strategic gameplay.' },
  { type: "heading2" as const, text: 'Explore New Plants in PvZ 2' },
  { type: "paragraph" as const, text: 'Discover a vast array of unique plants, each with their own special abilities. From powerful shooters to defensive specialists, build your ultimate plant army to defend against the zombie hordes.' },
  { type: "heading2" as const, text: 'Compete Against Players Worldwide' },
  { type: "paragraph" as const, text: 'Join millions of players in exciting PvP battles. Test your strategies against real opponents and climb the global rankings.' },
  { type: "heading2" as const, text: 'Advantages of MOD APK' },
  { type: "paragraph" as const, text: 'Enjoy unlimited resources, unlocked premium features, and an enhanced gaming experience with our MOD version.' }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <img 
              src="/lovable-uploads/08c81887-877f-4329-8f8c-d0b1d15e661f.png" 
              alt="Plants vs Zombies 2" 
              className="w-16 h-16 rounded-lg"
            />
            <div>
              <h1 className="text-2xl font-bold">Plants vs. Zombies 2 MOD APK</h1>
              <div className="flex items-center gap-1 mt-2">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-gray-600 ml-2">4.3</span>
              </div>
            </div>
          </div>

          <DownloadSection 
            version="17.9.3"
            size="150MB"
            downloadUrl="#"
          />
          
          <div className="mt-8">
            <ArticleContent content={articleContent} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;