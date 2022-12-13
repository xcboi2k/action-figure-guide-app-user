import { Svg, Path } from 'react-native-svg'
import React from 'react'

const BackIcon = ({ size = 32, color = "none" }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M1 15.4L12.2 1V9C31.3248 9 33.5312 24.4848 33 33C32.1968 28.704 31.824 21.8 12.2 21.8V29.8L1 15.4Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  )
}

export default BackIcon;