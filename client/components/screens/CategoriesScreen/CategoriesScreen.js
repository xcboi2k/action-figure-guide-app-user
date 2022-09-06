import { View, Text } from 'react-native'
import React from 'react'

import { 
    CategoriesContainer,
    HolderContainer
} from './styles';

import Button from 'components/Button';
import ScreenHeader from 'components/ScreenHeader';
import { ICON_NAMES } from "constants/constants";

const CategoriesScreen = ({ navigation }) => {
  return (
    <CategoriesContainer>
        <ScreenHeader 
            title="Categories"
            iconName={ICON_NAMES.BACK}
            iconSize="32"
            onPressIcon={() =>
                navigation.navigate("MainMenu")}
        />
        <HolderContainer>
            <Button 
                title="Category 1"
                type="filled"
                width="80%"
                rounded="25px"
                onPress={() =>
                    navigation.navigate("FigureMenu")}
            />
        </HolderContainer>
        <HolderContainer>
            <Button 
                title="Category 2"
                type="filled"
                width="80%"
                rounded="25px"
            />
        </HolderContainer>
        <HolderContainer>
            <Button 
                title="Category 3"
                type="filled"
                width="80%"
                rounded="25px"
            />
        </HolderContainer>
    </CategoriesContainer>
  )
}

export default CategoriesScreen;