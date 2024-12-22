import React from 'react';
import { Check } from 'lucide-react';

interface FeatureSectionProps {
  version: string;
  features: string[];
}

const FeatureSection = ({ version, features }: FeatureSectionProps) => (
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

export default FeatureSection;