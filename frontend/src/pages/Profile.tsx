import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { User, Settings, History, Heart, Eye, LogOut } from 'lucide-react';

interface UserProfile {
  id: string;
  email: string;
  username: string;
  joinDate: string;
  subscription: string;
  watchHistory: WatchHistoryItem[];
  favorites: FavoriteItem[];
}

interface WatchHistoryItem {
  id: string;
  title: string;
  imageUrl: string;
  watchedAt: string;
  progress: number;
}

interface FavoriteItem {
  id: string;
  title: string;
  imageUrl: string;
  genre: string;
  rating: number;
}

const Profile = () => {
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      // TODO: Replace with actual API call
      const mockProfile: UserProfile = {
        id: user.id,
        email: user.email,
        username: user.username,
        joinDate: 'January 2024',
        subscription: 'Premium',
        watchHistory: [
          {
            id: '1',
            title: 'The Great Adventure',
            imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            watchedAt: '2 hours ago',
            progress: 85
          },
          {
            id: '2',
            title: 'Mystery Island',
            imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            watchedAt: '1 day ago',
            progress: 100
          }
        ],
        favorites: [
          {
            id: '1',
            title: 'The Great Adventure',
            imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            genre: 'Adventure',
            rating: 4.8
          },
          {
            id: '2',
            title: 'Future World',
            imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2025&q=80',
            genre: 'Sci-Fi',
            rating: 4.7
          }
        ]
      };

      setProfile(mockProfile);
      setIsLoading(false);
    }
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen bg-netflix-black flex items-center justify-center pt-16">
        <div className="text-center">
          <div className="text-netflix-gray text-6xl mb-4">🔒</div>
          <h3 className="text-xl font-semibold text-white mb-2">Please sign in to view your profile</h3>
        </div>
      </div>
    );
  }

  if (isLoading || !profile) {
    return (
      <div className="min-h-screen bg-netflix-black flex items-center justify-center pt-16">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'history', label: 'Watch History', icon: History },
    { id: 'favorites', label: 'Favorites', icon: Heart },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-netflix-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-netflix-dark to-netflix-black rounded-lg p-8 mb-8">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-netflix-red rounded-full flex items-center justify-center">
              <User className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{profile.username}</h1>
              <p className="text-netflix-light-gray mb-2">{profile.email}</p>
              <div className="flex items-center space-x-4 text-sm text-netflix-light-gray">
                <span>Member since {profile.joinDate}</span>
                <span className="px-3 py-1 bg-netflix-red rounded-full text-white text-xs">
                  {profile.subscription}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-netflix-gray mb-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-netflix-red text-netflix-red'
                      : 'border-transparent text-netflix-light-gray hover:text-white'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="min-h-96">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <History className="h-6 w-6 text-netflix-red" />
                  <h3 className="text-lg font-semibold text-white">Recently Watched</h3>
                </div>
                <p className="text-3xl font-bold text-white mb-2">{profile.watchHistory.length}</p>
                <p className="text-netflix-light-gray">movies and shows</p>
              </div>

              <div className="card p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="h-6 w-6 text-netflix-red" />
                  <h3 className="text-lg font-semibold text-white">Favorites</h3>
                </div>
                <p className="text-3xl font-bold text-white mb-2">{profile.favorites.length}</p>
                <p className="text-netflix-light-gray">saved items</p>
              </div>

              <div className="card p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="h-6 w-6 text-netflix-red" />
                  <h3 className="text-lg font-semibold text-white">Total Watch Time</h3>
                </div>
                <p className="text-3xl font-bold text-white mb-2">24h</p>
                <p className="text-netflix-light-gray">this month</p>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Watch History</h2>
              <div className="space-y-4">
                {profile.watchHistory.map((item) => (
                  <div key={item.id} className="card p-4">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title}
                        className="w-16 h-24 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                        <p className="text-netflix-light-gray text-sm mb-2">Watched {item.watchedAt}</p>
                        <div className="w-full bg-netflix-gray bg-opacity-20 rounded-full h-2">
                          <div 
                            className="bg-netflix-red h-2 rounded-full transition-all duration-300"
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                        <p className="text-netflix-light-gray text-xs mt-1">{item.progress}% completed</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'favorites' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Favorites</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {profile.favorites.map((item) => (
                  <div key={item.id} className="card overflow-hidden group cursor-pointer">
                    <div className="relative">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <button className="btn-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Play
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-1 bg-netflix-gray bg-opacity-20 rounded text-netflix-light-gray text-xs">
                          {item.genre}
                        </span>
                        <span className="text-yellow-400 text-sm">★ {item.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Account Settings</h2>
              <div className="card p-6 max-w-2xl">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Profile Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Username</label>
                        <input
                          type="text"
                          value={profile.username}
                          className="input-field w-full"
                          readOnly
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Email</label>
                        <input
                          type="email"
                          value={profile.email}
                          className="input-field w-full"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Subscription</h3>
                    <div className="flex items-center justify-between p-4 bg-netflix-gray bg-opacity-20 rounded">
                      <div>
                        <p className="text-white font-medium">{profile.subscription} Plan</p>
                        <p className="text-netflix-light-gray text-sm">Next billing: January 15, 2025</p>
                      </div>
                      <button className="btn-secondary">Manage Plan</button>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-netflix-gray">
                    <button 
                      onClick={logout}
                      className="btn-secondary flex items-center space-x-2 text-red-400 border-red-400 hover:bg-red-400 hover:text-white"
                    >
                      <LogOut className="h-5 w-5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
