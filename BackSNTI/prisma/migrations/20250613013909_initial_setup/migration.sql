-- CreateEnum
CREATE TYPE "TipoDocumento" AS ENUM ('ACTA_NACIMIENTO', 'APROBACION_PERMISO', 'CERTIFICADO_CURSO', 'CERTIFICADO_ESTUDIO', 'CONSTANCIA_DOCUMENTOS_COMPROBATORIOS', 'CONSTANCIA_NOMBRAMIENTO', 'CONSTANCIA_RECONOCIMIENTO', 'CURP', 'INE', 'OFICIO', 'RFC', 'OTRO_DOCUMENTO');

-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('ADMINISTRADOR', 'USUARIO');

-- CreateEnum
CREATE TYPE "estatus_permiso" AS ENUM ('Pendiente', 'Aprobado', 'Denegado', 'NoSolicitado');

-- CreateEnum
CREATE TYPE "SituacionSentimental" AS ENUM ('Soltero', 'Casado', 'Divorciado', 'Viudo', 'UnionLibre');

-- CreateEnum
CREATE TYPE "Sexo" AS ENUM ('M', 'F');

-- CreateEnum
CREATE TYPE "EstadosMexico" AS ENUM ('AGUASCALIENTES', 'BAJA_CALIFORNIA', 'BAJA_CALIFORNIA_SUR', 'CAMPECHE', 'CHIAPAS', 'CHIHUAHUA', 'CIUDAD_DE_MEXICO', 'COAHUILA', 'COLIMA', 'DURANGO', 'ESTADO_DE_MEXICO', 'GUANAJUATO', 'GUERRERO', 'HIDALGO', 'JALISCO', 'MICHOACAN', 'MORELOS', 'NAYARIT', 'NUEVO_LEON', 'OAXACA', 'PUEBLA', 'QUERETARO', 'QUINTANA_ROO', 'SAN_LUIS_POTOSI', 'SINALOA', 'SONORA', 'TABASCO', 'TAMAULIPAS', 'TLAXCALA', 'VERACRUZ', 'YUCATAN', 'ZACATECAS');

-- CreateTable
CREATE TABLE "auditoria" (
    "id_auditoria" SERIAL NOT NULL,
    "tabla_afectada" VARCHAR(100) NOT NULL,
    "id_registro" INTEGER NOT NULL,
    "accion" VARCHAR(10) NOT NULL,
    "datos_anteriores" JSONB,
    "datos_nuevos" JSONB,
    "usuario" VARCHAR(100) NOT NULL,
    "fecha_registro" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "auditoria_pkey" PRIMARY KEY ("id_auditoria")
);

-- CreateTable
CREATE TABLE "cambiosadscripcion" (
    "id_cambio" SERIAL NOT NULL,
    "id_trabajador" INTEGER NOT NULL,
    "adscripcion_anterior" VARCHAR(100) NOT NULL,
    "adscripcion_nueva" VARCHAR(100) NOT NULL,
    "fecha_cambio" DATE NOT NULL,
    "motivo" TEXT NOT NULL,
    "documento_respaldo_id" INTEGER,
    "constancia_documentos_comprobatorios" TEXT,
    "constancia_nombramiento_personal" TEXT,
    "tipo_documento_comprobatorios" "TipoDocumento",
    "tipo_documento_nombramiento" "TipoDocumento",
    "usuario_registro" VARCHAR(100) DEFAULT CURRENT_USER,
    "fecha_registro" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cambiosadscripcion_pkey" PRIMARY KEY ("id_cambio")
);

-- CreateTable
CREATE TABLE "cursos" (
    "id_curso" SERIAL NOT NULL,
    "codigo_curso" VARCHAR(20) NOT NULL,
    "nombre_curso" VARCHAR(255) NOT NULL,
    "horas_duracion" INTEGER NOT NULL,
    "estatus" VARCHAR(20) DEFAULT 'En curso',
    "constancia_reconocimiento_oficio" TEXT,
    "tipo_documento_curso" "TipoDocumento",

    CONSTRAINT "cursos_pkey" PRIMARY KEY ("id_curso")
);

-- CreateTable
CREATE TABLE "documentos" (
    "id_documento" SERIAL NOT NULL,
    "id_trabajador" INTEGER NOT NULL,
    "tipo_documento" VARCHAR(50) NOT NULL,
    "metadata" JSONB,
    "hash_archivo" VARCHAR(64) NOT NULL,
    "nombre_archivo" VARCHAR(255) NOT NULL,
    "descripcion" TEXT,
    "tipo_archivo" VARCHAR(10),
    "ruta_almacenamiento" TEXT NOT NULL,
    "fecha_subida" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "tamano_bytes" BIGINT NOT NULL,
    "es_publico" BOOLEAN DEFAULT false,
    "mimetype" TEXT,

    CONSTRAINT "documentos_pkey" PRIMARY KEY ("id_documento")
);

