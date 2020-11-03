/* eslint-disable react/prop-types */
import React from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import MainScreen from '../screens/Main'
import MapScreen from '../screens/Map'
import YoutuberScreen from '../screens/Youtuber'

const Tab = createMaterialBottomTabNavigator()

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      // labeled={false}
      activeColor="black"
      inactiveColor="pink"
      barStyle={{ backgroundColor: '#FFFFFF' }}
    >
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarLabel: 'Main',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="map" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Youtuber"
        component={YoutuberScreen}
        options={{
          tabBarBadge: 10,
          tabBarLabel: 'Youtuber',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-box" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
