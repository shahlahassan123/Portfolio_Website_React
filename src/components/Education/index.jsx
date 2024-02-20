import React from 'react'
import {educationList} from './../../Data/data'
import EducationCard from '../Cards/EducationCard'
import {EducationSection,EducationHeader,EducationTitle,EducationSubTitle,EducationContainer} from './StyledEducation'
import Timeline from "@mui/lab/Timeline"
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Education = () => {
  return (
    <div id="education">
    <EducationSection>
        <EducationHeader>
            <EducationTitle>Education</EducationTitle>
            <EducationSubTitle>My education has been a journey of self-discovery and growth. My educational details are as follows.</EducationSubTitle>
        </EducationHeader>
        <EducationContainer>
            <Timeline>
             {educationList.map((edu,index)=>{
                return(
                    <TimelineItem>
                        <TimelineContent sx={{ py: '10px', px: '15px' }}>
                            <EducationCard education={edu} />
                        </TimelineContent>
                        <TimelineSeparator>
                            <TimelineDot variant='outlined' color='secondary'></TimelineDot>
                            {index !== educationList.length && <TimelineConnector style={{background: '#854CE6'}}></TimelineConnector>}
                        </TimelineSeparator>
                    </TimelineItem>
                )
             })}
            </Timeline>
        </EducationContainer>
    </EducationSection>
  
</div>
  )
}

export default Education
