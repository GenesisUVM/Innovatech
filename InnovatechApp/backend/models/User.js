import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  nombre: { type: mongoose.Schema.Types.String, required: true },
  apellido: { type: mongoose.Schema.Types.String, required: true },
  correo: { type: mongoose.Schema.Types.String, required: true, unique: true },
  contraseña: { type: mongoose.Schema.Types.String, required: true },
  rol: { type: mongoose.Schema.Types.String, enum: ['admin', 'usuario'], default: 'usuario' },
  favoritos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  direccion: { type: mongoose.Schema.Types.String },
  telefono: { type: mongoose.Schema.Types.Number },
});


export default mongoose.model('User', userSchema);
