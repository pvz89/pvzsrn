import React from 'react';

interface AppDetailsProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const AppDetails = ({ icon, label, value }: AppDetailsProps) => (
  <div className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg">
    <div className="flex items-center gap-3">
      <span className="text-green-500">{icon}</span>
      <span className="text-gray-600">{label}</span>
    </div>
    <span className="text-gray-900">{value}</span>
  </div>
);

export default AppDetails;