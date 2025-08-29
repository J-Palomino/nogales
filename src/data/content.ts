import { CategoryItem, Story, Career } from '../types';

export const categories = [
  { id: 'food', name: 'Food', icon: 'UtensilsCrossed' },
  { id: 'landmarks', name: 'Landmarks', icon: 'MapPin' },
  { id: 'hangout', name: 'Hangout Spots', icon: 'Users' },
  { id: 'shops', name: 'Local Shops', icon: 'ShoppingBag' },
  { id: 'careers', name: 'Careers', icon: 'Briefcase' },
  { id: 'stories', name: 'Stories', icon: 'BookOpen' },
  { id: 'travel', name: 'Travel Tips', icon: 'Plane' },
];

export const foodItems: CategoryItem[] = [
  // Arizona Food
  { id: '1', name: 'Caracu Latin Steakhouse', description: 'Upscale Latin steakhouse with premium cuts and sophisticated atmosphere', location: 'arizona', category: 'food' },
  { id: '2', name: 'Ragazzi Italian Restaurant', description: 'Family-style Italian dining with traditional recipes and warm hospitality', location: 'arizona', category: 'food' },
  { id: '3', name: 'Cocina La Ley', description: 'Casual seafood tacos with fresh ingredients and authentic flavors', location: 'arizona', category: 'food' },
  { id: '4', name: 'Mr. C\'s Tacos', description: 'Sonoran-style tacos & burritos with traditional preparations', location: 'arizona', category: 'food' },
  { id: '5', name: 'Zula\'s Restaurant', description: 'Nogales institution serving Mexican + American classics since generations', location: 'arizona', category: 'food' },
  { id: '6', name: 'El Zarape', description: 'Hearty Mexican family dining with generous portions and authentic taste', location: 'arizona', category: 'food' },
  
  // Sonora Food
  { id: '7', name: 'La Roca Restaurant', description: 'Landmark fine dining experience carved into natural rock formations', location: 'sonora', category: 'food' },
  { id: '8', name: 'El Trocadero', description: 'Classic steakhouse with premium cuts and traditional service', location: 'sonora', category: 'food' },
  { id: '9', name: 'Tule Restaurant', description: 'Homestyle Sonoran cuisine with recipes passed down through generations', location: 'sonora', category: 'food' },
  { id: '10', name: 'Restaurante Fray Marcos', description: 'Historic hotel dining with elegant atmosphere and regional specialties', location: 'sonora', category: 'food' },
  { id: '11', name: 'La Granja', description: 'Rustic grill serving traditional meals with countryside charm', location: 'sonora', category: 'food' },
  { id: '12', name: '450° Grados', description: 'Wood-fired pizzas & gourmet burgers in modern setting', location: 'sonora', category: 'food' },
];

export const landmarks: CategoryItem[] = [
  // Arizona Landmarks
  { id: '13', name: 'Historic Santa Cruz County Courthouse', description: 'Beautiful historic courthouse representing local government heritage', location: 'arizona', category: 'landmarks' },
  { id: '14', name: 'Hilltop Gallery', description: 'Art gallery showcasing local and regional artists with panoramic views', location: 'arizona', category: 'landmarks' },
  { id: '15', name: 'Kino Springs & Golf Club', description: 'Scenic golf course and springs in the desert landscape', location: 'arizona', category: 'landmarks' },
  { id: '16', name: 'Pimería Alta Historical Society Museum', description: 'Museum preserving the rich history of the Pimería Alta region', location: 'arizona', category: 'landmarks' },
  { id: '17', name: 'Sacred Heart Catholic Church', description: 'Historic Catholic church serving the community with beautiful architecture', location: 'arizona', category: 'landmarks' },
  { id: '18', name: 'Morley Avenue Historic District', description: 'Historic district showcasing early 20th century architecture and commerce', location: 'arizona', category: 'landmarks' },
  
  // Sonora Landmarks
  { id: '19', name: 'Museo de Arte de Nogales', description: 'Art museum featuring contemporary and traditional Mexican artworks', location: 'sonora', category: 'landmarks' },
  { id: '20', name: 'Plaza Pesqueira & Monument to Benito Juárez', description: 'Central plaza honoring Mexico\'s beloved president with impressive monument', location: 'sonora', category: 'landmarks' },
  { id: '21', name: 'Morley Gate / Border Crossing', description: 'Historic pedestrian border crossing connecting two nations', location: 'sonora', category: 'landmarks' },
  { id: '22', name: 'Parroquia de la Purísima Concepción', description: 'Beautiful parish church with stunning colonial architecture', location: 'sonora', category: 'landmarks' },
  { id: '23', name: 'Monumento a Ignacio Zaragoza', description: 'Monument honoring the hero of the Battle of Puebla', location: 'sonora', category: 'landmarks' },
  { id: '24', name: 'Nogales Sonora City Hall (Palacio Municipal)', description: 'Impressive municipal building representing local governance', location: 'sonora', category: 'landmarks' },
];

