import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert";

export default class Tipocontrato extends Component {
  constructor(props) {
    super(props);
    this.onChangecodtipocontrato = this.onChangecodtipocontrato.bind(this);
    this.onChangedesctipocontrato = this.onChangedesctipocontrato.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      codtipocontrato: "",
      nombretipocontrato: "",
    };
  }
  onChangecodtipocontrato(e) {
    this.setState({
      codtipocontrato: e.target.value,
    });
  }

  onChangedesctipocontrato(e) {
    this.setState({
      nombretipocontrato: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Código Tipo contrato: ${this.state.codtipocontrato}`);
    console.log(`Descripción Tipo contrato: ${this.state.nombretipocontrato}`);

    const nuevotipocontrato = {
      codtipocontrato: this.state.codtipocontrato,
      nombretipocontrato: this.state.nombretipocontrato,
    };

    axios.post("http://localhost:4000/api/nuevo-tipocontrato", nuevotipocontrato).then((res) => console.log(res.data));

    Swal({
      title: "Registro creado satisfactoriamente",
      icon: "success",
      button: "Aceptar",
    });

    this.setState({
      codtipocontrato: "",
      nombretipocontrato: "",
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10, marginLeft: 300 }}>
        <br></br>
        <h3 id="titulo">Tipos de Contrato</h3>
        <br></br>
        <form onSubmit={this.onSubmit}>
          <div className="form-group  ">
            <label id="nombrecampo">Código : </label>
            <div className="row g-4">
              <div className="col-sm-3">
                <input type="text" className="form-control my-2" value={this.state.codtipocontrato} onChange={this.onChangecodtipocontrato} />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label id="nombrecampo">Descripción : </label>
            <div className="row g-4">
              <div className="col-sm-3">
                <input type="text" className="form-control" value={this.state.nombretipocontrato} onChange={this.onChangedesctipocontrato} />
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
