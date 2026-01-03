# Deployment Guide for LM Pizzeria

Complete guide for deploying the frontend to Netlify and backend to Railway or Render.

---

## Overview

**Frontend:** Deploy to Netlify (recommended) or Vercel  
**Backend:** Deploy to Railway (recommended) or Render  
**Database:** MySQL on Railway or external service (PlanetScale/AWS RDS)

---

## Part 1: Backend Deployment (Railway)

### Step 1: Create Railway Account

1. Go to [railway.app](https://railway.app)
2. Click "Login" and sign in with GitHub
3. Authorize Railway to access your GitHub account

### Step 2: Create New Project

1. Click "New Project"
2. Select "Deploy from GitHub repo"
3. Choose your `lmpizzeria` repository
4. Railway will automatically detect it's a Node.js project

### Step 3: Add MySQL Database

1. In your project dashboard, click "New" → "Database" → "Add MySQL"
2. Railway will provision a MySQL database instance
3. Note down the connection details (or use Railway's environment variables)

### Step 4: Configure Backend Service

1. Click on your backend service
2. Go to "Settings" tab
3. Set **Root Directory**: `backend`
4. Set **Start Command**: `npm start`
5. Set **Build Command**: (leave empty, npm install runs automatically)

### Step 5: Add Environment Variables

1. Go to "Variables" tab
2. Add the following variables:

```env
PORT=5000
NODE_ENV=production

# Database (Railway provides these automatically as DATABASE_URL)
# But we need individual variables, so set them manually:
DB_HOST=<your-railway-mysql-host>
DB_PORT=3306
DB_USER=<your-railway-mysql-user>
DB_PASSWORD=<your-railway-mysql-password>
DB_NAME=railway

# Generate a secure JWT secret
JWT_SECRET=<generate-a-secure-32-character-random-string>

# Frontend URL (update after deploying frontend)
FRONTEND_URL=https://lmpizzeria.netlify.app
```

**To generate JWT_SECRET:**

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Step 6: Setup Database Schema

1. Click on the MySQL service in Railway
2. Go to "Data" tab or use "Connect" to get MySQL connection string
3. Use a MySQL client or Railway's console to connect
4. Run the schema:

```sql
-- Railway already created the 'railway' database
USE railway;

-- Copy and paste the entire contents of backend/db/schema.sql
```

**Or use MySQL command line:**

```bash
mysql -h <host> -P <port> -u <user> -p<password> railway < backend/db/schema.sql
```

### Step 7: Deploy

1. Railway will automatically deploy when you push to GitHub
2. Or click "Deploy" manually
3. Wait for deployment to complete (2-3 minutes)
4. Note your backend URL: `https://your-app.up.railway.app`

### Step 8: Test Backend

Visit: `https://your-app.up.railway.app/api/health`

You should see:

```json
{
  "status": "ok",
  "timestamp": "2025-01-03T...",
  "environment": "production"
}
```

---

## Part 2: Backend Deployment (Alternative: Render)

### Step 1: Create Render Account

1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Authorize Render

### Step 2: Create Web Service

1. Click "New +" → "Web Service"
2. Connect your GitHub repository
3. Configure:
   - **Name**: `lmpizzeria-backend`
   - **Region**: Choose closest to your users
   - **Branch**: `main`
   - **Root Directory**: `backend`
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

### Step 3: Add Environment Variables

In "Environment" section:

```env
PORT=5000
NODE_ENV=production
DB_HOST=<your-db-host>
DB_PORT=3306
DB_USER=<your-db-user>
DB_PASSWORD=<your-db-password>
DB_NAME=<your-db-name>
JWT_SECRET=<your-secure-secret>
FRONTEND_URL=https://lmpizzeria.netlify.app
```

### Step 4: Create MySQL Database

**Option A: Use PlanetScale (Free MySQL)**

1. Sign up at [planetscale.com](https://planetscale.com)
2. Create a new database
3. Get connection details and update Render environment variables

**Option B: Use Render PostgreSQL**

- Render doesn't offer MySQL, so consider Railway or PlanetScale

### Step 5: Deploy

1. Click "Create Web Service"
2. Render will build and deploy (5-10 minutes first time)
3. Your backend URL: `https://lmpizzeria-backend.onrender.com`

---

## Part 3: Frontend Deployment (Netlify)

### Step 1: Build Frontend

First, update the API URL for production:

**Edit `.env` (or set in Netlify):**

```env
VITE_API_URL=https://your-backend-url.up.railway.app
```

**Build locally (optional):**

```bash
npm run build
# Creates dist/ folder
```

### Step 2: Deploy to Netlify

#### Method A: Continuous Deployment (Recommended)

1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select your repository
5. Configure:
   - **Branch to deploy**: `main`
   - **Base directory**: (leave empty)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Show advanced" → "Add environment variable"
   - Key: `VITE_API_URL`
   - Value: `https://your-backend.up.railway.app`
7. Click "Deploy site"

#### Method B: Manual Deployment

1. Build locally: `npm run build`
2. Drag and drop the `dist/` folder to Netlify dashboard
3. Set environment variables in Site Settings

### Step 3: Configure Custom Domain (Optional)

1. In Netlify, go to "Domain settings"
2. Click "Add custom domain"
3. Follow instructions to update DNS

### Step 4: Update Backend CORS

After deploying frontend, update backend environment variable:

**In Railway/Render:**

```env
FRONTEND_URL=https://lmpizzeria.netlify.app
```

Or if you have a custom domain:

```env
FRONTEND_URL=https://lmpizzeria.com
```

---

## Part 4: Testing Deployed Application

### 1. Test Backend API

```bash
# Health check
curl https://your-backend.up.railway.app/api/health

# Test signup
curl -X POST https://your-backend.up.railway.app/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123"}'

# Test login
curl -X POST https://your-backend.up.railway.app/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

### 2. Test Frontend

1. Visit your Netlify URL: `https://lmpizzeria.netlify.app`
2. Click "Sign Up" and create an account
3. Browse menu and add items to cart
4. Complete checkout
5. View orders in "My Orders"

### 3. Check Browser Console

- Open Developer Tools (F12)
- Check Console for any errors
- Check Network tab to verify API calls to backend

---

## Part 5: Troubleshooting

### Backend Issues

**"Cannot connect to database"**

- Verify DB_HOST, DB_USER, DB_PASSWORD, DB_NAME in environment variables
- Check database is running
- Verify firewall allows connections from Railway/Render

**"JWT secret not found"**

- Ensure JWT_SECRET is set in environment variables
- Restart the service after adding variables

**"CORS error"**

- Verify FRONTEND_URL matches your Netlify URL exactly
- Include `https://` protocol
- Restart backend after changing CORS settings

### Frontend Issues

**"Network Error" when calling API**

- Check VITE_API_URL is set correctly
- Verify backend is running: visit `/api/health`
- Check browser console for CORS errors

**"Cannot read token"**

- Clear browser localStorage
- Try signing up again
- Check JWT_SECRET is consistent

**Build fails on Netlify**

- Check build command is `npm run build`
- Verify package.json has correct scripts
- Check for any missing dependencies

---

## Part 6: Environment Variables Checklist

### Backend (Railway/Render)

```
✅ PORT=5000
✅ NODE_ENV=production
✅ DB_HOST=<mysql-host>
✅ DB_PORT=3306
✅ DB_USER=<db-username>
✅ DB_PASSWORD=<db-password>
✅ DB_NAME=<database-name>
✅ JWT_SECRET=<32-char-random-string>
✅ FRONTEND_URL=https://lmpizzeria.netlify.app
```

### Frontend (Netlify)

```
✅ VITE_API_URL=https://your-backend.up.railway.app
```

---

## Part 7: Continuous Deployment Setup

### Automatic Deployment on Git Push

1. **Backend (Railway):**
   - Automatically deploys when you push to `main` branch
   - Check "Deployments" tab to see status

2. **Frontend (Netlify):**
   - Automatically rebuilds when you push to `main` branch
   - Check "Deploys" tab to see status

### Deployment Workflow

```bash
# Make changes locally
git add .
git commit -m "Update: description of changes"
git push origin main

# Railway and Netlify automatically deploy
# Wait 2-5 minutes for deployment to complete
# Test the live site
```

---

## Part 8: Monitoring and Logs

### Railway

- View logs: Click on service → "Logs" tab
- Real-time logs show all console.log output
- Check for errors after deployment

### Netlify

- View build logs: "Deploys" tab → Click on deployment
- View function logs (if using serverless functions)

### Recommended Monitoring

- Use [UptimeRobot](https://uptimerobot.com) for uptime monitoring
- Set up alerts for when site goes down
- Monitor: `https://lmpizzeria.netlify.app` and backend `/api/health`

---

## Part 9: Performance Optimization

### Frontend

1. **Enable Netlify CDN** (automatic)
2. **Compress images** in `Public/images/`
3. **Enable caching** (automatic with Vite build)

### Backend

1. **Database indexing** (already in schema.sql)
2. **Connection pooling** (already configured in connection.js)
3. **Enable Railway auto-scaling** if needed

---

## Part 10: Security Checklist

✅ **Environment variables never committed to Git**  
✅ **HTTPS enabled** (automatic on Netlify/Railway)  
✅ **CORS configured** to only allow your frontend  
✅ **JWT secret is random and secure** (32+ characters)  
✅ **Passwords hashed** with bcrypt (10 rounds)  
✅ **SQL injection prevented** with parameterized queries  
✅ **Error messages don't expose sensitive info** in production  
✅ **Database user has minimum necessary permissions**

---

## Part 11: Cost Estimate

### Free Tier Limits

**Railway (Free Plan):**

- $5 credit per month
- Enough for small projects
- Upgrade to Hobby plan ($5/month) for more resources

**Netlify (Free Plan):**

- 100GB bandwidth/month
- Unlimited sites
- Continuous deployment

**PlanetScale (Free Plan):**

- 5GB storage
- 1 billion row reads/month

**Total Cost: $0 - $10/month**

---

## Part 12: Backup Strategy

### Database Backup (Railway)

1. Go to MySQL service → "Data" tab
2. Click "Backups"
3. Enable automatic daily backups
4. Download manual backup:

```bash
mysqldump -h <host> -u <user> -p<password> railway > backup.sql
```

### Manual Backup Schedule

- **Daily**: Automatic Railway backups
- **Weekly**: Download manual SQL dump
- **Before major changes**: Create backup

### Restore from Backup

```bash
mysql -h <host> -u <user> -p<password> railway < backup.sql
```

---

## Summary Checklist

### Pre-Deployment

- [x] Backend code tested locally
- [x] Frontend code tested locally
- [x] Database schema finalized
- [x] Environment variables documented
- [x] .env files in .gitignore

### Backend Deployment

- [ ] Railway/Render account created
- [ ] MySQL database provisioned
- [ ] Environment variables set
- [ ] Database schema executed
- [ ] Backend health check passing

### Frontend Deployment

- [ ] Netlify account created
- [ ] Build successful locally
- [ ] VITE_API_URL set to production backend
- [ ] Site deployed and accessible
- [ ] CORS configured on backend

### Post-Deployment

- [ ] Test signup and login
- [ ] Test creating orders
- [ ] Test viewing order history
- [ ] Test updating/deleting orders
- [ ] Verify responsive design on mobile
- [ ] Check browser console for errors
- [ ] Update README with live URLs

---

## Support Resources

- **Railway Docs**: <https://docs.railway.app>
- **Netlify Docs**: <https://docs.netlify.com>
- **MySQL Docs**: <https://dev.mysql.com/doc/>
- **Vite Docs**: <https://vitejs.dev/guide/>

---

**Deployment complete! Your full-stack app is now live! 🚀**
