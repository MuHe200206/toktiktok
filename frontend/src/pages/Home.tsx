import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Info, Star } from 'lucide-react';
import { useMovieContext } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';

const Home: React.FC = () => {
  const { movies, loading, error } = useMovieContext();

  // Get featured movie (first movie for now)
  const featuredMovie = movies[0];
  
  // Get movies by genre for different rows
  const dramaMovies = movies.filter(movie => movie.genre.toLowerCase().includes('drama'));
  const crimeMovies = movies.filter(movie => movie.genre.toLowerCase().includes('crime'));

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-netflix-red"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Error Loading Movies</h2>
          <p className="text-gray-400">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {featuredMovie && (
        <div className="relative h-screen">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%), url(${featuredMovie.imageUrl})`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
          </div>
          
          <div className="relative z-10 flex items-center h-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  {featuredMovie.title}
                </h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="text-yellow-400" size={20} />
                    <span className="text-white font-semibold">{featuredMovie.rating}</span>
                  </div>
                  <span className="text-gray-300">{featuredMovie.releaseYear}</span>
                  <span className="text-gray-300">{featuredMovie.durationMinutes}m</span>
                  <span className="text-gray-300">{featuredMovie.genre}</span>
                </div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {featuredMovie.description}
                </p>
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors">
                    <Play size={20} />
                    <span>Play</span>
                  </button>
                  <Link
                    to={`/movies/${featuredMovie.id}`}
                    className="flex items-center space-x-2 bg-gray-600 bg-opacity-70 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-500 transition-colors"
                  >
                    <Info size={20} />
                    <span>More Info</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Movie Rows */}
      <div className="relative z-20 -mt-32 pb-20">
        {/* Drama Movies Row */}
        {dramaMovies.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 px-4 sm:px-6 lg:px-8">
              Drama Movies
            </h2>
            <div className="flex space-x-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4">
              {dramaMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        )}

        {/* Crime Movies Row */}
        {crimeMovies.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 px-4 sm:px-6 lg:px-8">
              Crime Movies
            </h2>
            <div className="flex space-x-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4">
              {crimeMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        )}

        {/* All Movies Row */}
        {movies.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 px-4 sm:px-6 lg:px-8">
              All Movies
            </h2>
            <div className="flex space-x-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
