import React from 'react'
import {SidebarContainer , Icon , CloseIcon,SideBarMenu , SideBarWrappper , SidebarLink , SideBtnWrap, SidebarRoute} from './SidebarElements'
const Sidebar = ({isOpen , toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon  />
            </Icon>
            <SideBarWrappper>
                <SideBarMenu>
                <SidebarLink to="/about">
                        About
                    </SidebarLink>
                    <SidebarLink to="/discover">
                        Discover
                    </SidebarLink>
                    <SidebarLink to="/services">
                        Services
                    </SidebarLink>
                    <SidebarLink to="/signup">
                        SignUp
                    </SidebarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin" >Signin</SidebarRoute>
                </SideBtnWrap>
            </SideBarWrappper>

        </SidebarContainer>
    )
}

export default Sidebar;
