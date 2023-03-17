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

import useBA20142015Store from "hooks/useBA20142015Store";
import useBA20142015Listener from "hooks/useBA20142015Listener";

const BA20142015MenuScreen = ({ navigation }) => {
    const BA20142015List = useBA20142015Store(state => state.figures)
    useBA20142015Listener();

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
        navigation.navigate("BA20142015Info", {figureID: id
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
                    data={BA20142015List}
                    renderItem={renderFigurePanelItem}
                    keyExtractor={(item) => item.id}
                />
                <Button
                    title="About"
                    type="filled"
                    width="35%"
                    rounded="25px"
                    onPress={() =>
                        navigation.navigate("BA20142015Info")}
                    />
            </HolderContainer>
        </FigureMenuContainer>
    )
}

export default BA20142015MenuScreen