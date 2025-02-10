import 'dotenv/config';
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { postTable, userPreferencesTable, usersTable } from './db/schema';
import { eq } from 'drizzle-orm';

async function main() {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is not defined in environment variables.");
    }
 
    const connection = await mysql.createConnection(process.env.DATABASE_URL);
    const db = drizzle(connection, { logger: true, });
// await db.delete(usersTable)
    // Insert User
    // const insertResult = await db.insert(usersTable)
    // .values({
    //   name: "Oliullah 5",  
    //   age: 50,
    //   email: "mdolsihasan@gmsl1.com" 
    // }).$returningId().onDuplicateKeyUpdate({ 
    //   set:{email:"oliullah email",name:"oliullah email",age:255},
    // });


  // const craetePost =   await db.insert(postTable).values({
  //       authorId:500,
  //       title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        
         
  //   })
    // Fetch Users
  const users = await db.select({id:usersTable.id}).from(usersTable).where(eq(usersTable.id,8))

    console.log({ users }); 
 
    // Close connection
    await connection.end();
  } catch (error) {
    console.error("Database operation failed:", error);
  }
}

main();
