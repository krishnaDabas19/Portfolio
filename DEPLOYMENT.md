# Deployment Guide for Krishna Dabas Portfolio

This guide covers various deployment options for your React portfolio website.

## 📋 Pre-Deployment Checklist

Before deploying, ensure:
- [ ] All personal information is updated in components
- [ ] Links to GitHub, LinkedIn, and email are correct
- [ ] Projects section is populated with real projects
- [ ] Contact form validation is working
- [ ] No console errors in development
- [ ] Website is tested on mobile devices
- [ ] All animations work smoothly
- [ ] Images and assets are optimized (if any)

---

## 🚀 Deployment Options

### 1. **Vercel (Recommended)**

Vercel is the creator of Next.js and has excellent support for React + Vite projects.

#### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite configuration
   - Click "Deploy"

3. **Configure Custom Domain** (optional)
   - In Vercel dashboard → Settings → Domains
   - Add your custom domain
   - Follow DNS configuration steps

#### Benefits:
- Automatic deployments on git push
- Zero-configuration deployment
- Free SSL certificate
- Excellent performance
- CDN distribution worldwide

#### Expected Result:
Your site will be live at `https://portfolio-[name].vercel.app`

---

### 2. **Netlify**

Netlify offers excellent free tier with form submission capabilities.

#### Steps:

1. **Build the project locally**
   ```bash
   npm run build
   ```

2. **Deploy using Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy
   ```

3. **Or Drag & Drop Deploy**
   - Visit [netlify.com](https://netlify.com)
   - Drag and drop the `dist/` folder
   - Your site is instantly deployed

4. **GitHub Integration** (continuous deployment)
   - Connect GitHub account
   - Select your repository
   - Netlify auto-builds on push

#### Benefits:
- Built-in form handling
- One-click rollbacks
- Generously free tier
- Excellent support
- Form submissions work automatically

#### Expected Result:
Your site will be live at `https://[your-site-name].netlify.app`

---

### 3. **GitHub Pages**

Free hosting directly from GitHub.

#### Steps:

1. **Update vite.config.js**
   ```javascript
   export default {
     base: '/portfolio/',  // Replace 'portfolio' with your repo name
     // ... rest of config
   }
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Update package.json**
   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "preview": "vite preview",
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Select "Deploy from a branch"
   - Branch: gh-pages
   - Folder: / (root)
   - Save

#### Benefits:
- Completely free
- No third-party service needed
- Integrated with GitHub

#### Expected Result:
Your site will be live at `https://YOUR_USERNAME.github.io/portfolio`

---

### 4. **Custom VPS (AWS, DigitalOcean, Linode)**

For maximum control and potentially lower long-term costs.

#### Steps:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload dist folder to server**
   Using SCP, FTP, or Git:
   ```bash
   scp -r dist/ user@your-server.com:/var/www/portfolio
   ```

3. **Configure Web Server** (Nginx example)
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /var/www/portfolio;
       
       location / {
           try_files $uri /index.html;
       }
   }
   ```

4. **Set up SSL** (Let's Encrypt)
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

#### Benefits:
- Full control over server
- Better for large projects
- Potential cost savings at scale
- Can host multiple sites

#### Expected Result:
Your site will be live at `https://yourdomain.com`

---

## 🔒 Environment Variables

For production-safe configurations:

1. **Create .env file** (never commit to git)
   ```env
   VITE_API_URL=https://api.yourdomain.com
   VITE_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```

2. **Reference in code**
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

3. **For contact form**, consider:
   - [Formspree](https://formspree.io) - Free form backend
   - [EmailJS](https://www.emailjs.com) - Free email service
   - Your own backend API

---

## 📊 Build Optimization

Before deploying, optimize the build:

1. **Check bundle size**
   ```bash
   npm run build
   # Check output in dist/ folder
   ```

2. **Enable compression** (servers should do this automatically)

3. **Optimize images** (if any)
   ```bash
   # Use tools like ImageOptim or TinyPNG
   ```

4. **Minify and compress**
   - Vite handles this automatically
   - Output is in `dist/` folder

---

## 🔄 Continuous Integration/Deployment

### GitHub Actions (Free CI/CD)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## 🌍 Custom Domain Setup

### For Vercel:
1. In Vercel dashboard → Settings → Domains
2. Add domain name
3. Update DNS records:
   ```
   A Record: 76.76.19.132
   CNAME Record: cname.vercel-dns.com
   ```

### For Netlify:
1. In Netlify dashboard → Settings → Domain management
2. Add custom domain
3. Update nameservers or DNS records

### For GitHub Pages:
1. In GitHub repo → Settings → Pages
2. Add custom domain
3. Update CNAME record pointing to your GitHub Pages URL

---

## 📈 Post-Deployment Checklist

After deployment, verify:
- [ ] Website loads without errors
- [ ] All links work correctly
- [ ] Navigation is functional
- [ ] Forms submit successfully
- [ ] Images load properly
- [ ] Mobile responsiveness works
- [ ] Performance is acceptable (test with Lighthouse)
- [ ] SEO meta tags are present
- [ ] Analytics are tracking (if configured)

### Lighthouse Performance Test:
```bash
npm install -g lighthouse
lighthouse https://yourdomain.com --view
```

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deployment URL Issues
- Ensure `base` in `vite.config.js` matches your deployment path
- For root domain, use `base: '/'`
- For subdomain (github-pages), use `base: '/portfolio/'`

### Contact Form Not Working
- Verify endpoint URL in component
- Check for CORS issues
- Test form submission in browser console
- Use services like Formspree or EmailJS

### Performance Issues
- Enable compression on server
- Use CDN for static assets
- Optimize images
- Enable caching headers

---

## 📞 Deployment Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **GitHub Pages Guide**: https://pages.github.com
- **Vite Documentation**: https://vitejs.dev
- **React Documentation**: https://react.dev

---

## 💡 Pro Tips

1. **Use environment variables** for different environments (dev, staging, production)
2. **Set up automatic backups** if using custom hosting
3. **Monitor analytics** to understand visitor behavior
4. **Keep dependencies updated** for security and performance
5. **Test on real devices** before marking as complete
6. **Set up error tracking** with services like Sentry
7. **Use CDN** for faster global delivery

---

## 🎯 Recommended Workflow

1. **Development**: `npm run dev` locally
2. **Testing**: Test all features and responsiveness
3. **Building**: `npm run build` to generate optimized files
4. **Preview**: `npm run preview` to test production build locally
5. **Deployment**: Push to Git → Automatic deployment via CI/CD
6. **Monitoring**: Check analytics and error tracking

---

**Version**: 1.0.0
**Last Updated**: 2026-09-01
**Maintainer**: Krishna Dabas
