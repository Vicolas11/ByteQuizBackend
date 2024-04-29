/*
  Warnings:

  - You are about to drop the `leaderboard` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `leaderboard` DROP FOREIGN KEY `Leaderboard_competitionId_fkey`;

-- DropForeignKey
ALTER TABLE `leaderboard` DROP FOREIGN KEY `Leaderboard_userId_fkey`;

-- AlterTable
ALTER TABLE `question` ADD COLUMN `userId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `leaderboard`;

-- AddForeignKey
ALTER TABLE `Question` ADD CONSTRAINT `Question_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
