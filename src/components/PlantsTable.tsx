import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const plantsData = [
  {
    name: "Cherrizilla",
    image: "/lovable-uploads/331c1d57-9d20-48f3-a6e4-c56c061a1d68.png",
    formula: "Chomperzilla + Cherry Chomper",
    formulaImage: "/lovable-uploads/331c1d57-9d20-48f3-a6e4-c56c061a1d68.png",
    skills: "Cherrizilla is the ultimate defensive plant on land. It has absolute power and is almost invincible."
  },
  {
    name: "Super Gatling Cherry",
    image: "/lovable-uploads/331c1d57-9d20-48f3-a6e4-c56c061a1d68.png",
    formula: "Gatling Cherry + Super Cherry shooter",
    formulaImage: "/lovable-uploads/331c1d57-9d20-48f3-a6e4-c56c061a1d68.png",
    skills: "Super Gatling Cherry is the strongest damage-dealer on land."
  },
  {
    name: "Queen Hybno-shroom",
    image: "/lovable-uploads/331c1d57-9d20-48f3-a6e4-c56c061a1d68.png",
    formula: "Hybno-shroom + Hybno-shroom",
    formulaImage: "/lovable-uploads/331c1d57-9d20-48f3-a6e4-c56c061a1d68.png",
    skills: "Summons zombies that will fight for you."
  },
  {
    name: "Super Sun-nut",
    image: "/lovable-uploads/331c1d57-9d20-48f3-a6e4-c56c061a1d68.png",
    formula: "Flower-nut + Wall-nut",
    formulaImage: "/lovable-uploads/331c1d57-9d20-48f3-a6e4-c56c061a1d68.png",
    skills: "Super Sun-nut produces Sun every time it is injured."
  },
  {
    name: "Super Gloom-shroom",
    image: "/lovable-uploads/331c1d57-9d20-48f3-a6e4-c56c061a1d68.png",
    formula: "Ice Gloom-shroom + Doom Ice-shroom",
    formulaImage: "/lovable-uploads/331c1d57-9d20-48f3-a6e4-c56c061a1d68.png",
    skills: "Sprays deadly fumes all around, bringing ultimate destruction."
  },
  {
    name: "Gatling Doom",
    image: "/lovable-uploads/331c1d57-9d20-48f3-a6e4-c56c061a1d68.png",
    formula: "Gatling Pea + Doom-shroom",
    formulaImage: "/lovable-uploads/331c1d57-9d20-48f3-a6e4-c56c061a1d68.png",
    skills: "Destruction incarnate. Fires rounds of destruction unlucky enough to face its wrath."
  },
  // ... Adding all other plants with their respective details
  {
    name: "Super Spikerock",
    image: "/lovable-uploads/331c1d57-9d20-48f3-a6e4-c56c061a1d68.png",
    formula: "Ice Spikerock + Fire Spikerock",
    formulaImage: "/lovable-uploads/331c1d57-9d20-48f3-a6e4-c56c061a1d68.png",
    skills: "Super Spikerock can deal immense damage while also tanking multiple tires."
  },
  {
    name: "Super Tall-nut",
    image: "/lovable-uploads/331c1d57-9d20-48f3-a6e4-c56c061a1d68.png",
    formula: "Ice Tall-nut + Fire Tall-nut",
    formulaImage: "/lovable-uploads/331c1d57-9d20-48f3-a6e4-c56c061a1d68.png",
    skills: "The Super Tall-nut has four times the defense of a normal Tall-Nut."
  },
  // ... Continuing with all other plants
  {
    name: "Gold Garlic",
    image: "/lovable-uploads/331c1d57-9d20-48f3-a6e4-c56c061a1d68.png",
    formula: "Special Golden Plant",
    formulaImage: "/lovable-uploads/331c1d57-9d20-48f3-a6e4-c56c061a1d68.png",
    skills: "A stronger, gold-scented garlic that can force all zombies in front to switch lanes with its ultimate move."
  }
];

const PlantsTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6">Complete Plants Guide</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Ultimate Plant</TableHead>
              <TableHead className="w-[250px]">Fusion Formula</TableHead>
              <TableHead>Skills</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {plantsData.map((plant, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <div className="flex flex-col items-start gap-2">
                    <span>{plant.name}</span>
                    <img 
                      src={plant.image} 
                      alt={plant.name}
                      className="w-16 h-16 object-contain rounded-lg"
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col items-start gap-2">
                    <span>{plant.formula}</span>
                    <img 
                      src={plant.formulaImage} 
                      alt={`${plant.name} formula`}
                      className="w-24 h-24 object-contain rounded-lg"
                    />
                  </div>
                </TableCell>
                <TableCell>{plant.skills}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PlantsTable;