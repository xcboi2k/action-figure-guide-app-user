import { View, Text } from 'react-native'
import React from 'react'

import Icon from "components/common/Icon";
import colors from "assets/themes/colors";

import { 
  ScreenHeaderContainer,
  ScreenTitle,
  RightIcon
} from './styles';

const ScreenHeader = ({ title, onPressIcon, iconName, iconSize }) => {
  return (
    <ScreenHeaderContainer>
      <ScreenTitle>{title}</ScreenTitle>
        {iconName && (
          <RightIcon onPress={onPressIcon}>
            <Icon
              name={iconName}
              color={colors.primary.colorFive}
              size={iconSize}
            />
          </RightIcon>
        )}
    </ScreenHeaderContainer>
  )
}

export default ScreenHeader;