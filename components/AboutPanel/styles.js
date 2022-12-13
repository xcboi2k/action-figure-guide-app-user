import styled from "styled-components";
import colors from "assets/themes/colors";
import { FONTS } from "constants/constants";

export const AboutPanelContainer = styled.View`
    width: 90%;
    height: 60%;
    align-items: center;
    background-color: ${colors.primary.colorTwo};
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
    margin-bottom: 20px;
`;

export const AboutLabelContainer = styled.View`
    width: 100%;
    height: 15%;
    align-items: center;
    background-color: ${colors.primary.colorFive};
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
`;

export const AboutLabel = styled.Text`
    font-family: ${FONTS.BOLD};
    font-size: 25px;
    color: ${colors.primary.colorTwo};
    text-align: center;
`;

export const AboutTextLabel = styled.Text`
    margin-top:5px;
    font-family: ${FONTS.REGULAR};
    font-size: 19px;
    color: ${colors.primary.colorSix};
    text-align: center;
`;