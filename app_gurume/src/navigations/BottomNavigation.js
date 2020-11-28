/* eslint-disable react/prop-types */
import React from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// import styles
import { Colors, Typography } from '@styles'

// import screens
import MainScreen from '@screens/Main'
import MapScreen from '@screens/Map'
import FlowScreen from '@screens/Flow'
import StatisticScreen from '@screens/Statistic'
import YoutuberScreen from '@screens/Youtuber'
import StoreScreen from '@screens/Store'

const Tab = createMaterialBottomTabNavigator()
const MapStack = createStackNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Map"
      activeColor={Colors.RED_4}
      inactiveColor={Colors.RED_1}
      barStyle={{ backgroundColor: '#FFFFFF' }}
    >
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarLabel: '메인',
          // tabBarColor: Colors.BLUE_4,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-map-marker" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapStackScreen}
        options={{
          tabBarLabel: '지도',
          // tabBarColor: Colors.RED_4,
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
          // tabBarColor: Colors.GREEN_4,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map-marker-path" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="통계"
        component={StatisticScreen}
        options={{
          tabBarLabel: '통계',
          // tabBarColor: Colors.PURPLE_4,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-areaspline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Youtuber"
        component={YoutuberScreen}
        options={{
          tabBarLabel: '유튜버',
          // tabBarColor: Colors.PINK_4,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cloud-search" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const MapStackScreen = ({ navigation }) => {

  return (
    <MapStack.Navigator
      screenOptions={{
        // header: null,
        headerStyle: {
          // height:95,
          // backgroundColor: colors.background,
          // shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTitleStyle: {
          fontFamily: Typography.FONT_FAMILY_BOLD,
          marginTop: 2,
          marginLeft: -10,
        }
        // headerTintColor: colors.text,
      }}>
      <MapStack.Screen
        name="map"
        options={{ headerMode: 'none', headerShown: false }}
        component={MapScreen} />
      <MapStack.Screen
        name="storeMap"
        options={{
          title: '상세정보',
        }}
        component={StoreScreen}
      />
    </MapStack.Navigator>
  )
}
