import React from 'react';
import * as Icons from 'lucide-react';

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    icon: string;
  };
  onClick: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  const IconComponent = Icons[category.icon as keyof typeof Icons] as React.FC<{ size?: number; className?: string }>;

  return (
    <div
      onClick={onClick}
      className="bg-[#E6A6A1] rounded-xl p-6 shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#F88379] group"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 bg-[#FADADD] rounded-full group-hover:bg-white transition-colors duration-300">
          <IconComponent size={32} className="text-[#B03060]" />
        </div>
        <h3 className="text-lg font-semibold text-[#B03060] group-hover:text-white transition-colors duration-300">
          {category.name}
        </h3>
      </div>
    </div>
  );
};