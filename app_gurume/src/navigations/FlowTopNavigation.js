import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

// import screens
import FlowSearch from '@screens/Flow/FlowSearch'
import FlowMe from '@screens/Flow/FlowMe'
import FlowShare from '@screens/Flow/FlowShare'

// import styles
import { Colors, Typography } from '@styles'

const Tab = createMaterialTopTabNavigator()

export default function FlowTopNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          elevation : 0
        }
      }}
      tabBarOptions={{
        activeTintColor: Colors.BLACK,
        labelStyle: {
          fontSize: 12,
          fontFamily: Typography.FONT_FAMILY_BOLD,
        },
        tabStyle: { width: 100 },
        style: { backgroundColor: Colors.WHITE, elevation: 0 },
        indicatorStyle: {
          // opacity: 0,
          borderBottomWidth: 2,
          borderBottomColor: Colors.BLACK
        }
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
