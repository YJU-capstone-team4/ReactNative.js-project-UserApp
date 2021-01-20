import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

// import styles
import { Colors, Typography } from '@styles'

// import components
import YoutuberList from '@components/List/YoutuberList'
// import MovieList from '@components/List/MovieList'

// import screens
import YoutuberChart from './YoutuberChart'

export default function index() {
  return (
    <View style={styles.selectContainer}>
      {/* <Text style={{ alignSelf: 'center', padding: 10 }}>유튜버</Text> */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 5,
          marginTop: 10,
          paddingHorizontal: 10,
        }}
      >
        <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: Colors.BLUE_8, }]}>
          <Text style={[styles.buttonText, { color: Colors.WHITE }]}>인기 유튜버</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonContainer, {}]}>
          <Text style={styles.buttonText}>급상승 유튜버</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonContainer, {}]}>
          <Text style={styles.buttonText}>급상승 동영상</Text>
        </TouchableOpacity>
      </View>
      {/* Tab 선택에 따라 아래 컴포넌트 유동적으로 변경 */}
      <YoutuberList />
      {/* <MovieList /> */}
      <Text style={{ alignSelf: 'center', padding: 10 }}>구독자 & 조회수 비교</Text>
      <YoutuberChart />
    </View>
  )
}

const styles = StyleSheet.create({
  selectContainer: {
    // backgroundColor: Colors.PRIMARY,
    marginBottom: 10,
  },
  buttonContainer: {
    elevation: 3,
    // width: 100,
    margin: 2,
    flex: 1,
    paddingVertical: 15,
    backgroundColor: Colors.WHITE,
    borderColor: Colors.BLUE_8,
    borderWidth: 1,
    borderRadius: 5,
    // borderBottomWidth: 0,
    alignSelf: 'center',
  },
  buttonText: {
    color: Colors.BLACK,
    alignSelf: 'center',
    textTransform: 'uppercase',
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
})
