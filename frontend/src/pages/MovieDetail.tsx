import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, Star, Clock, Calendar, Heart, Share2 } from 'lucide-react';

interface Movie {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  bannerUrl: string;
  rating: number;
  year: number;
  genre: string;
  duration: string;
  director: string;
  cast: string[];
  trailerUrl: string;
}

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // TODO: Replace with actual API call
    const mockMovie: Movie = {
      id: '1',
      title: 'The Great Adventure',
      description: 'An epic journey through uncharted territories.',
      longDescription: 'An epic journey through uncharted territories where heroes face impossible odds and discover the true meaning of courage. This groundbreaking film takes you on a visual and emotional rollercoaster through stunning landscapes and heart-pounding action sequences.',
      imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      bannerUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      rating: 4.8,
      year: 2024,
      genre: 'Adventure',
      duration: '2h 15m',
      director: 'Christopher Nolan',
      cast: ['Tom Hardy', 'Emily Blunt', 'Idris Elba', 'Cillian Murphy'],
      trailerUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    };

    setMovie(mockMovie);
    setIsLoading(false);
  }, [id]);

  const handleLike = () => {
    setIsFavorite(!isFavorite);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-netflix-black flex items-center justify-center pt-16">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-netflix-black flex items-center justify-center pt-16">
        <div className="text-center">
          <div className="text-netflix-gray text-6xl mb-4">🎬</div>
          <h3 className="text-xl font-semibold text-white mb-2">Movie not found</h3>
          <Link to="/browse" className="btn-primary">
            Back to Browse
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-netflix-black">
      {/* Hero Banner */}
      <div className="relative h-96">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.9) 100%), url(${movie.bannerUrl})`
          }}
        />
        
        <div className="relative z-10 flex items-end h-full pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <div className="flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-8">
              {/* Movie Poster */}
              <img 
                src={movie.imageUrl} 
                alt={movie.title}
                className="w-48 h-72 object-cover rounded-lg shadow-2xl"
              />
              
              {/* Movie Info */}
              <div className="flex-1">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  {movie.title}
                </h1>
                
                <div className="flex flex-wrap items-center space-x-4 mb-4 text-netflix-light-gray">
                  <span className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    {movie.rating}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {movie.year}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {movie.duration}
                  </span>
                  <span className="px-3 py-1 bg-netflix-gray bg-opacity-20 rounded-full text-sm">
                    {movie.genre}
                  </span>
                </div>
                
                <p className="text-lg text-netflix-light-gray mb-6 max-w-3xl">
                  {movie.longDescription}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button className="btn-primary flex items-center space-x-2 px-8 py-3 text-lg">
                    <Play className="h-6 w-6" />
                    <span>Play</span>
                  </button>
                  <button 
                    onClick={handleLike}
                    className="btn-secondary flex items-center space-x-2 px-6 py-3"
                  >
                    <Heart className={`h-5 w-5 ${isFavorite ? 'text-red-500 fill-current' : ''}`} />
                    <span>{isFavorite ? 'Liked' : 'Like'}</span>
                  </button>
                  <button className="btn-secondary flex items-center space-x-2 px-6 py-3">
                    <Share2 className="h-5 w-5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Movie Details */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-6">About this movie</h2>
              <p className="text-netflix-light-gray leading-relaxed mb-8">
                {movie.longDescription}
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-4">Cast</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {movie.cast.map((actor, index) => (
                  <span key={index} className="px-3 py-1 bg-netflix-gray bg-opacity-20 rounded-full text-netflix-light-gray">
                    {actor}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-netflix-gray">Director</span>
                    <span className="text-white">{movie.director}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-netflix-gray">Genre</span>
                    <span className="text-white">{movie.genre}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-netflix-gray">Release Year</span>
                    <span className="text-white">{movie.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-netflix-gray">Duration</span>
                    <span className="text-white">{movie.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Rating</h3>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">{movie.rating}</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-6 w-6 ${i < Math.floor(movie.rating) ? 'text-yellow-400 fill-current' : 'text-netflix-gray'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-netflix-light-gray text-sm">
                    Based on user ratings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
