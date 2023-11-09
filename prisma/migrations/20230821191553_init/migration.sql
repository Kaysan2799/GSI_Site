/*
  Warnings:

  - You are about to drop the column `heading` on the `sitedetails` table. All the data in the column will be lost.
  - You are about to alter the column `site` on the `sitedetails` table. The data in that column could be lost. The data in that column will be cast from `VarChar(1500)` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "sitedetails" DROP COLUMN "heading",
ADD COLUMN     "webtext" VARCHAR(1500),
ALTER COLUMN "site" SET DATA TYPE VARCHAR(255);
