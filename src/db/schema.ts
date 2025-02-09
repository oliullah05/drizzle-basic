import { int, mysqlEnum, mysqlTable, serial, unique, uniqueIndex, varchar,   } from 'drizzle-orm/mysql-core';
import { drizzle } from 'drizzle-orm/mysql2';


export const RoleEnum = mysqlEnum("userRole",["admin","user"]).notNull().default("user")

export const usersTable = mysqlTable('users', {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  age: int().notNull(),
  email: varchar({ length: 255 }).notNull(),
  role:RoleEnum

},table=>{
  return {
    emailIndex: uniqueIndex("emailIndex").on(table.email),
    uniqueNameAndAge:unique("uniqaueNameAndAge").on(table.name,table.age)
  }
});

export const db = drizzle(process.env.DATABASE_URL!, { logger: true });