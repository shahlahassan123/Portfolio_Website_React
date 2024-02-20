import styled from 'styled-components'

export const FooterSection = styled.div`
width: 100%;
padding: 2rem 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: ${({theme})=> theme.navBackground};

`

export const NavItems = styled.ul`
width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`

export const NavItem = styled.a`
color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;


export const SocialMediaSection = styled.div`
display: flex;
justify-content: center;
align-items: center;
  margin-top: 1rem;
`


export const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  /* &:hover {
    color: ${({ theme }) => theme.primary};
  } */
`;
