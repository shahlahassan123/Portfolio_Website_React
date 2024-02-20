import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Bio } from '../../Data/data';
import {FooterSection, NavItems, NavItem,SocialMediaIcon,SocialMediaSection} from './StyledFooter'

const Footer = () => {
  return (
    <FooterSection>
        <NavItems>
              <NavItem href='#about'>About</NavItem>
              <NavItem href='#skills'>Skills</NavItem>
              <NavItem href='#experiences'>Experience</NavItem>
              <NavItem href='#projects'>Projects</NavItem>
              <NavItem href='#education'>Education</NavItem>
              <NavItem href='#contact'>Contact</NavItem>
          </NavItems>
          <SocialMediaSection>
            <SocialMediaIcon href={Bio.linkedin} target='display'><LinkedInIcon/></SocialMediaIcon>
            <SocialMediaIcon href={Bio.github} target='display'><GitHubIcon/></SocialMediaIcon>
          </SocialMediaSection>
    </FooterSection>
      
    
  )
}

export default Footer
