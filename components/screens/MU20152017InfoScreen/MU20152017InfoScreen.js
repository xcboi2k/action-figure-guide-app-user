import { StyleSheet, TextInput, Image, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

import { 
    FigureInformationContainer,
    ContentContainer,
    ContentContainer2,
    FigureLabel,
    FigureVersionLabel,
    ContentLabel,
    TextContainer,
    ScrollContainer,
} from './styles'
import ScreenHeader from 'components/ScreenHeader'
import colors from "assets/themes/colors";
import { ICON_NAMES } from "constants/constants";
import { FONTS } from "constants/constants";
import { useNavigation } from "@react-navigation/native";

import useMU20152017Store from 'hooks/useMU20152017Store';

import sampleImg from 'assets/img/samplePic1.jpg'

const MU20152017InfoScreen = ({ route }) => {
    const { figureID } = route.params;
    const navigation = useNavigation();

    const figureList = useMU20152017Store(state => state.figures)

    const [currentFigure, setCurrentFigure] = useState(() => figureList.find(figures => figures.id === figureID));

    const handleReturn = () => {
        navigation.navigate("MU20152017Menu");
        setCurrentFigure('')
    }

    console.log(figureID)
    useEffect(() => {
        const targetFigure = figureList.find(figures => figures.id === figureID);
        setCurrentFigure(targetFigure);
    }, [figureID]);

    return (
        <FigureInformationContainer>
            <ScreenHeader 
                title="Figure Information"
                iconName={ICON_NAMES.BACK}
                iconSize="32"
                onPressIcon={handleReturn}
            />
            <FigureLabel>{currentFigure.figureName}</FigureLabel>
            <FigureVersionLabel>({currentFigure.figureVersion})</FigureVersionLabel>
            
            <Image
                src={currentFigure.figurePhotoUrl}
                resizeMode={"cover"}
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
                            placeholder={currentFigure.figureDateStamp + " "}
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
                            placeholder={currentFigure.figureReleaseDate + " "}
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
                            placeholder={currentFigure.figureJointCount + " "}
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
                            placeholder={currentFigure.figureAccessoryCount + " "}
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
                        placeholder={currentFigure.figureAccessoryDetails}
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
        fontFamily: FONTS.REGULAR,
    },
    text2: {
        height: 100,
        fontSize: 22,
        fontFamily: FONTS.ITALIC,
    },
    image: {
        height: 400,
        width: 300,
        padding: 10,
    },
});

export default MU20152017InfoScreen;