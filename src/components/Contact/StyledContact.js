import styled from 'styled-components'
import { Themes } from '../Themes/Themes'


export const ContactSection = styled.div`
background-color: ${({theme})=> theme.navBackground};
width: 100vw;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:2rem;
padding-bottom: 4rem;
`

export const ContactHeader = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const ContactTitle = styled.h1`
text-align: center;
color: ${({theme})=>theme.text_primary};
margin: 1rem;
`
export const ContactSubTitle = styled.h6`
text-align: center;
color: ${({theme})=>theme.text_primary};
font-weight: 400;
font-size: 1rem;
margin: 1rem;
`



export const ContactForm = styled.form`
border: 1px solid ${({theme})=>theme.text_primary};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: .5rem;
width: 80%;
padding: 4rem;
border-radius: 20px;
`
export const FormInput = styled.input`
width: 100%;
padding: 1rem;
border-radius: 10px;
`

export const FormTextArea = styled.textarea`
width: 100%;
padding: 1rem;
border-radius: 10px;
`

export const SubmitButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
width: 105%;
padding: 1rem;
background-color: ${({theme})=> theme.tag};
border-radius: 10px;

`





