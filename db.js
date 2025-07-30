const mysql = require('mysql2/promise');
const dotenv = require('dotenv').config();
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10, // Maksimum açık bağlantı sayısı
  queueLimit: 0        // Kuyruktaki maksimum bekleme sayısı (0 = limitsiz)
});


module.exports = pool;