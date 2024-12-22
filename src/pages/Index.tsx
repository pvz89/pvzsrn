import React from 'react';
import Hero from '../components/Hero';
import ArticleContent from '../components/ArticleContent';
import DownloadSection from '../components/DownloadSection';
import { Star, Smartphone, Building2, List, Database, Zap, Clock, Gamepad, PlaySquare, Info, Check } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";

const tableOfContents = [
  { id: 'introduction', title: 'Introduction to Plants vs. Zombies MOD APK', tag: 'h2' },
  { id: 'key-features', title: 'Key Features and Enhancements', tag: 'h2' },
  { id: 'gameplay-mechanics', title: 'Advanced Gameplay Mechanics', tag: 'h2' },
  { id: 'plants-guide', title: 'Complete Plants Guide', tag: 'h3' },
  { id: 'zombies-guide', title: 'Zombie Types and Strategies', tag: 'h3' },
  { id: 'mod-features', title: 'MOD Features Explained', tag: 'h2' },
  { id: 'installation-guide', title: 'Installation Guide', tag: 'h2' },
  { id: 'tips-tricks', title: 'Advanced Tips and Tricks', tag: 'h2' },
  { id: 'updates', title: 'Latest Updates and Changes', tag: 'h2' },
  { id: 'conclusion', title: 'Conclusion', tag: 'h2' }
];

