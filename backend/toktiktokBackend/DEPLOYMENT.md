# Azure Deployment Configuration

## Database Connection String

Your Azure PostgreSQL Flexible Server connection string has been configured in `appsettings.Azure.json`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Host=toktiktok-server.postgres.database.azure.com;Database=postgres;Port=5432;Username=mu.he1@ucalgary.ca;Password=your-password-here;SSL Mode=Require;Trust Server Certificate=true;"
  }
}
```

## Environment Variables for Azure App Service

Set these environment variables in your Azure App Service Configuration:

### Required Environment Variables:
- `ASPNETCORE_ENVIRONMENT`: `Production`
- `ConnectionStrings__DefaultConnection`: Your actual connection string

### Connection String Format:
```
Host=toktiktok-server.postgres.database.azure.com;Database=postgres;Port=5432;Username=mu.he1@ucalgary.ca;Password=YOUR_ACTUAL_PASSWORD;SSL Mode=Require;Trust Server Certificate=true;
```

## Azure App Service Configuration Steps:

1. **Go to Azure Portal** → Your App Service
2. **Settings** → **Configuration**
3. **Application settings** → **New application setting**
4. **Add these settings:**

| Name | Value |
|------|-------|
| `ASPNETCORE_ENVIRONMENT` | `Production` |
| `ConnectionStrings__DefaultConnection` | `Host=toktiktok-server.postgres.database.azure.com;Database=postgres;Port=5432;Username=mu.he1@ucalgary.ca;Password=YOUR_ACTUAL_PASSWORD;SSL Mode=Require;Trust Server Certificate=true;` |

## Security Notes:

- **Never commit passwords to source control**
- **Use Azure Key Vault for production passwords**
- **Enable managed identity for Azure AD authentication**
- **Use environment-specific configuration files**

## Testing Locally:

1. **Development**: Uses `appsettings.Development.json`
2. **Production**: Uses `appsettings.Azure.json` (when `ASPNETCORE_ENVIRONMENT=Production`)
3. **Azure**: Uses environment variables (overrides all config files)

## CORS Configuration:

The backend is configured to allow requests from:
- `http://localhost:3000` (local development)
- `https://your-app-name.azurewebsites.net` (Azure deployment)

Update the Azure URL in `Program.cs` to match your actual App Service URL.
