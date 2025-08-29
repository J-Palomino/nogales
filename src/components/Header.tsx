import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  onBack?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, showBackButton = false, onBack }) => {
  return (
    <header className="bg-[#E6A6A1] shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {showBackButton && (
              <button
                onClick={onBack}
                className="p-2 text-[#B03060] hover:text-[#FF4F87] transition-colors duration-200 rounded-lg hover:bg-[#FADADD]"
              >
                <ArrowLeft size={24} />
              </button>
            )}
            <h1 className="text-2xl md:text-3xl font-bold text-[#B03060]">{title}</h1>
          </div>
        </div>
      </div>
    </header>
  );
};