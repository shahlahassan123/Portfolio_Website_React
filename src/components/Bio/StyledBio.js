import  styled from 'styled-components'
import { Themes } from '../Themes/Themes'

export const BioContainer = styled.div`
background-color: ${({theme})=> theme.navBackground};
/* width: 100vw;
height: 100vh; */
`

export const BioInnerContainer = styled.div`
padding: 2rem 5rem;
display: flex;
/* flex-direction: row; */
justify-items: center;
align-items: center;

gap:5rem;
height: 100%;
/* width: 100%; */
max-width: 1100px;
@media screen and (max-width: 968px) {
    flex-direction: column;  
}
`

export const BioLeftContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
/* align-items: center; */
gap:2rem;
@media screen and (max-width: 968px) {
    order: 2;
}
`

export const BioRightContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media screen and (max-width: 968px) {
    order: 1;
}
`
export const Title = styled.div`
font-weight: 700;
font-size: 50px;
color: ${({theme})=>theme.text_primary};
@media screen and (max-width: 968px) {
    text-align: center;
}
`

export const TextLoop = styled.div`
font-weight: 700;
font-size: 2rem;
color: ${({theme})=>theme.text_primary};
display: flex;
flex-direction: column;
@media screen and (max-width: 968px) {
    text-align: center;
}
`

export const Span = styled.div`
/* display: block; */
color: rgb(133, 76, 230);

`
export const SubTitle = styled.div`
font-weight: 400;
font-size: 1rem;
color: ${({theme})=>theme.text_primary};
@media screen and (max-width: 968px) {
    text-align: center;
}
`

export const ResumeButton = styled.a`
text-decoration: none;
cursor: pointer;
appearance: button;
text-align: center;
width: 95% ;
padding: 1rem;
color: ${({theme})=>theme.text_primary};
border-radius: 20px;
transition: all 0.2s ease-in-out;
background: hsla(271, 100%, 50%, 1);
background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
@media screen and (max-width: 968px) {
    /* transform: scale(1.5);
    transition: all 0.2s ease-in-out;
    filter: brightness(1); */
}
`

export const Img = styled.img`
/* width: 100%;
height: 100%; */
width: 400px;
/* max-width: 600px;
max-height: 600px; */
border-radius: 50%;
border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }

`
