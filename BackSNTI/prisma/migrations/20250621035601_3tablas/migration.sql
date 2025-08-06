/*
  Warnings:

  - You are about to drop the column `tipo_documento_conclusion` on the `trabajadores_cursos` table. All the data in the column will be lost.
  - You are about to drop the column `tipo_documento_invitacion` on the `trabajadores_cursos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "documentos" ALTER COLUMN "id_trabajador" DROP NOT NULL;

-- AlterTable
ALTER TABLE "trabajadores_cursos" DROP COLUMN "tipo_documento_conclusion",
DROP COLUMN "tipo_documento_invitacion";
