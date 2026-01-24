/*
  Warnings:

  - You are about to drop the column `goals` on the `Club` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Club" DROP COLUMN "goals",
ADD COLUMN     "goals_scored" INTEGER NOT NULL DEFAULT 0;
