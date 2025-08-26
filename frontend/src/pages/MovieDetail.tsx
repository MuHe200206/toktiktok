import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, Plus, Star, Clock, Calendar, ArrowLeft } from 'lucide-react';
import { useMovieContext } from '../context/MovieContext';

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { fetchMovieById, loading, error } = useMovieContext();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const loadMovie = async () => {
        const movieData = await fetchMovieById(parseInt(id));
        setMovie(movieData);
      };
      loadMovie();
    }
  }, [id, fetchMovieById]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-netflix-red"></div>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Movie Not Found</h2>
          <p className="text-gray-400 mb-6">{error || 'The movie you are looking for does not exist.'}</p>
          <Link to="/" className="netflix-button">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="absolute top-20 left-4 z-10">
        <Link
          to="/"
          className="flex items-center space-x-2 text-white hover:text-netflix-red transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%), url(${movie.imageUrl})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 flex items-center h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {movie.title}
              </h1>
              
              {/* Movie Meta */}
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <Star className="text-yellow-400" size={20} />
                  <span className="text-white font-semibold text-lg">{movie.rating}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Calendar size={20} />
                  <span>{movie.releaseYear}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Clock size={20} />
                  <span>{movie.durationMinutes}m</span>
                </div>
                <span className="text-gray-300">•</span>
                <span className="text-gray-300">{movie.genre}</span>
              </div>

              {/* Description */}
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {movie.description}
              </p>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 bg-white text-black px-8 py-4 rounded-md font-semibold hover:bg-gray-200 transition-colors text-lg">
                  <Play size={24} />
                  <span>Play</span>
                </button>
                <button className="flex items-center space-x-2 bg-gray-600 bg-opacity-70 text-white px-8 py-4 rounded-md font-semibold hover:bg-gray-500 transition-colors text-lg">
                  <Plus size={24} />
                  <span>Add to My List</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Details */}
      <div className="relative z-20 -mt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 bg-opacity-90 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Movie Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Cast & Crew</h3>
                <p className="text-gray-400">
                  Cast and crew information will be displayed here.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Technical Details</h3>
                <div className="space-y-2 text-gray-400">
                  <p><span className="text-white">Release Date:</span> {movie.releaseYear}</p>
                  <p><span className="text-white">Duration:</span> {movie.durationMinutes} minutes</p>
                  <p><span className="text-white">Genre:</span> {movie.genre}</p>
                  <p><span className="text-white">Rating:</span> {movie.rating}/10</p>
                </div>
              </div>
            </div>

            {/* Trailer Section */}
            {movie.trailerUrl && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white mb-4">Trailer</h3>
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Trailer video would be embedded here</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
