import React from "react";
import Sidebar from "./components/new/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/Home";
import Parametrizacion from "./pages/Parametrizacion";
import Radicacion from "./pages/Radicacion";
import Trazabilidad from "./pages/Trazabilidad";
import Reportes from "./pages/Reportes";
import Soporte from "./pages/Soporte";
import Tipocontrato from "./pages/Tipocontrato";
import Contratos from "./pages/Contratos";
import Roles from "./pages/Roles";
import Usuarios from "./pages/Usuarios";
import Ips from "./pages/Ips";
import Tipodevolucion from "./pages/Tipodevolucion";
import Modificaroles from "./pages/Modificaroles";
import Registro from "./pages/Registro";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: {},
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  checkAuthentication() {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      return;
    }
    axios
      .get("http://localhost:4000/api/users/auth", { headers: { "auth-token": token } })
      .then((res) => {
        if (!this.state.isLoggedIn) {
          this.setState({ isLoggedIn: true, user: res.data.user });
        }
      })
      .catch(({ response }) => {
        if (this.state.isLoggedIn) {
          this.setState({ isLoggedIn: false, user: {} });
        }
      });
  }

  componentDidMount() {
    this.checkAuthentication();
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  handleLogin(data) {
    this.setState({
      isLoggedIn: true,
      user: data.user,
    });
  }

  render() {
    return (
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={this.state.isLoggedIn ? Home : Login} />
          <Route path="/parametrizacion" exact component={this.state.isLoggedIn ? Parametrizacion : Login} />
          <Route path="/registro" exact component={this.state.isLoggedIn ? Registro : Login} />
          <Route path="/parametrizacion/roles" exact component={this.state.isLoggedIn ? Roles : Login} />
          <Route path="/parametrizacion/usuarios" exact component={this.state.isLoggedIn ? Usuarios : Login} />
          <Route path="/parametrizacion/tipocontrato" exact component={this.state.isLoggedIn ? Tipocontrato : Login} />
          <Route path="/parametrizacion/ips" exact component={this.state.isLoggedIn ? Ips : Login} />
          <Route path="/parametrizacion/tipodevolucion" exact component={this.state.isLoggedIn ? Tipodevolucion : Login} />
          <Route path="/contratos" exact component={this.state.isLoggedIn ? Contratos : Login} />
          <Route path="/radicacion" exact component={this.state.isLoggedIn ? Radicacion : Login} />
          <Route path="/trazabilidad" exact component={this.state.isLoggedIn ? Trazabilidad : Login} />
          <Route path="/reportes" exact component={this.state.isLoggedIn ? Reportes : Login} />
          <Route path="/soporte" exact component={this.state.isLoggedIn ? Soporte : Login} />
          <Route path="/modificaroles" exact component={this.state.isLoggedIn ? Modificaroles : Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;
