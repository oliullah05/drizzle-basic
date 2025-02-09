import { int, mysqlTable, serial, varchar,   } from 'drizzle-orm/mysql-core';

export const usersTable = mysqlTable('users', {
//   id: serial().primaryKey(),
//   name: varchar({ length: 255 }).notNull(),
//   age: int().notNull(),
//   email: varchar({ length: 255 }).notNull().unique(),
id:serial().primaryKey().notNull(),
name:varchar("name",{length:255}).notNull()
});