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
        onClick={() => window.open("https://www.dropbox.com/scl/fi/rttzzs3e2awlztmgdcst6/planetvszombiemod-apk-free-mod_3.8.0-httpsplantvszomod-online.apk?rlkey=mkni203j476kxyx803icnxic6&st=4k6araix&dl=1", "_blank")}
      >
        <Download className="w-5 h-5 mr-2" />
        Download [Plants vs. Zombies MOD APK]
      </Button>
    </div>
  );
};

export default DownloadSection;
