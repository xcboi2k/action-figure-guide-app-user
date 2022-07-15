import { Image } from 'react-native'
import React from 'react'

import {
    MainMenuContainer,
    HolderContainer,
    Logo
} from './styles';

import Button from 'components/Button';
import ScreenHeader from 'components/ScreenHeader';
import AboutPanel from 'components/AboutPanel';
import { ICON_NAMES } from "constants/constants";

const MainMenuScreen = () => {
  return (
    <MainMenuContainer>
        <ScreenHeader 
            title="Main Menu"
            iconName={ICON_NAMES.BACK}
            iconSize="32"
        />
        <HolderContainer>
            <Image
                source={require("E:/Programming/Learning Materials/React Native/Action Figure Guide App/assets/img/welcomePageLogo.png")}
                style={Logo}
                resizeMode={"contain"}>
            </Image>
        </HolderContainer>
        <HolderContainer>
            <AboutPanel />
            <Button 
                title="FIND NOW!"
                type="filled"
                width="50%"
                rounded="25px"
            />
        </HolderContainer>
    </MainMenuContainer>
  )
}

export default MainMenuScreen