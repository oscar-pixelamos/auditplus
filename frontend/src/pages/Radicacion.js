import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert";
//import { Col, Container } from "reactstrap";

export default class Radicacion extends Component {
  constructor(props) {
    super(props);
    this.onChangenoradicacion = this.onChangenoradicacion.bind(this);
    this.onChangenitips = this.onChangenitips.bind(this);
    this.onChangeprefijo = this.onChangeprefijo.bind(this);
    this.onChangenofactura = this.onChangenofactura.bind(this);
    this.onChangenivel = this.onChangenivel.bind(this);
    this.onChangetipoid = this.onChangetipoid.bind(this);
    this.onChangeidpaciente = this.onChangeidpaciente.bind(this);
    this.onChangenombrepaciente = this.onChangenombrepaciente.bind(this);
    this.onChangefechafactura = this.onChangefechafactura.bind(this);
    this.onChangevalorfactura = this.onChangevalorfactura.bind(this);
    this.onChangeestado = this.onChangeestado.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      noradicacion: "",
      nitips: "",
      prefijo: "",
      nofactura: "",
      nivel: "",
      tipoid: "",
      idpaciente: "",
      nombrepaciente: "",
      fechafactura: "",
      valorfactura: "",
      estado: "",
    };
  }
  onChangenoradicacion(e) {
    this.setState({
      noradicacion: e.target.value,
    });
  }

  onChangenitips(e) {
    this.setState({
      nitips: e.target.value,
    });
  }

  onChangeprefijo(e) {
    this.setState({
      prefijo: e.target.value,
    });
  }

  onChangenofactura(e) {
    this.setState({
      nofactura: e.target.value,
    });
  }

  onChangenivel(e) {
    this.setState({
      nivel: e.target.value,
    });
  }

  onChangetipoid(e) {
    this.setState({
      tipoid: e.target.value,
    });
  }

  onChangeidpaciente(e) {
    this.setState({
      idpaciente: e.target.value,
    });
  }

  onChangenombrepaciente(e) {
    this.setState({
      nombrepaciente: e.target.value,
    });
  }

  onChangefechafactura(e) {
    this.setState({
      fechafactura: e.target.value,
    });
  }

  onChangevalorfactura(e) {
    this.setState({
      valorfactura: e.target.value,
    });
  }

  onChangeestado(e) {
    this.setState({
      estado: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Numero Radicacion: ${this.state.noradicacion}`);
    console.log(`Nit Ips: ${this.state.nitips}`);
    console.log(`Prefijo: ${this.state.prefijo}`);
    console.log(`Numero de Facura: ${this.state.nofactura}`);
    console.log(`Nivel: ${this.state.nivel}`);
    console.log(`Tipo Id: ${this.state.tipoid}`);
    console.log(`Id Paciente: ${this.state.idpaciente}`);
    console.log(`Nombre del Paciente: ${this.state.nombrepaciente}`);
    console.log(`Fecha Factura Paciente: ${this.state.fechafactura}`);
    console.log(`Valor  Factura: ${this.state.valorfactura}`);
    console.log(`Estado: ${this.state.estado}`);

    const nuevafactura = {
      noradicacion: this.state.noradicacion,
      nitips: this.state.nitips,
      prefijo: this.state.prefijo,
      nofactura: this.state.nofactura,
      nivel: this.state.nivel,
      tipoid: this.state.tipoid,
      idpaciente: this.state.idpaciente,
      nombrepaciente: this.state.nombrepaciente,
      fechafactura: this.state.fechafactura,
      valorfactura: this.state.valorfactura,
      estado: this.state.estado,
    };

    axios.post("http://localhost:4000/api/nueva-factura", nuevafactura).then((res) => console.log(res.data));
    Swal({
      title: "Factura radicada satisfactoriamente",
      icon: "success",
      button: "Aceptar",
    });

    this.setState({
      noradicacion: "",
      nit: "",
      prefijo: "",
      nofactura: "",
      nivel: "",
      tipoid: "",
      idpaciente: "",
      nombrepaciente: "",
      fechafactura: "",
      valorfactura: "",
      estado: "",
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10, marginLeft: 350 }}>
        <h1 id="titulo">
          <br></br>
          <b>RADICACION</b>
        </h1>
        <br></br>
        <form onSubmit={this.onSubmit}>
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <div className="form-group  ">
                  <label id="nombrecampo">Número de Radicación: </label>
                  <div>
                    <div>
                      <input type="text" className="form-control my-2" value={this.state.noradicacion} onChange={this.onChangenoradicacion} />
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm">
                <div className="form-group  ">
                  <label id="nombrecampo">Nit Ips: </label>
                  <div>
                    <div>
                      <input type="text" className="form-control my-2" value={this.state.nitips} onChange={this.onChangenitips} />
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm">
                <div className="form-group  ">
                  <label id="nombrecampo">Prefijo</label>
                  <div>
                    <div>
                      <input type="text" className="form-control my-2" value={this.state.prefijo} onChange={this.onChangeprefijo} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-sm">
                <div className="form-group  ">
                  <label id="nombrecampo">N° Factura: </label>
                  <div>
                    <div>
                      <input type="text" className="form-control my-2" value={this.state.nofactura} onChange={this.onChangenofactura} />
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm">
                <div className="form-group">
                  <label id="nombrecampo">
                    <b>Nivel</b>
                  </label>
                  <div>
                    <div>
                      <select class="form-select" name="Nivel" value={this.state.tipoid} onChange={this.onChangetipoid}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm">
                <div className="form-group">
                  <label id="nombrecampo">
                    <b>Tipo Id</b>
                  </label>
                  <div>
                    <div>
                      <select class="form-select" name="TipoId" value={this.state.tipoid} onChange={this.onChangetipoid}>
                        <option value="CC">Cédula de Ciudadanía</option>
                        <option value="PA">Pasaporte</option>
                        <option value="CE">Cedula de Extranjeria</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-sm">
                <div className="form-group  ">
                  <label id="nombrecampo">Id Paciente: </label>
                  <div>
                    <div>
                      <input type="text" className="form-control my-2" value={this.state.idpaciente} onChange={this.onChangeidpaciente} />
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm">
                <div className="form-group  ">
                  <label id="nombrecampo">Nombre Paciente : </label>
                  <div>
                    <div>
                      <input type="texto" className="form-control my-2" value={this.state.nombrepaciente} onChange={this.onChangenombrepaciente} />
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm">
                <div className="form-group  ">
                  <label id="nombrecampo">Fecha Factura </label>
                  <div>
                    <div>
                      <input type="date" className="form-control my-2" value={this.state.fechafactura} onChange={this.onChangefechafactura} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <div className="form-group  ">
                  <label id="nombrecampo">Valor Factura: </label>
                  <div>
                    <div>
                      <input type="text" className="form-control my-2" value={this.state.valorfactura} onChange={this.onChangevalorfactura} />
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-4">
                <div className="form-group  ">
                  <label id="nombrecampo">Estado: </label>
                  <div>
                    <div>
                      <input type="text" className="form-control my-2" value={this.state.estado} onChange={this.onChangestado} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <br></br>
            <div className="form-group">
              <input type="submit" value="Radicar Factura" className="btn btn-primary btn-sm" />
            </div>
          </div>
        </form>
        {/*
        <Container>
          <Col sm="6">
            <h4>Facturas Radicadas</h4>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>No. radicación</th>
                  <th>Nit Ips</th>
                  <th>Prefijo</th>
                  <th>No. factura</th>
                  <th>Nivel</th>
                  <th>Tipo id</th>
                  <th>Id paciente</th>
                  <th>Nombre paciente</th>
                  <th>Fecha Factura</th>
                  <th>Valor Factura</th>
                  <th>Radicar</th>
                </tr>
              </thead>
              <tbody>
                {this.state.factura.map((factura) => {
                  return (
                    <tr key={factura._id}>
                      <td>{factura.noradicacion}</td>
                      <td>{factura.nit}</td>
                      <td>{factura.prefijo}</td>
                      <td>{factura.nofacura}</td>
                      <td>{factura.nivel}</td>
                      <td>{factura.tipoid}</td>
                      <td>{factura.idpaciente}</td>
                      <td>{factura.nombrepaciente}</td>
                      <td>{factura.fechafactura}</td>
                      <td>{factura.valorfactura}</td>
                      <td>{factura.estado}</td>
                      <td>
                        <button onClick={() => this.editfactura(factura._id)} type="button" className="btn btn-info">
                          Editar
                        </button>
                        <button onClick={() => this.deletefactura(factura._id)} type="button" className="btn btn-danger">
                          Borrar
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Container>*/}
      </div>
    );
  }
}
