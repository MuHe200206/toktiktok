import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

export interface Movie {
  id: number;
  title: string;
  description: string;
  releaseYear: number;
  genre: string;
  durationMinutes: number;
  imageUrl: string;
  trailerUrl: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
}

interface MovieContextType {
  movies: Movie[];
  loading: boolean;
  error: string | null;
  fetchMovies: () => Promise<void>;
  fetchMovieById: (id: number) => Promise<Movie | null>;
  fetchMoviesByGenre: (genre: string) => Promise<void>;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://localhost:7000/api';

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
};

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${API_BASE_URL}/Movies`);
      setMovies(response.data);
    } catch (err) {
      setError('Failed to fetch movies');
      console.error('Error fetching movies:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchMovieById = async (id: number): Promise<Movie | null> => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${API_BASE_URL}/Movies/${id}`);
      return response.data;
    } catch (err) {
      setError('Failed to fetch movie');
      console.error('Error fetching movie:', err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const fetchMoviesByGenre = async (genre: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${API_BASE_URL}/Movies/genre/${genre}`);
      setMovies(response.data);
    } catch (err) {
      setError('Failed to fetch movies by genre');
      console.error('Error fetching movies by genre:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const value: MovieContextType = {
    movies,
    loading,
    error,
    fetchMovies,
    fetchMovieById,
    fetchMoviesByGenre,
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};
