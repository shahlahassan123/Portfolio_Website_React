import styled from 'styled-components'
import { Themes } from '../Themes/Themes'


export const SkillsSection = styled.div`
background-color: ${({theme})=> theme.navBackground};
width: 100vw;
/* height: 50%; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:2rem;
`

export const SkillsHeader = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Title = styled.h1`
text-align: center;
color: ${({theme})=>theme.text_primary};
`
export const SubTitle = styled.h6`
text-align: center;
color: ${({theme})=>theme.text_primary};
`

export const SkillsContainer = styled.div`
border: 1px solid ${({theme})=>theme.text_primary};
width: 80%;
height: auto;
padding: 3rem;
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap:2rem;
border-radius: 20px;
`

export const SkillContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
gap:0.5rem;
border: 1px solid ${({theme})=>theme.text_primary};
border-radius: 10px;
padding: 1rem;
`

export const SkillImage = styled.img`
width: 1rem;
height: 1rem;

`

export const SkillTitle = styled.p`
margin: 0;
font-size: 1rem;
color: ${({theme})=>theme.text_primary};
`




