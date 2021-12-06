import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align: 20px;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;

  &:hover {
    background: #3e93cb;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 8px;
`;

const DropdownLink = styled(Link)`
  background: #1a237e;
  height: 60px;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #e8e8e8;

  &:hover {
    background: #ffffff;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div className="d-flex align-items-center gap-3">
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
          <div>{item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}</div>
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index} className="d-flex align-items-center gap-3">
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
