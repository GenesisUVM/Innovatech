import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  cantidad: { type: Number, required: true },
  imagen: { type: String, required: true },
  categoria: {
    type: String,
    enum: [
      'dispositivos moviles',
      'computadoras',
      'electronica',
      'electrodomesticos',
      'gadgets',
      'wearable',
      'componentes',
      'equipos de redes',
      'energia',
    ],
    required: true,
  },
});

export default mongoose.model('Product', productSchema);
