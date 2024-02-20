import React from 'react'
import {experiencesList} from './../../Data/data'
import Timeline from "@mui/lab/Timeline"
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard'
import {ExperienceSection,ExperienceHeader,ExperienceTitle,ExperienceSubTitle,ExperienceContainer} from './StyledExperiences'

const Experiences = () => {
  return (
    <div id="experiences">
        <ExperienceSection>
            <ExperienceHeader>
                <ExperienceTitle>Experience</ExperienceTitle>
                <ExperienceSubTitle>My work experience as a software engineer and working on different companies and projects.</ExperienceSubTitle>
            </ExperienceHeader>
            <ExperienceContainer>
                <Timeline>
                 {experiencesList.map((exp,index)=>{
                    return(
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot variant='outlined' color='secondary'></TimelineDot>
                                {index !== experiencesList.length  && <TimelineConnector style={{background: '#854CE6'}}></TimelineConnector>}
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '10px', px: '15px' }}>
                                <ExperienceCard experience={exp} />
                            </TimelineContent>

                        </TimelineItem>
                    )
                 })}
                </Timeline>
            </ExperienceContainer>
        </ExperienceSection>
      
    </div>
  )
}

export default Experiences