-- CreateTable
CREATE TABLE "hijos" (
    "id_hijo" SERIAL NOT NULL,
    "id_trabajador" INTEGER NOT NULL,
    "fecha_nacimiento" DATE NOT NULL,
    "acta_nacimiento_id" INTEGER,
    "vigente" BOOLEAN DEFAULT true,
    "apellido_materno" VARCHAR(100) NOT NULL,
    "apellido_paterno" VARCHAR(100) NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,

    CONSTRAINT "hijos_pkey" PRIMARY KEY ("id_hijo")
);

-- CreateTable
CREATE TABLE "permisos" (
    "id_permiso" SERIAL NOT NULL,
    "id_trabajador" INTEGER NOT NULL,
    "tipo_permiso" VARCHAR(20),
    "fecha_inicio" DATE NOT NULL,
    "fecha_fin" DATE NOT NULL,
    "motivo" TEXT NOT NULL,
    "estatus" VARCHAR(20) DEFAULT 'Pendiente',
    "documento_aprobacion_id" INTEGER,
    "fecha_registro" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "permisos_pkey" PRIMARY KEY ("id_permiso")
);

-- CreateTable
CREATE TABLE "sanciones" (
    "id_sancion" SERIAL NOT NULL,
    "id_trabajador" INTEGER NOT NULL,
    "tipo_sancion" VARCHAR(50) NOT NULL,
    "descripcion" TEXT NOT NULL,
    "fecha_aplicacion" DATE NOT NULL,
    "fecha_fin" DATE,
    "estatus" VARCHAR(20) DEFAULT 'No',
    "usuario_registro" VARCHAR(100) DEFAULT CURRENT_USER,
    "fecha_registro" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sanciones_pkey" PRIMARY KEY ("id_sancion")
);

-- CreateTable
CREATE TABLE "secciones" (
    "id_seccion" SERIAL NOT NULL,
    "numero_seccion" INTEGER NOT NULL,
    "estado" "EstadosMexico" NOT NULL,
    "ubicacion" VARCHAR(255) NOT NULL,
    "secretario" VARCHAR(255),

    CONSTRAINT "secciones_pkey" PRIMARY KEY ("id_seccion")
);

-- CreateTable
CREATE TABLE "trabajadores" (
    "id_trabajador" SERIAL NOT NULL,
    "identificador" VARCHAR(150) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "intentos_fallidos" INTEGER DEFAULT 0,
    "bloqueado" BOOLEAN DEFAULT false,
    "fecha_creacion" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "ultimo_login" TIMESTAMP(6),
    "ultimo_cambio_password" TIMESTAMP(6),
    "rol" "Roles" NOT NULL DEFAULT 'USUARIO',
    "nombre" VARCHAR(100) NOT NULL,
    "apellido_paterno" VARCHAR(100) NOT NULL,
    "apellido_materno" VARCHAR(100),
    "fecha_nacimiento" DATE NOT NULL,
    "sexo" "Sexo" NOT NULL,
    "curp" CHAR(18) NOT NULL,
    "rfc" CHAR(13) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "situacion_sentimental" "SituacionSentimental",
    "numero_hijos" INTEGER NOT NULL DEFAULT 0,
    "numero_empleado" CHAR(10) NOT NULL,
    "numero_plaza" CHAR(8) NOT NULL,
    "fecha_ingreso" DATE NOT NULL,
    "fecha_ingreso_gobierno" DATE NOT NULL,
    "nivel_puesto" VARCHAR(50) NOT NULL,
    "nombre_puesto" VARCHAR(100) NOT NULL,
    "puesto_inpi" VARCHAR(100),
    "adscripcion" VARCHAR(100) NOT NULL,
    "id_seccion" INTEGER NOT NULL,
    "nivel_estudios" VARCHAR(100),
    "institucion_estudios" VARCHAR(200),
    "certificado_estudios" BOOLEAN,
    "plaza_base" VARCHAR(10),
    "fecha_actualizacion" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "trabajadores_pkey" PRIMARY KEY ("id_trabajador")
);

-- CreateTable
CREATE TABLE "trabajadores_cursos" (
    "id_trabajador_curso" SERIAL NOT NULL,
    "id_trabajador" INTEGER NOT NULL,
    "id_curso" INTEGER NOT NULL,
    "fecha_inscripcion" DATE NOT NULL DEFAULT CURRENT_DATE,
    "calificacion" DECIMAL(5,2),
    "completado" BOOLEAN DEFAULT false,
    "fecha_completado" DATE,
    "certificado_id" INTEGER,
    "documento_invitacion" TEXT,
    "documento_conclusion" TEXT,
    "tipo_documento_invitacion" "TipoDocumento",
    "tipo_documento_conclusion" "TipoDocumento",

    CONSTRAINT "trabajadores_cursos_pkey" PRIMARY KEY ("id_trabajador_curso")
);

