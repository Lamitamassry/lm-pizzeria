import dotenv from 'dotenv';
import app from './app.js';

// Load environment variables FIRST
dotenv.config();

// Validate critical environment variables on startup
const requiredVars = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_NAME', 'JWT_SECRET'];
const missing = requiredVars.filter(varName => !process.env[varName]);

if (missing.length > 0) {
    console.error('❌ STARTUP ERROR: Missing required environment variables:');
    console.error('   ' + missing.join(', '));
    console.error('\n📝 Please create backend/.env with these variables:');
    console.error('   See backend/.env.example for template\n');
    process.exit(1);
}

// Get port from environment or use default
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`);
});
