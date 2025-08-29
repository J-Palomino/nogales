import React, { useState } from 'react';
import { Search, ExternalLink } from 'lucide-react';
import { CategoryItem, Story, Career } from '../types';

interface CategoryPageProps {
  category: string;
  items: (CategoryItem | Story | Career)[];
  onBack: () => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ category, items, onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<'all' | 'arizona' | 'sonora'>('all');

  const filteredItems = items.filter(item => {
    const matchesSearch = 'name' in item 
      ? item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      : 'title' in item
      ? item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.preview.toLowerCase().includes(searchTerm.toLowerCase())
      : item.company.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = selectedLocation === 'all' || item.location === selectedLocation;
    
    return matchesSearch && matchesLocation;
  });

  const getCategoryTitle = () => {
    const titles: { [key: string]: string } = {
      food: 'Food & Dining',
      landmarks: 'Landmarks & Attractions',
      hangout: 'Hangout Spots',
      shops: 'Local Shops',
      careers: 'Career Opportunities',
      stories: 'Stories of Nogales',
    };
    return titles[category] || category;
  };

  return (
    <div className="min-h-screen bg-[#FADADD]">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <button
            onClick={onBack}
            className="mb-6 px-4 py-2 bg-[#FF4F87] text-white rounded-lg hover:bg-[#F88379] transition-colors duration-200"
          >
            ← Back to Home
          </button>
          
          <h1 className="text-4xl font-bold text-[#B03060] mb-6">{getCategoryTitle()}</h1>
          
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder={`Search ${category}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF4F87] focus:border-transparent"
              />
            </div>
            
            <div className="flex bg-[#E6A6A1] rounded-lg p-1">
              <button
                onClick={() => setSelectedLocation('all')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  selectedLocation === 'all' 
                    ? 'bg-[#FF4F87] text-white' 
                    : 'text-[#B03060] hover:bg-[#F88379] hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedLocation('arizona')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  selectedLocation === 'arizona' 
                    ? 'bg-[#FF4F87] text-white' 
                    : 'text-[#B03060] hover:bg-[#F88379] hover:text-white'
                }`}
              >
                Arizona
              </button>
              <button
                onClick={() => setSelectedLocation('sonora')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  selectedLocation === 'sonora' 
                    ? 'bg-[#FF4F87] text-white' 
                    : 'text-[#B03060] hover:bg-[#F88379] hover:text-white'
                }`}
              >
                Sonora
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    {'name' in item && (
                      <h3 className="text-xl font-bold text-[#B03060] mb-2">{item.name}</h3>
                    )}
                    {'title' in item && (
                      <h3 className="text-xl font-bold text-[#B03060] mb-2">{item.title}</h3>
                    )}
                    {'company' in item && (
                      <h3 className="text-xl font-bold text-[#B03060] mb-2">{item.company}</h3>
                    )}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.location === 'arizona' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {item.location === 'arizona' ? 'Arizona' : 'Sonora'}
                  </span>
                </div>
                
                {'description' in item && (
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                )}
                {'preview' in item && (
                  <p className="text-gray-600 text-sm leading-relaxed">{item.preview}</p>
                )}
                {'url' in item && (
                  <div className="mt-4">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-[#FF4F87] text-white rounded-lg hover:bg-[#F88379] transition-colors duration-200"
                    >
                      <span>Apply Now</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No {category} found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};