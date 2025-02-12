CREATE TABLE `category` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	CONSTRAINT `category_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `postCategory` (
	`postId` int NOT NULL,
	`categoryId` int NOT NULL,
	CONSTRAINT `postCategory_categoryId_postId_pk` PRIMARY KEY(`categoryId`,`postId`)
);
--> statement-breakpoint
CREATE TABLE `post` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`avarageRatting` float NOT NULL DEFAULT 0,
	`createdAt` timestamp DEFAULT (now()),
	`updatedAt` timestamp DEFAULT (now()),
	`authorId` int NOT NULL,
	CONSTRAINT `post_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `userPreferences` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`emailUpdates` boolean NOT NULL DEFAULT false,
	`userId` int NOT NULL,
	CONSTRAINT `userPreferences_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`age` int NOT NULL,
	`email` varchar(255) NOT NULL,
	`userRole` enum('admin','user') NOT NULL DEFAULT 'user',
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `uniqueNameAndAge` UNIQUE(`name`,`age`),
	CONSTRAINT `emailIndex` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `postCategory` ADD CONSTRAINT `postCategory_postId_post_id_fk` FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `postCategory` ADD CONSTRAINT `postCategory_categoryId_category_id_fk` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `post` ADD CONSTRAINT `post_authorId_users_id_fk` FOREIGN KEY (`authorId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `userPreferences` ADD CONSTRAINT `userPreferences_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;