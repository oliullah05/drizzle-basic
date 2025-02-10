import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, unique, serial, varchar } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const category = mysqlTable("category", {
	id: serial().notNull(),
	name: varchar({ length: 255 }).notNull(),
},
(table) => [
	primaryKey({ columns: [table.id], name: "category_id"}),
	unique("id").on(table.id),
]);
