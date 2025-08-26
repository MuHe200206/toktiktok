# Netflix-like Backend (.NET)

This is the backend API for a Netflix-like streaming application built with ASP.NET Core and Entity Framework Core.

## Features

- **Movies Management**: CRUD operations for movies with metadata
- **User Management**: User profiles and authentication
- **Watchlist**: Track user's saved movies and watch history
- **PostgreSQL Database**: Azure PostgreSQL Flexible Server integration
- **RESTful API**: Clean API endpoints for frontend consumption

## Prerequisites

- .NET 8.0 SDK
- PostgreSQL database (Azure PostgreSQL Flexible Server recommended)
- Visual Studio 2022 or VS Code

## Setup Instructions

### 1. Database Configuration

1. Create a PostgreSQL database on Azure (or use local PostgreSQL)
2. Update the connection string in `appsettings.json`:
   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Host=your-server.postgres.database.azure.com;Database=netflixdb;Username=your-username;Password=your-password;SSL Mode=Require;"
   }
   ```

### 2. Install Dependencies

```bash
dotnet restore
```

### 3. Database Migrations

```bash
# Create initial migration
dotnet ef migrations add InitialCreate

# Apply migrations to database
dotnet ef database update
```

### 4. Run the Application

```bash
dotnet run
```

The API will be available at `https://localhost:7000` (or the configured port).

## API Endpoints

### Movies
- `GET /api/Movies` - Get all movies
- `GET /api/Movies/{id}` - Get movie by ID
- `GET /api/Movies/genre/{genre}` - Get movies by genre
- `POST /api/Movies` - Create new movie
- `PUT /api/Movies/{id}` - Update movie
- `DELETE /api/Movies/{id}` - Delete movie

## Project Structure

```
toktiktokBackend/
├── Controllers/          # API controllers
├── Data/                 # Database context and configurations
├── Models/               # Entity models
├── Properties/           # Project properties
├── Program.cs            # Application entry point
├── appsettings.json      # Configuration file
└── toktiktokBackend.csproj
```

## Deployment to Azure

1. Create an Azure App Service
2. Configure the connection string in Azure App Service Configuration
3. Deploy using Azure DevOps, GitHub Actions, or direct deployment
4. Ensure the App Service can connect to your PostgreSQL database

## Development

- The application includes sample movie data for testing
- CORS is configured to allow requests from `http://localhost:3000` (React frontend)
- Entity Framework migrations handle database schema changes

## Next Steps

- Implement user authentication with JWT tokens
- Add movie search and filtering capabilities
- Implement user watchlist management
- Add movie rating and review system
- Implement recommendation algorithms
