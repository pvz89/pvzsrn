import React from 'react';

interface AppHeaderProps {
  title: string;
  version: string;
  size: string;
  iconUrl: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ title, version, size, iconUrl }) => {
  return (
    <div className="flex items-start gap-6 mb-6">
      <img 
        src={iconUrl} 
        alt="App Icon" 
        className="w-24 h-24 rounded-lg"
      />
      <div className="flex-1">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              {[1, 2, 3, 4].map((star) => (
                <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-gray-600 ml-2">4.3</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>Version: {version}</span>
              <span>Size: {size}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;