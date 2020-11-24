/* eslint-disable global-require */
import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { getStatusBarHeight } from "react-native-status-bar-height";
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'
import { Colors } from '@styles'

// Apollo
import { ApolloProvider } from '@apollo/react-hooks'
import { apolloClient } from '~/graphql'

// Navigation Component
import RootNavigationContainer from './src/navigations/RootNavigation'

// StatusBar
StatusBar.setBarStyle("light-content");
if (Platform.OS === "android") {
  StatusBar.setBackgroundColor("rgba(0,0,0,0.3)");
  StatusBar.setTranslucent(true);
}

// import styles
const styles = StyleSheet.create({
  topOpacityContainer: {
    position: 'absolute',
    top: 0,
    height: getStatusBarHeight(),
    backgroundColor: Colors.GRAY_9,
    opacity: 0.4,
  }
})


export default function App() {
  // loading fonts
  const [isLoaded] = useFonts({
    NanumSquare_acBold: require('~/assets/fonts/NanumSquare_acBold.ttf'),
    NanumSquare_acExtraBold: require('~/assets/fonts/NanumSquare_acExtraBold.ttf'),
    NanumSquare_acLight: require('~/assets/fonts/NanumSquare_acLight.ttf'),
    NanumSquare_acRegular: require('~/assets/fonts/NanumSquare_acRegular.ttf'),
  })

  return (
    <>
      <View style={styles.topOpacityContainer}>
        <StatusBar barStyle="light-content" />
      </View>
      {!isLoaded ? (
        <AppLoading />
      ) : (
          <ApolloProvider client={apolloClient}>
            <RootNavigationContainer />
          </ApolloProvider>
        )}
    </>
  )
}
