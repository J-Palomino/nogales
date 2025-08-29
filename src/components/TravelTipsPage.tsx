import React from 'react';
import { travelTips } from '../data/content';

interface TravelTipsPageProps {
  onBack: () => void;
}

export const TravelTipsPage: React.FC<TravelTipsPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#FADADD]">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={onBack}
          className="mb-6 px-4 py-2 bg-[#FF4F87] text-white rounded-lg hover:bg-[#F88379] transition-colors duration-200"
        >
          ← Back to Home
        </button>
        
        <h1 className="text-4xl font-bold text-[#B03060] mb-8">Travel Tips</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {travelTips.map((tip, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-bold text-[#B03060] mb-4">{tip.title}</h3>
              <p className="text-gray-600 leading-relaxed">{tip.tip}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#B03060] mb-6">Essential Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-[#B03060] mb-3">Border Crossings</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• DeConcini Port (vehicle & pedestrian)</li>
                <li>• Mariposa Port (vehicle & pedestrian)</li>
                <li>• Morley Gate (pedestrian only)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#B03060] mb-3">Nearby Attractions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Patagonia Lake State Park (30 min)</li>
                <li>• Tumacácori National Historical Park (20 min)</li>
                <li>• Peña Blanca Lake (25 min)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};