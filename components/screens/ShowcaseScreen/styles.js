import styled from "styled-components/native";
import colors from "assets/themes/colors";
import { FONTS } from "constants/constants";

import { Container } from "components/common/styles/commonStyles";

export const ShowcaseContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    padding-bottom: 20px;
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

export const HolderContainer = styled.View`
    margin-top: 20px;
    align-items: center;
    width: 90%;
`;