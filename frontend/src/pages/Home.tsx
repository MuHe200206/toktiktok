import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Info, Star } from 'lucide-react';

interface Movie {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  rating: number;
  year: number;
  genre: string;
}

const Home = () => {
  const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null);
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // TODO: Replace with actual API calls
    // Mock data for now
    setFeaturedMovie({
      id: '1',
      title: 'The Great Adventure',
      description: 'An epic journey through uncharted territories where heroes face impossible odds and discover the true meaning of courage.',
      imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      rating: 4.8,
      year: 2024,
      genre: 'Adventure'
    });

    setTrendingMovies([
      {
        id: '2',
        title: 'Mystery Island',
        description: 'A thrilling mystery unfolds on a remote island.',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        rating: 4.6,
        year: 2024,
        genre: 'Mystery'
      },
      {
        id: '3',
        title: 'Future World',
        description: 'A sci-fi adventure in a dystopian future.',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80',
        rating: 4.7,
        year: 2024,
        genre: 'Sci-Fi'
      },
      {
        id: '4',
        title: 'Love Story',
        description: 'A romantic tale of two souls finding each other.',
        imageUrl: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80',
        rating: 4.5,
        year: 2024,
        genre: 'Romance'
      }
    ]);
  }, []);

  if (!featuredMovie) {
    return <div className="min-h-screen bg-netflix-black flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%), url(${featuredMovie.imageUrl})`
          }}
        />
        
        <div className="relative z-10 flex items-center h-full pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
                {featuredMovie.title}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4 text-netflix-light-gray">
                <span className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  {featuredMovie.rating}
                </span>
                <span>{featuredMovie.year}</span>
                <span>{featuredMovie.genre}</span>
              </div>
              
              <p className="text-lg text-netflix-light-gray mb-8 leading-relaxed">
                {featuredMovie.description}
              </p>
              
              <div className="flex space-x-4">
                <button className="btn-primary flex items-center space-x-2 px-8 py-3 text-lg">
                  <Play className="h-6 w-6" />
                  <span>Play</span>
                </button>
                <button className="btn-secondary flex items-center space-x-2 px-8 py-3 text-lg">
                  <Info className="h-6 w-6" />
                  <span>More Info</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Section */}
      <div className="py-16 bg-netflix-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Trending Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingMovies.map((movie) => (
              <div key={movie.id} className="card overflow-hidden group cursor-pointer">
                <div className="relative">
                  <img 
                    src={movie.imageUrl} 
                    alt={movie.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <button className="btn-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="h-5 w-5 mr-2" />
                      Play
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{movie.title}</h3>
                  <p className="text-netflix-light-gray text-sm mb-3">{movie.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-netflix-gray text-sm">{movie.year}</span>
                    <span className="flex items-center text-yellow-400">
                      <Star className="h-4 w-4 mr-1" />
                      {movie.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/browse" className="btn-primary px-8 py-3 text-lg">
              Browse All Content
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
