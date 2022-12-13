import styled from "styled-components/native";

// Import themes
import colors from "assets/themes/colors";
import {FONTS} from "constants/constants.js";

export const ButtonContainer = styled.TouchableOpacity`
    width: ${({ width }) => width};
    padding: 10px;
    background-color: ${colors.primary.colorFive};
    border-radius: ${({ rounded }) => rounded};
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const ButtonLabel = styled.Text`
    font-size: ${({ textSize }) => textSize}px;
    text-align: center;
    font-family: ${FONTS.BOLD};
    text-transform: uppercase;
    color: ${colors.primary.colorTwo};
`;