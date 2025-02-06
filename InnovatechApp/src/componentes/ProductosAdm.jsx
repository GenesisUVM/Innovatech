import  { useState } from "react";
import CardProducto from "./CardAdm"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FormEditar from "./FormEditar";
import './Producto.css'
import CardMas from "./CardMas";
import FormCrear from "./FormCrear";


function ProductosAdm(){
  const [showEditModal, setShowEditModal] = useState(false); // Modal de edición
  const [showDeleteModal, setShowDeleteModal] = useState(false); // Modal de confirmación de eliminación
  const [selectedProduct, setSelectedProduct] = useState(null); // Producto seleccionado
  const [showCreateModal, setShowCreateModal] = useState(false); // Modal de creación
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Producto 1", descripcion: "Descripción del producto 1" },
    { id: 2, nombre: "Producto 2", descripcion: "Descripción del producto 2" },
    { id: 3, nombre: "Producto 3", descripcion: "Descripción del producto 3"},
    { id: 4, nombre: "Producto 4", descripcion: "Descripción del producto 4" },
    { id: 5, nombre: "Producto 5", descripcion: "Descripción del producto 5" },
    { id: 6, nombre: "Producto 6", descripcion: "Descripción del producto 6" },
  ]);

  // Función para abrir la modal de edición
  const handleEditClick = (producto) => {
    setSelectedProduct(producto);
    setShowEditModal(true);
  };

  // Función para cerrar la modal de edición
  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedProduct(null);
  };

  // Función para abrir la modal de confirmación de eliminación
  const handleDeleteClick = (producto) => {
    setSelectedProduct(producto);
    setShowDeleteModal(true);
  };

  // Función para cerrar la modal de confirmación de eliminación
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedProduct(null);
  };

  // Función para confirmar la eliminación del producto
  const confirmDelete = () => {
    const nuevosProductos = productos.filter((p) => p.id !== selectedProduct.id);
    setProductos(nuevosProductos);
    setShowDeleteModal(false); // Cierra la modal después de eliminar
    setSelectedProduct(null);
  };

  // Función para abrir la modal de creación
  const handleCreateClick = () => {
    setShowCreateModal(true);
  };

  // Función para cerrar la modal de creación
  const handleCloseCreateModal = () => {
    setShowCreateModal(false);
  };

    return(
        <div className="contProductos">
          <CardMas onClick={handleCreateClick}/>
            {productos.map((producto) => (
        <CardProducto
          key={producto.id}
          producto={producto}
          onEditClick={() => handleEditClick(producto)} // Abre la modal
          onDeleteClick={() => handleDeleteClick(producto)} // Elimina el producto
        />
      ))}

      {/* Modal */}
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          {selectedProduct && (
            <FormEditar 
            producto={selectedProduct} // Pasa el producto seleccionado al formulario
          />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleCloseEditModal}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>

       {/* Modal de confirmación de eliminación */}
       <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} >
        <Modal.Body>
          <h3>Esta seguro de que quiere eliminar el producto?</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={confirmDelete}>
            Sí
          </Button>
          <Button variant="danger" onClick={handleCloseDeleteModal}>
            No
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de creación */}
      <Modal show={showCreateModal} onHide={handleCloseCreateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormCrear />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCreateModal}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
};

export default ProductosAdm;