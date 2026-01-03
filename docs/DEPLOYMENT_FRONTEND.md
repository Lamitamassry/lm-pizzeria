# Frontend Deployment Guide – Netlify/Vercel

This guide provides step-by-step instructions for deploying the LM Pizzeria frontend to Netlify or Vercel.

---

## Prerequisites

- Netlify or Vercel account (free tier available)
- GitHub repository with frontend code
- Backend API deployed and accessible

---

## Required Environment Variables

The following environment variable must be configured:

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API URL | `https://your-backend.railway.app` |

---

## Option 1: Deploy to Netlify

### Step 1: Connect Repository

1. Log in to [Netlify](https://www.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Select "GitHub" and authorize Netlify
4. Choose your repository

### Step 2: Configure Build Settings

Set the following build configuration:

- **Base directory:** Leave empty (or `./` if repo root)
- **Build command:** `npm run build`
- **Publish directory:** `dist`

### Step 3: Add Environment Variables

1. Go to "Site settings" → "Build & deploy" → "Environment"
2. Click "Add environment variable"
3. Add `VITE_API_BASE_URL` with your Railway backend URL
4. Example: `https://lmpizzeria-backend.railway.app`

### Step 4: Deploy

1. Click "Deploy site"
2. Netlify will build and deploy your application
3. Once complete, you'll receive a URL like `https://random-name.netlify.app`

### Step 5: Custom Domain (Optional)

1. Go to "Domain settings"
2. Click "Add custom domain"
3. Follow instructions to configure DNS

---

## Option 2: Deploy to Vercel

### Step 1: Connect Repository

1. Log in to [Vercel](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your repository from GitHub

### Step 2: Configure Project

Vercel auto-detects Vite projects. Verify:

- **Framework Preset:** Vite
- **Root Directory:** `./` (or leave default)
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

### Step 3: Add Environment Variables

1. In project settings, go to "Environment Variables"
2. Add `VITE_API_BASE_URL` with your backend URL
3. Set for "Production", "Preview", and "Development" environments

### Step 4: Deploy

1. Click "Deploy"
2. Vercel will build and deploy automatically
3. Your site will be available at `https://your-project.vercel.app`

---

## Post-Deployment Configuration

### Update Backend CORS

Ensure your backend allows requests from your frontend domain:

**In Railway environment variables:**
```
FRONTEND_URL=https://lmpizzeria.netlify.app
```

Or for Vercel:
```
FRONTEND_URL=https://lmpizzeria.vercel.app
```

Redeploy backend after updating environment variables.

### Test Deployment

1. Visit your deployed frontend URL
2. Test key functionality:
   - Browse menu
   - Sign up for an account
   - Log in
   - Add items to cart
   - Place an order
   - View order history

---

## Troubleshooting

### API Connection Failed

**Symptom:** Frontend cannot connect to backend

**Solutions:**
- Verify `VITE_API_BASE_URL` is set correctly
- Check backend is deployed and accessible
- Ensure CORS is configured properly on backend
- Check browser console for specific error messages

### Build Failures

**Symptom:** Deployment fails during build

**Solutions:**
- Check build logs for specific errors
- Verify all dependencies in package.json
- Ensure Node.js version compatibility (Node 16+)
- Test build locally: `npm run build`

### Environment Variables Not Working

**Symptom:** App uses default values instead of environment variables

**Solutions:**
- Vite requires `VITE_` prefix for exposed variables
- Redeploy after adding/changing environment variables
- Check that variables are set for correct environment (Production/Preview)

### Blank Pages After Deployment

**Symptom:** Pages show blank or routing doesn't work

**Solutions:**
- Add `_redirects` file to public folder with: `/* /index.html 200`
- Or configure redirects in Netlify/Vercel settings
- Ensure build output is in `dist` folder

---

## Continuous Deployment

Both Netlify and Vercel support automatic deployments:

1. Every push to `main` branch triggers a production deployment
2. Pull requests create preview deployments
3. Configure branch deployments in platform settings

---

## Performance Optimization

### Enable Compression

Both platforms automatically enable Gzip/Brotli compression.

### Configure Caching

Static assets are automatically cached with optimal headers.

### Lighthouse Scores

Run Lighthouse audits to optimize:
- Performance
- Accessibility
- Best Practices
- SEO

---

## Environment-Specific Configuration

### Development
```env
VITE_API_BASE_URL=http://localhost:5000
```

### Production
```env
VITE_API_BASE_URL=https://your-backend.railway.app
```

---

## Security Considerations

1. Never expose sensitive credentials in frontend code
2. Use environment variables for all configuration
3. Enable HTTPS (automatic on Netlify/Vercel)
4. Configure Content Security Policy headers
5. Implement rate limiting on backend API

---

## Monitoring & Analytics

### Netlify Analytics
- Enable in site settings (paid feature)
- Track page views, unique visitors, bandwidth

### Vercel Analytics
- Enable in project settings
- Real user monitoring and performance metrics

### Custom Analytics
- Integrate Google Analytics
- Add Plausible or similar privacy-focused analytics

---

## Additional Resources

- [Netlify Documentation](https://docs.netlify.com)
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Production Build Guide](https://vitejs.dev/guide/build.html)
- Project repository: <https://github.com/Lamitamassry/lm-pizzeria>
