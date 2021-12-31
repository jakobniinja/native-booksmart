import React from 'react'
import { View, Text } from 'react-native'
import ListItems from '../components/ListItems'
import { useTheme } from '@react-navigation/native';


export default function Home() {
    const {colors} =  useTheme();
    return (
        <View   >
            <ListItems  />
        </View>
    )
}
