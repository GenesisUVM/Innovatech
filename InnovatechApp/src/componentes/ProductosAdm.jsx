import  { useState } from "react";
import CardProducto from "./CardAdm"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FormEditar from "./FormEditar";


function ProductosAdm(){
     // Estado para manejar el modal y el producto seleccionado
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Lista de productos (puedes reemplazar esto con datos reales)
  const productos = [
    { id: 1, nombre: "Producto 1", descripcion: "Descripción del producto 1" },
    { id: 2, nombre: "Producto 2", descripcion: "Descripción del producto 2" },
    { id: 3, nombre: "Producto 3", descripcion: "Descripción del producto 3" },
    { id: 4, nombre: "Producto 4", descripcion: "Descripción del producto 4" },
  ];

  // Función para abrir el modal con la información del producto seleccionado
  const handleCardClick = (producto) => {
    setSelectedProduct(producto);
    setShowModal(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };
    return(
        <div className="contProductos">
            {productos.map((producto) => (
        <CardProducto
          key={producto.id}
          producto={producto}
          onClick={() => handleCardClick(producto)}
        />
      ))}

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <FormEditar 
            producto={selectedProduct} // Pasa el producto seleccionado al formulario
          />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
};

export default ProductosAdm;