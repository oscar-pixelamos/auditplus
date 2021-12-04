import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align: 20px;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 20px;

    &:hover {
        background: #fafbfc;
        border-left: 4px solid #632ce4;
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;
`;

const DropdownLink = styled(Link)`
    background: #1A237E;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #e8e8e8;
    font-size: 18px;

    &:hover {
        background: #11f5d3;
        cursor: pointer;
    }
`;

const SubMenu = ( { item }) => {
 const [subnav, setSubnav ] = useState(false)

 const showSubnav = () => setSubnav(!subnav)

    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav &&
            showSubnav}>
                <div>
                  {item.icon}
                  <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav 
                    ? item.iconOpened 
                    : item.subNav 
                    ? item.iconClosed
                    : null}
                </div>
        </SidebarLink>       
        {subnav && item.subNav.map((item, index) => {
            return (
                <DropdownLink to={item.path} key={index}>
                    {item.icon}
                    <sidebarLabel>{item.title}</sidebarLabel>
                </DropdownLink>
            )
        })} 
        </>
    );
};

export default SubMenu;
