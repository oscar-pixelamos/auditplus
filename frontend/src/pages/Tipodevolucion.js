import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert";

export default class Tipodevolucion extends Component {
  constructor(props) {
    super(props);
    this.onChangecoddevolucion = this.onChangecoddevolucion.bind(this);
    this.onChangenombredevolucion = this.onChangenombredevolucion.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      coddevolucion: "",
      nombredevolucion: "",
    };
  }
  onChangecoddevolucion(e) {
    this.setState({
      coddevolucion: e.target.value,
    });
  }

  onChangenombredevolucion(e) {
    this.setState({
      nombredevolucion: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Código Tipo Devolución: ${this.state.coddevolucion}`);
    console.log(`nombre Tipo Devolución: ${this.state.nombredevolucion}`);

    const nuevotipodevolucion = {
      coddevolucion: this.state.coddevolucion,
      nombredevolucion: this.state.nombredevolucion,
    };

    axios.post("http://localhost:4000/api/nuevo-coddev", nuevotipodevolucion).then((res) => console.log(res.data));

    Swal({
      title: "Registro creado satisfactoriamente",
      icon: "success",
      button: "Aceptar",
    });

    this.setState({
      coddevolucion: "",
      nombredevolucion: "",
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10, marginLeft: 300 }}>
        <br></br>
        <h3 id="titulo">Tipos de Devolución</h3>
        <br></br>
        <form onSubmit={this.onSubmit}>
          <div className="form-group  ">
            <label id="nombrecampo">Código : </label>
            <div className="row g-4">
              <div className="col-sm-3">
                <input type="text" className="form-control my-2" value={this.state.coddevolucion} onChange={this.onChangecoddevolucion} />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label id="nombrecampo">Descripción : </label>
            <div className="row g-4">
              <div className="col-sm-3">
                <input type="text" className="form-control" value={this.state.nombredevoluciondevolucion} onChange={this.onChangenombredevolucion} />
              </div>
            </div>
          </div>

          <br></br>
          <div className="form-group">
            <input type="submit" value="Crear" className="btn btn-primary btn-sm" />
          </div>
        </form>
      </div>
    );
  }
}
