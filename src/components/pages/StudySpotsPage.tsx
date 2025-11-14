import { useState } from 'react';
import { StudySpotCard } from '../StudySpotCard';
import { Button } from '../ui/button';
import type { StudySpot, SpotType } from '../../App';

interface StudySpotsPageProps {
  studySpots: StudySpot[];
}

export function StudySpotsPage({ studySpots }: StudySpotsPageProps) {
  const [activeFilter, setActiveFilter] = useState<'All' | SpotType>('All');

  const filteredSpots = studySpots.filter(spot => 
    activeFilter === 'All' ? true : spot.type === activeFilter
  );

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-black mb-2">Study Spots</h1>
        <p className="text-gray-600">Find your perfect place to study on campus.</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-3 mb-8">
        <Button
          onClick={() => setActiveFilter('Quiet')}
          variant={activeFilter === 'Quiet' ? 'default' : 'outline'}
          className={activeFilter === 'Quiet' ? 'bg-blue-600 hover:bg-blue-700' : 'border-blue-600 text-blue-600 hover:bg-blue-50'}
        >
          Quiet Spots
        </Button>
        <Button
          onClick={() => setActiveFilter('Active')}
          variant={activeFilter === 'Active' ? 'default' : 'outline'}
          className={activeFilter === 'Active' ? 'bg-blue-600 hover:bg-blue-700' : 'border-blue-600 text-blue-600 hover:bg-blue-50'}
        >
          Active Spots
        </Button>
        {activeFilter !== 'All' && (
          <Button
            onClick={() => setActiveFilter('All')}
            variant="ghost"
            className="text-gray-600 hover:text-gray-900"
          >
            Clear Filter
          </Button>
        )}
      </div>

      {/* Study Spots Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSpots.map((spot) => (
          <StudySpotCard key={spot.id} spot={spot} />
        ))}
      </div>

      {/* Empty State */}
      {filteredSpots.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No study spots found with this filter.</p>
        </div>
      )}
    </main>
  );
}
