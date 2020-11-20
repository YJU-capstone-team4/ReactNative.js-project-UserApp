import React from 'react'
import { View, Text } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer';

// navigation.goBack()

export default function MapSideBar(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View>
                <Text>로그인</Text>
            </View>
        </DrawerContentScrollView>
    );
}