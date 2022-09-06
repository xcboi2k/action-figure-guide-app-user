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

const FigureMenuScreen = ({ navigation }) => {
    const [selectedId, setSelectedId] = useState(null);

    const renderFigurePanelItem = ({ item }) => {
        return(
            <FigurePanel 
                onPress={() =>
                    navigation.navigate("Showcase")}
                name={item.figureName}
                version={item.figureVersion}
            />
        );
    };
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
                data={category1Data}
                renderItem={renderFigurePanelItem}
                keyExtractor={(item) => item.figureID}
            />
            <Button
                title="About"
                type="filled"
                width="35%"
                rounded="25px"
                onPress={() =>
                  navigation.navigate("Showcase")}
                />
        </HolderContainer>
    </FigureMenuContainer>
  )
}

export default FigureMenuScreen;