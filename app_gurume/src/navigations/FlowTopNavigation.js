import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

// import screens
import FlowSearch from '@screens/Flow/FlowSearch'
import FlowMe from '@screens/Flow/FlowMe'
import FlowShare from '@screens/Flow/FlowShare'

const Tab = createMaterialTopTabNavigator()

export default function FlowTopNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: 'black',
        style: {
          backgroundColor: '#65CBFF',
          marginHorizontal: 50,
          borderRadius: 30,
        },
        labelStyle: {
          textAlign: 'center',
          fontWeight: 'bold',
        },
        indicatorStyle: {
          borderBottomColor: 'transparent',
          opacity: 0,
          borderBottomWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="검색"
        component={FlowSearch}
        options={{
          tabBarLabel: '검색',
        }}
      />
      <Tab.Screen
        name="동선"
        component={FlowMe}
        options={{
          tabBarLabel: '내 동선',
        }}
      />
      <Tab.Screen name="공유" component={FlowShare} />
    </Tab.Navigator>
  )
}
