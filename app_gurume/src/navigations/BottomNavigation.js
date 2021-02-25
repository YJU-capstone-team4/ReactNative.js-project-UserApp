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
import ModifyFolder from '@screens/User/ModifyFolder'
import ModifyName from '@screens/User/ModifyName'
import ShowFlowScreen from '@screens/Flow/FlowSearch/ShowFlowList'

const Tab = createBottomTabNavigator()
const MapStack = createStackNavigator()
const MainStack = createStackNavigator()
const FlowStack = createStackNavigator()

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
        component={FlowStackScreen}
        options={{
          tabBarLabel: '동선',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map-marker-path" color={color} size={26} />
          ),
        }}
      />
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

const FlowStackScreen = ({ navigation }) => {
  // console.log('네비게이션 정보', navigation)
  return (
    <FlowStack.Navigator
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
        name="Flow"
        options={{ headerMode: 'none', headerShown: false }}
        component={FlowScreen}
      />
      <MapStack.Screen
        name="FlowShow"
        options={({ route }) => ({ title: route.params.title ? route.params.title : '동선 보기' })}
        component={ShowFlowScreen}
      />
    </FlowStack.Navigator>
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
      <MapStack.Screen
        name="ModifyFolder"
        options={{
          title: '동선 폴더 관리',
        }}
        component={ModifyFolder}
      />
      <MapStack.Screen
        name="ModifyName"
        options={{
          title: '닉네임 변경',
        }}
        component={ModifyName}
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