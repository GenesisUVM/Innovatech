import express from 'express';
import {
  obtenerProductos,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
} from '../controllers/productController.js';
import { verificarToken, esAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', obtenerProductos);
router.post('/', verificarToken, esAdmin, crearProducto);
router.put('/:id', verificarToken, esAdmin, actualizarProducto);
router.delete('/:id', verificarToken, esAdmin, eliminarProducto);

export default router;
