import React, { useState } from 'react'

// make a new context
export const SideBarContext = React.createContext();

// create the provider
export const SideBarProvider = (props) => {
  const [menuOpenState, setMenuOpenState] = useState(false)
  // const [isSubNavOpen, setSubnavOpen] = useState(false);

  const closeMenu = () => setMenuOpenState(!menuOpenState)
  const settingIsOpenState = (newState) => setMenuOpenState(newState.isOpen) 
  // const showSubnav = () => setSubnavOpen(!isSubNavOpen)
  
  return (
    <SideBarContext.Provider value={{
                                  isMenuOpen: menuOpenState,
                                  // isSubNavOpen: isSubNavOpen,
                                  toggleMenu: closeMenu,
                                  stateChangeHandler: settingIsOpenState,
                                  // showSubnav: showSubnav
                                }}>
                        {props.children}
    </SideBarContext.Provider>
  )
}