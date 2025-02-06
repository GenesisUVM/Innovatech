import Product from '../models/Product.js';

// Obtener productos
export const obtenerProductos = async (req, res) => {
  try {
    const { pagina = 1, limite = 10, categoria, busqueda } = req.query;
    const filtro = { cantidad: { $gt: 0 } };

    if (categoria) filtro.categoria = categoria;
    if (busqueda) filtro.$or = [
      { nombre: new RegExp(busqueda, 'i') },
      { descripcion: new RegExp(busqueda, 'i') },
    ];

    const productos = await Product.find(filtro)
      .limit(limite * 1)
      .skip((pagina - 1) * limite);
    
    const total = await Product.countDocuments(filtro);

    res.json({ productos, total, paginas: Math.ceil(total / limite) });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener productos' });
  }
};

// Nuevo producto -admin
export const crearProducto = async (req, res) => {
  try {
    const { nombre, descripcion, precio, cantidad, imagen, categoria } = req.body;

    const nuevoProducto = new Product({ nombre, descripcion, precio, cantidad, imagen, categoria });
    await nuevoProducto.save();

    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear producto' });
  }
};

// Actualizar producto -admin
export const actualizarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const productoActualizado = await Product.findByIdAndUpdate(id, req.body, { new: true });

    if (!productoActualizado) return res.status(404).json({ mensaje: 'Producto no encontrado' });

    res.json(productoActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar producto' });
  }
};

// Eliminar producto -admin
export const eliminarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({ mensaje: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar producto' });
  }
};