-- CreateTable
CREATE TABLE "galeria" (
    "id_imagen" SERIAL NOT NULL,
    "nombre_imagen" VARCHAR(255) NOT NULL,
    "ruta_imagen" TEXT NOT NULL,
    "tipo_imagen" VARCHAR(50) NOT NULL,
    "tamano_bytes" BIGINT NOT NULL,
    "es_activa" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "galeria_pkey" PRIMARY KEY ("id_imagen")
);

-- CreateTable
CREATE TABLE "contactos" (
    "id_contacto" SERIAL NOT NULL,
    "ocupacion" VARCHAR(100) NOT NULL,
    "nombre" VARCHAR(150) NOT NULL,
    "correo" TEXT NOT NULL,

    CONSTRAINT "contactos_pkey" PRIMARY KEY ("id_contacto")
);

-- CreateIndex
CREATE UNIQUE INDEX "cursos_codigo_curso_key" ON "cursos"("codigo_curso");

-- CreateIndex
CREATE INDEX "idx_documentos_tipo" ON "documentos"("tipo_documento");

-- CreateIndex
CREATE UNIQUE INDEX "secciones_numero_seccion_key" ON "secciones"("numero_seccion");

-- CreateIndex
CREATE UNIQUE INDEX "trabajadores_identificador_key" ON "trabajadores"("identificador");

-- CreateIndex
CREATE UNIQUE INDEX "trabajadores_curp_key" ON "trabajadores"("curp");

-- CreateIndex
CREATE UNIQUE INDEX "trabajadores_rfc_key" ON "trabajadores"("rfc");

-- CreateIndex
CREATE UNIQUE INDEX "trabajadores_email_key" ON "trabajadores"("email");

-- CreateIndex
CREATE UNIQUE INDEX "trabajadores_numero_empleado_key" ON "trabajadores"("numero_empleado");

-- CreateIndex
CREATE UNIQUE INDEX "trabajadores_numero_plaza_key" ON "trabajadores"("numero_plaza");

-- CreateIndex
CREATE INDEX "idx_trabajadores_identificador" ON "trabajadores"("identificador");

-- CreateIndex
CREATE UNIQUE INDEX "trabajadores_cursos_unique" ON "trabajadores_cursos"("id_trabajador", "id_curso");

-- CreateIndex
CREATE INDEX "idx_galeria_activa" ON "galeria"("es_activa");

-- AddForeignKey
ALTER TABLE "cambiosadscripcion" ADD CONSTRAINT "cambiosadscripcion_documento_respaldo_id_fkey" FOREIGN KEY ("documento_respaldo_id") REFERENCES "documentos"("id_documento") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cambiosadscripcion" ADD CONSTRAINT "cambiosadscripcion_id_trabajador_fkey" FOREIGN KEY ("id_trabajador") REFERENCES "trabajadores"("id_trabajador") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documentos" ADD CONSTRAINT "documentos_id_trabajador_fkey" FOREIGN KEY ("id_trabajador") REFERENCES "trabajadores"("id_trabajador") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hijos" ADD CONSTRAINT "hijos_id_trabajador_fkey" FOREIGN KEY ("id_trabajador") REFERENCES "trabajadores"("id_trabajador") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hijos" ADD CONSTRAINT "hijos_acta_nacimiento_id_fkey" FOREIGN KEY ("acta_nacimiento_id") REFERENCES "documentos"("id_documento") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "permisos" ADD CONSTRAINT "permisos_documento_aprobacion_id_fkey" FOREIGN KEY ("documento_aprobacion_id") REFERENCES "documentos"("id_documento") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "permisos" ADD CONSTRAINT "permisos_id_trabajador_fkey" FOREIGN KEY ("id_trabajador") REFERENCES "trabajadores"("id_trabajador") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sanciones" ADD CONSTRAINT "sanciones_id_trabajador_fkey" FOREIGN KEY ("id_trabajador") REFERENCES "trabajadores"("id_trabajador") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "trabajadores" ADD CONSTRAINT "trabajadores_id_seccion_fkey" FOREIGN KEY ("id_seccion") REFERENCES "secciones"("id_seccion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trabajadores_cursos" ADD CONSTRAINT "trabajadores_cursos_certificado_id_fkey" FOREIGN KEY ("certificado_id") REFERENCES "documentos"("id_documento") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "trabajadores_cursos" ADD CONSTRAINT "trabajadores_cursos_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "cursos"("id_curso") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trabajadores_cursos" ADD CONSTRAINT "trabajadores_cursos_id_trabajador_fkey" FOREIGN KEY ("id_trabajador") REFERENCES "trabajadores"("id_trabajador") ON DELETE CASCADE ON UPDATE CASCADE;
