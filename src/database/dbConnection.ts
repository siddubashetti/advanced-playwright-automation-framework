import mysql from 'mysql2/promise';

export const connection = mysql.createPool({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'testdb',
    waitForConnections: true,
    connectionLimit: 10
}); 