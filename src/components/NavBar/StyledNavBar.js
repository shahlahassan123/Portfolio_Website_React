import  styled from 'styled-components'
import { Themes } from '../Themes/Themes'
import { Link } from 'react-router-dom'

export const Nav = styled.div`
background-color: ${({theme})=> theme.navBackground};
display: flex;
justify-content: center;
align-items: center;
height: 10%;
color: white;
top: 0;
position: sticky;
z-index: 10;
margin: 0;
padding: 0.5rem;
@media screen  and (max-width :960px){
    /* transition: 1s all ease; */
    padding: 1rem;
    height: ${({isMenuOpen})=> isMenuOpen ? '100vh' : '10%'};
    flex-direction: column;
   
}
`

export const NavContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
padding: 1%;
@media screen  and (max-width :968px){
align-items: flex-start;
justify-content: space-between;
}

`

export const NavLogo = styled(Link)`
display: flex;
justify-content: flex-start;
align-items: center;
padding: 1%;
text-decoration: none;
color: ${({theme})=>theme.text_primary};
font-size: 2.3rem;
@media screen  and (max-width :960px){
    padding: 0;
    font-size: 2.5rem;
}
`

export const Span = styled.span`
font-weight: 600;
font-size: 1rem;
padding: 0 1%;
`

export const NavItems = styled.ul`
display: flex;
flex-direction: row;
gap: 2rem;
justify-content: center;
align-items: center;
list-style: none;
@media screen and (max-width: 968px) {
    display: none;
  
}
`

export const NavItem = styled.a`
color: ${({theme})=>theme.text_primary};
text-decoration: none;
font-weight: 500;
cursor: pointer;
transition: all 0.8s ease-in-out;
&:hover{
    color: ${({theme})=>theme.primary}; 
}
&:active{
    border-bottom: ${({theme})=>theme.primary}; 
}
font-size: 1.3rem;
@media screen and (max-width: 968px)  {
    font-size: 1.5rem;
    padding: 0.5rem;
}
`

export const GitHubButton = styled.a`
border: 1px solid ${({theme})=>theme.primary};;
color: ${({theme})=>theme.text_primary};
text-decoration: none;
font-weight: 500;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
transition: all 0.8s ease-in-out;
padding: 1rem;
font-size: 1.3rem;
&:hover{
    color: ${({theme})=>theme.primary}; 
}
&:active{
    border-bottom: ${({theme})=>theme.primary}; 
}

@media screen and (max-width: 968px){
    padding: 1rem;   
}
`

export const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 1%;
  @media screen and (max-width: 968px) {
    display: none;
  }
`;

export const MenuIcon = styled.div`
display: none;
color: ${({theme})=>theme.text_primary};
@media screen and (max-width: 968px)  {
display: flex;
justify-content: center;
align-items: center;
font-size: 2.5rem;
}
`

export const MobNavItems = styled.ul`
display: none;
@media screen and (max-width: 968px) {
display: flex;
flex-direction: column;
gap: 2rem;
justify-content: center;
align-items: center;
list-style: none;
height: 100%;
width: 100%;
  
}
`

export const MobButtonContainer = styled.div`
@media screen and (max-width: 968px){
    width: 80%;  
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-size: 1.5rem;
}
`


