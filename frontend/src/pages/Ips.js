import React, { Component } from "react";
import axios from "axios";

export default class Ips extends Component {
  constructor(props) {
    super(props);
    this.onChangenitips = this.onChangenitips.bind(this);
    this.onChangenombreips = this.onChangenombreips.bind(this);
    this.onChangedireccionips = this.onChangedireccionips.bind(this);
    this.onChangetelips = this.onChangetelips.bind(this);
    this.onChangewebips = this.onChangewebips.bind(this);
    this.onChangecontacto = this.onChangecontacto.bind(this);
    this.onChangetelcontacto = this.onChangetelcontacto.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      nitips: "",
      nombreips: "",
      direccionips: "",
      telips: "",
      webips: "",
      contacto: "",
      telcontacto: "",
    };
  }
  onChangenitips(e) {
    this.setState({
      nitips: e.target.value,
    });
  }

  onChangenombreips(e) {
    this.setState({
      nombreips: e.target.value,
    });
  }

  onChangedireccionips(e) {
    this.setState({
      direccionips: e.target.value,
    });
  }

  onChangetelips(e) {
    this.setState({
      telips: e.target.value,
    });
  }

  onChangewebips(e) {
    this.setState({
      webips: e.target.value,
    });
  }

  onChangecontacto(e) {
    this.setState({
      contacto: e.target.value,
    });
  }

  onChangetelcontacto(e) {
    this.setState({
      telcontacto: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Nit Ips: ${this.state.nitips}`);
    console.log(`Nombre Ips: ${this.state.nombreips}`);
    console.log(`Direccion Ips: ${this.state.direccionips}`);
    console.log(`Telefono Ips: ${this.state.telips}`);
    console.log(`Web Ips: ${this.state.webips}`);
    console.log(`Contacto: ${this.state.contacto}`);
    console.log(`Telefono Contacto: ${this.state.telcontacto}`);

    const nuevaips = {
      nitips: this.state.nitips,
      nombreips: this.state.nombreips,
      direccionips: this.state.direccionips,
      telips: this.state.telips,
      webips: this.state.webips,
      contacto: this.state.contacto,
      telcontacto: this.state.telcontacto,
    };

    axios.post("http://localhost:4000/api/nueva-ips", nuevaips).then((res) => console.log(res.data));

    this.setState({
      nitips: "",
      nombreips: "",
      direccionips: "",
      telips: "",
      webips: "",
      contacto: "",
      telcontacto: "",
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10, marginLeft: 300 }}>
        <h3 id="titulo">Ips</h3>
        <br></br>
        <form onSubmit={this.onSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="form-group  ">
                  <label id="nombrecampo">Nit: </label>
                  <div>
                    <div>
                      <input type="text" className="form-control my-2" value={this.state.nitips} onChange={this.onChangenitips} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm">
                <div className="form-group  ">
                  <label id="nombrecampo">Razón Social: </label>
                  <div>
                    <div>
                      <input type="text" className="form-control my-2" value={this.state.nombreips} onChange={this.onChangenombreips} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm">
                <div className="form-group  ">
                  <label id="nombrecampo">Dirección: </label>
                  <div>
                    <div>
                      <input type="text" className="form-control my-2" value={this.state.direccionips} onChange={this.onChangedireccionips} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm">
                <div className="form-group  ">
                  <label id="nombrecampo">Teléfono: </label>
                  <div>
                    <div>
                      <input type="text" className="form-control my-2" value={this.state.telips} onChange={this.onChangetelips} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm">
                <div className="form-group  ">
                  <label id="nombrecampo">Web : </label>
                  <div>
                    <div>
                      <input type="text" className="form-control my-2" value={this.state.webips} onChange={this.onChangewebips} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm">
                <div className="form-group  ">
                  <label id="nombrecampo">Nombre de Contacto </label>
                  <div>
                    <div>
                      <input type="text" className="form-control my-2" value={this.state.contacto} onChange={this.onChangecontacto} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group  ">
              <label id="nombrecampo">Teléfono de Contacto: </label>
              <div className="row g-4">
                <div className="col-sm-3">
                  <input type="text" className="form-control my-2" value={this.state.telcontacto} onChange={this.onChangetelcontacto} />
                </div>
              </div>
            </div>

            <br></br>
            <div className="form-group">
              <input type="submit" value="Crear" className="btn btn-primary btn-sm" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
