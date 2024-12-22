import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const SupportPageHeader = ({ title }: { title: string }) => {
  return (
    <div className="mb-6">
      <Link 
        to="/" 
        className="inline-flex items-center text-green-600 hover:text-green-700 mb-4 transition-colors"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold">{title}</h1>
    </div>
  );
};

export default SupportPageHeader;