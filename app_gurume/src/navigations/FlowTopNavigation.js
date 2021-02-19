import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack';

// import screens
import FlowSearch from '@screens/Flow/FlowSearch'
import FlowMe from '@screens/Flow/FlowMe'
import FlowShare from '@screens/Flow/FlowShare'
import SharedFlowList from '@screens/Flow/FlowMe/SharedFlowList'

// import styles
import { Colors, Typography } from '@styles'

const Tab = createMaterialTopTabNavigator()
const FlowMeStack = createStackNavigator()

export default function FlowTopNavigation() {
  return (
    <Tab.Navigator
      swipeEnabled={false}
      screenOptions={{
        headerStyle: {
          elevation: 0,
        }
      }}
      tabBarOptions={{
        activeTintColor: Colors.BLACK,
        labelStyle: {
          fontSize: 16,
          fontFamily: Typography.FONT_FAMILY_BOLD,
          
        },
        style: {
          backgroundColor: Colors.WHITE, elevation: 0, borderBottomWidth: 3,
          borderBottomColor: Colors.GRAY_8 + "10", marginTop: 3,
          marginHorizontal: 18
        },
        indicatorStyle: {
          borderBottomWidth: 3,
          borderBottomColor: Colors.GRAY_8,
          position: 'relative',
          top: 48,
        }
      }}
    >
      <Tab.Screen
        name="flowSearch"
        component={FlowSearch}
        options={{
          tabBarLabel: '검색',
        }}
      />
      <Tab.Screen
        name="flowMe"
        component={FlowMeStackScreen}
        options={{
          tabBarLabel: '동선 관리',
        }}
      />
      <Tab.Screen
        name="flowShare"
        options={{
          tabBarLabel: '공유하기',
        }}
        component={FlowShare}
      />
    </Tab.Navigator>
  )
}

const FlowMeStackScreen = ({ navigation }) => {
  return (
    <FlowMeStack.Navigator
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
      <FlowMeStack.Screen
        name="flowMe"
        options={{ headerMode: 'none', headerShown: false }}
        component={FlowMe}
      />
      <FlowMeStack.Screen
        name="sharedFlow"
        options={{ headerMode: 'none', headerShown: false }}
        component={SharedFlowList}
      />
    </FlowMeStack.Navigator>
  )
}