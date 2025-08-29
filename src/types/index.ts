export interface WeatherData {
  current: {
    temp: number;
    condition: string;
    icon: string;
  };
  forecast: Array<{
    date: string;
    high: number;
    low: number;
    condition: string;
    icon: string;
  }>;
}

export interface CategoryItem {
  id: string;
  name: string;
  description: string;
  location: 'arizona' | 'sonora';
  category: string;
}

export interface Story {
  id: string;
  title: string;
  preview: string;
  location: 'arizona' | 'sonora';
  category: 'stories';
}

export interface Career {
  id: string;
  company: string;
  url: string;
  location: 'arizona' | 'sonora';
  category: 'careers';
}