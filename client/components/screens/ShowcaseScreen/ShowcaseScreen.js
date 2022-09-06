import { StyleSheet, Image } from 'react-native'
import React from 'react'

import { 
    ShowcaseContainer,
    FigureLabel,
    FigureVersionLabel,
    ImageContainer,
    HolderContainer
} from './styles'
import ScreenHeader from 'components/ScreenHeader'
import Button from 'components/Button'
import { ICON_NAMES } from "constants/constants";

const ShowcaseScreen = ({ navigation }) => {
  return (
    <ShowcaseContainer>
        <ScreenHeader 
            title="Figure Showcase"
            iconName={ICON_NAMES.BACK}
            iconSize="32"
            onPressIcon={() =>
                navigation.navigate("FigureMenu")}
        />
        <FigureLabel>Padme Amidala</FigureLabel>
        <FigureVersionLabel>(Attack of the Clones)</FigureVersionLabel>
        <Image
            source={require("E:/Programming/Learning Materials/React Native/Action Figure Guide App/assets/img/samplePic1.jpg")}
            resizeMode={"contain"}
            style={styles.image} >
        </Image>
        <HolderContainer>
            <Button
                title="About"
                type="filled"
                width="35%"
                rounded="25px"
                onPress={() =>
                  navigation.navigate("FigureInfo")}
            />
        </HolderContainer>
    </ShowcaseContainer>
  )
}

const styles = StyleSheet.create({
    image: {
        height: 380,
        padding: 10,
    },
});

export default ShowcaseScreen