import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config();

// Middleware para verificar el token
export const verificarToken = async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ mensaje: 'Acceso denegado, token requerido' });
    }

    try {
        const verificado = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = verificado;
        next();
    } catch (error) {
        res.status(400).json({ mensaje: 'Token no válido' });
    }
};

// Middleware para verificar si es admin
export const esAdmin = async (req, res, next) => {
    try {
        const usuario = await User.findById(req.usuario.id);
        if (usuario.rol !== 'admin') {
            return res.status(403).json({ mensaje: 'Acceso denegado, se requiere rol de administrador' });
        }
        next();
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en la autenticación' });
    }
};


