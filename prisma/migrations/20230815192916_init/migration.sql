/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "username" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255),
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "username_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sitedetails" (
    "id" INTEGER NOT NULL,
    "webtext" VARCHAR(1500),
    "img1" VARCHAR(255),
    "img2" VARCHAR(255),
    "img3" VARCHAR(255),
    "heading" VARCHAR(255),

    CONSTRAINT "sitedetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "intro" (
    "id" INTEGER NOT NULL,
    "mainheading" VARCHAR(255),
    "subheading" VARCHAR(255),
    "para" VARCHAR(1500),
    "img1" VARCHAR(255),
    "img2" VARCHAR(255),

    CONSTRAINT "intro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "donatecom1" (
    "id" INTEGER NOT NULL,
    "img1" VARCHAR(255),
    "img2" VARCHAR(255),
    "img3" VARCHAR(255),
    "mainheading" VARCHAR(255),
    "para" VARCHAR(1500),

    CONSTRAINT "donatecom1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mapdis" (
    "id" INTEGER NOT NULL,
    "site" VARCHAR(255),
    "distric" VARCHAR(255),
    "area" VARCHAR(255),
    "coordinates" VARCHAR(255),
    "noofplant" VARCHAR(255),

    CONSTRAINT "mapdis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "piechart" (
    "id" INTEGER NOT NULL,
    "greenarea" INTEGER,
    "treecanopy" INTEGER,
    "barrenland" INTEGER,
    "wetland" INTEGER,

    CONSTRAINT "piechart_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "username_password_key" ON "username"("password");

-- CreateIndex
CREATE UNIQUE INDEX "sitedetails_id_key" ON "sitedetails"("id");

-- CreateIndex
CREATE UNIQUE INDEX "intro_id_key" ON "intro"("id");

-- CreateIndex
CREATE UNIQUE INDEX "donatecom1_id_key" ON "donatecom1"("id");

-- CreateIndex
CREATE UNIQUE INDEX "mapdis_id_key" ON "mapdis"("id");

-- CreateIndex
CREATE UNIQUE INDEX "piechart_id_key" ON "piechart"("id");
