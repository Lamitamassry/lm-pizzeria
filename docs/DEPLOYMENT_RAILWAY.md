# Backend Deployment Guide – Railway

This guide provides step-by-step instructions for deploying the LM Pizzeria backend to Railway.

---

## Prerequisites

- Railway account (free tier available at [railway.app](https://railway.app))
- GitHub repository with backend code
- MySQL database credentials

---

## Required Environment Variables

The following environment variables must be configured in Railway:

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port (Railway auto-assigns) | `5000` |
| `NODE_ENV` | Environment mode | `production` |
| `DB_HOST` | MySQL database host | `containers-us-west-xxx.railway.app` |
| `DB_USER` | MySQL database username | `root` |
| `DB_PASSWORD` | MySQL database password | `your_secure_password` |
| `DB_NAME` | MySQL database name | `lm_pizzeria` |
| `JWT_SECRET` | Secret key for JWT tokens | `your_random_secret_key_here` |
| `FRONTEND_URL` | Frontend application URL | `https://lmpizzeria.netlify.app` |

---

## Deployment Steps

### 1. Create Railway Project

1. Log in to [Railway](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Authorize Railway to access your GitHub account
5. Select your repository

### 2. Add MySQL Database

1. In your Railway project, click "+ New"
2. Select "Database" → "MySQL"
3. Railway will provision a MySQL instance
4. Copy the connection details from the "Connect" tab

### 3. Configure Environment Variables

1. Select your backend service in Railway
2. Go to "Variables" tab
3. Add each environment variable listed above
4. Use the MySQL connection details from step 2 for database variables

### 4. Set Root Directory (if needed)

If your backend is in a subdirectory:

1. Go to "Settings" tab
2. Under "Build & Deploy", set Root Directory to `backend`
3. Save changes

### 5. Deploy Database Schema

After the backend deploys successfully:

1. Connect to Railway MySQL using a client (MySQL Workbench, TablePlus, etc.)
2. Run the schema from `backend/db/schema.sql`
3. Verify tables are created: `users`, `orders`, `order_items`

### 6. Verify Deployment

1. Railway will automatically build and deploy your application
2. Check the deployment logs for any errors
3. Once deployed, Railway provides a public URL
4. Test endpoints:
   - `GET https://your-app.railway.app/` - Should return API info
   - `GET https://your-app.railway.app/api/health` - Should return status

---

## Post-Deployment

### Update Frontend Environment

Update your frontend environment variables with the Railway backend URL:

```env
VITE_API_BASE_URL=https://your-app.railway.app
```

Redeploy your frontend for changes to take effect.

### Monitor Application

- View logs in Railway dashboard under "Deployments" → "View Logs"
- Monitor resource usage in the "Metrics" tab
- Set up alerts for downtime or errors

---

## Troubleshooting

### Database Connection Failed

- Verify `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` are correct
- Ensure MySQL service is running in Railway
- Check that database schema has been applied

### CORS Errors

- Verify `FRONTEND_URL` environment variable matches your frontend domain
- Check that CORS is properly configured in `backend/app.js`

### JWT Authentication Issues

- Ensure `JWT_SECRET` is set and is a strong random string
- Verify JWT token expiration settings in `backend/controllers/authController.js`

### Build Failures

- Check package.json has all required dependencies
- Verify Node.js version compatibility (Node 16+)
- Review build logs for specific error messages

---

## Cost Considerations

- Railway free tier includes $5/month credit
- MySQL database and backend service usage counts against this credit
- Monitor usage in Railway dashboard
- Consider upgrading to paid plan for production applications

---

## Security Best Practices

1. Never commit `.env` files to Git
2. Use strong, randomly generated `JWT_SECRET`
3. Regularly rotate database passwords
4. Enable SSL/TLS for database connections in production
5. Implement rate limiting for API endpoints
6. Monitor logs for suspicious activity

---

## Additional Resources

- [Railway Documentation](https://docs.railway.app)
- [Railway Discord Community](https://discord.gg/railway)
- Project repository: <https://github.com/Lamitamassry/lm-pizzeria>
