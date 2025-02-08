import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  nombre: { type: mongoose.Schema.Types.String, required: true },
  descripcion: { type: mongoose.Schema.Types.String, required: true },
  precio: { type: mongoose.Schema.Types.Number, required: true },
  cantidad: { type: mongoose.Schema.Types.Number, required: true },
  imagen: { type: mongoose.Schema.Types.String, required: true },
  categoria: {
    type: mongoose.Schema.Types.String,
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
