import React from "react";
import "./carousel.scss";
const Carousel = () => {
  return (
    <div id="carousel" className="d-flex align-items-center">
      <div className="container d-flex flex-column gap-4 py-4">
        <h1 className="text-center ">Bienvendos a AuditPlus</h1>
        <div className="d-flex justify-content-center">
          <img src="./logoAudit.svg" width="450" alt="logo Audit" />
        </div>

        <h2 className="text-center"> Aplicación web para gestión y auditoría de facturación médica</h2>
      </div>
    </div>
  );
};
export default Carousel;
