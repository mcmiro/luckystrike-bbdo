import mysql from 'mysql2/promise';
import type { NextApiRequest, NextApiResponse } from 'next';

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { name, email } = req.body;

      // Get a connection from the pool
      const connection = await pool.getConnection();

      // Insert a new record into the 'records' table
      const [result] = await connection.execute(
        'INSERT INTO users (name, email) VALUES (?, ?)',
        [name, email]
      );

      // Release the connection back to the pool
      connection.release();

      res.status(200).json({
        success: true,
        message: 'Record saved successfully',
        insertedId: result,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
