import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Plus, Star } from 'lucide-react';
import { Movie } from '../context/MovieContext';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="movie-card group relative w-64 flex-shrink-0">
      {/* Movie Image */}
      <div className="relative overflow-hidden rounded-md">
        <img
          src={movie.imageUrl}
          alt={movie.title}
          className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            // Fallback image if the movie image fails to load
            e.currentTarget.src = 'https://via.placeholder.com/256x384/333/666?text=No+Image';
          }}
        />
        
        {/* Overlay with actions */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
            <button className="bg-white bg-opacity-90 text-black p-3 rounded-full hover:bg-opacity-100 transition-all duration-200 transform hover:scale-110">
              <Play size={20} />
            </button>
            <button className="bg-gray-800 bg-opacity-90 text-white p-3 rounded-full hover:bg-opacity-100 transition-all duration-200 transform hover:scale-110">
              <Plus size={20} />
            </button>
          </div>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-md flex items-center space-x-1">
          <Star size={14} className="text-yellow-400" />
          <span className="text-sm font-semibold">{movie.rating}</span>
        </div>

        {/* Duration Badge */}
        <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-md">
          <span className="text-sm font-semibold">{movie.durationMinutes}m</span>
        </div>
      </div>

      {/* Movie Info */}
      <div className="mt-3 px-2">
        <Link to={`/movies/${movie.id}`}>
          <h3 className="text-white font-semibold text-lg mb-1 hover:text-netflix-red transition-colors line-clamp-2">
            {movie.title}
          </h3>
        </Link>
        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
          <span>{movie.releaseYear}</span>
          <span>•</span>
          <span>{movie.genre}</span>
        </div>
        <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed">
          {movie.description}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
