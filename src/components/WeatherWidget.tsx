import React, { useState, useEffect } from 'react';
import { Cloud, X, RotateCcw } from 'lucide-react';
import { WeatherData } from '../types';

export const WeatherWidget: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isCelsius, setIsCelsius] = useState(false);
  const [weather, setWeather] = useState<WeatherData>({
    current: { temp: 75, condition: 'Sunny', icon: '☀️' },
    forecast: [
      { date: 'Mon', high: 78, low: 62, condition: 'Sunny', icon: '☀️' },
      { date: 'Tue', high: 82, low: 65, condition: 'Partly Cloudy', icon: '⛅' },
      { date: 'Wed', high: 79, low: 61, condition: 'Cloudy', icon: '☁️' },
      { date: 'Thu', high: 76, low: 58, condition: 'Light Rain', icon: '🌦️' },
      { date: 'Fri', high: 73, low: 55, condition: 'Partly Cloudy', icon: '⛅' },
      { date: 'Sat', high: 77, low: 59, condition: 'Sunny', icon: '☀️' },
      { date: 'Sun', high: 80, low: 63, condition: 'Sunny', icon: '☀️' },
    ]
  });

  const convertTemp = (temp: number) => {
    return isCelsius ? Math.round((temp - 32) * 5/9) : temp;
  };

  const formatTemp = (temp: number) => {
    return `${convertTemp(temp)}°${isCelsius ? 'C' : 'F'}`;
  };

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="fixed top-4 right-4 bg-[#E6A6A1] rounded-lg p-3 shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl z-30"
      >
        <div className="flex items-center space-x-3">
          <Cloud size={24} className="text-[#B03060]" />
          <div className="text-[#B03060]">
            <div className="text-sm font-medium">Nogales Weather</div>
            <div className="text-lg font-bold">{formatTemp(weather.current.temp)}</div>
          </div>
          <span className="text-2xl">{weather.current.icon}</span>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-[#E6A6A1] p-4 rounded-t-xl flex justify-between items-center">
              <h2 className="text-xl font-bold text-[#B03060]">7-Day Forecast</h2>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsCelsius(!isCelsius)}
                  className="px-3 py-1 bg-[#FF4F87] text-white rounded-lg text-sm hover:bg-[#F88379] transition-colors duration-200"
                >
                  °{isCelsius ? 'F' : 'C'}
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-1 hover:bg-[#F88379] rounded transition-colors duration-200"
                >
                  <X size={20} className="text-[#B03060]" />
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <div className="bg-[#FADADD] rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-[#B03060] mb-2">Current Weather</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-[#B03060]">{formatTemp(weather.current.temp)}</div>
                    <div className="text-[#B03060]">{weather.current.condition}</div>
                  </div>
                  <span className="text-4xl">{weather.current.icon}</span>
                </div>
              </div>

              <div className="space-y-2">
                {weather.forecast.map((day, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-[#FADADD] rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{day.icon}</span>
                      <div>
                        <div className="font-medium text-[#B03060]">{day.date}</div>
                        <div className="text-sm text-gray-600">{day.condition}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-[#B03060]">{formatTemp(day.high)}</div>
                      <div className="text-sm text-gray-600">{formatTemp(day.low)}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-xs text-gray-500 text-center">
                Updated every 15 minutes
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};