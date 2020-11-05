/* eslint-disable react/prop-types */
import React from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// import screens
import MainScreen from '../screens/Main'
import MapScreen from '../screens/Map'
import FlowScreen from '../screens/Flow'
import YoutuberScreen from '../screens/Youtuber'

const Tab = createMaterialBottomTabNavigator()

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      // labeled
      activeColor="black"
      inactiveColor="pink"
      barStyle={{ backgroundColor: '#FFFFFF' }}
    >
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarLabel: '메인',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-map-marker" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarLabel: '지도',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map-legend" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Flow"
        component={FlowScreen}
        options={{
          tabBarLabel: '동선',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map-marker-path" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="통계"
        component={MapScreen}
        options={{
          tabBarLabel: '통계',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-areaspline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Youtuber"
        component={YoutuberScreen}
        options={{
          tabBarBadge: 10,
          tabBarLabel: '유튜버',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cloud-search" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
