/*
  Warnings:

  - You are about to alter the column `donation` on the `clientinformation` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "clientinformation" ALTER COLUMN "donation" SET DATA TYPE VARCHAR(255);
