-- DropIndex
DROP INDEX "sitedetails_id_key";

-- AlterTable
CREATE SEQUENCE sitedetails_id_seq;
ALTER TABLE "sitedetails" ALTER COLUMN "id" SET DEFAULT nextval('sitedetails_id_seq');
ALTER SEQUENCE sitedetails_id_seq OWNED BY "sitedetails"."id";
