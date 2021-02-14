import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

// import styles
import { Colors } from '@styles'
import { Text } from '@styles/CommonStyles'
import FeatherIcons from 'react-native-vector-icons/Feather'

// import components
import YoutuberList from '@components/List/YoutuberList'
// import MovieList from '@components/List/MovieList'

// import screens
import YoutuberChart from './YoutuberChart'
import SubHeader from './SubHeader'

export default function index() {
  const [visibleChart, setVisibleChart] = useState(false)
  const [menuInfo, setMenuInfo] = useState([
    { label: '인기 유튜버', onPress: true },
    { label: '급상승 유튜버', onPress: false },
    { label: '금상승 동영상', onPress: false },
  ])

  return (
    <View style={styles.selectContainer}>
      <SubHeader menuInfo={menuInfo} setMenuInfo={setMenuInfo} />
      <View style={styles.itemWrapper}>
        {/*TODO menuInfo의 onPress 에 따라서 메뉴 리스트 달리 보여줘야 함. */}
        {/* 
            ['인기 유튜버', '급상승 유튜버', '급상승 동영상'] 컴포넌트 불러오기
        */}
      </View>
      <View style={{ marginBottom: 10 }}>
        <View style={styles.miniMenuWrapper}>
          <Text weight="BOLD" size={20}>🏆 구독자 + 조회수 비교</Text>
          <FeatherIcons
            name={visibleChart ? "chevron-up" : "chevron-down"}
            size={22}
            color={Colors.GRAY_5}
            onPress={() => { setVisibleChart(!visibleChart) }}
          />
        </View>
        {
          visibleChart ?
            <View style={styles.miniMenuContainer}>
              <YoutuberChart />
            </View> : null
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  selectContainer: {
    // marginBottom: 10,
    backgroundColor: Colors.GRAY_2 + '80',
  },
  itemWrapper: {
    borderTopWidth: 1.5,
    borderTopColor: Colors.GRAY_3,
    height: 300
  },
  miniMenuWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: Colors.WHITE,
  },
  miniMenuContainer: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 10,
  }
})
