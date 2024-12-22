import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { plantsData } from '@/data/plantsData';
import { Card } from "@/components/ui/card";

const PlantsTable = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://via.placeholder.com/150';
    target.onerror = null; // Prevents infinite loop if placeholder also fails
  };

  return (
    <Card className="bg-white rounded-lg shadow-md p-6 mb-8">
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
                    <span className="font-bold text-base">{plant.name}</span>
                    <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden border-2 border-gray-200">
                      <img 
                        src={plant.image} 
                        alt={plant.name}
                        className="w-full h-full object-contain p-2 hover:scale-110 transition-transform duration-200"
                        onError={handleImageError}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col items-start gap-2">
                    <span className="font-semibold text-sm text-gray-700">{plant.formula}</span>
                    <div className="relative w-40 h-40 bg-gray-50 rounded-lg overflow-hidden border-2 border-gray-200">
                      <img 
                        src={plant.formulaImage} 
                        alt={`${plant.name} formula`}
                        className="w-full h-full object-contain p-2 hover:scale-110 transition-transform duration-200"
                        onError={handleImageError}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-gray-700 max-w-md">{plant.skills}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default PlantsTable;