import React from 'react';
import { Download } from 'lucide-react';
import { Button } from './ui/button';

interface DownloadSectionProps {
  downloadUrl: string;
}

const DownloadSection: React.FC<DownloadSectionProps> = ({ downloadUrl }) => {
  return (
    <div className="space-y-4">
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