import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

import { 
    FigureInformationContainer,
    ContentContainer,
    ContentContainer2,
    ContentLabel,
    TextContainer
} from './styles'
import ScreenHeader from 'components/ScreenHeader'
import colors from "assets/themes/colors";
import { ICON_NAMES } from "constants/constants";
import { FONTS } from "constants/constants";

const FigureInformationScreen = ({ navigation }) => {
  return (
    <FigureInformationContainer>
        <ScreenHeader 
            title="Figure Information"
            iconName={ICON_NAMES.BACK}
            iconSize="32"
            onPressIcon={() =>
                navigation.navigate("Showcase")}
        />
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
});

export default FigureInformationScreen;