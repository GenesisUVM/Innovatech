import express from 'express';
import { addFavorite, removeFavorite, getFavorites } from '../controllers/userController.js';
import { verificarToken, esAdmin } from '../middleware/authMiddleware.js';

import {
  registrarUsuario,
  iniciarSesion,
  obtenerPerfil,
  actualizarPerfil,
  obtenerUsuarios,
  eliminarUsuario,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/registro', registrarUsuario);
router.post('/login', iniciarSesion);
router.get('/perfil', verificarToken, obtenerPerfil);
router.put('/perfil', verificarToken, actualizarPerfil);
router.get('/', verificarToken, esAdmin, obtenerUsuarios);
router.delete('/:id', verificarToken, esAdmin, eliminarUsuario);

// Rutas para favoritos
router.post('/favoritos', verificarToken, addFavorite);
router.delete('/favoritos/:productId', verificarToken, removeFavorite);
router.get('/favoritos', verificarToken, getFavorites);

export default router;