const articleContent = [
  { 
    type: "heading2" as const, 
    text: "Introduction to Plants vs. Zombies MOD APK" 
  },
  { 
    type: "paragraph" as const, 
    text: "Plants vs. Zombies has revolutionized the tower defense genre since its initial release, captivating millions of players worldwide with its unique blend of strategy and casual gaming. The MOD APK version 3.8.0 takes this beloved game to new heights by introducing unlimited resources and enhanced features while maintaining the core gameplay that made the original a global phenomenon. This modified version allows players to focus on strategy and enjoyment rather than resource management, making it an ideal choice for both newcomers and veterans of the series." 
  },
  
  { 
    type: "heading2" as const, 
    text: "Key Features and Enhancements" 
  },
  { 
    type: "paragraph" as const, 
    text: "The latest version of Plants vs. Zombies MOD APK introduces several game-changing features that enhance the overall gaming experience. Players can enjoy unlimited coins and suns, allowing for unrestricted plant deployment and strategy experimentation. The MOD version also includes all premium plants unlocked from the start, giving players access to powerful defenders like the Winter Melon, Electric Peashooter, and Caulipower without additional purchases. Enhanced graphics and optimized performance ensure smooth gameplay across various devices, while the expanded level selection offers more challenging scenarios to test your tactical prowess." 
  },
  
  { 
    type: "heading2" as const, 
    text: "Advanced Gameplay Mechanics" 
  },
  { 
    type: "heading3" as const, 
    text: "Complete Plants Guide" 
  },
  { 
    type: "paragraph" as const, 
    text: "Success in Plants vs. Zombies relies heavily on understanding each plant's unique abilities and optimal usage scenarios. Sunflowers remain essential for resource generation, while Peashooters form the backbone of basic defense. Advanced plants like the Melon-pult offer area damage capabilities, crucial for handling waves of zombies. The Threepeater provides multi-lane coverage, making it invaluable for managing simultaneous zombie approaches. Cherry Bombs and Jalapenos serve as emergency clearance options, capable of eliminating entire waves in critical situations. The MOD version allows unrestricted access to premium plants, enabling players to experiment with powerful combinations previously locked behind paywalls." 
  },
  
  { 
    type: "heading3" as const, 
    text: "Zombie Types and Strategies" 
  },
  { 
    type: "paragraph" as const, 
    text: "Understanding zombie varieties is crucial for developing effective defense strategies. Basic zombies serve as cannon fodder but can overwhelm unprepared players in large numbers. Cone-head and Bucket-head zombies require stronger firepower to eliminate, while special variants like the Pole Vaulting Zombie and Newspaper Zombie demand specific counter-strategies. The game introduces increasingly challenging zombie types as players progress, including the formidable Gargantuar and the sneaky Digger Zombie, each requiring unique defensive approaches and plant combinations." 
  },
  
  { 
    type: "heading2" as const, 
    text: "MOD Features Explained" 
  },
  { 
    type: "paragraph" as const, 
    text: "The MOD APK version 3.8.0 introduces several quality-of-life improvements and gameplay enhancements. Players benefit from unlimited coins, allowing for unrestricted plant usage and upgrade purchases. The sun economy is optimized with infinite sun generation, enabling rapid deployment of powerful plants without resource constraints. All premium plants are instantly unlocked, providing access to the complete arsenal of defensive options. Additional features include removed cooldown timers, enhanced plant damage output, and improved resource collection mechanics, creating a more streamlined and enjoyable gaming experience." 
  },
  
  { 
    type: "heading2" as const, 
    text: "Installation Guide" 
  },
  { 
    type: "paragraph" as const, 
    text: "Installing the Plants vs. Zombies MOD APK requires a few simple steps to ensure proper functionality. First, ensure your device allows installation from unknown sources in the security settings. Download the MOD APK file from a trusted source and run the installation package. If you have the original game installed, you may need to uninstall it first to prevent conflicts. After installation, launch the game and verify that all MOD features are working correctly. Regular updates are recommended to maintain optimal performance and access to the latest features." 
  },
  
  { 
    type: "heading2" as const, 
    text: "Advanced Tips and Tricks" 
  },
  { 
    type: "paragraph" as const, 
    text: "Mastering Plants vs. Zombies requires more than just unlimited resources. Strategic plant placement is crucial - place sun-producing plants in the back rows while positioning defensive plants in front. Utilize multi-lane attackers efficiently by placing them in central positions. Save instant-kill plants for emergency situations or particularly tough zombies. Take advantage of the environment-specific mechanics in different worlds, such as power tiles in the Far Future or sliders in Ancient Egypt. The MOD version allows for more experimental strategies, but proper tactical planning remains essential for success." 
  },
  
  { 
    type: "heading2" as const, 
    text: "Latest Updates and Changes" 
  },
  { 
    type: "paragraph" as const, 
    text: "Version 3.8.0 brings significant improvements to both gameplay and technical aspects. The update introduces new plant varieties and zombie types, expanding tactical options for players. Performance optimizations ensure smoother gameplay on various devices, while bug fixes address previous stability issues. The MOD features have been enhanced to provide a more balanced experience while maintaining the unlimited resource benefits. Regular content updates keep the game fresh with new challenges and events, providing ongoing entertainment for dedicated players." 
  },
  
  { 
    type: "heading2" as const, 
    text: "Conclusion" 
  },
  { 
    type: "paragraph" as const, 
    text: "Plants vs. Zombies MOD APK 3.8.0 represents the perfect blend of casual gaming accessibility and strategic depth. With unlimited resources and unlocked content, players can fully explore the game's tactical possibilities without restrictions. The enhanced features and regular updates ensure a consistently engaging experience, while the core gameplay mechanics remain as entertaining as ever. Whether you're a newcomer to the series or a returning veteran, this MOD version offers the ultimate Plants vs. Zombies experience, complete with all the tools needed to defend your garden against the zombie hordes." 
  }
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

const TableOfContents: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Explore this article</h2>
      <ScrollArea className="h-[300px] w-full rounded-md border p-4">
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
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <img 
              src="/lovable-uploads/f1121a24-6fe5-4fc0-ab23-0f1728879a95.png" 
              alt="Plants vs Zombies" 
              className="w-16 h-16 rounded-lg"
            />
            <div>
              <h1 className="text-2xl font-bold">Download Plants vs. Zombies (MOD, Unlimited Coins/Suns) 3.8.0 free on android</h1>
              <div className="flex items-center gap-1 mt-2">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-gray-600 ml-2">4.3</span>
              </div>
            </div>
          </div>

          <DownloadSection 
            version="3.8.0"
            size="150MB"
            downloadUrl="#"
          />

          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              Plants vs Zombies (MOD, Unlimited Coins/Suns) - battle with the mobs of zombies in a new and exciting battle. Fight off all attacks of the dead, and do not let them get into the yard. Create your invincible defense, think through tactics and build protective nuts, which for a long time will stop the advance of opponents. The game PvZ Free mod apk has good graphics and a large number of tasks and a variety of locations. On which you will meet many heroes, and as you progress through the game you will discover new plants that have unique abilities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Plants vs Zombies (MOD, Unlimited Coins/Suns) - battle with the mobs of zombies in a new and exciting battle. Fight off all attacks of the dead, and do not let them get into the yard. Create your invincible defense, think through tactics and build protective nuts, which for a long time will stop the advance of opponents. The game PvZ Free mod apk has good graphics and a large number of tasks and a variety of locations. On which you will meet many heroes, and as you progress through the game you will discover new plants that have unique abilities.
            </p>
          </div>
          
          <div className="mt-8 space-y-2">
            <AppDetails icon={<Smartphone size={20} />} label="Name" value="Plants vs Zombies™" />
            <AppDetails icon={<Building2 size={20} />} label="Publisher" value="Electronic Arts" />
            <AppDetails icon={<List size={20} />} label="Genre" value="Casual" />
            <AppDetails icon={<Database size={20} />} label="Size" value="843.91M" />
            <AppDetails icon={<Zap size={20} />} label="Version" value="3.8.0" />
            <AppDetails icon={<Clock size={20} />} label="Update" value="Nov 27, 2024" />
            <AppDetails icon={<Gamepad size={20} />} label="MOD" value="Unlimited Coins/Suns" />
            <AppDetails icon={<PlaySquare size={20} />} label="Get it On" value="Play Store" />
            <AppDetails icon={<Info size={20} />} label="Report" value="Report Apps" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Features</h2>
          <div className="space-y-6">
            <FeatureSection version="Version 1" features={featuresV1} />
            <FeatureSection version="Version 2" features={featuresV2} />
          </div>
        </div>

        <TableOfContents />

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="prose max-w-none">
            <div id="introduction">
              <h2 className="text-xl font-bold mt-8 mb-4">Introduction to Plants vs. Zombies MOD APK</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Plants vs. Zombies has revolutionized the tower defense genre since its initial release, captivating millions of players worldwide with its unique blend of strategy and casual gaming. The MOD APK version 3.8.0 takes this beloved game to new heights by introducing unlimited resources and enhanced features while maintaining the core gameplay that made the original a global phenomenon. This modified version allows players to focus on strategy and enjoyment rather than resource management, making it an ideal choice for both newcomers and veterans of the series.</p>
            </div>

            <div id="key-features">
              <h2 className="text-xl font-bold mt-8 mb-4">Key Features and Enhancements</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The latest version of Plants vs. Zombies MOD APK introduces several game-changing features that enhance the overall gaming experience. Players can enjoy unlimited coins and suns, allowing for unrestricted plant deployment and strategy experimentation. The MOD version also includes all premium plants unlocked from the start, giving players access to powerful defenders like the Winter Melon, Electric Peashooter, and Caulipower without additional purchases. Enhanced graphics and optimized performance ensure smooth gameplay across various devices, while the expanded level selection offers more challenging scenarios to test your tactical prowess.</p>
            </div>

            <div id="gameplay-mechanics">
              <h2 className="text-xl font-bold mt-8 mb-4">Advanced Gameplay Mechanics</h2>
              <div id="plants-guide">
                <h3 className="text-lg font-bold mt-6 mb-3">Complete Plants Guide</h3>
                <p className="text-gray-600 leading-relaxed mb-4">Success in Plants vs. Zombies relies heavily on understanding each plant's unique abilities and optimal usage scenarios. Sunflowers remain essential for resource generation, while Peashooters form the backbone of basic defense. Advanced plants like the Melon-pult offer area damage capabilities, crucial for handling waves of zombies. The Threepeater provides multi-lane coverage, making it invaluable for managing simultaneous zombie approaches. Cherry Bombs and Jalapenos serve as emergency clearance options, capable of eliminating entire waves in critical situations. The MOD version allows unrestricted access to premium plants, enabling players to experiment with powerful combinations previously locked behind paywalls.</p>
              </div>
              <div id="zombies-guide">
                <h3 className="text-lg font-bold mt-6 mb-3">Zombie Types and Strategies</h3>
                <p className="text-gray-600 leading-relaxed mb-4">Understanding zombie varieties is crucial for developing effective defense strategies. Basic zombies serve as cannon fodder but can overwhelm unprepared players in large numbers. Cone-head and Bucket-head zombies require stronger firepower to eliminate, while special variants like the Pole Vaulting Zombie and Newspaper Zombie demand specific counter-strategies. The game introduces increasingly challenging zombie types as players progress, including the formidable Gargantuar and the sneaky Digger Zombie, each requiring unique defensive approaches and plant combinations.</p>
              </div>
            </div>

            <div id="mod-features">
              <h2 className="text-xl font-bold mt-8 mb-4">MOD Features Explained</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The MOD APK version 3.8.0 introduces several quality-of-life improvements and gameplay enhancements. Players benefit from unlimited coins, allowing for unrestricted plant usage and upgrade purchases. The sun economy is optimized with infinite sun generation, enabling rapid deployment of powerful plants without resource constraints. All premium plants are instantly unlocked, providing access to the complete arsenal of defensive options. Additional features include removed cooldown timers, enhanced plant damage output, and improved resource collection mechanics, creating a more streamlined and enjoyable gaming experience.</p>
            </div>

            <div id="installation-guide">
              <h2 className="text-xl font-bold mt-8 mb-4">Installation Guide</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Installing the Plants vs. Zombies MOD APK requires a few simple steps to ensure proper functionality. First, ensure your device allows installation from unknown sources in the security settings. Download the MOD APK file from a trusted source and run the installation package. If you have the original game installed, you may need to uninstall it first to prevent conflicts. After installation, launch the game and verify that all MOD features are working correctly. Regular updates are recommended to maintain optimal performance and access to the latest features.</p>
            </div>

            <div id="tips-tricks">
              <h2 className="text-xl font-bold mt-8 mb-4">Advanced Tips and Tricks</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Mastering Plants vs. Zombies requires more than just unlimited resources. Strategic plant placement is crucial - place sun-producing plants in the back rows while positioning defensive plants in front. Utilize multi-lane attackers efficiently by placing them in central positions. Save instant-kill plants for emergency situations or particularly tough zombies. Take advantage of the environment-specific mechanics in different worlds, such as power tiles in the Far Future or sliders in Ancient Egypt. The MOD version allows for more experimental strategies, but proper tactical planning remains essential for success.</p>
            </div>

            <div id="updates">
              <h2 className="text-xl font-bold mt-8 mb-4">Latest Updates and Changes</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Version 3.8.0 brings significant improvements to both gameplay and technical aspects. The update introduces new plant varieties and zombie types, expanding tactical options for players. Performance optimizations ensure smoother gameplay on various devices, while bug fixes address previous stability issues. The MOD features have been enhanced to provide a more balanced experience while maintaining the unlimited resource benefits. Regular content updates keep the game fresh with new challenges and events, providing ongoing entertainment for dedicated players.</p>
            </div>

            <div id="conclusion">
              <h2 className="text-xl font-bold mt-8 mb-4">Conclusion</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Plants vs. Zombies MOD APK 3.8.0 represents the perfect blend of casual gaming accessibility and strategic depth. With unlimited resources and unlocked content, players can fully explore the game's tactical possibilities without restrictions. The enhanced features and regular updates ensure a consistently engaging experience, while the core gameplay mechanics remain as entertaining as ever. Whether you're a newcomer to the series or a returning veteran, this MOD version offers the ultimate Plants vs. Zombies experience, complete with all the tools needed to defend your garden against the zombie hordes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
