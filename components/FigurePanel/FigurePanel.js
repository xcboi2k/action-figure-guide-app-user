import { View, Text } from 'react-native'
import React from 'react'

import { 
    ItemContainer,
    Title,
    Subhead
} from './styles'

const FigurePanel = (
    onPress,
    name,
    version) => {
  return (
    <ItemContainer>
        <Title>{name}</Title>
        {version && <Subhead>{version}</Subhead>}
    </ItemContainer>
  )
}

export default FigurePanel;