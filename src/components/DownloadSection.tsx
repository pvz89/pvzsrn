import React from 'react';
import { Download } from 'lucide-react';
import { Button } from './ui/button';

interface DownloadSectionProps {
  version: string;
  size: string;
  downloadUrl: string;
}

const DownloadSection: React.FC<DownloadSectionProps> = ({ version, size, downloadUrl }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="font-semibold">Version:</span>
          <span className="text-gray-600">{version}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Size:</span>
          <span className="text-gray-600">{size}</span>
        </div>
      </div>
      <Button 
        className="w-full bg-green-500 hover:bg-green-600"
        onClick={() => window.location.href = downloadUrl}
      >
        <Download className="w-5 h-5 mr-2" />
        Download (Latest Version)
      </Button>
    </div>
  );
};

export default DownloadSection;