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
    name: "Winter Melon",
    image: "/lovable-uploads/331c1d57-9d20-48f3-a6e4-c56c061a1d68.png",
    formula: "Melon-pult + Ice-shroom",
    formulaImage: "/lovable-uploads/331c1d57-9d20-48f3-a6e4-c56c061a1d68.png",
    skills: "Launches frozen melons that deal area damage and slow down zombies."
  },
  {
    name: "Cob Cannon",
    image: "/lovable-uploads/331c1d57-9d20-48f3-a6e4-c56c061a1d68.png",
    formula: "Kernel-pult + Kernel-pult",
    formulaImage: "/lovable-uploads/331c1d57-9d20-48f3-a6e4-c56c061a1d68.png",
    skills: "Launches powerful corn cobs that create massive explosions."
  }
];

const PlantsTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6">Ultimate Plants Guide</h2>
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