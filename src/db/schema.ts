import { boolean, int, mysqlEnum, mysqlTable, serial, unique, uniqueIndex, varchar, foreignKey, float, timestamp, primaryKey } from 'drizzle-orm/mysql-core';

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


export const postTable = mysqlTable("post", {
  id: serial().notNull().primaryKey(),
  title: varchar({ length: 255 }).notNull(),
  avarageRatting: float().default(0).notNull(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().defaultNow(),
  authorId: serial().notNull().references(() => usersTable.id)
});


export const postCategory = mysqlTable("postCategory", {
  postId: int().references(() => postTable.id).notNull(), 
  categoryId: int().references(() => categoryTable.id).notNull(), 
}, table => ({
  pk: primaryKey({ columns: [table.postId, table.categoryId] }) // Corrected
}));

export const categoryTable = mysqlTable("category",{
  id:serial().primaryKey().notNull(),
  name:varchar({length:255}).notNull()
})


 