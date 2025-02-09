import React from 'react';
import Hero from '../components/Hero';
import ArticleContent from '../components/ArticleContent';
import DownloadSection from '../components/DownloadSection';
import { Smartphone, Building2, List, Database, Zap, Clock, Gamepad } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import FeatureSection from '../components/FeaturesSection';
import AppDetails from '../components/AppDetails';
import Footer from '../components/Footer';
import AppHeader from '../components/AppHeader';
import PlantsTable from '../components/PlantsTable';

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
    text: "Welcome to the ultimate guide to Plants vs. Zombies MOD APK! If you've ever dreamed of having unlimited resources and premium features in this beloved tower defense game, you're in the right place. Since its launch, Plants vs. Zombies has captured the hearts of millions worldwide, transforming the tower defense genre with its perfect blend of strategy, humor, and casual gaming appeal. Now, with the revolutionary MOD APK version 3.8.1, we're taking your gaming experience to unprecedented heights. This enhanced version maintains everything you love about the original game while removing the barriers that might have held you back from fully enjoying it. Imagine having all the coins, gems, and plants at your disposal from day one – that's exactly what this MOD delivers! Whether you're a seasoned player looking to experiment with new strategies or a newcomer eager to explore everything the game has to offer, this modified version opens up a world of possibilities. The best part? You don't have to worry about resource management anymore; instead, you can focus entirely on crafting the perfect defense against the zombie hordes. Let's dive deep into what makes this MOD version so special and why it's becoming the preferred choice for players worldwide." 
  },
  
  { 
    type: "heading2" as const, 
    text: "Key Features and Enhancements" 
  },
  { 
    type: "paragraph" as const, 
    text: "The latest iteration of Plants vs. Zombies MOD APK (version 3.8.1) brings an impressive array of game-changing features that transform the entire gaming experience. At the heart of these enhancements is the unlimited resource system – say goodbye to counting coins or waiting for sun energy to accumulate! This freedom allows you to deploy any plant, anywhere, anytime, opening up countless strategic possibilities that were previously impossible. But that's just the beginning. Remember those premium plants you've always wanted to try? The Winter Melon with its powerful area-of-effect freeze damage, the Electric Peashooter with its chain lightning attacks, or the mind-controlling Caulipower? They're all yours from the moment you start playing! No more paywalls, no more grinding – just pure strategic fun. The graphics have received a significant boost too, with enhanced visual effects that make every plant and zombie more vibrant and detailed than ever. Performance optimizations ensure that even devices with modest specifications can run the game smoothly, maintaining stable framerates during the most chaotic zombie waves. The level selection has been expanded dramatically, offering new and exciting challenges that will test your tactical abilities to their limits. Whether you're defending your backyard, battling through ancient Egypt, or protecting your plants in the far future, each world offers unique challenges and opportunities. The MOD version also includes quality-of-life improvements such as faster plant recharge times, enhanced resource collection, and streamlined menu navigation, making the overall experience more enjoyable and accessible than ever before." 
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
    text: "Understanding your arsenal is crucial for success in Plants vs. Zombies, and with the MOD APK, you have access to the complete collection from the start. Let's break down the essential plants and their strategic applications. The humble Sunflower remains the backbone of your economy – even with unlimited sun, proper placement is crucial for optimal resource generation. These cheerful plants should always occupy your back rows, creating a steady stream of energy while staying safe from zombie attacks. Peashooters, your basic offensive units, are far from basic in their utility. Their reliable damage output and quick firing rate make them perfect for handling the initial waves of zombies, and when upgraded to Repeaters or Gatling Peas, they become formidable defenders capable of stopping even tougher zombies in their tracks. The Melon-pult represents a significant step up in your defensive capabilities. Its lobbed melons deal splash damage, making it incredibly effective against groups of zombies. When upgraded to Winter Melon, it adds a crucial slowing effect that can mean the difference between victory and defeat in challenging levels. The Threepeater is a tactical powerhouse, covering three lanes simultaneously – perfect for handling multiple zombie approaches without spreading your defenses too thin. For emergency situations, Cherry Bombs and Jalapenos are your best friends. These instant-kill plants can clear entire waves of zombies, saving you from otherwise overwhelming situations. The MOD version allows you to experiment freely with premium plants like the Missile Toe, which combines area damage with freezing effects, or the Shadow Peashooter, which can drag zombies underground. The key to mastery lies in understanding how to combine these plants effectively – try placing a row of Torchwoods in front of your Peashooters for enhanced damage, or combine Primal Peashooter with Chard Guard for an unbeatable knockback strategy." 
  },
  
  { 
    type: "heading3" as const, 
    text: "Zombie Types and Strategies" 
  },
  { 
    type: "paragraph" as const, 
    text: "The zombie horde in Plants vs. Zombies is surprisingly diverse, and each type requires specific counter-strategies for effective elimination. Basic zombies might seem harmless individually, but their strength lies in numbers – they can quickly overwhelm an unprepared defense, especially in later levels where they appear in massive waves. The Cone-head and Bucket-head zombies introduce the concept of armored enemies. These tough customers can absorb significantly more damage than their basic counterparts, requiring either concentrated firepower or specific plants like the Magnet-shroom to handle effectively. Special zombies add another layer of complexity to the game. The Pole Vaulting Zombie can jump over your first line of defense, making it crucial to have backup plants ready. The Newspaper Zombie might seem amusing at first, but once its newspaper is destroyed, it enters a rage mode that significantly increases its speed – a mechanic that can catch new players off guard. As you progress through the game, you'll encounter increasingly challenging variants. The massive Gargantuar, capable of crushing plants with its telephone pole, requires careful planning and usually multiple instant-kill plants to defeat. The Digger Zombie approaches from behind your defenses, necessitating a complete rethinking of your usual strategies. Each world introduces its own unique zombie types, from the metallic Future Zombie with its electromagnetic shield to the Tomb Raiser Zombie that creates obstacles on your lawn. The key to success lies in recognizing these threats early and adapting your defense accordingly. The MOD version's unlimited resources allow you to experiment freely with different counter-strategies, helping you find the most effective combinations for each situation." 
  },
  
  { 
    type: "heading2" as const, 
    text: "MOD Features Explained" 
  },
  { 
    type: "paragraph" as const, 
    text: "The MOD APK version 3.8.1 introduces several quality-of-life improvements and gameplay enhancements. Players benefit from unlimited coins, allowing for unrestricted plant usage and upgrade purchases. The sun economy is optimized with infinite sun generation, enabling rapid deployment of powerful plants without resource constraints. All premium plants are instantly unlocked, providing access to the complete arsenal of defensive options. Additional features include removed cooldown timers, enhanced plant damage output, and improved resource collection mechanics, creating a more streamlined and enjoyable gaming experience." 
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
    text: "Version 3.8.1 brings significant improvements to both gameplay and technical aspects. The update introduces new plant varieties and zombie types, expanding tactical options for players. Performance optimizations ensure smoother gameplay on various devices, while bug fixes address previous stability issues. The MOD features have been enhanced to provide a more balanced experience while maintaining the unlimited resource benefits. Regular content updates keep the game fresh with new challenges and events, providing ongoing entertainment for dedicated players." 
  },
  
  { 
    type: "heading2" as const, 
    text: "Conclusion" 
  },
  { 
    type: "paragraph" as const, 
    text: "Plants vs. Zombies MOD APK 3.8.1 represents the perfect blend of casual gaming accessibility and strategic depth. With unlimited resources and unlocked content, players can fully explore the game's tactical possibilities without restrictions. The enhanced features and regular updates ensure a consistently engaging experience, while the core gameplay mechanics remain as entertaining as ever. Whether you're a newcomer to the series or a returning veteran, this MOD version offers the ultimate Plants vs. Zombies experience, complete with all the tools needed to defend your garden against the zombie hordes." 
  }
];

