import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/new/LoginForm";

const login = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-h-100">
      <img src="./logoAudit.svg" width="350" alt="logo Audit" className="my-4" />
      <LoginForm history={useNavigate()} />
    </div>
  );
};

export default login;
