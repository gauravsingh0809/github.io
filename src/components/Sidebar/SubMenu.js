import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SideBarContext } from './SideBarContext/SideBarCtxProvider';

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 17px;

  &:hover {
    // background: #252831;
    // border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 5px;
  // font-family: 'Baloo Tammudu 2', cursive;
  // font-family: 'Mate SC', serif;
  // font-family: 'Raleway', sans-serif;
  `;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 30px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 12px;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;



export const ButtonHook = (props) => {
  const ctx = useContext(SideBarContext)
  return (
    <span onClick={ctx.toggleMenu}>{props.children}</span>
  )
};

const SubMenu = ({ item }) => {

  const [isSubNavOpen, setSubnavOpen] = useState(false);
  const showSubnav = () => {
    return (
      setSubnavOpen(!isSubNavOpen)
    )
  };

  return (
    <>
      {item.nolink
        ? <ButtonHook>
          <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
            <div>
              {item.icon}
              <SidebarLabel >
                {item.title.toUpperCase()}
              </SidebarLabel>
            </div>
            <div>
              {item.subNav && isSubNavOpen
                ? item.iconOpened
                : item.subNav
                  ? item.iconClosed
                  : null}
            </div>
          </SidebarLink>
        </ButtonHook>
        : <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
          <div>
            {item.icon}
            <SidebarLabel >
              {item.title.toUpperCase()}
            </SidebarLabel>
          </div>
          <div>
            {item.subNav && isSubNavOpen
              ? item.iconOpened
              : item.subNav
                ? item.iconClosed
                : null}
          </div>
        </SidebarLink>}
      {isSubNavOpen &&
        item.subNav.map((item, index) => {
          return (
            item.type
              ? (
                <DropdownLink>
                  <SidebarLabel style={{ color: '#ac8' }}>
                    {item.title.toUpperCase()}
                  </SidebarLabel>
                </DropdownLink>)
              : (<ButtonHook key={index / 100}>
                <DropdownLink to={item.path} key={index}>
                  {item.icon}
                  <SidebarLabel>
                    {item.title}
                  </SidebarLabel>
                </DropdownLink>
              </ButtonHook>)
          );
        })}
    </>
  );
};

export default SubMenu;