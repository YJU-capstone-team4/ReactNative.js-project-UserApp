import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { getStatusBarHeight } from "react-native-status-bar-height"

// import components
import useSelectBox from '@components/SelectBox'

// import screens
import Youtuber from './Youtuber'
import HashTag from './HashTag'
import Flow from './Flow'

// styles
import { Colors } from '@styles'
import { Text } from '@styles/CommonStyles'
import FeatherIcons from 'react-native-vector-icons/Feather'

export default () => {
  const [SelectBox, itemValue, setItemValue] = useSelectBox()
  
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.statusBar}>
        <Text size={18} weight="BOLD" style={styles.headerText}>통계</Text>
      </View>
      <ScrollView style={styles.container}>
        <Youtuber />
        <View style={{ paddingHorizontal: 15, flex: 1 }}>
          <View style={styles.miniMenuWrapper}>
            <Text weight="BOLD" size={20}>🌏 지역별 조회</Text>
          </View>
          <View>
            <SelectBox />
          </View>
          <HashTag />
          <Flow />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: Colors.WHITE
  },
  statusBar: {
    paddingTop: getStatusBarHeight(),
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
  },
  miniMenuWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 18,
    paddingBottom: 10,
    backgroundColor: Colors.WHITE,
  },
  headerText: {
    paddingVertical: 15
  }
})