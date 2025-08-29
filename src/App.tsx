import React, { useState } from 'react';
import { Header } from './components/Header';
import { CategoryCard } from './components/CategoryCard';
import { CategoryPage } from './components/CategoryPage';
import { TravelTipsPage } from './components/TravelTipsPage';
import { WeatherWidget } from './components/WeatherWidget';
import { categories, foodItems, landmarks, hangoutSpots, localShops, stories, careers } from './data/content';

type CurrentView = 'home' | 'food' | 'landmarks' | 'hangout' | 'shops' | 'careers' | 'stories' | 'travel';

function App() {
  const [currentView, setCurrentView] = useState<CurrentView>('home');

  const handleCategoryClick = (categoryId: string) => {
    setCurrentView(categoryId as CurrentView);
  };

  const getItemsForCategory = (categoryId: string) => {
    switch (categoryId) {
      case 'food': return foodItems;
      case 'landmarks': return landmarks;
      case 'hangout': return hangoutSpots;
      case 'shops': return localShops;
      case 'stories': return stories;
      case 'careers': return careers;
      default: return [];
    }
  };

  if (currentView === 'travel') {
    return <TravelTipsPage onBack={() => setCurrentView('home')} />;
  }

  if (currentView !== 'home') {
    return (
      <div>
        <Header 
          title={categories.find(c => c.id === currentView)?.name || ''} 
          showBackButton 
          onBack={() => setCurrentView('home')} 
        />
        <CategoryPage 
          category={currentView}
          items={getItemsForCategory(currentView)}
          onBack={() => setCurrentView('home')}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FADADD]">
      <WeatherWidget />
      
      {/* Hero Section */}
      <div className="relative">
        <div 
          className="h-screen flex items-center justify-center bg-gradient-to-br from-[#E6A6A1] via-[#F88379] to-[#FF4F87]"
          style={{
            backgroundImage: `linear-gradient(rgba(230, 166, 161, 0.8), rgba(248, 131, 121, 0.8)), url('https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Discover Nogales
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Arizona & Sonora
            </p>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80 leading-relaxed">
              Explore the vibrant twin cities where cultures blend, flavors unite, and stories connect across borders
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#B03060] mb-4">
            Explore Our Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the best of both sides of the border - from authentic cuisine to historic landmarks
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={() => handleCategoryClick(category.id)}
            />
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#B03060] mb-4">
              Two Cities, One Community
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nogales represents the beautiful fusion of American and Mexican cultures. 
              Whether you're exploring the Arizona side's modern amenities or diving into 
              Sonora's rich traditions, you'll find a warm welcome on both sides of the border.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FADADD] rounded-xl p-8 text-center transform transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-[#B03060] mb-4">Nogales, Arizona</h3>
              <p className="text-gray-600 leading-relaxed">
                Experience American Southwest charm with modern conveniences, 
                historic courthouse, and gateway to adventure in the Sonoran Desert.
              </p>
            </div>
            
            <div className="bg-[#FADADD] rounded-xl p-8 text-center transform transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-[#B03060] mb-4">Nogales, Sonora</h3>
              <p className="text-gray-600 leading-relaxed">
                Immerse yourself in authentic Mexican culture with traditional markets, 
                colonial architecture, and the warmth of Sonoran hospitality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#B03060] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-4">Visit Nogales</h3>
          <p className="text-pink-100 mb-4">
            Where two nations meet, one community thrives
          </p>
          <p className="text-sm text-pink-200">
            © 2025 Discover Nogales. Bridging cultures, sharing stories.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;