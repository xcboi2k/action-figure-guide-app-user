import styled from "styled-components/native";
import { FONTS } from "constants/constants";
import colors from "assets/themes/colors";

export const ItemContainer = styled.TouchableOpacity`
    width: 100%;
    border-radius: 15px;
    background-color: ${colors.primary.colorFive};
    padding: 15px;
    margin-bottom: 10px;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${FONTS.BOLD};
    font-size: 20px;
    color: ${colors.primary.colorTwo};
    padding: 2px;
`;

export const Subhead = styled.Text`
    font-family: ${FONTS.ITALIC};
    font-size: 14px;
    color: ${colors.primary.colorTwo};
    padding: 2px;
`;