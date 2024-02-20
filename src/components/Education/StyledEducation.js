import styled from 'styled-components'
import { Themes } from '../Themes/Themes'


export const EducationSection = styled.div`
background-color: ${({theme})=> theme.navBackground};
width: 100vw;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:2rem;
`

export const EducationHeader = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const EducationTitle = styled.h1`
text-align: center;
color: ${({theme})=>theme.text_primary};
margin: 1rem;
`
export const EducationSubTitle = styled.h6`
text-align: center;
color: ${({theme})=>theme.text_primary};
font-weight: 400;
font-size: 1rem;
margin: 1rem;
`

export const EducationContainer = styled.div`
border: 1px solid ${({theme})=>theme.text_primary};
width: 80%;
height: auto;
padding: 3rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:2rem;
border-radius: 20px;
`

