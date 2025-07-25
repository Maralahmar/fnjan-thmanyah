/*
  Warnings:

  - You are about to drop the column `publisher` on the `Episode` table. All the data in the column will be lost.
  - The `duration` column on the `Episode` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `podcastId` to the `Episode` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Episode` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Episode" DROP COLUMN "publisher",
ADD COLUMN     "audioUrl" TEXT,
ADD COLUMN     "podcastId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "image" DROP NOT NULL,
DROP COLUMN "duration",
ADD COLUMN     "duration" INTEGER;

-- CreateTable
CREATE TABLE "Podcast" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "artistName" TEXT NOT NULL,
    "artworkUrl" TEXT NOT NULL,
    "feedUrl" TEXT,
    "genre" TEXT,
    "country" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Podcast_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Episode" ADD CONSTRAINT "Episode_podcastId_fkey" FOREIGN KEY ("podcastId") REFERENCES "Podcast"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
