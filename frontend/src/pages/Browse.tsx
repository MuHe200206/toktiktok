import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, Star } from 'lucide-react';

interface Movie {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  rating: number;
  year: number;
  genre: string;
}

const Browse = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  const genres = ['all', 'action', 'adventure', 'comedy', 'drama', 'horror', 'romance', 'sci-fi', 'thriller'];

  useEffect(() => {
    // TODO: Replace with actual API call
    const mockMovies: Movie[] = [
      {
        id: '1',
        title: 'The Great Adventure',
        description: 'An epic journey through uncharted territories.',
        imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        rating: 4.8,
        year: 2024,
        genre: 'adventure'
      },
      {
        id: '2',
        title: 'Mystery Island',
        description: 'A thrilling mystery unfolds on a remote island.',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        rating: 4.6,
        year: 2024,
        genre: 'mystery'
      },
      {
        id: '3',
        title: 'Future World',
        description: 'A sci-fi adventure in a dystopian future.',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2025&q=80',
        rating: 4.7,
        year: 2024,
        genre: 'sci-fi'
      },
      {
        id: '4',
        title: 'Love Story',
        description: 'A romantic tale of two souls finding each other.',
        imageUrl: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2089&q=80',
        rating: 4.5,
        year: 2024,
        genre: 'romance'
      },
      {
        id: '5',
        title: 'Action Hero',
        description: 'High-octane action sequences and thrilling stunts.',
        imageUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        rating: 4.4,
        year: 2024,
        genre: 'action'
      },
      {
        id: '6',
        title: 'Comedy Central',
        description: 'Laugh-out-loud comedy that will brighten your day.',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2025&q=80',
        rating: 4.3,
        year: 2024,
        genre: 'comedy'
      }
    ];

    setMovies(mockMovies);
    setFilteredMovies(mockMovies);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    let filtered = movies;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by genre
    if (selectedGenre !== 'all') {
      filtered = filtered.filter(movie => movie.genre === selectedGenre);
    }

    setFilteredMovies(filtered);
  }, [searchQuery, selectedGenre, movies]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ search: searchQuery.trim() });
    } else {
      setSearchParams({});
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-netflix-black flex items-center justify-center pt-16">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-netflix-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Browse Content</h1>
          
          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4">
            <form onSubmit={handleSearch} className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-netflix-gray" />
                <input
                  type="text"
                  placeholder="Search movies and shows..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-field w-full pl-10"
                />
              </div>
            </form>

            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-netflix-gray" />
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="input-field"
              >
                {genres.map(genre => (
                  <option key={genre} value={genre}>
                    {genre === 'all' ? 'All Genres' : genre.charAt(0).toUpperCase() + genre.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-netflix-light-gray">
            Found {filteredMovies.length} {filteredMovies.length === 1 ? 'result' : 'results'}
            {searchQuery && ` for "${searchQuery}"`}
            {selectedGenre !== 'all' && ` in ${selectedGenre}`}
          </p>
        </div>

        {/* Movies Grid */}
        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMovies.map((movie) => (
              <div key={movie.id} className="card overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-200">
                <div className="relative">
                  <img 
                    src={movie.imageUrl} 
                    alt={movie.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <button className="btn-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Play
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-1">{movie.title}</h3>
                  <p className="text-netflix-light-gray text-sm mb-3 line-clamp-2">{movie.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-netflix-gray text-sm">{movie.year}</span>
                    <span className="flex items-center text-yellow-400">
                      <Star className="h-4 w-4 mr-1" />
                      {movie.rating}
                    </span>
                  </div>
                  <span className="inline-block mt-2 px-2 py-1 bg-netflix-gray bg-opacity-20 text-netflix-light-gray text-xs rounded">
                    {movie.genre}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-netflix-gray text-6xl mb-4">🎬</div>
            <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
            <p className="text-netflix-light-gray">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;
