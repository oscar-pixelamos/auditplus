import React from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import SubMenu from "../SubMenu";
import { SidebarData } from "../SidebarData";
import styled from "styled-components";

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 3rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #01045e;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

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
    console.log("Sidebar Open: " + this.state.open);

    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <div id="top-bar">
        <button onClick={this.showSidebar}>
          <HiMenu className="icon text-white" />
        </button>
        <div>
          <Link to="/" className="d-flex align-items-center justify-content-center">
            <img src={require("../../assets/svg/audit-logo-white.svg")} width="128" alt="logo Audit" />
          </Link>
        </div>
        {this.state.open ? (
          <nav id="sidebar" sidebar={this.state.open}>
            <SidebarWrap>
              <button onClick={this.showSidebar}>
                <HiX className="icon text-white" />
              </button>
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
