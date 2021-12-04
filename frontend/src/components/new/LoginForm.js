import React from "react";
import axios from "axios";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import "./Forms.scss";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  onChangePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onSubmit(event) {
    this.onLogin();
    this.resetForm();
    event.preventDefault();
  }

  onLogin() {
    axios
      .post("http://localhost:4000/api/users/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        this.props.history.push("/home");
      });
  }

  resetForm() {
    this.setState({
      email: "",
      password: "",
    });
  }

  render() {
    return (
      <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <Form id="login-form" onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="email">Correo de Usuario</Label>
            <Input id="email" type="text" placeholder="Ingresa tu correo electrónico" onChange={this.onChangeEmail} autoComplete="email" />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input id="password" type="password" name="password" placeholder="Ingresa tu contraseña" onChange={this.onChangePassword} autoComplete="password" />
          </FormGroup>
          <Button color="primary" className="align-self-center">
            Enviar
          </Button>
        </Form>
      </div>
    );
  }
}

export default LoginForm;
