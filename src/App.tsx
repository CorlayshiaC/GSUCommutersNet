import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/pages/HomePage';
import { EventsPage } from './components/pages/EventsPage';
import { MapsPage } from './components/pages/MapsPage';
import { ProfilePage } from './components/pages/ProfilePage';
import { SocialPage } from './components/pages/SocialPage';
import { StudySpotsPage } from './components/pages/StudySpotsPage';

export type SpotType = 'Quiet' | 'Active';

export interface StudySpot {
  id: number;
  name: string;
  hours: string;
  type: SpotType;
  description: string;
  imageUrl: string;
}

const studySpots: StudySpot[] = [
  {
    id: 1,
    name: 'Law Library',
    hours: '8:30am–5pm',
    type: 'Quiet',
    description: 'Perfect for focused study sessions with extensive legal resources',
    imageUrl: 'https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/481223803_1192374752896037_3060902548988372729_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=3u8_I1O27m8Q7kNvwFxJidz&_nc_oc=AdmvmwS2QT3eE4IJftx6vLIro87Rrfto_LPlbzcB1FPG3s-2MxdzGbzvB1RwM0nMeuI&_nc_zt=23&_nc_ht=scontent-atl3-1.xx&_nc_gid=a-3fz7sU6B3r4aBrWrHU_w&oh=00_AfhWOnJYKFVVRkFUU1pOYwyyZwgbUKeErKQFzONTSX-I1g&oe=691ECE99'
  },
  {
    id: 2,
    name: 'Panther Lounge',
    hours: 'Student Center West',
    type: 'Active',
    description: 'Great for group work and collaborative studying',
    imageUrl: 'https://engagement.gsu.edu/files/2025/02/IMG_3878-1500x1125.jpeg'
  },
  {
    id: 3,
    name: '55 Park Place, 11th Floor',
    hours: '7am–11pm',
    type: 'Quiet',
    description: 'Great views, quiet atmosphere',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5b4677d2b40b9d8a7e9b4c34/1598389656107-JOJ9KXX9203037IX0W61/IMG_3782.jpg'
  },
  {
    id: 4,
    name: 'GSU Library, 4th Floor',
    hours: '8am–10pm',
    type: 'Quiet',
    description: 'Silent study zone with individual desks',
    imageUrl: 'https://images.unsplash.com/photo-1703236079592-4d2f222e8d2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaWJyYXJ5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyNzk0ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 5,
    name: 'CMII, 2nd Floor',
    hours: '8:30am - 10pm',
    type: 'Quiet',
    description: 'Peaceful environment with ample seating',
    imageUrl: 'https://cmii.gsu.edu/files/2024/07/BM5A8596-1.jpg'
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'events':
        return <EventsPage />;
      case 'maps':
        return <MapsPage />;
      case 'profile':
        return <ProfilePage />;
      case 'social':
        return <SocialPage />;
      case 'study-spots':
        return <StudySpotsPage studySpots={studySpots} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
    </div>
  );
}