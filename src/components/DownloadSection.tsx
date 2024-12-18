import React from 'react';
import { Download } from 'lucide-react';

interface DownloadSectionProps {
  version: string;
  size: string;
  downloadUrl: string;
}

const DownloadSection: React.FC<DownloadSectionProps> = ({ version, size, downloadUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-card p-6 my-8">
      <h2 className="text-2xl font-bold mb-4">Download Information</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-gray-600">Version</span>
          <span className="font-semibold">{version}</span>
        </div>
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-gray-600">Size</span>
          <span className="font-semibold">{size}</span>
        </div>
        <a 
          href={downloadUrl}
          className="inline-flex items-center justify-center w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Now
        </a>
      </div>
    </div>
  );
};

export default DownloadSection;