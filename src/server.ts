import 'dotenv/config';
import { drizzle } from 'drizzle-orm/mysql2';
import { usersTable } from './db/schema';



const db = drizzle(process.env.DATABASE_URL!, { logger: true });
async function main() {
try{
    const userCreate = await db.insert(usersTable).values({
        name: "Oliullah",
        age: 50,
        email: "mdolihasan@gmail.com"
    })


    const userFind = await db.select().from(usersTable);
}

catch(err:any){
    console.log({err:err?.message});
} 


    // console.log({userCreate,userFind});
}
main();