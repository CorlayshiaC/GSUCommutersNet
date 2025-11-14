import { Calendar, Clock, MapPin } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export type EventType = 'Social' | 'Academic';

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: EventType;
  description: string;
  imageUrl: string;
}

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
      {/* Event Image */}
      <div className="w-full h-48 bg-gray-200">
        <ImageWithFallback
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Event Details */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-black flex-1">{event.title}</h3>
          <Badge className={
            event.type === 'Social'
              ? 'bg-blue-100 text-blue-700 hover:bg-blue-100'
              : 'bg-green-100 text-green-700 hover:bg-green-100'
          }>
            {event.type}
          </Badge>
        </div>

        <p className="text-gray-700 mb-4">{event.description}</p>

        <div className="space-y-2 text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
