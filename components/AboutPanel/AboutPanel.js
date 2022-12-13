import { View, Text } from 'react-native'
import React from 'react'

import {
    AboutPanelContainer,
    AboutLabelContainer,
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
        <AboutTextLabel>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </AboutTextLabel>
    </AboutPanelContainer>
  )
}

export default AboutPanel;