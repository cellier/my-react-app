import React from 'react'
import styled from 'styled-components'


const Section = styled.div`
    height: 1600px;
    width: 100%;
    margin-top: 64px;
    /* background-color: black; */
`
const SectionSecond = styled.div`
    max-width: 1200px;
    margin: 0 auto;


    h1, p{
        text-align: center;
        max-width: 560px;
        margin: 0 auto;
        margin-bottom: 40px;
    }
    p {
        line-height: 1.45;
        color: #4A5567;
        font-size: 18px;
    }
`


const SecondSection = () => (
    <Section>
      <SectionSecond>

        <h1>
        Talk less, show more.
        </h1>
        <p>
        Presentations have defined entire industries and architected how organizations work. Yet for decades we’ve been stuck with the same tools. Pitch is a new beginning. An open platform for presentations and content collaboration. A new paradigm to improve the way presentations are crafted and knowledge is shared.
        </p>
            
      </SectionSecond>
    </Section>
  )
  
  export default SecondSection
  