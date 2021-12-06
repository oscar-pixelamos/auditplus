import React from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";
import { HiMenu, HiX,HiUserCircle } from "react-icons/hi";
import SubMenu from "../SubMenu";
import { SidebarData } from "../SidebarData";
import styled from "styled-components";
import audit_logo from "../../assets/svg/audit-logo-white.svg";
const SidebarWrap = styled.div`
  width: 100%;
`;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.showSidebar = this.showSidebar.bind(this);
  }

  showSidebar(event) {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    let icon = !this.state.open ? <HiMenu className="icon text-white" /> : <HiX className="icon text-white" />;

    return (
      <div id="top-bar">
        <button onClick={this.showSidebar}>{icon}</button>
        <div>
          <Link to="/" className="d-flex align-items-center justify-content-center">
            <img src={audit_logo} width="128" alt="logo Audit" />
          </Link>
        </div>
        <div>
          <Link to="/" className="d-flex align-items-center justify-content-center">          </Link>
          <Link to="/login"><div className="d-flex align-items-center gap-2 text-white"><b>Iniciar Sesión</b> <HiUserCircle className="icon text-white"/></div></Link>
        </div>
        {this.state.open ? (
          <nav id="sidebar">
            <SidebarWrap>
              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </SidebarWrap>
          </nav>
        ) : null}
      </div>
    );
  }
}

export default Sidebar;
