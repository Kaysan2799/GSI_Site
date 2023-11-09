-- DropIndex
DROP INDEX "piechart_id_key";

-- AlterTable
CREATE SEQUENCE piechart_id_seq;
ALTER TABLE "piechart" ALTER COLUMN "id" SET DEFAULT nextval('piechart_id_seq');
ALTER SEQUENCE piechart_id_seq OWNED BY "piechart"."id";
