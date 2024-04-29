/*
  Warnings:

  - You are about to drop the column `point` on the `competition` table. All the data in the column will be lost.
  - You are about to drop the column `totalPoint` on the `competition` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `competition` DROP COLUMN `point`,
    DROP COLUMN `totalPoint`,
    ADD COLUMN `hasStarted` BOOLEAN NOT NULL DEFAULT false;
