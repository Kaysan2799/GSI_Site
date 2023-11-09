-- DropIndex
DROP INDEX "detailsgrid_id_key";

-- AlterTable
CREATE SEQUENCE detailsgrid_id_seq;
ALTER TABLE "detailsgrid" ALTER COLUMN "id" SET DEFAULT nextval('detailsgrid_id_seq');
ALTER SEQUENCE detailsgrid_id_seq OWNED BY "detailsgrid"."id";
