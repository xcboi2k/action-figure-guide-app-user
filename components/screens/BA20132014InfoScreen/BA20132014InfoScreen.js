import { StyleSheet, TextInput, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

import { 
    FigureInformationContainer,
    ContentContainer,
    ContentContainer2,
    FigureLabel,
    FigureVersionLabel,
    ContentLabel,
    TextContainer,
    ScrollContainer
} from './styles'
import ScreenHeader from 'components/ScreenHeader'
import colors from "assets/themes/colors";
import { ICON_NAMES } from "constants/constants";
import { FONTS } from "constants/constants";
import { useNavigation } from "@react-navigation/native";

import useBA20132014Store from 'hooks/useBA20132014Store';

import sampleImg from 'assets/img/samplePic1.jpg'

const BA20132014InfoScreen = ({ route }) => {
    const { figureID } = route.params;
    const navigation = useNavigation();

    const figureList = useBA20132014Store(state => state.figures)

    const [currentFigure, setCurrentFigure] = useState(() => figureList.find(figures => figures.id === figureID));

    useEffect(() => {
        const targetFigure = figureList.find(figures => figures.id === figureID);
        // console.log(targetTransaction);
        setCurrentFigure(targetFigure);
    }, [figureID]);

    return (
        <FigureInformationContainer>
            <ScreenHeader 
                title="Figure Information"
                iconName={ICON_NAMES.BACK}
                iconSize="32"
                onPressIcon={() =>
                    navigation.navigate("BA20132014Menu")}
            />
            <FigureLabel>{currentFigure.figure_name}</FigureLabel>
            <FigureVersionLabel>({currentFigure.figure_name})</FigureVersionLabel>
            <Image
                source={sampleImg}
                resizeMode={"contain"}
                style={styles.image} >
            </Image>
            <ScrollContainer>
                <ContentContainer>
                    <ContentLabel>Scale:</ContentLabel>
                    <TextContainer>
                        <TextInput
                            style={styles.text} 
                            editable={false} 
                            textAlign={'right'}
                            placeholder={'3.75" '}
                            placeholderTextColor={colors.primary.colorSix}
                        />
                    </TextContainer>
                </ContentContainer>
                <ContentContainer>
                    <ContentLabel>Date Stamp:</ContentLabel>
                    <TextContainer>
                        <TextInput
                            style={styles.text} 
                            editable={false} 
                            textAlign={'right'}
                            placeholder={'2012'}
                            placeholderTextColor={colors.primary.colorSix}
                        />
                    </TextContainer>
                </ContentContainer>
                <ContentContainer>
                    <ContentLabel>Released:</ContentLabel>
                    <TextContainer>
                        <TextInput
                            style={styles.text} 
                            editable={false} 
                            textAlign={'right'}
                            placeholder={'2013'}
                            placeholderTextColor={colors.primary.colorSix}
                        />
                    </TextContainer>
                </ContentContainer>
                <ContentContainer>
                    <ContentLabel>Joint Count:</ContentLabel>
                    <TextContainer>
                        <TextInput
                            style={styles.text} 
                            editable={false} 
                            textAlign={'right'}
                            placeholder={'14'}
                            placeholderTextColor={colors.primary.colorSix}
                        />
                    </TextContainer>
                </ContentContainer>
                <ContentContainer>
                    <ContentLabel>Accessory Count:</ContentLabel>
                    <TextContainer>
                        <TextInput
                            style={styles.text} 
                            editable={false} 
                            textAlign={'right'}
                            placeholder={'2'}
                            placeholderTextColor={colors.primary.colorSix}
                        />
                    </TextContainer>
                </ContentContainer>
                <ContentContainer2>
                <ContentLabel>Accessory Details:</ContentLabel>
                    <TextInput
                        style={styles.text2} 
                        editable={false}
                        multiline={true} 
                        numberOfLines={5}
                        textAlignVertical={'top'}
                        textAlign={'center'}
                        placeholder={'Naboo Blaster, Droid Blaster'}
                        placeholderTextColor={colors.primary.colorSix}
                    />
                </ContentContainer2>
            </ScrollContainer>
        </FigureInformationContainer>
    )
}

const styles = StyleSheet.create({
    text: {
        height: 50,
        fontSize: 22,
        fontFamily: FONTS.ITALIC,
    },
    text2: {
        height: 100,
        fontSize: 22,
        fontFamily: FONTS.ITALIC,
    },
    image: {
        height: 380,
        padding: 10,
    },
});

export default BA20132014InfoScreen;