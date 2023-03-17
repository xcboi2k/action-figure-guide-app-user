import styled from "styled-components/native";

import { Container } from "components/common/styles/commonStyles";
import colors from "assets/themes/colors";
import { FONTS } from "constants/constants";

export const FigureInformationContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    padding-bottom: 20px;
    align-items: center;
`;

export const ContentContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
`;

export const ContentContainer2 = styled.View`
    width: 100%;
    margin-bottom: 5px;
`;

export const FigureLabel = styled.Text`
    font-family: ${FONTS.BOLD};
    font-size: 25px;
    color: ${colors.primary.colorSix};
    text-align: center;
    margin-top: 5px;
`;

export const FigureVersionLabel = styled.Text`
    font-family: ${FONTS.ITALIC};
    font-size: 18px;
    color: ${colors.primary.colorSix};
    text-align: center;
    margin-bottom: 15px;
`;

export const ContentLabel = styled.Text`
    font-family: ${FONTS.BOLD};
    font-size: 22px;
    color: ${colors.primary.colorSix};
    text-align: left;
`;

export const TextContainer = styled.View`
    margin-left: auto;
`;

export const ScrollContainer = styled.ScrollView`
    width: 90%;
    flex-grow: 0;
`;