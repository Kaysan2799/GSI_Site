/*
  Warnings:

  - You are about to drop the column `coordinates` on the `mapdis` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "mapdis" DROP COLUMN "coordinates",
ADD COLUMN     "lat" DOUBLE PRECISION,
ADD COLUMN     "lng" DOUBLE PRECISION;
