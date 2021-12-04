import React from "react";
import { useHistory } from "react-router-dom";
import LoginForm from "../components/new/LoginForm";

const login = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-h-100">
      <img src="./logoAudit.svg" width="350" alt="logo Audit" className="my-4" />
      <LoginForm history={useHistory()} />
    </div>
  );
};

export default login;
