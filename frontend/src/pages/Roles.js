import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert";

export default class Roles extends Component {
  constructor(props) {
    super(props);
    this.onChangecodrol = this.onChangecodrol.bind(this);
    this.onChangenombrerol = this.onChangenombrerol.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      codrol: "",
      nombrerol: "",
    };
  }
  onChangecodrol(e) {
    this.setState({
      codrol: e.target.value,
    });
  }

  onChangenombrerol(e) {
    this.setState({
      nombrerol: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Código Tipo contrato: ${this.state.codrol}`);
    console.log(`nombreripción Tipo contrato: ${this.state.nombrerol}`);

    const nuevorol = {
      codrol: this.state.codrol,
      nombrerol: this.state.nombrerol,
    };

    axios.post("http://localhost:4000/api/nuevo-rol", nuevorol).then((res) => console.log(res.data));
    Swal({
      title: "Registro creado satisfactoriamente",
      icon: "success",
      button: "Aceptar",
    });

    this.setState({
      codrol: "",
      nombrerol: "",
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10, marginLeft: 320 }}>
        <br></br>
        <h3 id="titulo">Rol</h3>
        <br></br>
        <form onSubmit={this.onSubmit}>
          <div className="form-group  ">
            <label id="nombrecampo">Código : </label>
            <div className="row g-4">
              <div className="col-sm-3">
                <input type="text" className="form-control my-2" value={this.state.codrol} onChange={this.onChangecodrol} />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label id="nombrecampo">Nombre : </label>
            <div className="row g-4">
              <div className="col-sm-3">
                <input type="text" className="form-control" value={this.state.nombrerol} onChange={this.onChangenombrerol} />
              </div>
            </div>
          </div>

          <div className="form-group">
            <br></br>
            <input type="submit" value="Crear" className="btn btn-primary btn-sm " />
            <input type="submit" value="Listar" className="btn btn-primary btn-sm" />
          </div>
        </form>
      </div>
    );
  }
}
