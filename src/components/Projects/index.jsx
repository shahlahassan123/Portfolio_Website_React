import React from 'react'
import { projects } from '../../Data/data'
import ProjectCard from './../Cards/ProjectCard'

import { Container, Wrapper, Title, Desc, CardContainer} from './StyledProjects'


const Projects = ({openModal, setModalOpen}) => {
  return (
    <Container id="projects">
      <Wrapper>
      <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Here are some of my projects.
        </Desc>
      </Wrapper>
      <CardContainer>
        {projects && projects.map((project, index)=>{
          return(
            <ProjectCard project={project} key={index} openModal={openModal} setModalOpen={setModalOpen}></ProjectCard>
          )
        })}

      </CardContainer>

    </Container>
  )
}

export default Projects
