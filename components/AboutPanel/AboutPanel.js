import { View, Text } from 'react-native'
import React from 'react'

import {
    AboutPanelContainer,
    AboutLabelContainer,
    AboutTextContainer,
    AboutLabel,
    AboutTextLabel
} from './styles';

const AboutPanel = () => {
  return (
    <AboutPanelContainer>
        <AboutLabelContainer>
            <AboutLabel>
                About
            </AboutLabel>
        </AboutLabelContainer>
        <AboutTextContainer>
          <AboutTextLabel>
          This application showcases the Star Wars The Black Series 3.75" Action Figure Line. This toy line debuted on August 1, 2013. The figures released in this line featured a higher point of articulation and more detailed sculpts than the Saga Legends line, which was on store shelves at the same time.
          The information provided came from galacticfigures.com
          </AboutTextLabel>
        </AboutTextContainer>
    </AboutPanelContainer>
  )
}

export default AboutPanel;