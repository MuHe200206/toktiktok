# Netflix-like Frontend (React)

This is the frontend application for a Netflix-like streaming platform built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern UI/UX**: Netflix-inspired design with smooth animations and transitions
- **Responsive Design**: Mobile-first approach that works on all devices
- **Movie Browsing**: Browse movies by genre, search functionality, and detailed movie pages
- **User Authentication**: Login and registration forms (UI ready, backend integration pending)
- **Interactive Components**: Hover effects, loading states, and smooth transitions
- **TypeScript**: Full type safety and better development experience

## Tech Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **React Router** - Client-side routing for single-page application
- **Axios** - HTTP client for API communication
- **Lucide React** - Beautiful and consistent icon library
- **Framer Motion** - Animation library for smooth transitions

## Prerequisites

- Node.js 16+ and npm
- Backend API running (C# .NET 8 backend)
- Modern web browser

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=https://localhost:7000/api
```

**Note**: Update the API URL to match your backend configuration.

### 3. Start Development Server

```bash
npm start
```

The application will open at `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation bar component
│   └── MovieCard.tsx   # Individual movie display component
├── context/            # React context for state management
│   └── MovieContext.tsx # Movie data and API calls
├── pages/              # Page components
│   ├── Home.tsx        # Homepage with hero section
│   ├── Movies.tsx      # Movies listing with filters
│   ├── MovieDetail.tsx # Individual movie details
│   ├── Login.tsx       # User login form
│   └── Register.tsx    # User registration form
├── App.tsx             # Main application component
├── index.tsx           # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## Key Components

### Navbar
- Netflix-style navigation with logo
- Search functionality
- Mobile-responsive menu
- User authentication links

### Home Page
- Hero section with featured movie
- Movie rows organized by genre
- Responsive grid layout
- Smooth hover animations

### Movies Page
- Advanced search and filtering
- Genre-based categorization
- Responsive grid layout
- Loading states and error handling

### Movie Detail Page
- Full movie information display
- Hero section with background image
- Action buttons (Play, Add to List)
- Technical details and metadata

## Styling

The application uses Tailwind CSS with custom Netflix-inspired color scheme:

- **Primary Red**: `#E50914` (Netflix brand color)
- **Background**: `#141414` (Dark theme)
- **Text**: White and gray variations
- **Accents**: Custom hover effects and transitions

## API Integration

The frontend is designed to work with the C# .NET backend API:

- **Base URL**: Configurable via environment variables
- **Endpoints**: `/api/Movies`, `/api/Users`, etc.
- **CORS**: Configured for cross-origin requests
- **Error Handling**: Comprehensive error states and loading indicators

## Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Tailwind CSS responsive utilities
- **Touch Friendly**: Optimized for touch interactions
- **Performance**: Optimized images and lazy loading

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **Components**: Functional components with hooks

## Deployment

### Azure App Service

1. Build the application: `npm run build`
2. Deploy the `build` folder to Azure App Service
3. Configure environment variables in Azure
4. Set up custom domain if needed

### Environment Variables

- `REACT_APP_API_URL` - Backend API endpoint
- `REACT_APP_ENVIRONMENT` - Production/Development mode

## Future Enhancements

- **User Authentication**: JWT token integration
- **Watchlist Management**: Save and manage favorite movies
- **Video Player**: Integrated video streaming
- **Recommendations**: AI-powered movie suggestions
- **Social Features**: User reviews and ratings
- **Offline Support**: Service worker for offline viewing

## Troubleshooting

### Common Issues

1. **API Connection Errors**: Check backend URL and CORS configuration
2. **Build Failures**: Ensure all dependencies are installed
3. **Styling Issues**: Verify Tailwind CSS is properly configured
4. **Routing Problems**: Check React Router configuration

### Performance Tips

- Use React.memo for expensive components
- Implement lazy loading for routes
- Optimize images and assets
- Monitor bundle size with webpack analyzer

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is for educational purposes. Netflix is a registered trademark of Netflix, Inc.

## Support

For questions or issues:
- Check the troubleshooting section
- Review the backend API documentation
- Ensure all prerequisites are met