const features = [
  "Unlimited Coins",
  "Unlimited Gems",
  "Unlimited Suns",
  "All Premium Plants Unlocked",
  "No Ads",
  "Free Shopping",
  "Max Level",
  "100% Working, Approved By Our MOD Testing Team"
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
        <AppHeader 
          title="Download Plants vs. Zombies (MOD, Unlimited Coins/Suns) 3.8.1 free on android"
          version="3.8.1"
          size="150MB"
          iconUrl="/lovable-uploads/f1121a24-6fe5-4fc0-ab23-0f1728879a95.png"
        />

        <DownloadSection 
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
          <AppDetails icon={<Zap size={20} />} label="Version" value="3.8.1" />
          <AppDetails icon={<Clock size={20} />} label="Update" value="Nov 27, 2024" />
          <AppDetails icon={<Gamepad size={20} />} label="MOD" value="Unlimited Coins/Suns" />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Features</h2>
          <FeatureSection version="Version 3.8.1" features={features} />
        </div>

        <TableOfContents />

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="prose max-w-none">
            <div id="introduction">
              <h2 className="text-xl font-bold mt-8 mb-4">Introduction to Plants vs. Zombies MOD APK</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Welcome to the ultimate guide to Plants vs. Zombies MOD APK! If you've ever dreamed of having unlimited resources and premium features in this beloved tower defense game, you're in the right place. Since its launch, Plants vs. Zombies has captured the hearts of millions worldwide, transforming the tower defense genre with its perfect blend of strategy, humor, and casual gaming appeal. Now, with the revolutionary MOD APK version 3.8.1, we're taking your gaming experience to unprecedented heights. This enhanced version maintains everything you love about the original game while removing the barriers that might have held you back from fully enjoying it. Imagine having all the coins, gems, and plants at your disposal from day one – that's exactly what this MOD delivers! Whether you're a seasoned player looking to experiment with new strategies or a newcomer eager to explore everything the game has to offer, this modified version opens up a world of possibilities. The best part? You don't have to worry about resource management anymore; instead, you can focus entirely on crafting the perfect defense against the zombie hordes. Let's dive deep into what makes this MOD version so special and why it's becoming the preferred choice for players worldwide.</p>
            </div>

            <div id="key-features">
              <h2 className="text-xl font-bold mt-8 mb-4">Key Features and Enhancements</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The latest iteration of Plants vs. Zombies MOD APK (version 3.8.1) brings an impressive array of game-changing features that transform the entire gaming experience. At the heart of these enhancements is the unlimited resource system – say goodbye to counting coins or waiting for sun energy to accumulate! This freedom allows you to deploy any plant, anywhere, anytime, opening up countless strategic possibilities that were previously impossible. But that's just the beginning. Remember those premium plants you've always wanted to try? The Winter Melon with its powerful area-of-effect freeze damage, the Electric Peashooter with its chain lightning attacks, or the mind-controlling Caulipower? They're all yours from the moment you start playing! No more paywalls, no more grinding – just pure strategic fun. The graphics have received a significant boost too, with enhanced visual effects that make every plant and zombie more vibrant and detailed than ever. Performance optimizations ensure that even devices with modest specifications can run the game smoothly, maintaining stable framerates during the most chaotic zombie waves. The level selection has been expanded dramatically, offering new and exciting challenges that will test your tactical abilities to their limits. Whether you're defending your backyard, battling through ancient Egypt, or protecting your plants in the far future, each world offers unique challenges and opportunities. The MOD version also includes quality-of-life improvements such as faster plant recharge times, enhanced resource collection, and streamlined menu navigation, making the overall experience more enjoyable and accessible than ever before.</p>
            </div>

            <div id="gameplay-mechanics">
              <h2 className="text-xl font-bold mt-8 mb-4">Advanced Gameplay Mechanics</h2>
              <div id="plants-guide">
                <h3 className="text-lg font-bold mt-6 mb-3">Complete Plants Guide</h3>
                <p className="text-gray-600 leading-relaxed mb-4">Understanding your arsenal is crucial for success in Plants vs. Zombies, and with the MOD APK, you have access to the complete collection from the start. Let's break down the essential plants and their strategic applications. The humble Sunflower remains the backbone of your economy – even with unlimited sun, proper placement is crucial for optimal resource generation. These cheerful plants should always occupy your back rows, creating a steady stream of energy while staying safe from zombie attacks. Peashooters, your basic offensive units, are far from basic in their utility. Their reliable damage output and quick firing rate make them perfect for handling the initial waves of zombies, and when upgraded to Repeaters or Gatling Peas, they become formidable defenders capable of stopping even tougher zombies in their tracks. The Melon-pult represents a significant step up in your defensive capabilities. Its lobbed melons deal splash damage, making it incredibly effective against groups of zombies. When upgraded to Winter Melon, it adds a crucial slowing effect that can mean the difference between victory and defeat in challenging levels. The Threepeater is a tactical powerhouse, covering three lanes simultaneously – perfect for handling multiple zombie approaches without spreading your defenses too thin. For emergency situations, Cherry Bombs and Jalapenos are your best friends. These instant-kill plants can clear entire waves of zombies, saving you from otherwise overwhelming situations. The MOD version allows you to experiment freely with premium plants like the Missile Toe, which combines area damage with freezing effects, or the Shadow Peashooter, which can drag zombies underground. The key to mastery lies in understanding how to combine these plants effectively – try placing a row of Torchwoods in front of your Peashooters for enhanced damage, or combine Primal Peashooter with Chard Guard for an unbeatable knockback strategy.</p>
              </div>
              <div id="zombies-guide">
                <h3 className="text-lg font-bold mt-6 mb-3">Zombie Types and Strategies</h3>
                <p className="text-gray-600 leading-relaxed mb-4">The zombie horde in Plants vs. Zombies is surprisingly diverse, and each type requires specific counter-strategies for effective elimination. Basic zombies might seem harmless individually, but their strength lies in numbers – they can quickly overwhelm an unprepared defense, especially in later levels where they appear in massive waves. The Cone-head and Bucket-head zombies introduce the concept of armored enemies. These tough customers can absorb significantly more damage than their basic counterparts, requiring either concentrated firepower or specific plants like the Magnet-shroom to handle effectively. Special zombies add another layer of complexity to the game. The Pole Vaulting Zombie can jump over your first line of defense, making it crucial to have backup plants ready. The Newspaper Zombie might seem amusing at first, but once its newspaper is destroyed, it enters a rage mode that significantly increases its speed – a mechanic that can catch new players off guard. As you progress through the game, you'll encounter increasingly challenging variants. The massive Gargantuar, capable of crushing plants with its telephone pole, requires careful planning and usually multiple instant-kill plants to defeat. The Digger Zombie approaches from behind your defenses, necessitating a complete rethinking of your usual strategies. Each world introduces its own unique zombie types, from the metallic Future Zombie with its electromagnetic shield to the Tomb Raiser Zombie that creates obstacles on your lawn. The key to success lies in recognizing these threats early and adapting your defense accordingly. The MOD version's unlimited resources allow you to experiment freely with different counter-strategies, helping you find the most effective combinations for each situation.</p>
              </div>
            </div>

            <div id="mod-features">
              <h2 className="text-xl font-bold mt-8 mb-4">MOD Features Explained</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The MOD APK version 3.8.1 introduces several quality-of-life improvements and gameplay enhancements. Players benefit from unlimited coins, allowing for unrestricted plant usage and upgrade purchases. The sun economy is optimized with infinite sun generation, enabling rapid deployment of powerful plants without resource constraints. All premium plants are instantly unlocked, providing access to the complete arsenal of defensive options. Additional features include removed cooldown timers, enhanced plant damage output, and improved resource collection mechanics, creating a more streamlined and enjoyable gaming experience.</p>
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
              <p className="text-gray-600 leading-relaxed mb-4">Version 3.8.1 brings significant improvements to both gameplay and technical aspects. The update introduces new plant varieties and zombie types, expanding tactical options for players. Performance optimizations ensure smoother gameplay on various devices, while bug fixes address previous stability issues. The MOD features have been enhanced to provide a more balanced experience while maintaining the unlimited resource benefits. Regular content updates keep the game fresh with new challenges and events, providing ongoing entertainment for dedicated players.</p>
            </div>

            <div id="conclusion">
              <h2 className="text-xl font-bold mt-8 mb-4">Conclusion</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Plants vs. Zombies MOD APK 3.8.1 represents the perfect blend of casual gaming accessibility and strategic depth. With unlimited resources and unlocked content, players can fully explore the game's tactical possibilities without restrictions. The enhanced features and regular updates ensure a consistently engaging experience, while the core gameplay mechanics remain as entertaining as ever. Whether you're a newcomer to the series or a returning veteran, this MOD version offers the ultimate Plants vs. Zombies experience, complete with all the tools needed to defend your garden against the zombie hordes.</p>
            </div>
          </div>
        </div>

        <PlantsTable />
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
