ALTER TABLE `postCategory` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `post` MODIFY COLUMN `authorId` serial AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `postCategory` ADD PRIMARY KEY(`postId`,`categoryId`);