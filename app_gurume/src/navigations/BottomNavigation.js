/* eslint-disable react/prop-types */
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
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
import UserScreen from '@screens/User'
import SignInScreen from '@screens/User/SignIn'

const Tab = createBottomTabNavigator()
const MapStack = createStackNavigator()
const MainStack = createStackNavigator()

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato', // 탭 활성
        inactiveTintColor: 'gray', // 탭 비활성
        labelStyle: {
          fontSize: 12,
          fontFamily: Typography.FONT_FAMILY_BOLD,
          marginBottom: 8,
        },
        style: {
          paddingVertical: 4,
          height: 58,
          borderBottomWidth: 0.5,
          borderBottomColor: Colors.GRAY_3
        }
      }}
      initialRouteName="Main"
      sceneContainerStyle={{ backgroundColor: Colors.WHITE }}
    >
      <Tab.Screen
        name="Main"
        component={MainStackScreen}
        options={{
          tabBarLabel: '홈',
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
      {/* <Tab.Screen
        name="statistic"
        component={StatisticScreen}
        options={{
          tabBarLabel: '통계',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-bubble" color={color} size={26} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Youtuber"
        component={YoutuberScreen}
        options={{
          tabBarLabel: '유튜버',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="youtube" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator >
  )
}

const MainStackScreen = ({ navigation }) => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: {
          shadowColor: 'black', // iOS
          elevation: 0, // Android
        },
        headerTitleStyle: {
          fontFamily: Typography.FONT_FAMILY_BOLD,
          marginTop: 2,
          marginLeft: -10,
        }
      }}>
      <MapStack.Screen
        name="main"
        options={{ headerMode: 'none', headerShown: false }}
        component={MainScreen}
      />
      <MapStack.Screen
        name="signIn"
        options={{
          title: '로그인',
        }}
        component={SignInScreen}
      />
      <MapStack.Screen
        name="userInfo"
        options={{
          title: '내 정보',
        }}
        component={UserScreen}
      />
    </MainStack.Navigator>
  )
}

const MapStackScreen = ({ navigation }) => {
  return (
    <MapStack.Navigator
      screenOptions={{
        headerStyle: {
          shadowColor: 'black', // iOS
          elevation: 0, // Android
        },
        headerTitleStyle: {
          fontFamily: Typography.FONT_FAMILY_BOLD,
          marginTop: 2,
          marginLeft: -10,
        }
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
      <MapStack.Screen
        name="userInfo"
        option={{
          title: '내 정보'
        }}
        component={StoreScreen}
      />
    </MapStack.Navigator>
  )
}