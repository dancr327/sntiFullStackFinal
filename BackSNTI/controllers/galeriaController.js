// ✅ controllers/galeriaController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const path = require('path');
const fs = require('fs');

const crearImagenGaleria = async (req, res, next) => {
  try {
    const { nombre_imagen } = req.body;
    const archivo = req.file;

    if (!archivo) {
      return res.status(400).json({ success: false, message: 'Archivo no proporcionado' });
    }

    const nuevaImagen = await prisma.galeria.create({
      data: {
        nombre_imagen,
        ruta_imagen: path.join('uploads/galeria', archivo.filename),
        tipo_imagen: path.extname(archivo.originalname).substring(1),
        tamano_bytes: BigInt(archivo.size),
      },
    });

    res.status(201).json({
      success: true,
      data: {
        ...nuevaImagen,
        tamano_bytes: Number(nuevaImagen.tamano_bytes)
      }
    });
  } catch (error) {
    next(error);
  }
};

const obtenerGaleria = async (req, res, next) => {
  try {
    const imagenes = await prisma.galeria.findMany({ where: { es_activa: true } });
    const serializadas = imagenes.map(img => ({
      ...img,
      tamano_bytes: Number(img.tamano_bytes)
    }));
    res.json({ success: true, data: serializadas });
  } catch (error) {
    next(error);
  }
};

const descargarImagen = async (req, res, next) => {
  try {
    const { id } = req.params;
    const imagen = await prisma.galeria.findUnique({ where: { id_imagen: parseInt(id) } });

    if (!imagen) return res.status(404).json({ success: false, message: 'Imagen no encontrada' });

    return res.download(imagen.ruta_imagen);
  } catch (error) {
    next(error);
  }
};

const actualizarImagenGaleria = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { nombre_imagen } = req.body;
    const archivo = req.file;

    const dataToUpdate = { nombre_imagen };
    if (archivo) {
      dataToUpdate.ruta_imagen = path.join('uploads/galeria', archivo.filename);
      dataToUpdate.tipo_imagen = path.extname(archivo.originalname).substring(1);
      dataToUpdate.tamano_bytes = BigInt(archivo.size);
    }

    const actualizada = await prisma.galeria.update({
      where: { id_imagen: parseInt(id) },
      data: dataToUpdate,
    });

    res.json({
      success: true,
      data: {
        ...actualizada,
        tamano_bytes: Number(actualizada.tamano_bytes)
      }
    });
  } catch (error) {
    next(error);
  }
};

const eliminarImagenGaleria = async (req, res, next) => {
  try {
    const { id } = req.params;
    const imagen = await prisma.galeria.findUnique({ where: { id_imagen: parseInt(id) } });

    if (!imagen) return res.status(404).json({ success: false, message: 'Imagen no encontrada' });

    // Eliminar archivo físico
    if (fs.existsSync(imagen.ruta_imagen)) {
      fs.unlinkSync(imagen.ruta_imagen);
    }

    // Eliminar registro en la base de datos
    await prisma.galeria.delete({ where: { id_imagen: parseInt(id) } });

    res.json({ success: true, message: 'Imagen eliminada completamente' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  crearImagenGaleria,
  obtenerGaleria,
  descargarImagen,
  actualizarImagenGaleria,
  eliminarImagenGaleria,
};
