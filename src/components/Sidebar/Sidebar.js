import React, { useContext } from 'react';
// import { scaleRotate as Menu } from 'react-burger-menu';    // Use this for scaleRotate menu
import Menu from 'react-burger-menu/lib/menus/pushRotate'; // Use slide, pushRotate for best results in this project
import './Sidebar.css';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { MyContext } from './../../Context/MyProvider';
import { SideBarContext } from './SideBarContext/SideBarCtxProvider';
import { SidebarDataKan } from './SidebarDataKan';


const Sidebar = () => {

  // const ctx = useContext(MyContext)
  const ctx = useContext(SideBarContext)
  const globalCtx = useContext(MyContext)
  return (
    <div >
      <Menu
        isOpen={ctx.isMenuOpen}
        onStateChange={(state) => ctx.stateChangeHandler(state)}
        width={600}
        pageWrapId={"page-wrap"}
        // customBurgerIcon = {false}
        burgerButtonClassName={ctx.isMenuOpen ? "bm-burger-button-false" : "bm-burger-button"}
        outerContainerId={"outer-container"}>
        {globalCtx.langPref
          ? <div>
            {SidebarData.map((item, index) => {
              return <SubMenu
                item={item}
                key={index}
              />
            })}
          </div>
          : <div>
            {SidebarDataKan.map((item, index) => {
              return <SubMenu
                item={item}
                key={index}
              />
            })}
          </div>}
      </Menu>
    </div>
  );
};

export default Sidebar;