import { StyleSheet } from "react-native";
import styled from "styled-components/native";

import colors from "assets/themes/colors";
import { FONTS } from "constants/constants.js";

const commonStyles = StyleSheet.create({
    defaultPage: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary.colorOne,
    },
});

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${colors.primary.colorOne};
`;

export const Title2 = styled.Text`
    font-family: ${FONTS.BLACK};
    font-size: 25px;
    line-height: 25px;
`;

export default commonStyles;