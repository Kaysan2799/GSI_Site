/*
  Warnings:

  - You are about to drop the `mapdis` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "mapdis";

-- CreateTable
CREATE TABLE "detailsgrid" (
    "id" INTEGER NOT NULL,
    "site" VARCHAR(255),
    "distric" VARCHAR(255),
    "area" VARCHAR(255),
    "lat" DOUBLE PRECISION,
    "lng" DOUBLE PRECISION,
    "noofplant" VARCHAR(255),

    CONSTRAINT "detailsgrid_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "detailsgrid_id_key" ON "detailsgrid"("id");
