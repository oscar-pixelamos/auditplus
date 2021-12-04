import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

  return(
  
    <footer className="text-white py-4 bg-dark">
      <div className="container">
        <nav className="row">
          <Link 
            to="/"
            className="col-12 col-md-3 d-flex aling-items-center justify-content-center">
            <img src="./logoAudit.svg" className="mx-2" height="80" alt="logo audit" />
          </Link>

          <ul className="col-12 col-md-3 list-unstyled">
            <li className="font-weight-bold mb-2">AuditPlus</li>
            <li className="text-center">
              En este sitio web podras encontrar una solucion a ...:</li>
          </ul>

          <ul className="col-12 col-md-3 list-unstyled">
            <li className="font-weight-bold mb-2">Enlaces</li>
            <li>
                 <link to ='./pages/parametrizacion' class='text-reset'> ojo </link>
          </li>
          <li>
                 <link to ='./pages/radicacion' class='text-reset'> ojo </link>
          </li>
          </ul>

          <ul className="col-12 col-md-3 list-unstyled">
            <li className="font-weight-bold mb-2">Síguenos</li>
            <li className="d-flex justify-content-betwen"> 
            <i class="bi bi-instagram"/>
            <i class="bi bi-twitter"/>
            <i class="bi bi-facebook"/>
            <i class="bi bi-youtube"/>
            </li>
          </ul>
          <div className='container'>
              <p className='text-center'>Derechos reservados</p>
          </div>
        </nav>
      </div>
    </footer>
  
  )
}
export default Footer
