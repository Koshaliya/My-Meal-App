import React from 'react'
import { Platform } from 'react-native'
import {HeaderButton} from 'react-native-header-buttons'
import { Ionicons } from '@expo/vector-icons'

import Colors from '../constants/Colors'

//passing all the props to the widget
const CustomHeaderButton= props => {
    return <HeaderButton
    {...props}
    IconComponent={Ionicons}
    iconSize={23}
    color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
    />
}

export default CustomHeaderButton