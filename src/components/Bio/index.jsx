import React from 'react'
import { Bio } from './../../Data/data'
import Typewriter from 'typewriter-effect'
import {BioContainer,BioInnerContainer, Title, TextLoop, Span,SubTitle, ResumeButton,BioLeftContainer,
BioRightContainer, Img} from './StyledBio'
import Photo from './../../../public/photo.jpeg'


const BioDetails = () => {
    return (
        <div id='#about'>
            <BioContainer>
                <BioInnerContainer>
                    <BioLeftContainer>
                        <Title >
                            I am  
                            <Span>
                            {Bio.name}
                            </Span>
                        </Title>
                        <TextLoop>
                            I am a  
                            <Span>
                                <Typewriter options={{
                                    strings: Bio.roles,
                                    autoStart: true,
                                    loop: true
                                }} />
                            </Span>
                        </TextLoop>
                        <SubTitle>
                            {Bio.description}
                        </SubTitle>
                        <ResumeButton href={Bio.resume}>
                            Check Resume
                        </ResumeButton>
                    </BioLeftContainer>
                    <BioRightContainer>
                        <Img src={Photo} alt="shahla" />

                    </BioRightContainer>
                </BioInnerContainer>
            </BioContainer>

        </div>
    )
}

export default BioDetails
