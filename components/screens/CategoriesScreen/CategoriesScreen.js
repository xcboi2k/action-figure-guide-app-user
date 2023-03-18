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
                    title="Basic Assortment 2013-2014"
                    type="filled"
                    width="80%"
                    rounded="25px"
                    onPress={() =>
                        navigation.navigate("BA20132014Menu")}
                />
            </HolderContainer>
            <HolderContainer>
                <Button 
                    title="Basic Assortment 2014-2015"
                    type="filled"
                    width="80%"
                    rounded="25px"
                    onPress={() =>
                        navigation.navigate("BA20142015Menu")}
                />
            </HolderContainer>
            <HolderContainer>
                <Button 
                    title="Exclusives 2014-2015"
                    type="filled"
                    width="80%"
                    rounded="25px"
                    onPress={() =>
                        navigation.navigate("EX20142015Menu")}
                />
            </HolderContainer>
            <HolderContainer>
                <Button 
                    title="Basic Assortment 2015-2017"
                    type="filled"
                    width="80%"
                    rounded="25px"
                    onPress={() =>
                        navigation.navigate("BA20152017Menu")}
                />
            </HolderContainer>
            <HolderContainer>
                <Button 
                    title="Multipacks 2015-2017"
                    type="filled"
                    width="80%"
                    rounded="25px"
                    onPress={() =>
                        navigation.navigate("MU20152017Menu")}
                />
            </HolderContainer>
        </CategoriesContainer>
    )
}

export default CategoriesScreen;