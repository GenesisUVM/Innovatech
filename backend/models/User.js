import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  rol: { type: String, enum: ['admin', 'usuario'], default: 'usuario' },
  favoritos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  direccion: { type: String },
  telefono: { type: String },
});


export default mongoose.model('User', userSchema);
