import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

// Validate required environment variables
const requiredEnvVars = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_NAME'];
const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingEnvVars.length > 0) {
    console.error('Missing required environment variables:', missingEnvVars.join(', '));
    console.error('Please check your .env file and ensure all database configuration is set.');
    process.exit(1);
}

// MySQL Database Connection Pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
});

// Test database connection on startup
const testConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Database connected successfully');
        console.log(`Connected to: ${process.env.DB_NAME} at ${process.env.DB_HOST}`);
        connection.release();
    } catch (error) {
        console.error('Database connection error:', error.message);
        console.error('Please verify your database credentials in .env file');
        process.exit(1);
    }
};

// Test connection on module load
testConnection();

export default pool;
