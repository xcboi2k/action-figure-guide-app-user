import styled from "styled-components/native";

import { Container } from "components/common/styles/commonStyles";
import colors from "assets/themes/colors";
import { FONTS } from "constants/constants";

export const FigureInformationContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    padding-bottom: 20px;
`;

export const ContentContainer = styled.View`
    width: 80%;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
`;

export const ContentContainer2 = styled.View`
    width: 80%;
    margin-bottom: 5px;
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
