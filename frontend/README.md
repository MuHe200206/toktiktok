# TokTikTok Frontend

A Netflix-like streaming service frontend built with React, TypeScript, and Tailwind CSS.

## Features

- 🎬 **Modern UI/UX**: Netflix-inspired design with smooth animations and responsive layout
- 🔐 **Authentication**: User registration, login, and profile management
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- 🎯 **Content Discovery**: Browse, search, and filter movies and shows
- ❤️ **Personalization**: Watch history, favorites, and user preferences
- ⚡ **Fast Performance**: Built with Vite for optimal development and build performance

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom Netflix-inspired theme
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **HTTP Client**: Axios (for API calls)

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Navbar.tsx     # Navigation bar component
├── contexts/           # React contexts
│   └── AuthContext.tsx # Authentication context
├── pages/              # Page components
│   ├── Home.tsx       # Landing page
│   ├── Browse.tsx     # Content browsing page
│   ├── MovieDetail.tsx # Individual movie/show page
│   ├── Login.tsx      # User login page
│   ├── Register.tsx   # User registration page
│   └── Profile.tsx    # User profile page
├── App.tsx            # Main app component with routing
├── main.tsx           # App entry point
└── index.css          # Global styles and Tailwind imports
```

## Custom Tailwind Theme

The project includes a custom Netflix-inspired color palette:

- `netflix-red`: Primary brand color (#E50914)
- `netflix-black`: Main background (#000000)
- `netflix-dark`: Secondary background (#141414)
- `netflix-gray`: Text and borders (#808080)
- `netflix-light-gray`: Secondary text (#E5E5E5)

## API Integration

The frontend is designed to work with a C# .NET backend API. Current endpoints include:

- `POST /api/auth/login` - User authentication
- `POST /api/auth/register` - User registration
- `GET /api/movies` - Fetch movie listings
- `GET /api/movies/{id}` - Fetch movie details

## Development Notes

- **Mock Data**: Currently uses mock data for development. Replace with actual API calls when backend is ready.
- **Authentication**: JWT-based authentication system with local storage for token management.
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop.
- **Performance**: Optimized with React.memo, useCallback, and useMemo where appropriate.

## Deployment

This frontend is designed to be deployed to Azure App Service alongside the .NET backend.

### Build and Deploy

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist/` folder to your Azure App Service

## Contributing

1. Follow the existing code style and patterns
2. Use TypeScript for all new components
3. Ensure responsive design works on all screen sizes
4. Add proper error handling and loading states
5. Test authentication flows thoroughly

## License

This project is part of the TokTikTok streaming service.
