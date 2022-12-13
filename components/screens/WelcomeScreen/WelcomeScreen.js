//LIBRARY IMPORTS
import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

//LOCAL IMPORTS
import Button from "components/Button";
import welcomePageBG from 'assets/img/welcomePageBackground.png'
import welcomePageLogo from 'assets/img/welcomePageLogo.png'

const WelcomeScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <View style={styles.backgroundContainer}>
                <ImageBackground 
                    source={welcomePageBG}
                    resizeMode="cover"
                    style={styles.image}>
                </ImageBackground>
            </View>
            <Image
                source={welcomePageLogo}
                style={styles.logo}
                resizeMode={"contain"}>
            </Image>
            <View style={styles.buttonContainer}>
                <Button
                    title="LET'S GO"
                    type="filled"
                    width="35%"
                    rounded="5px"
                    onPress={() =>
                    navigation.navigate("MainMenu")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        position:"relative",
    },
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    buttonContainer: {
        justifyContent:"space-around",
        marginTop:20,
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    logo: {
        backgroundColor: 'rgba(0,0,0,0)',
        width: 480,
        height: 150,
    }
    });

export default WelcomeScreen