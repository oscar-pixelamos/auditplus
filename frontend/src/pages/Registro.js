import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import axios from "axios";

function Reg() {
  // Agregar usuarios
  const usersData = [
    { id: uuidv4(), name: "Francy", username: "fransal" },
    { id: uuidv4(), name: "Monica", username: "monidor" },
    { id: uuidv4(), name: "Edith", username: "edibetan" },
    { id: uuidv4(), name: "Vilmary", username: "fervilmary" },
    { id: uuidv4(), name: "Luz", username: "lamoreno" },
  ];

  const [users, setUsers] = useState(usersData);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [setSuccess] = useState(false);
  const [setToken] = useState(null);
  const [usuarioNuevo] = useState(null);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState({
    id: "",
    name: "",
    username: "",
  });

  const seleccionarUsuario = (elemento, caso) => {
    setUsuarioSelecionado(elemento);
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuarioSelecionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const editar = () => {
    var usuarioNuevo = users;
    var usuarios = usuarioNuevo.map((user) => {
      if (user.id === usuarioSelecionado.id) {
        user.name = usuarioSelecionado.name;
        user.username = usuarioSelecionado.username;
        return user;
      } else {
        return null;
      }
    });
    setUsers(usuarios);
    setModalEditar(false);
  };

  const eliminar = () => {
    setUsers(users.filter((user) => user.id !== usuarioSelecionado.id));
    setModalEliminar(false);
  };

  const abrirModalInsertar = () => {
    setUsuarioSelecionado(null);
    setModalInsertar(true);
  };

  const insertar = () => {
    var usuarioInsertar = usuarioSelecionado;
    usuarioInsertar.id = uuidv4();
    var usuarioNuevo = users;
    usuarioNuevo.push(usuarioInsertar);
    setUsers(usuarioNuevo);
    setModalInsertar(false);
  };

  // ... conexion a la base de datos,

  axios
    .post("http://localhost:4000/api/usuarionuevo", usuarioNuevo)
    .then(function (response) {
      console.log("registro exitoso");
      setSuccess(response.data.success);
      setToken(response.data.token);
      this.setState({
        nomusuario: "",
        contrasena: "",
        tipoid: "",
        identificacion: "",
        nombreusuario: "",
        rol: "",
      });
      //llamar a la otra vista
    })
    .catch(function (error) {
      console.log(error);
      console.log("Usuario no registrado");
    });

  return (
    <div className="container">
      <h1>CRUD Usuarios</h1>
      <br />
      <button className="btn btn-success" onClick={() => abrirModalInsertar()}>
        Insertar
      </button>
      <br /> <br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>UserName</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((elemento) => (
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.name}</td>
              <td>{elemento.username}</td>
              <td>
                <button className="btn btn-primary" onClick={() => seleccionarUsuario(elemento, "Editar")}>
                  Editar
                </button>{" "}
                {"   "}
                <button className="btn btn-danger" onClick={() => seleccionarUsuario(elemento, "Eliminar")}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Usuario</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input className="form-control" readOnly type="text" name="id" value={usuarioSelecionado && usuarioSelecionado.id} />
            <br />

            <label>Nombre</label>
            <input className="form-control" type="text" name="name" value={usuarioSelecionado && usuarioSelecionado.name} onChange={handleChange} />
            <br />

            <label>UserName</label>
            <input className="form-control" type="text" name="username" value={usuarioSelecionado && usuarioSelecionado.username} onChange={handleChange} />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => editar()}>
            Actualizar
          </button>
          <button className="btn btn-danger" onClick={() => setModalEditar(false)}>
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={modalEliminar}>
        <ModalBody>Estás Seguro que deseas eliminar el usuario {usuarioSelecionado && usuarioSelecionado.name}</ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={() => eliminar()}>
            Sí
          </button>
          <button className="btn btn-secondary" onClick={() => setModalEliminar(false)}>
            No
          </button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar Usuario</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <input className="form-control" readOnly type="hidden" name="id" value="" />
            <br />

            <label>Nombre</label>
            <input className="form-control" type="text" name="name" value={usuarioSelecionado ? usuarioSelecionado.name : ""} onChange={handleChange} />
            <br />

            <label>UserName</label>
            <input className="form-control" type="text" name="username" value={usuarioSelecionado ? usuarioSelecionado.username : ""} onChange={handleChange} />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => insertar()}>
            Insertar
          </button>
          <button className="btn btn-danger" onClick={() => setModalInsertar(false)}>
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Reg;
