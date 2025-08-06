/*
  Warnings:

  - The values [CERTIFICADO_CURSO] on the enum `TipoDocumento` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `constancia_documentos_comprobatorios` on the `cambiosadscripcion` table. All the data in the column will be lost.
  - You are about to drop the column `constancia_nombramiento_personal` on the `cambiosadscripcion` table. All the data in the column will be lost.
  - You are about to drop the column `documento_respaldo_id` on the `cambiosadscripcion` table. All the data in the column will be lost.
  - You are about to drop the column `constancia_reconocimiento_oficio` on the `cursos` table. All the data in the column will be lost.
  - You are about to drop the column `certificado_id` on the `trabajadores_cursos` table. All the data in the column will be lost.
  - You are about to drop the column `documento_conclusion` on the `trabajadores_cursos` table. All the data in the column will be lost.
  - You are about to drop the column `documento_invitacion` on the `trabajadores_cursos` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "CusoStatus" AS ENUM ('EnCurso', 'Finalizado', 'Cancelado', 'Suspendido');

-- AlterEnum
BEGIN;
CREATE TYPE "TipoDocumento_new" AS ENUM ('ACTA_NACIMIENTO', 'APROBACION_PERMISO', 'CERTIFICADO_ESTUDIO', 'CONSTANCIA_DOCUMENTOS_COMPROBATORIOS', 'CONSTANCIA_NOMBRAMIENTO', 'CONSTANCIA_RECONOCIMIENTO', 'CURP', 'INE', 'RFC', 'OTRO_DOCUMENTO', 'OFICIO', 'INVITACION_CURSO', 'CONCLUSION_CURSO');
ALTER TABLE "cambiosadscripcion" ALTER COLUMN "tipo_documento_comprobatorios" TYPE "TipoDocumento_new" USING ("tipo_documento_comprobatorios"::text::"TipoDocumento_new");
ALTER TABLE "cambiosadscripcion" ALTER COLUMN "tipo_documento_nombramiento" TYPE "TipoDocumento_new" USING ("tipo_documento_nombramiento"::text::"TipoDocumento_new");
ALTER TABLE "cursos" ALTER COLUMN "tipo_documento_curso" TYPE "TipoDocumento_new" USING ("tipo_documento_curso"::text::"TipoDocumento_new");
ALTER TABLE "trabajadores_cursos" ALTER COLUMN "tipo_documento_invitacion" TYPE "TipoDocumento_new" USING ("tipo_documento_invitacion"::text::"TipoDocumento_new");
ALTER TABLE "trabajadores_cursos" ALTER COLUMN "tipo_documento_conclusion" TYPE "TipoDocumento_new" USING ("tipo_documento_conclusion"::text::"TipoDocumento_new");
ALTER TYPE "TipoDocumento" RENAME TO "TipoDocumento_old";
ALTER TYPE "TipoDocumento_new" RENAME TO "TipoDocumento";
DROP TYPE "TipoDocumento_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "cambiosadscripcion" DROP CONSTRAINT "cambiosadscripcion_documento_respaldo_id_fkey";

-- DropForeignKey
ALTER TABLE "trabajadores_cursos" DROP CONSTRAINT "trabajadores_cursos_certificado_id_fkey";

-- AlterTable
ALTER TABLE "cambiosadscripcion" DROP COLUMN "constancia_documentos_comprobatorios",
DROP COLUMN "constancia_nombramiento_personal",
DROP COLUMN "documento_respaldo_id",
ADD COLUMN     "documento_comprobatorio_id" INTEGER,
ADD COLUMN     "documento_nombramiento_id" INTEGER;

-- AlterTable
ALTER TABLE "cursos" DROP COLUMN "constancia_reconocimiento_oficio",
ADD COLUMN     "documento_constancia_id" INTEGER;

-- AlterTable
ALTER TABLE "trabajadores_cursos" DROP COLUMN "certificado_id",
DROP COLUMN "documento_conclusion",
DROP COLUMN "documento_invitacion",
ADD COLUMN     "documento_certificado_id" INTEGER,
ADD COLUMN     "documento_conclusion_id" INTEGER,
ADD COLUMN     "documento_invitacion_id" INTEGER;

-- AddForeignKey
ALTER TABLE "cambiosadscripcion" ADD CONSTRAINT "cambiosadscripcion_documento_comprobatorio_id_fkey" FOREIGN KEY ("documento_comprobatorio_id") REFERENCES "documentos"("id_documento") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cambiosadscripcion" ADD CONSTRAINT "cambiosadscripcion_documento_nombramiento_id_fkey" FOREIGN KEY ("documento_nombramiento_id") REFERENCES "documentos"("id_documento") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cursos" ADD CONSTRAINT "cursos_documento_constancia_id_fkey" FOREIGN KEY ("documento_constancia_id") REFERENCES "documentos"("id_documento") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trabajadores_cursos" ADD CONSTRAINT "trabajadores_cursos_documento_certificado_id_fkey" FOREIGN KEY ("documento_certificado_id") REFERENCES "documentos"("id_documento") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trabajadores_cursos" ADD CONSTRAINT "trabajadores_cursos_documento_invitacion_id_fkey" FOREIGN KEY ("documento_invitacion_id") REFERENCES "documentos"("id_documento") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trabajadores_cursos" ADD CONSTRAINT "trabajadores_cursos_documento_conclusion_id_fkey" FOREIGN KEY ("documento_conclusion_id") REFERENCES "documentos"("id_documento") ON DELETE SET NULL ON UPDATE CASCADE;
