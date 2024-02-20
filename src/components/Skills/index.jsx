import React from 'react'
import { SubTitle } from '../Bio/StyledBio'
import { skillsList } from '../../Data/data'

import {SkillsSection,SkillsHeader,Title, SkillTitle, SkillsContainer, SkillContainer, SkillImage } from './StyledSkills'

const Skills = () => {

  return (
    <div id="skills">
        <SkillsSection>
            <SkillsHeader>
                <Title>Skills</Title>
                <SubTitle>Here are some of my skills on which I have been working on for the past few years.</SubTitle>
            </SkillsHeader>
            <SkillsContainer>
                {skillsList.map((skill, index)=>{
                    return(
                        <SkillContainer key={index}>
                            <SkillImage src={skill.image} alt="skill"/>
                            <SkillTitle>{skill.name}</SkillTitle>
                        </SkillContainer>
                    )
                })
                }
            </SkillsContainer>
        </SkillsSection>
      
    </div>
  )
}

export default Skills
