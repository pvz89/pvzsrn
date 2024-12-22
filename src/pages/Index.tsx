import React from 'react';
import Hero from '../components/Hero';
import ArticleContent from '../components/ArticleContent';
import DownloadSection from '../components/DownloadSection';
import { Star, Smartphone, Building2, List, Database, Zap, Clock, Gamepad, PlaySquare, Info, Check } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";

const tableOfContents = [
  { id: 'master-controls', title: 'Master Simple Controls and Conquer Challenging Levels', tag: 'h2' },
  { id: 'explore-plants', title: 'Explore New Plants in PvZ 2', tag: 'h2' },
  { id: 'compete-worldwide', title: 'Compete Against Players Worldwide', tag: 'h2' },
  { id: 'mod-advantages', title: 'Advantages of MOD APK', tag: 'h2' },
  { id: 'gameplay-mechanics', title: 'Advanced Gameplay Mechanics', tag: 'h2' },
  { id: 'strategy-guide', title: 'Comprehensive Strategy Guide', tag: 'h2' },
  { id: 'conclusion', title: 'Conclusion', tag: 'h2' }
];

const articleContent = [
  { type: "heading2" as const, text: "Master Simple Controls and Conquer Challenging Levels" },
  { type: "paragraph" as const, text: "Get ready to embark on an epic adventure in Plants vs. Zombies 2 with our specially crafted MOD APK. This version enhances your gaming experience with unlimited coins and all plants unlocked, letting you focus on the pure fun of strategic gameplay. Our modified version provides an optimized gaming experience while maintaining the core mechanics that made the original game a worldwide phenomenon." },
  
  { type: "heading2" as const, text: "Explore New Plants in PvZ 2" },
  { type: "paragraph" as const, text: "Discover a vast array of unique plants, each with their own special abilities. From powerful shooters to defensive specialists, build your ultimate plant army to defend against the zombie hordes. The MOD APK version gives you instant access to premium plants like Winter Melon, Electric Peashooter, and Caulipower, allowing you to experiment with different strategies and combinations." },
  
  { type: "heading2" as const, text: "Compete Against Players Worldwide" },
  { type: "paragraph" as const, text: "Join millions of players in exciting PvP battles. Test your strategies against real opponents and climb the global rankings. The competitive scene in Plants vs. Zombies 2 has evolved significantly, with regular tournaments and special events that challenge even the most experienced players." },
  
  { type: "heading2" as const, text: "Advantages of MOD APK" },
  { type: "paragraph" as const, text: "Our MOD APK version offers numerous benefits that enhance your gaming experience. Enjoy unlimited coins, gems, and gauntlets, allowing you to focus on strategy rather than resource management. All premium plants are instantly unlocked, giving you complete freedom to experiment with different combinations and tactics." },
  
  { type: "heading2" as const, text: "Advanced Gameplay Mechanics" },
  { type: "paragraph" as const, text: "Master the intricate gameplay mechanics that make Plants vs. Zombies 2 a strategic masterpiece. Learn about plant combinations, zombie types, and level-specific challenges. Understanding the timing of plant placement, sun management, and power-up usage is crucial for success in both campaign and competitive modes." },
  
  { type: "heading2" as const, text: "Comprehensive Strategy Guide" },
  { type: "paragraph" as const, text: "Our detailed strategy guide covers everything from basic mechanics to advanced techniques. Learn optimal plant combinations for different scenarios, effective resource management strategies, and tips for handling challenging levels. Whether you\"re a beginner or an experienced player, our guide will help you improve your gameplay and achieve higher scores." },
  
  { type: "heading2" as const, text: "Conclusion" },
  { type: "paragraph" as const, text: "Plants vs. Zombies 2 MOD APK offers an enhanced gaming experience with unlimited resources and unlocked content. Download our modified version to enjoy the full potential of this strategic tower defense game. Join our growing community of players and experience the excitement of defending your garden against endless waves of zombies." }
];

const AppDetails = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg">
    <div className="flex items-center gap-3">
      <span className="text-green-500">{icon}</span>
      <span className="text-gray-600">{label}</span>
    </div>
    <span className="text-gray-900">{value}</span>
  </div>
);

const FeatureSection = ({ version, features }: { version: string; features: string[] }) => (
  <div className="bg-white rounded-lg p-6 mb-4">
    <h3 className="text-xl font-semibold mb-4 bg-green-500 text-white py-2 px-4 rounded-t-lg -mx-6 -mt-6">{version}</h3>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3">
          <Check size={20} className="text-green-500 flex-shrink-0" />
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const featuresV1 = [
  "MOD",
  "Unlimited Gems",
  "Unlimited Money",
  "Unlimited Gauntlets",
  "MAX Level",
  "All Unlocked",
  "100% Working, Approved By Our MOD Testing Team"
];

const featuresV2 = [
  "Unlimited Coins",
  "Unlimited Gems",
  "Unlimited Suns"
];

const TableOfContents = () => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-8">
    <h2 className="text-2xl font-bold mb-4">Explore this article</h2>
    <ScrollArea className="h-[300px] rounded-md">
      <nav className="space-y-2">
        {tableOfContents.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="block text-gray-600 hover:text-green-500 transition-colors duration-200"
          >
            {item.title}
          </a>
        ))}
      </nav>
    </ScrollArea>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <img 
              src="/lovable-uploads/3d70ada6-0860-467a-b2c0-a6b85c52b1a0.png" 
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
          
          <div className="mt-8 space-y-2">
            <AppDetails icon={<Smartphone size={20} />} label="Name" value="Plants vs Zombies™ 2" />
            <AppDetails icon={<Building2 size={20} />} label="Publisher" value="Electronic Arts" />
            <AppDetails icon={<List size={20} />} label="Genre" value="Casual" />
            <AppDetails icon={<Database size={20} />} label="Size" value="843.91M" />
            <AppDetails icon={<Zap size={20} />} label="Version" value="11.9.1" />
            <AppDetails icon={<Clock size={20} />} label="Update" value="Nov 27, 2024" />
            <AppDetails icon={<Gamepad size={20} />} label="MOD" value="Unlimited Everything, MAX Level" />
            <AppDetails icon={<PlaySquare size={20} />} label="Get it On" value="Play Store" />
            <AppDetails icon={<Info size={20} />} label="Report" value="Report Apps" />
          </div>
        </div>

        <TableOfContents />

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="prose max-w-none">
            <ArticleContent content={articleContent} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Features</h2>
          <div className="space-y-6">
            <FeatureSection version="Version 1" features={featuresV1} />
            <FeatureSection version="Version 2" features={featuresV2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
