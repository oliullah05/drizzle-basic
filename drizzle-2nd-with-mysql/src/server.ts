import 'dotenv/config';
import { drizzle } from 'drizzle-orm/mysql2';
import { eq } from 'drizzle-orm';
import { usersTable } from './db/schema';
  
const db = drizzle(process.env.DATABASE_URL!);
async function main() {

    const filter = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.age, 31));

// find user
const insertUser = await db
  .select()
  .from(usersTable)
  .where(eq(usersTable.age, 31))
}
main();