import React from "react";
//import { Link } from "react-router-dom";
import { BsWhatsapp, BsFacebook, BsInstagram, BsYoutube, BsLinkedin } from "react-icons/bs";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="d-flex justify-content-center align-items-center border-top">
      <div className="container row row-cols-5 py-5 my-5">
        <div className="col-2 d-flex flex-column gap-2">
          <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
            <img src={require("../../assets/svg/audit-logo-white.svg")} width="128" alt="logo Audit" />
          </a>
          <div id="social-links" className="d-flex gap-2">
            <BsWhatsapp />
            <BsFacebook />
            <BsInstagram />
            <BsYoutube />
            <BsLinkedin />
          </div>
          <p>Todos los derechos reservados © Audit+ 2021</p>
        </div>

        <div className="col"></div>

        <div className="col">
          <h4>Contáctenos</h4>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/" className="  p-0  ">
                auditplus.co@gmail.com
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="  p-0  ">
                Teléfonos: 3176468544 - 3177348057 - 3166068219 - 3007136693 - 3176676462
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="  p-0  ">
                Bogotá, Colombia
              </a>
            </li>
          </ul>
        </div>

        <div className="col">
          <h4>Nosotros</h4>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/" className="p-0">
                Quiénes Somos
              </a>
            </li>
          </ul>
        </div>

        <div className="col">
          <h4>Legal</h4>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/" className="  p-0  ">
                Términos y condiciones
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="  p-0  ">
                Política de Habeas Data
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
