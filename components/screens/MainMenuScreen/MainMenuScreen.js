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

import welcomePageLogo from 'assets/img/welcomePageLogo.png'

const MainMenuScreen = ({ navigation }) => {
  return (
    <MainMenuContainer>
        <ScreenHeader 
            title="Main Menu"
        />
        <HolderContainer>
            <Image
                source={welcomePageLogo}
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
                onPress={() =>
                    navigation.navigate("Categories")}
            />
        </HolderContainer>
    </MainMenuContainer>
  )
}

export default MainMenuScreen