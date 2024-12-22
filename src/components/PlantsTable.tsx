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