import { Users, MessageCircle, UserPlus, Calendar } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback } from '../ui/avatar';

const groups = [
  {
    id: 1,
    name: 'Commuter Students Network',
    members: 234,
    description: 'Connect with fellow commuter students, share tips, and coordinate carpools'
  },
  {
    id: 2,
    name: 'Study Group - CS 2340',
    members: 12,
    description: 'Collaborative study sessions for Objects and Design class'
  },
  {
    id: 3,
    name: 'Evening Commuters',
    members: 87,
    description: 'For students with evening classes who want to connect and study together'
  }
];

const connections = [
  { name: 'Sarah Johnson', major: 'Biology', initials: 'SJ', color: 'bg-purple-600' },
  { name: 'Mike Chen', major: 'Business', initials: 'MC', color: 'bg-green-600' },
  { name: 'Emily Davis', major: 'Psychology', initials: 'ED', color: 'bg-orange-600' },
  { name: 'Alex Martinez', major: 'Engineering', initials: 'AM', color: 'bg-blue-600' }
];

export function SocialPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-black mb-2">Connect & Socialize</h1>
        <p className="text-gray-600">Meet other commuter students and join study groups</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - Groups */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-black">Groups & Communities</h2>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <UserPlus className="h-4 w-4 mr-2" />
              Create Group
            </Button>
          </div>

          {groups.map((group) => (
            <Card key={group.id} className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                  <Users className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-black mb-2">{group.name}</h3>
                  <p className="text-gray-700 mb-3">{group.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">{group.members} members</span>
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                      Join Group
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}

          {/* Upcoming Social Events */}
          <Card className="p-6 shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-blue-600" />
              <h3 className="text-black">Upcoming Social Events</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b">
                <div>
                  <div className="text-gray-900">Coffee & Connect</div>
                  <div className="text-gray-500">Tomorrow at 3:00 PM</div>
                </div>
                <Button variant="ghost" size="sm" className="text-blue-600">
                  RSVP
                </Button>
              </div>
              <div className="flex items-center justify-between py-2">
                <div>
                  <div className="text-gray-900">Game Night</div>
                  <div className="text-gray-500">Friday at 7:00 PM</div>
                </div>
                <Button variant="ghost" size="sm" className="text-blue-600">
                  RSVP
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar - Connections */}
        <div className="space-y-6">
          <Card className="p-6 shadow-md">
            <h3 className="text-black mb-4">Your Connections</h3>
            <div className="space-y-4">
              {connections.map((connection, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className={`${connection.color} text-white`}>
                      {connection.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="text-gray-900">{connection.name}</div>
                    <div className="text-gray-500">{connection.major}</div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 border-blue-600 text-blue-600 hover:bg-blue-50">
              View All Connections
            </Button>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6 shadow-md">
            <h3 className="text-black mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <UserPlus className="h-4 w-4 mr-2" />
                Find Study Partners
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <MessageCircle className="h-4 w-4 mr-2" />
                Start a Chat
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Meetup
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
