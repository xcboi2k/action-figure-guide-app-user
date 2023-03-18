import { FlatList, Text } from 'react-native'
import React, {useState} from 'react'

import { 
    FigureMenuContainer,
    HolderContainer
} from './styles';

import FigurePanel from 'components/FigurePanel';
import ScreenHeader from 'components/ScreenHeader';
import { ICON_NAMES } from "constants/constants";

import { category1Data } from 'sampleData/SampleData';
import Button from 'components/Button';

import useBA20152017Store from "hooks/useBA20152017Store";
import useBA20152017Listener from "hooks/useBA20152017Listener";

const BA20152017MenuScreen = ({ navigation }) => {
    const BA20152017List = useBA20152017Store(state => state.figures)
    useBA20152017Listener();

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
                <FlatList
                    data={BA20152017List}
                    renderItem={renderFigurePanelItem}
                    keyExtractor={(item) => item.id}
                />
            </HolderContainer>
        </FigureMenuContainer>
    )
}

export default BA20152017MenuScreen