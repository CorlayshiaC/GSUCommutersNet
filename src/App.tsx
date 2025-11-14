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
    imageUrl: 'https://images.unsplash.com/photo-1737018363337-c11847e9f39b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwc3R1ZHklMjBxdWlldHxlbnwxfHx8fDE3NjI4MTY5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    name: 'Panther Lounge',
    hours: 'Student Center West',
    type: 'Active',
    description: 'Great for group work and collaborative studying',
    imageUrl: 'https://images.unsplash.com/photo-1743529056611-2b7b01658893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbG91bmdlJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYyODE2OTY0fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    name: '55 Park Place, 11th Floor',
    hours: '7am–11pm',
    type: 'Quiet',
    description: 'Great views, quiet atmosphere',
    imageUrl: 'https://images.unsplash.com/photo-1658200542476-68e8adf747ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wdXMlMjBzdHVkeSUyMHNwYWNlfGVufDF8fHx8MTc2MjgxNjk2NHww&ixlib=rb-4.1.0&q=80&w=1080'
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
    name: 'Study Commons',
    hours: 'Open until 2am',
    type: 'Active',
    description: 'Late-night study with coffee bar and group tables',
    imageUrl: 'https://images.unsplash.com/photo-1514355315815-2b64b0216b14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHklMjByb29tfGVufDF8fHx8MTc2MjgxNjk2NHww&ixlib=rb-4.1.0&q=80&w=1080'
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