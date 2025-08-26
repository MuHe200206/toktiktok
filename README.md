# 🎬 Netflix Clone - Full Stack Application

A Netflix-like streaming platform built with modern web technologies, featuring a React frontend, C# .NET 8 backend, and Azure PostgreSQL database.

[![.NET](https://img.shields.io/badge/.NET-8.0-512BD4?style=for-the-badge&logo=.net&logoColor=white)](https://dotnet.microsoft.com/)
[![React](https://img.shields.io/badge/React-18.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Azure](https://img.shields.io/badge/Azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white)](https://azure.microsoft.com/)

## ✨ Features

### 🎯 Core Functionality
- **Movie Browsing**: Browse movies by genre, search, and filter
- **User Authentication**: Secure login and registration system
- **Personal Watchlist**: Save and manage your favorite movies
- **Responsive Design**: Mobile-first, Netflix-inspired UI
- **Real-time Search**: Instant search with debounced input

### 🎨 UI/UX Features
- **Netflix-style Interface**: Familiar streaming platform design
- **Smooth Animations**: Framer Motion powered transitions
- **Dark Theme**: Easy on the eyes, modern aesthetic
- **Responsive Layout**: Works perfectly on all devices
- **Loading States**: Skeleton screens and smooth transitions

### 🔧 Technical Features
- **RESTful API**: Clean, documented backend endpoints
- **Entity Framework**: Modern ORM with PostgreSQL
- **CORS Support**: Secure cross-origin communication
- **Swagger Documentation**: Interactive API documentation
- **Azure Ready**: Configured for cloud deployment

## 🏗️ Architecture

```
toktiktok/
├── frontend/                 # React + TypeScript Frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React Context for state
│   │   └── styles/         # Global styles and Tailwind
│   └── public/             # Static assets
├── backend/                 # C# .NET 8 Backend
│   ├── Controllers/        # API endpoints
│   ├── Models/            # Entity models
│   ├── Data/              # Database context
│   └── appsettings.json   # Configuration
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites
- [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js 18+](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/) (or Azure PostgreSQL)
- [Git](https://git-scm.com/)

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/netflix-clone.git
cd netflix-clone
```

### 2. Backend Setup
```bash
cd backend/toktiktokBackend

# Restore dependencies
dotnet restore

# Build the project
dotnet build

# Run the API
dotnet run
```

**Backend will be available at:** `https://localhost:7126` or `http://localhost:5187`
**Swagger UI:** `https://localhost:7126/swagger`

### 3. Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

**Frontend will be available at:** `http://localhost:3000`

### 4. Database Configuration
Update `backend/toktiktokBackend/appsettings.json` with your database connection:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Host=your-server;Database=your-db;Username=your-user;Password=your-password;SSL Mode=Require;"
  }
}
```

## 🗄️ Database Schema

### Core Entities
- **Users**: Authentication and profile management
- **Movies**: Movie information and metadata
- **Watchlists**: User's saved movies
- **Genres**: Movie categorization
- **Ratings**: User movie ratings

### Sample Data
The application includes sample movie data for testing and demonstration purposes.

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout

### Movies
- `GET /api/movies` - Get all movies
- `GET /api/movies/{id}` - Get movie by ID
- `GET /api/movies/genre/{genre}` - Get movies by genre
- `GET /api/movies/search?q={query}` - Search movies

### Watchlist
- `GET /api/watchlist` - Get user's watchlist
- `POST /api/watchlist` - Add movie to watchlist
- `DELETE /api/watchlist/{id}` - Remove movie from watchlist

## 🎨 Frontend Components

### Core Components
- **Navbar**: Navigation and search functionality
- **MovieCard**: Individual movie display component
- **MovieRow**: Horizontal scrolling movie lists
- **Hero**: Featured movie banner
- **SearchBar**: Movie search with debouncing

### Pages
- **Home**: Featured content and genre-based rows
- **Movies**: Browse all movies with filters
- **MovieDetail**: Detailed movie information
- **Login/Register**: Authentication forms

## 🚀 Deployment

### Azure App Service
1. **Build and Publish Backend**
   ```bash
   dotnet publish -c Release -o ./publish
   ```

2. **Configure Environment Variables**
   - Set `ASPNETCORE_ENVIRONMENT` to `Production`
   - Configure database connection string
   - Update CORS origins

3. **Deploy Frontend**
   ```bash
   npm run build
   # Upload build folder to Azure Static Web Apps
   ```

### Environment Variables
```bash
ASPNETCORE_ENVIRONMENT=Production
ConnectionStrings__DefaultConnection=your-connection-string
```

## 🛠️ Development

### Backend Development
```bash
# Run with hot reload
dotnet watch run

# Run tests
dotnet test

# Add new migration
dotnet ef migrations add MigrationName

# Update database
dotnet ef database update
```

### Frontend Development
```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint
```

## 📱 Responsive Design

The application is built with a mobile-first approach and includes:
- Responsive grid layouts
- Touch-friendly interactions
- Optimized for all screen sizes
- Progressive Web App features

## 🔒 Security Features

- **CORS Configuration**: Secure cross-origin requests
- **Input Validation**: Server-side validation
- **SQL Injection Protection**: Entity Framework safeguards
- **HTTPS Enforcement**: Secure communication
- **Environment-based Configuration**: Secure secrets management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Netflix**: UI/UX inspiration
- **React Team**: Amazing frontend framework
- **Microsoft**: .NET and Azure ecosystem
- **PostgreSQL**: Robust database solution

## 📞 Support

If you have any questions or need help:
- Create an [Issue](../../issues) on GitHub
- Check the [Wiki](../../wiki) for detailed documentation
- Review the [API Documentation](https://localhost:7126/swagger) when running locally

---

**Made with ❤️ using modern web technologies**
