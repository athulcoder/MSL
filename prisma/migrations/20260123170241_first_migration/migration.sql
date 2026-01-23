/*
  Warnings:

  - You are about to drop the column `name` on the `Club` table. All the data in the column will be lost.
  - Added the required column `clubName` to the `Club` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Club" DROP COLUMN "name",
ADD COLUMN     "clubName" TEXT NOT NULL,
ALTER COLUMN "logoUrl" DROP NOT NULL;
