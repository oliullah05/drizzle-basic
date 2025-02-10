import { boolean, int, mysqlEnum, mysqlTable, serial, unique, uniqueIndex, varchar, foreignKey, float, timestamp } from 'drizzle-orm/mysql-core';

export const RoleEnum = mysqlEnum("userRole", ["admin", "user"]).notNull().default("user");

export const usersTable = mysqlTable('users', {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  age: int().notNull(),
  email: varchar({ length: 255 }).notNull(),
  role: RoleEnum
}, table => ({
  emailIndex: uniqueIndex("emailIndex").on(table.email),
  uniqueNameAndAge: unique("uniqueNameAndAge").on(table.name, table.age)
}));

export const userPreferencesTable = mysqlTable("userPreferences", {
  id: serial().primaryKey(),
  emailUpdates: boolean().default(false).notNull(),
  userId: int("userId").notNull()
    .references(() => usersTable.id) 
});


export const postTable = mysqlTable("post",{
  id:serial().notNull().primaryKey(),
  title: varchar({length:255}).notNull(),
  avarageRatting:float().default(0).notNull(),
  createdAt:timestamp().defaultNow(),
  updatedAt:timestamp().defaultNow(),
  authorId:int().references(()=>usersTable.id).notNull()
})
 