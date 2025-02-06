import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import Product from '../models/Product.js';

// Generar token JWT
const generarToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// Registrar usuario
export const registrarUsuario = async (req, res) => {
  try {
    const { nombre, email, contraseña, rol } = req.body;

    const usuarioExiste = await User.findOne({ email });
    if (usuarioExiste) return res.status(400).json({ mensaje: 'El usuario ya existe' });

    const salt = await bcrypt.genSalt(10);
    const contraseñaHash = await bcrypt.hash(contraseña, salt);

    const nuevoUsuario = new User({
      nombre,
      email,
      contraseña: contraseñaHash,
      rol: rol || 'usuario',
    });

    await nuevoUsuario.save();

    res.status(201).json({
      id: nuevoUsuario._id,
      nombre: nuevoUsuario.nombre,
      email: nuevoUsuario.email,
      rol: nuevoUsuario.rol,
      token: generarToken(nuevoUsuario._id),
    });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al registrar usuario' });
  }
};

// Iniciar sesión
export const iniciarSesion = async (req, res) => {
  try {
    const { email, contraseña } = req.body;
    const usuario = await User.findOne({ email });

    if (!usuario || !(await bcrypt.compare(contraseña, usuario.contraseña))) {
      return res.status(401).json({ mensaje: 'Credenciales inválidas' });
    }

    res.json({
      id: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol,
      token: generarToken(usuario._id),
    });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al iniciar sesión' });
  }
};

// Obtener perfil del usuario
export const obtenerPerfil = async (req, res) => {
  res.json(req.usuario);
};

// Actualizar perfil del usuario
export const actualizarPerfil = async (req, res) => {
  try {
    const usuario = await User.findById(req.usuario._id);
    if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado' });

    usuario.nombre = req.body.nombre || usuario.nombre;
    usuario.email = req.body.email || usuario.email;

    if (req.body.contraseña) {
      const salt = await bcrypt.genSalt(10);
      usuario.contraseña = await bcrypt.hash(req.body.contraseña, salt);
    }

    await usuario.save();

    res.json({ mensaje: 'Perfil actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar perfil' });
  }
};

// Obtener todos los usuarios -admin
export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await User.find().select('-contraseña');
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener usuarios' });
  }
};

// Eliminar usuario -admin
export const eliminarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ mensaje: 'Usuario eliminado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar usuario' });
  }
};

// Agregar un producto a favoritos
export const addFavorite = async (req, res) => {
  try {
    const userId = req.user.id; // ID del usuario autenticado
    const { productId } = req.body;

    const user = await User.findById(userId);
    const product = await Product.findById(productId);

    if (!user || !product) {
      return res.status(404).json({ mensaje: 'Usuario o producto no encontrado' });
    }

    if (user.favoritos.includes(productId)) {
      return res.status(400).json({ mensaje: 'El producto ya está en favoritos' });
    }

    user.favoritos.push(productId);
    await user.save();

    res.status(200).json({ mensaje: 'Producto agregado a favoritos', favoritos: user.favoritos });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al agregar a favoritos', error });
  }
};

// Eliminar un producto de favoritos
export const removeFavorite = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.params;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    user.favoritos = user.favoritos.filter((fav) => fav.toString() !== productId);
    await user.save();

    res.status(200).json({ mensaje: 'Producto eliminado de favoritos', favoritos: user.favoritos });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar de favoritos', error });
  }
};

// Obtener la lista de productos favoritos del usuario
export const getFavorites = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).populate('favoritos');

    if (!user) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    res.status(200).json({ favoritos: user.favoritos });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener favoritos', error });
  }
};
