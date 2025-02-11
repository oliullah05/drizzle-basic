import 'dotenv/config';
import { drizzle } from 'drizzle-orm/mysql2';
import { Database, usersTable } from './db/schema';
import * as schema from './db/schema';
import mysql from "mysql2/promise";

// Create MySQL connection
async function createConnection() {
  return mysql.createConnection({
    uri: process.env.DATABASE_URL!,
  });
}

// Initialize Drizzle inside an async function
async function initializeDb() {
  const connection = await createConnection();
  return drizzle(connection, { schema, mode: 'default' });
}

// Main function to interact with DB
async function main() {
  try {
    const db = await initializeDb(); 
    console.log("Database connected");

    // Example query
    const users = await db.query.usersTable.findMany();
    console.log({ users });

  } catch (err) {
    console.error("Database operation failed:", err);
  }
}

main();
