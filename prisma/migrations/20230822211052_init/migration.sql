-- CreateTable
CREATE TABLE "clientinformation" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "email" VARCHAR(255),
    "address" VARCHAR(255),
    "country" VARCHAR(255),
    "phonenumber" INTEGER,

    CONSTRAINT "clientinformation_pkey" PRIMARY KEY ("id")
);