export const hangoutSpots: CategoryItem[] = [
  // Arizona Hangout Spots
  { id: '25', name: 'Nogales Mall', description: 'Shopping and entertainment center with diverse retail and dining options', location: 'arizona', category: 'hangout' },
  { id: '26', name: 'Nogales City Park', description: 'Community park perfect for families with playgrounds and green spaces', location: 'arizona', category: 'hangout' },
  { id: '27', name: 'Kino Park', description: 'Baseball stadium and recreational complex for sports enthusiasts', location: 'arizona', category: 'hangout' },
  { id: '28', name: 'Oasis Cinema', description: 'Local movie theater showing the latest films in comfortable setting', location: 'arizona', category: 'hangout' },
  { id: '29', name: 'Nogales Skate Park', description: 'Modern skate park for skateboarding and BMX enthusiasts', location: 'arizona', category: 'hangout' },
  { id: '30', name: 'Nogales Recreation Center', description: 'Community center with fitness facilities and organized activities', location: 'arizona', category: 'hangout' },
  
  // Sonora Hangout Spots
  { id: '31', name: 'Nogales Sonora Mall', description: 'Modern shopping mall with international brands and local boutiques', location: 'sonora', category: 'hangout' },
  { id: '32', name: 'Play Land', description: 'Family entertainment center with games and activities for all ages', location: 'sonora', category: 'hangout' },
  { id: '33', name: 'La Roca (restaurant + cantina)', description: 'Unique venue combining fine dining with vibrant nightlife in rock setting', location: 'sonora', category: 'hangout' },
  { id: '34', name: 'Clandestinos Club', description: 'Popular nightclub featuring live music and dancing', location: 'sonora', category: 'hangout' },
  { id: '35', name: 'Plaza Pesqueira', description: 'Central gathering place perfect for evening strolls and people watching', location: 'sonora', category: 'hangout' },
  { id: '36', name: 'Teatro Auditorio de Nogales', description: 'Cultural theater hosting performances, concerts, and community events', location: 'sonora', category: 'hangout' },
];

export const localShops: CategoryItem[] = [
  // Arizona Shops
  { id: '37', name: 'La Michoacana Meat Market', description: 'Traditional butcher shop and grocery with authentic Mexican products', location: 'arizona', category: 'shops' },
  { id: '38', name: 'Nogales Curios', description: 'Souvenir shop featuring artisan goods and local crafts', location: 'arizona', category: 'shops' },
  { id: '39', name: 'Borderlands Books & Music', description: 'Bilingual bookstore with extensive music collection and local authors', location: 'arizona', category: 'shops' },
  { id: '40', name: 'Nogales Farmer\'s Market', description: 'Seasonal market offering fresh produce and handmade crafts', location: 'arizona', category: 'shops' },
  { id: '41', name: 'Desert Sky Antiques', description: 'Treasure trove of antiques and collectibles from the borderlands', location: 'arizona', category: 'shops' },
  { id: '42', name: 'Nogales Music Shop', description: 'Mariachi instruments, repairs, and music lessons for all skill levels', location: 'arizona', category: 'shops' },
  
  // Sonora Shops
  { id: '43', name: 'Mercado Municipal de Nogales', description: 'Traditional Mexican market with fresh produce, spices, and local goods', location: 'sonora', category: 'shops' },
  { id: '44', name: 'Artesanías Nogales', description: 'Local artisan shop specializing in pottery and traditional Mexican crafts', location: 'sonora', category: 'shops' },
  { id: '45', name: 'La Gran Plaza', description: 'Modern shopping mall with national and international retail brands', location: 'sonora', category: 'shops' },
  { id: '46', name: 'Dulcería Sonora', description: 'Traditional candy shop featuring Mexican sweets and party supplies', location: 'sonora', category: 'shops' },
  { id: '47', name: 'Talabartería Nogales', description: 'Authentic leather goods workshop creating saddles and custom leather items', location: 'sonora', category: 'shops' },
  { id: '48', name: 'Perfumería del Centro', description: 'Fragrance and cosmetics boutique in the heart of downtown', location: 'sonora', category: 'shops' },
];

export const stories: Story[] = [
  { id: '49', title: 'The Railroad That Built Nogales', preview: 'How the Southern Pacific Railroad shaped cross-border trade and community development in Arizona', location: 'arizona', category: 'stories' },
  { id: '50', title: 'Baseball at Kino Park', preview: 'The role of baseball in bringing together the Nogales community across generations', location: 'arizona', category: 'stories' },
  { id: '51', title: 'The Flavor of Carne Asada', preview: 'Exploring the Sonoran grilling tradition that defines borderland cuisine', location: 'arizona', category: 'stories' },
  { id: '52', title: 'Morley Gate Memories', preview: 'Stories from the pedestrian border crossing that connects families and cultures daily', location: 'sonora', category: 'stories' },
  { id: '53', title: 'La Roca\'s Living Walls', preview: 'The fascinating story behind Nogales\' most unique restaurant carved into stone', location: 'sonora', category: 'stories' },
  { id: '54', title: 'Street Murals of Nogales', preview: 'How local artists express themes of migration, hope, and resilience through public art', location: 'sonora', category: 'stories' },
];

