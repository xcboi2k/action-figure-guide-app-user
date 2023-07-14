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

import { category1Data } from 'sampleData/SampleData';
import Button from 'components/Button';

import useEX20142015Store from "hooks/useEX20142015Store";
import useEX20142015Listener from "hooks/useEX20142015Listener";

const EX20142015MenuScreen = ({ navigation }) => {
    useEX20142015Listener();
    const {data, isLoading} = useEX20142015Store((state) => ({data: state.figures, isLoading: state.isLoading}), shallow)

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
        navigation.navigate("EX20142015Info", {figureID: id
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

export default EX20142015MenuScreen