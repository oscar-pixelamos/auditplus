import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

class EditaRol extends React.Component {
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

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/:_id" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          codrol: res.data.name,
          nombrerol: res.data.email,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangecodrol(e) {
    this.setState({ codrol: e.target.value });
  }

  onChangenombrerol(e) {
    this.setState({ nombrerol: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const RolObject = {
      codrol: this.state.codrol,
      nombrerol: this.state.nombrerol,
    };
    axios
      .put("http://localhost:4000/Rols/api/:id" + this.props.match.params.id, RolObject)
      .then((res) => {
        console.log(res.data);
        console.log("Rol successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });

    // Redirect to Rol List
    this.props.history.push("/Rol-list");
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Codigo">
            <Form.Label>Codigo</Form.Label>
            <Form.Control type="text" value={this.state.codrol} onChange={this.onChangecodrol} />
          </Form.Group>

          <Form.Group controlId="Nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" value={this.state.nombrerol} onChange={this.onChangenombrerol} />
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            {" "}
            Update Rol{" "}
          </Button>
        </Form>
      </div>
    );
  }
}
export default EditaRol;
