export interface PlantData {
  name: string;
  image: string;
  formula: string;
  formulaImage: string;
  skills: string;
}

export const plantsData: PlantData[] = [
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
  // ... Adding all the plants from the user's list
  {
    name: "Gold Garlic",
    image: "/lovable-uploads/331c1d57-9d20-48f3-a6e4-c56c061a1d68.png",
    formula: "Special Golden Plant",
    formulaImage: "/lovable-uploads/331c1d57-9d20-48f3-a6e4-c56c061a1d68.png",
    skills: "A stronger, gold-scented garlic that can force all zombies in front to switch lanes with its ultimate move."
  }
];