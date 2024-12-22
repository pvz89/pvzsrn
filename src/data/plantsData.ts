import { PlantData } from './types/plants';
import { defensivePlants } from './plants/defensive';
import { offensivePlants } from './plants/offensive';
import { specialPlants } from './plants/special';
import { utilityPlants } from './plants/utility';
import { uniquePlants } from './plants/unique';

export const plantsData: PlantData[] = [
  ...defensivePlants,
  ...offensivePlants,
  ...specialPlants,
  ...utilityPlants,
  ...uniquePlants
];

export type { PlantData };