/*
  Warnings:

  - You are about to drop the column `webtext` on the `sitedetails` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "sitedetails" DROP COLUMN "webtext",
ADD COLUMN     "site" VARCHAR(1500);
