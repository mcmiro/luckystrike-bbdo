import mysql from 'mysql2/promise';
import type { NextApiRequest, NextApiResponse } from 'next';

// Create a MySQL connection pool
// @ts-ignore
const pool = mysql.createPool({
  host: process.env.NEXT_DB_HOST,
  user: process.env.NEXT_DB_USER,
  password: process.env.NEXT_DB_PASSWORD,
  database: process.env.NEXT_DB_DATABASE,
  port: process.env.NEXT_DB_PORT,
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
      const { name, email, dateOfBirth, createdAt } = req.body;

      // Get a connection from the pool
      const connection = await pool.getConnection();

      // Insert a new record into the 'users' table
      const [result] = await connection.execute(
        'INSERT INTO users (full_name, email, date_of_birth, created_at) VALUES (?, ?, ?, ?)',
        [name, email, dateOfBirth, createdAt]
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
