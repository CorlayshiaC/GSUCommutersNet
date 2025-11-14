import { Clock, Volume2, VolumeX } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import type { StudySpot } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface StudySpotCardProps {
  spot: StudySpot;
}

export function StudySpotCard({ spot }: StudySpotCardProps) {
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <ImageWithFallback
          src={spot.imageUrl}
          alt={spot.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Spot Name */}
        <h3 className="text-black mb-2">{spot.name}</h3>

        {/* Type Badge */}
        <div className="flex items-center gap-2 mb-3">
          <Badge 
            className={`${
              spot.type === 'Quiet' 
                ? 'bg-blue-100 text-blue-700 hover:bg-blue-100' 
                : 'bg-black text-white hover:bg-black'
            } rounded-full`}
          >
            {spot.type === 'Quiet' ? (
              <VolumeX className="h-3 w-3 mr-1" />
            ) : (
              <Volume2 className="h-3 w-3 mr-1" />
            )}
            {spot.type}
          </Badge>
        </div>

        {/* Hours */}
        <div className="flex items-center gap-2 text-gray-600 mb-3">
          <Clock className="h-4 w-4" />
          <span>{spot.hours}</span>
        </div>

        {/* Description */}
        <p className="text-gray-700">{spot.description}</p>
      </div>
    </Card>
  );
}
