import React from "react";
import axios from "axios";
import Swal from "sweetalert";

class Contratos extends React.Component {
  constructor(props) {
    super(props);
    this.onChangecodcontratos = this.onChangecodcontratos.bind(this);
    this.onChangedesccontratos = this.onChangedesccontratos.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      codcontratos: "",
      nombrecontratos: "",
    };
  }
  onChangecodcontratos(e) {
    this.setState({
      codcontratos: e.target.value,
    });
  }

  onChangedesccontratos(e) {
    this.setState({
      nombrecontratos: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Código Tipo contrato: ${this.state.codcontratos}`);
    console.log(`Descripción Tipo contrato: ${this.state.nombrecontratos}`);

    const nuevocontrato = {
      codcontratos: this.state.codcontratos,
      nombrecontratos: this.state.nombrecontratos,
    };

    axios.post("http://localhost:4000/api/nuevo-contrato", nuevocontrato).then((res) => console.log(res.data));

    Swal({
      title: "Registro creado satisfactoriamente",
      icon: "success",
      button: "Aceptar",
    });

    this.setState({
      codcontratos: "",
      nombrecontratos: "",
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10, marginLeft: 250 }}>
        <h3 id="titulo">
          <b>Contratos</b>
        </h3>
        <br></br>
        <form onSubmit={this.onSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="form-group ">
                  <label id="nombrecampo">
                    <b>N° del Contrato </b>{" "}
                  </label>
                  <div>
                    <div>
                      <input type="text" className="form-control my-3" value={this.state.codcontratos} onChange={this.onChangecodcontratos} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm">
                <div className="form-group ">
                  <label id="nombrecampo">
                    <b>Valor del Contrato : </b>{" "}
                  </label>
                  <div>
                    <div>
                      <input type="text" className="form-control my-3" value={this.state.valcontratos} onChange={this.onChangevalcontratos} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="form-group">
                  <label id="nombrecampo">
                    <b>Fecha de inicio </b>{" "}
                  </label>
                  <div>
                    <div>
                      <input type="date" className="form-control" value={this.state.fechinicontratos} onChange={this.onChangefechinicontratos} />
                    </div>
                  </div>
                </div>
              </div>
              <br></br>

              <div className="col-sm">
                <div className="form-group">
                  <label id="nombrecampo">
                    <b>Fecha final </b>
                  </label>
                  <div>
                    <div>
                      <input type="date" className="form-control" value={this.state.fechfincontratos} onChange={this.onChangefechfincontratos} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="form-group">
                  <label id="nombrecampo">
                    <b>Nivel</b>{" "}
                  </label>
                  <div>
                    <div>
                      <select className="form-select" name="Nivel" value={this.state.tipoid} onChange={this.onChangetipoid}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm">
                <div className="form-group">
                  <label id="nombrecampo">
                    <b>IPS</b>
                  </label>
                  <div>
                    <div>
                      <select className="form-select" name="Ips" value={this.state.tipoid} onChange={this.onChangetipoid}>
                        <option value="1">xyz</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="form-group">
                  <label id="nombrecampo">
                    <b>Tipo de contrato</b>
                  </label>
                  <div className="row g-4">
                    <div className="col-sm-6">
                      <select className="form-select" name="Tipo de Contrato" value={this.state.tipoid} onChange={this.onChangetipoid}>
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <br></br>
            <div className="form-group">
              <input type="submit" value="Guardar" className="btn btn-primary btn-sm" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Contratos;
