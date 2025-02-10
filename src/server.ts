import 'dotenv/config';
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { postTable, userPreferencesTable, usersTable } from './db/schema';

async function main() {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is not defined in environment variables.");
    }
 
    const connection = await mysql.createConnection(process.env.DATABASE_URL);
    const db = drizzle(connection, { logger: true });

    // Insert User
    // await db.insert(usersTable).values({
    //   name: "Oliullah",
    //   age: 50,
    //   email: "mdolihasan@gmail.com"
    // });  

  const craetePost =   await db.insert(postTable).values({
        authorId:500,
        title:"post title",
        
         
    })
    // Fetch Users
    const users = await db.select().from(userPreferencesTable);
    console.log({ users,craetePost });

    // Close connection
    await connection.end();
  } catch (error) {
    console.error("Database operation failed:", error);
  }
}

main();
