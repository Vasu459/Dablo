import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`


background: black;
margin-top:0px;
height:80px;
width:100%;
display:flex;
justify-content:center;
font-size:1rem;
align-items:center;
top:0;
z-index:10;
position:sticky; 

@media screen and (max-width:960px){

    transition:0.8s all ease;
}
`
export const NavbarContainer = styled.div`

display:flex;
justify-content:space-between;
height:80px;
z-index:1;
width:100%;
padding:0 20px;
max-width:1200px;
`
export const NavLogo = styled(LinkR)`
display: flex;
justify-self:flex-start;
color :#fff;
cursor:pointer;
font-size:1.5rem;
align-items:center;
margin-left:24px;
font-weight:bold;
text-decoration:none;
`
export const MobileIcons = styled.div `
display:none;



@media screen and (max-width: 768px)
{
    display:block;
    position:absolute;
    padding-top:25px;
    width:10%;
    top:0;
    right:0;
    transform: translate(-100, 60%);
    font-size:1.8rem;
    cursor:pointer;
    color: #fff;



}

`
export const Navmenu = styled.ul`
  display:flex;
  align-items:center;
  list-style:none;
  text-align:center;
  margin-right:-22px;

  @media screen and (max-width:768px){
      display:none;

  }


`

export const NavItem = styled.li`
height:80px;
`

export const NavLinks = styled(LinkS)`

color: #fff;
display: flex;
align-items: center;
text-decoration:none;
padding: 0 1rem;
height:100%;
cursor:pointer;


&:active{
    border-bottom: 3px solid green;
    color:#01bf71;
}
`
export const NavBtn =styled.nav`
display:flex;
aligmn-items:center;

@media screen and (max-width:768px){
display:none;
}
`
export const NavBtnLink = styled(LinkR)`
border-radius:20px;
background: #01bf71;
white-space:nowrap;
height:40px;
margin:20px;
padding:10px 10px;
font-weight:600;
color:#010606;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
transistion: all 0.2s ease-in-out;
text-decoration:none;

&:hover{
    transition: all 0.2s ease-in-out;
    background:#fff;
    color:#010606;
    
}
`