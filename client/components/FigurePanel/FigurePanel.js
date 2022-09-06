import { View, Text } from 'react-native'
import React from 'react'

import { 
    ItemContainer,
    Title,
    Subhead
} from './styles'

const FigurePanel = ({
  onPress,
  name,
  version
}) => {
  return (
    <ItemContainer onPress={onPress}>
        <Title>{name}</Title>
        <Subhead>{version}</Subhead>
    </ItemContainer>
  )
}

export default FigurePanel;