# Railway Deployment Guide & Environment Variables

To deploy this project to Railway, follow these steps:

## 1. Create a New Project on Railway
- Connect your GitHub repository.
- Railway will detect the `railway.json` and start building the services.

## 2. Configure Services
In the Railway Dashboard, create 4 services from your repo:
1. **backend**: Root directory `/backend`
2. **site-a**: Root directory `/site-a-tech`
3. **site-b**: Root directory `/site-b-modern`
4. **site-c**: Root directory `/site-c-arcane`

## 3. Environment Variables

### [backend] Service
| Variable | Value |
| :--- | :--- |
| `NODE_ENV` | `production` |
| `DATABASE_FILENAME` | `/data/data.db` |
| `APP_KEYS` | *(Generate 4 random strings)* |
| `API_TOKEN_SALT` | *(Generate random string)* |
| `ADMIN_JWT_SECRET` | *(Generate random string)* |
| `TRANSFER_TOKEN_SALT` | *(Generate random string)* |

**IMPORTANT**: In the **backend** service, go to **Settings -> Volumes** and click **Mount Volume**. Set the mount path to `/data`. This ensures your tarot articles are never lost.

### [site-a/b/c] Services
| Variable | Value |
| :--- | :--- |
| `NEXT_PUBLIC_STRAPI_URL` | `https://your-backend-service.up.railway.app` |
| `REVALIDATION_SECRET` | `your_secret_token` |

## 4. Custom Domains
You can bind your own domains (e.g., `www.yourtarotsite.com`) in each service's **Settings -> Domains** tab.
