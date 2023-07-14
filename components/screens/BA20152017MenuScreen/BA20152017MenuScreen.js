import { FlatList, Text, ActivityIndicator } from 'react-native'
import React, {useState} from 'react'
import { shallow } from 'zustand/shallow'

import { 
    FigureMenuContainer,
    HolderContainer
} from './styles';

import FigurePanel from 'components/FigurePanel';
import ScreenHeader from 'components/ScreenHeader';
import { ICON_NAMES } from "constants/constants";
import colors from "assets/themes/colors";

import { category1Data } from 'sampleData/SampleData';
import Button from 'components/Button';

import useBA20152017Store from "hooks/useBA20152017Store";
import useBA20152017Listener from "hooks/useBA20152017Listener";

const BA20152017MenuScreen = ({ navigation }) => {
    useBA20152017Listener();
    const {data, isLoading} = useBA20152017Store((state) => ({data: state.figures, isLoading: state.isLoading}), shallow)

    const renderFigurePanelItem = ({ item }) => {
        return(
            <FigurePanel 
                onPress={() => { handleNavigation(item.id); }}
                name={item.figureName}
                version={item.figureVersion}
            />
        );
    };

    const handleNavigation = (id) => 
        navigation.navigate("BA20152017Info", {figureID: id
    });

    return (
        <FigureMenuContainer>
            <ScreenHeader 
                title="Figure Menu"
                iconName={ICON_NAMES.BACK}
                iconSize="32"
                onPressIcon={() =>
                    navigation.navigate("Categories")}
            />
            <HolderContainer>
                {isLoading ? (
                // Show loader while loading
                <ActivityIndicator size="large" color={colors.primary.colorFive}/>
                ) : (
                // Render the data
                <FlatList
                    data={data}
                    renderItem={renderFigurePanelItem}
                    keyExtractor={(item) => item.id}
                />
                )}
            </HolderContainer>
        </FigureMenuContainer>
    )
}

export default BA20152017MenuScreen