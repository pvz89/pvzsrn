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
        className="w-full bg-green-500 hover:bg-green-600 text-xl font-semibold"
        onClick={() => window.location.href = "https://files.an1.net/pvz-free-mod_3.8.0-an1.com.apk"}
      >
        <Download className="w-5 h-5 mr-2" />
        Download [Plants vs. Zombies MOD APK]
      </Button>
    </div>
  );
};

export default DownloadSection;