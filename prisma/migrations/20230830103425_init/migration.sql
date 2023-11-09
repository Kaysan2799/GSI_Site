/*
  Warnings:

  - A unique constraint covering the columns `[site]` on the table `detailsgrid` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[site]` on the table `piechart` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[site]` on the table `sitedetails` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "detailsgrid_site_key" ON "detailsgrid"("site");

-- CreateIndex
CREATE UNIQUE INDEX "piechart_site_key" ON "piechart"("site");

-- CreateIndex
CREATE UNIQUE INDEX "sitedetails_site_key" ON "sitedetails"("site");
