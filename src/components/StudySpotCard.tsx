import { useState } from "react";
import type { StudySpot } from "../App";
import { ChevronDown, Star } from "lucide-react";

interface StudySpotCardProps {
  spot: StudySpot;
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

export function StudySpotCard({ spot, favorites, toggleFavorite }: StudySpotCardProps) {
  const [expanded, setExpanded] = useState(false);
  const isFavorite = favorites.includes(spot.id);

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={spot.imageUrl} alt={spot.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{spot.name}</h2>
            <p className="text-gray-600 text-sm">{spot.description}</p>
          </div>
          <button
            onClick={() => toggleFavorite(spot.id)}
            className="ml-2 text-yellow-500 hover:text-yellow-600"
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Star size={22} fill={isFavorite ? "currentColor" : "none"} />
          </button>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex items-center justify-between w-full text-blue-600 hover:text-blue-800 font-medium"
        >
          {expanded ? "Hide details" : "Show details"}
          <ChevronDown
            size={18}
            className={`transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </button>

        {/* Expandable Section */}
        {expanded && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="mb-2"><strong>Hours:</strong> {spot.hours}</p>
            {spot.location && <p className="mb-2"><strong>Location:</strong> {spot.location}</p>}

            {/* Busy Level (no colors, no bar) */}
            {spot.busyLevel && (
              <div className="mb-2">
                <p className="font-medium text-gray-700">
                  Busy Level: {String(spot.busyLevel).trim()}
                </p>
              </div>
            )}

            {/* Amenities */}
            {spot.amenities && spot.amenities.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {spot.amenities.map((a) => (
                  <span
                    key={a}
                    className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    {a === "WiFi" ? "📶" :
                     a === "Quiet" ? "🤫" :
                     a === "Food" ? "🍽️" :
                     a === "Power Outlets" ? "🔌" :
                     a === "Seating" ? "🛋️" :
                     a === "Whiteboards" ? "📝" :
                     a === "Window Views" ? "🌆" :
                     a === "Group Tables" ? "🧑‍🤝‍🧑" :
                     a === "Private Desks" ? "🪑" :
                     a === "Nap Pods" ? "🛌" :
                     a === "Collaborative Tables" ? "🤝" :
                     a === "Digital Media" ? "💻" :
                     a === "Nearby Food" ? "🍱" : "✨"} {a}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
