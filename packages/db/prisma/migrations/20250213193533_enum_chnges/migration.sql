/*
  Warnings:

  - The values [AsianAmerican,SouthAsian,EastAsian] on the enum `ethinicityTypeEnum` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ethinicityTypeEnum_new" AS ENUM ('Asian American', 'South Asian', 'East Asian', 'White', 'Black', 'Pacific');
ALTER TABLE "Model" ALTER COLUMN "eithinicity" TYPE "ethinicityTypeEnum_new" USING ("eithinicity"::text::"ethinicityTypeEnum_new");
ALTER TYPE "ethinicityTypeEnum" RENAME TO "ethinicityTypeEnum_old";
ALTER TYPE "ethinicityTypeEnum_new" RENAME TO "ethinicityTypeEnum";
DROP TYPE "ethinicityTypeEnum_old";
COMMIT;
