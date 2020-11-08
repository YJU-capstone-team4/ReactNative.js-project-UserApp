import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

// import styles
import { Colors, Typography } from '@styles'

// import components
import YoutuberList from '@components/List/YoutuberList'
// import MovieList from '@components/List/MovieList'

// import screens
import YoutuberChart from './YoutuberChart'

const styles = StyleSheet.create({
  selectContainer: {
    // backgroundColor: Colors.PRIMARY,
    marginBottom: 10,
  },
  buttonContainer: {
    elevation: 3,
    width: 100,
    paddingVertical: 15,
    backgroundColor: Colors.WHITE,
    borderColor: '#FFA6C5',
    borderWidth: 1.5,
    borderBottomWidth: 0,
    alignSelf: 'center',
  },
  buttonText: {
    color: Colors.BLACK,
    alignSelf: 'center',
    textTransform: 'uppercase',
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
})

export default function index() {
  return (
    <View style={styles.selectContainer}>
      <Text style={{ alignSelf: 'center', padding: 10 }}>유튜버</Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <TouchableOpacity style={[styles.buttonContainer, { borderTopLeftRadius: 10 }]}>
          <Text style={styles.buttonText}>인기 유튜버</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>급상승 유튜버</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonContainer, { borderTopRightRadius: 10 }]}>
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
