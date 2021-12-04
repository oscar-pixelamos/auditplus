import React from "react";
import Sidebar from "./components/new/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/Home";
import { Parametrizacion } from "./pages/Parametrizacion";
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
//import Carousel from './components/carousel/Carousel.js';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/parametrizacion" exact component={Parametrizacion} />
        <Route path="/registro" exact component={Registro} />
        <Route path="/parametrizacion/roles" component={Roles} />
        <Route path="/parametrizacion/usuarios" component={Usuarios} />
        <Route path="/parametrizacion/tipocontrato" component={Tipocontrato} />
        <Route path="/parametrizacion/ips" component={Ips} />
        <Route path="/parametrizacion/tipodevolucion" component={Tipodevolucion} />
        <Route path="/contratos" exact component={Contratos} />
        <Route path="/radicacion" exact component={Radicacion} />
        <Route path="/trazabilidad" exact component={Trazabilidad} />
        <Route path="/reportes" exact component={Reportes} />
        <Route path="/soporte" exact component={Soporte} />
        <Route path="/modificaroles" exact component={Modificaroles} />
      </Switch>
    </Router>
  );
}

export default App;
