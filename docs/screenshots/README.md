# Screenshots Checklist for LM Pizzeria

This folder should contain the following screenshots for the final submission report:

## Frontend Screenshots (Required)

### Phase 1 - UI/UX

1. **home-page.png** - Homepage with hero section and featured items
2. **menu-page.png** - Full menu page showing all categories
3. **menu-item-detail.png** - Individual pizza detail page (dynamic route /menu/:id)
4. **cart-page.png** - Shopping cart with items
5. **about-page.png** - About us page
6. **contact-page.png** - Contact page with form
7. **mobile-responsive.png** - Mobile view screenshot (optional but recommended)

### Phase 2 - Authentication & Orders

8. **signup-page.png** - Signup form
2. **login-page.png** - Login form
3. **orders-page.png** - User orders history page
4. **order-confirmation.png** - Order confirmation page after checkout

## Backend/API Screenshots (Required)

### API Testing (Postman/Insomnia/Thunder Client)

12. **api-signup-success.png** - POST /api/auth/signup with 201 response
2. **api-login-success.png** - POST /api/auth/login with JWT token
3. **api-create-order.png** - POST /api/orders with authentication
4. **api-get-orders.png** - GET /api/orders with user's orders
5. **api-health-check.png** - GET /api/health showing server status

## Database Screenshots (Optional but Recommended)

17. **db-schema.png** - MySQL Workbench or phpMyAdmin showing tables
2. **db-users-table.png** - Users table with sample data (hide passwords)
3. **db-orders-table.png** - Orders table with sample data
4. **db-relationships.png** - ER diagram or table relationships

## Deployment Screenshots (Optional)

21. **netlify-deployment.png** - Netlify dashboard showing successful deployment
2. **railway-backend.png** - Railway dashboard (if deployed)

---

## How to Capture Screenshots

### For Frontend

1. Run `npm run dev` in project root
2. Open <http://localhost:5173>
3. Navigate to each page and take screenshots
4. Use browser DevTools for mobile responsive view

### For API Testing

1. Ensure backend is running: `cd backend && node index.js`
2. Use Postman, Insomnia, or VS Code Thunder Client
3. Make requests to each endpoint
4. Capture the request and response

### For Database

1. Use MySQL Workbench, phpMyAdmin, or DBeaver
2. Connect to your local MySQL database
3. Take screenshots of table structures and sample data

---

## File Naming Convention

- Use lowercase with hyphens
- Be descriptive: `menu-item-detail.png` not `screenshot1.png`
- Use PNG format for better quality
- Recommended size: 1920x1080 or actual browser window size

---

## Instructions

1. Take all required screenshots
2. Place them in this folder (`docs/screenshots/`)
3. Reference them in FINAL_REPORT.md using relative paths
4. Ensure sensitive data (passwords, real emails) is not visible

---

**Status:** ✅ SCREENSHOTS COMPLETE

- **Phase 1 (Frontend):** 6 screenshots in `phase1/` folder
- **Phase 2 (Backend/Database):** 9 screenshots in `phase2/` folder
- **Total:** 15 screenshots captured and organized
