import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert";

export default class Roles extends Component {
  constructor(props) {
    super(props);
    this.onChangenomusuario = this.onChangenomusuario.bind(this);
    this.onChangecontrasena = this.onChangecontrasena.bind(this);
    this.onChangetipoid = this.onChangetipoid.bind(this);
    this.onChangeidentificacion = this.onChangeidentificacion.bind(this);
    this.onChangenombreusuario = this.onChangenombreusuario.bind(this);
    this.onChangerol = this.onChangerol.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nomusuario: "",
      contrasena: "",
      tipoid: "",
      identificacion: "",
      nombreusuario: "",
      rol: "",
    };
  }

  onChangenomusuario(e) {
    this.setState({
      nomusuario: e.target.value,
    });
  }

  onChangecontrasena(e) {
    this.setState({
      contrasena: e.target.value,
    });
  }

  onChangetipoid(e) {
    this.setState({
      tipoid: e.target.value,
    });
  }

  onChangeidentificacion(e) {
    this.setState({
      identificacion: e.target.value,
    });
  }

  onChangenombreusuario(e) {
    this.setState({
      nombreusuario: e.target.value,
    });
  }

  onChangerol(e) {
    this.setState({
      rol: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Usuario: ${this.state.nomusuario}`);
    console.log(`Contrasena: ${this.state.contrasena}`);
    console.log(`Tipo de Identificacion: ${this.state.tipoid}`);
    console.log(`Identificacion: ${this.state.identificacion}`);
    console.log(`Nombre Completo: ${this.state.nombreusuario}`);
    console.log(`Rol: ${this.state.rol}`);

    const usuarioNuevo = {
      nomusuario: this.state.nomusuario,
      contrasena: this.state.contrasena,
      tipoid: this.state.tipoid,
      identificacion: this.state.identificacion,
      nombreusuario: this.state.nombreusuario,
      rol: this.state.rol,
    };

    axios.post("http://localhost:4000/api/usuarioNuevo", usuarioNuevo).then((res) => console.log(res.data));
    Swal({
      title: "Registro creado satisfactoriamente",
      icon: "success",
      button: "Aceptar",
    });

    this.setState({
      nomusuario: "",
      contrasena: "",
      tipoid: "",
      identificacion: "",
      nombreusuario: "",
      rol: "",
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10, marginLeft: 300 }}>
        <h3 id="titulo">
          <br></br>
          <b>Usuarios</b>
        </h3>
        <br></br>
        <form onSubmit={this.onSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="form-group ">
                  <label id="nombrecampo">Usuario:</label>
                  <div>
                    <div>
                      <input type="text" name="Usuario" className="form-control my-2" value={this.state.nomusuario} onChange={this.onChangenomusuario} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm">
                <div className="form-group">
                  <label id="nombrecampo">
                    <b>Contraseña</b>
                  </label>
                  <div>
                    <div>
                      <input type="text" name="Contrasena" className="form-control" value={this.state.contrasena} onChange={this.onChangecontrasena} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm">
                <div className="form-group">
                  <label id="nombrecampo">
                    <b>Tipo de Identificación</b>
                  </label>
                  <div>
                    <div>
                      <select className="form-select" name="TipoId" value={this.state.tipoid} onChange={this.onChangetipoid}>
                        <option value="CC">Cédula de Ciudadanía</option>
                        <option value="PA">Pasaporte</option>
                        <option value="CE">Cedula de Extranjeria</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>

              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    <div className="form-group">
                      <label id="nombrecampo">
                        <b>Identificación</b>
                      </label>
                      <div>
                        <div>
                          <input type="text" name="Identificacion" className="form-control" value={this.state.identificacion} onChange={this.onChangeidentificacion} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm">
                    <div className="form-group">
                      <label id="nombrecampo">
                        <b>Nombre Completo</b>
                      </label>
                      <div>
                        <div>
                          <input type="text" name="Nombreusuario" className="form-control" value={this.state.nombreusuario} onChange={this.onChangenombreusuario} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm">
                    <div className="form-group">
                      <label id="nombrecampo">
                        <b>Rol</b>
                      </label>
                      <div>
                        <div>
                          <input type="text" name="Rol" className="form-select" value={this.state.rol} onChange={this.onChangerol} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <br></br>
              <div className="form-group">
                <br></br>
                <input type="submit" value="Crear" className="btn btn-primary btn-sm" />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
