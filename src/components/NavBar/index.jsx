import React from 'react'
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import {Bio} from './../../Data/data'
import { IoCloseSharp } from "react-icons/io5";

import {Nav, NavContainer, NavItem, NavItems,MobButtonContainer,
      GitHubButton, ButtonContainer, MobNavItems,NavLogo,MenuIcon} from './StyledNavBar'
import { useEffect } from 'react';

const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)  


  const handleMenuIcon = () =>{
    setIsMenuOpen(!isMenuOpen)
  }
  



  return (
      <Nav isMenuOpen={isMenuOpen}>
          <NavContainer>
              <NavLogo to="/">
                  PORTFOLIO
              </NavLogo>
              <MenuIcon>
              {isMenuOpen ? <IoCloseSharp onClick={handleMenuIcon} /> : <FaBars onClick={handleMenuIcon} />}
          </MenuIcon>

          </NavContainer>
         
          <NavItems>
              <NavItem href='#about'>About</NavItem>
              <NavItem href='#skills'>Skills</NavItem>
              <NavItem href='#experiences'>Experience</NavItem>
              <NavItem href='#projects'>Projects</NavItem>
              <NavItem href='#education'>Education</NavItem>
              <NavItem href='#contact'>Contact</NavItem>
          </NavItems>
          <ButtonContainer>
              <GitHubButton href={Bio.github}>Github Profile</GitHubButton>
          </ButtonContainer>

          
          {isMenuOpen && 
              <MobNavItems>
                  <NavItem href='#about'>About</NavItem>
                  <NavItem href='#skills'>Skills</NavItem>
                  <NavItem href='#experiences'>Experience</NavItem>
                  <NavItem href='#projects'>Projects</NavItem>
                  <NavItem href='#education'>Education</NavItem>
                  <NavItem href='#contact'>Contact</NavItem>
                  <MobButtonContainer>
                      <GitHubButton href={Bio.github}>Github Profile</GitHubButton>
                  </MobButtonContainer>
                  
              </MobNavItems>
          }
    </Nav>
  )
}

export default NavBar