export const careers: Career[] = [
  // Arizona Careers
  { id: '55', company: 'Santa Cruz County Jobs', url: 'https://www.santacruzcountyaz.gov/jobs', location: 'arizona', category: 'careers' },
  { id: '56', company: 'Nogales Unified School District', url: 'https://www.nusd.k12.az.us/apps/pages/employment', location: 'arizona', category: 'careers' },
  { id: '57', company: 'Carondelet Holy Cross Hospital', url: 'https://www.carondelet.org/careers', location: 'arizona', category: 'careers' },
  { id: '58', company: 'City of Nogales, AZ', url: 'https://nogalesaz.gov/jobs', location: 'arizona', category: 'careers' },
  { id: '59', company: 'Customs and Border Protection', url: 'https://www.cbp.gov/careers', location: 'arizona', category: 'careers' },
  { id: '60', company: 'Walmart', url: 'https://careers.walmart.com/', location: 'arizona', category: 'careers' },
  { id: '61', company: 'McDonald\'s', url: 'https://careers.mcdonalds.com/', location: 'arizona', category: 'careers' },
  { id: '62', company: 'Burger King', url: 'https://www.bk.com/careers', location: 'arizona', category: 'careers' },
  { id: '63', company: 'Starbucks', url: 'https://www.starbucks.com/careers', location: 'arizona', category: 'careers' },
  { id: '64', company: 'Safeway (Albertsons)', url: 'https://www.albertsonscompanies.com/careers.html', location: 'arizona', category: 'careers' },
  { id: '65', company: 'Home Depot', url: 'https://careers.homedepot.com/', location: 'arizona', category: 'careers' },
  { id: '66', company: 'AutoZone', url: 'https://careers.autozone.com/', location: 'arizona', category: 'careers' },
  { id: '67', company: 'Wingstop', url: 'https://www.wingstop.com/careers', location: 'arizona', category: 'careers' },
  
  // Sonora Careers
  { id: '68', company: 'Maquiladora Industries', url: 'https://www.occ.com.mx/empleos-en-nogales', location: 'sonora', category: 'careers' },
  { id: '69', company: 'Grupo Bimbo', url: 'https://grupobimbo.com/en/careers', location: 'sonora', category: 'careers' },
  { id: '70', company: 'Del Rio Supermarkets', url: 'https://delrio.com.mx/', location: 'sonora', category: 'careers' },
  { id: '71', company: 'Hotel Fray Marcos de Niza', url: 'https://www.hotelfraymarcos.com/', location: 'sonora', category: 'careers' },
  { id: '72', company: 'Soriana', url: 'https://www.soriana.com/empleos', location: 'sonora', category: 'careers' },
  { id: '73', company: 'Tetakawi', url: 'https://www.tetakawi.com/careers', location: 'sonora', category: 'careers' },
  { id: '74', company: 'McDonald\'s Mexico', url: 'https://www.mcdonalds.com.mx/trabaja-en-mcdonalds', location: 'sonora', category: 'careers' },
  { id: '75', company: 'Burger King Mexico', url: 'https://www.burgerking.com.mx/trabaja-con-nosotros', location: 'sonora', category: 'careers' },
  { id: '76', company: 'Cinépolis Nogales', url: 'https://cinepolisjobs.com.mx/', location: 'sonora', category: 'careers' },
  { id: '77', company: 'Oxxo Stores', url: 'https://www.oxxo.com/trabaja-en-oxxo', location: 'sonora', category: 'careers' },
  { id: '78', company: 'Coppel', url: 'https://www.coppel.com/trabaja-en-coppel', location: 'sonora', category: 'careers' },
  { id: '79', company: 'Wingstop Mexico', url: 'https://empleos.wingstop.com.mx/', location: 'sonora', category: 'careers' },
];

export const travelTips = [
  {
    title: 'When to Visit',
    tip: 'Spring & fall offer the best weather; summers can be hot while winters are mild and pleasant'
  },
  {
    title: 'Border Crossing',
    tip: 'Three main crossings: DeConcini, Mariposa, Morley Gate (pedestrian only). Passport required. Cross early morning or late evening to avoid crowds'
  },
  {
    title: 'Transportation',
    tip: 'Both downtowns are walkable. Taxis & rideshare available in Sonora. Car helpful for Arizona exploration. Day trips: Patagonia Lake (30min), Tumacácori (20min), Peña Blanca Lake (25min)'
  },
  {
    title: 'Safety Guidelines',
    tip: 'Arizona side safe during day. In Sonora, stay in main tourist areas, avoid displaying valuables at night'
  },
  {
    title: 'Packing Essentials',
    tip: 'Passport, comfortable walking shoes, sun protection, cash (USD + pesos), light jacket for evenings'
  },
  {
    title: 'Cultural Tips',
    tip: 'Tip 10-15% in Sonora restaurants. Greetings are important in Mexican culture. Basic Spanish phrases are greatly appreciated'
  },
];