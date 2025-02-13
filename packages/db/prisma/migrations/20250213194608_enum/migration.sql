/*
  Warnings:

  - The values [Brwon] on the enum `eyeTypeEnum` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "eyeTypeEnum_new" AS ENUM ('Black', 'Brown', 'Green', 'Blue', 'Gray');
ALTER TABLE "Model" ALTER COLUMN "eyeColor" TYPE "eyeTypeEnum_new" USING ("eyeColor"::text::"eyeTypeEnum_new");
ALTER TYPE "eyeTypeEnum" RENAME TO "eyeTypeEnum_old";
ALTER TYPE "eyeTypeEnum_new" RENAME TO "eyeTypeEnum";
DROP TYPE "eyeTypeEnum_old";
COMMIT;
