/*
  Warnings:

  - You are about to drop the column `expiringDate` on the `logouttoken` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[token]` on the table `LogoutToken` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `logouttoken` DROP COLUMN `expiringDate`;

-- CreateIndex
CREATE UNIQUE INDEX `LogoutToken_token_key` ON `LogoutToken`(`token`);
