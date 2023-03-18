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

import useMU20152017Store from "hooks/useMU20152017Store";
import useMU20152017Listener from "hooks/useMU20152017Listener";

const MU20152017MenuScreen = ({ navigation }) => {
    const MU20152017List = useMU20152017Store(state => state.figures)
    useMU20152017Listener();

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
        navigation.navigate("MU20152017Info", {figureID: id
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
                    data={MU20152017List}
                    renderItem={renderFigurePanelItem}
                    keyExtractor={(item) => item.id}
                />
            </HolderContainer>
        </FigureMenuContainer>
    )
}

export default MU20152017MenuScreen