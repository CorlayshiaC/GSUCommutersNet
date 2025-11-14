import { User, Mail, Phone, MapPin, Calendar, Edit } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback } from '../ui/avatar';

export function ProfilePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-black mb-2">My Profile</h1>
        <p className="text-gray-600">Manage your account and preferences</p>
      </div>

      {/* Profile Card */}
      <Card className="p-6 shadow-md mb-6">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          {/* Avatar */}
          <Avatar className="h-24 w-24">
            <AvatarFallback className="bg-blue-600 text-white text-2xl">
              JD
            </AvatarFallback>
          </Avatar>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-black mb-1">John Doe</h2>
            <p className="text-gray-600 mb-4">Computer Science Major | Junior</p>
            
            <div className="space-y-2 text-gray-700">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Mail className="h-4 w-4" />
                <span>john.doe@student.gsu.edu</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Phone className="h-4 w-4" />
                <span>(404) 555-0123</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin className="h-4 w-4" />
                <span>Commuter Student</span>
              </div>
            </div>
          </div>

          {/* Edit Button */}
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="p-6 text-center shadow-md">
          <div className="text-blue-600 mb-2">15</div>
          <p className="text-gray-600">Events Attended</p>
        </Card>
        <Card className="p-6 text-center shadow-md">
          <div className="text-blue-600 mb-2">8</div>
          <p className="text-gray-600">Favorite Study Spots</p>
        </Card>
        <Card className="p-6 text-center shadow-md">
          <div className="text-blue-600 mb-2">23</div>
          <p className="text-gray-600">Connections Made</p>
        </Card>
      </div>

      {/* Preferences */}
      <Card className="p-6 shadow-md">
        <h3 className="text-black mb-4">Preferences</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <div className="text-gray-900">Study Environment</div>
              <div className="text-gray-500">Quiet spaces preferred</div>
            </div>
            <Button variant="ghost" size="sm">
              Change
            </Button>
          </div>
          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <div className="text-gray-900">Event Notifications</div>
              <div className="text-gray-500">Enabled</div>
            </div>
            <Button variant="ghost" size="sm">
              Change
            </Button>
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <div className="text-gray-900">Commute Schedule</div>
              <div className="text-gray-500">Mon-Fri, 9am-5pm</div>
            </div>
            <Button variant="ghost" size="sm">
              Change
            </Button>
          </div>
        </div>
      </Card>
    </main>
  );
}
