import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { Text } from '@styles/CommonStyles'
import { Colors } from '@styles'

// import utils
import { convertRegion } from '@utils'

// import mokup
import mokupRegion from '../../../model/mokupRegion'

// === TEST CODE ===
// 지역 임시 태그 생성.
const exampleData = mokupRegion.map((item, index) => {
  return {
    key: `region-${index}`,
    label: String(convertRegion(item)),
    onPress: Boolean(Math.round(Math.random()))
  }
})

export default function FlowHashTags(props) {
  const [regionTags, setRegionTags] = useState(exampleData)
  const [userHashTags, setUserHashTags] = useState(['야식이 입맛', '고기맛집'])

  useEffect(() => {
    if (props.signalOnPress === true) {
      setUserHashTags([...userHashTags, props.hashTagText])
      props.setSignalOnPress(false)
      props.setHashTagText('')
      // TODO 여기서 검색결과 반영 로직 주는게 좋겠다.
    }

  }, [props.signalOnPress])

  return (
    <View style={styles.container}    >
      <View style={styles.headerContainer}>
        <Text weight="BOLD" size={20} style={styles.titleWrapper}># 지역별 해시태그</Text>
        {/* 해시태그 */}
        <View style={styles.hashtagContainerWrapper}>
          {/* <View style={styles.hashtagContainer}>
            <Text color={Colors.WHITE} weight="BOLD" size={16}>서울</Text>
          </View>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_2 }]}>
            <Text color={Colors.GRAY_5} weight="BOLD" size={16}>인천</Text>
          </View> */}
          {regionTags.map(item =>
            <View key={item.key} style={[styles.hashtagContainer, item.onPress ? null : { backgroundColor: Colors.GRAY_2 }]}>
              <Text color={item.onPress ? Colors.WHITE : Colors.GRAY_5} weight="BOLD" size={16}>{item.label}</Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.headerContainer}>
        <Text weight="BOLD" size={20} style={styles.titleWrapper}># 계절별 해시태그</Text>
        {/* 해시태그 */}
        <View style={styles.hashtagContainerWrapper}>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.YELLOW_6 }]}>
            <Text color={Colors.WHITE} weight="BOLD" size={16}>봄</Text>
          </View>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_2 }]}>
            <Text color={Colors.GRAY_5} weight="BOLD" size={16}>여름</Text>
          </View>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_2 }]}>
            <Text color={Colors.GRAY_5} weight="BOLD" size={16}>가을</Text>
          </View>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_2 }]}>
            <Text color={Colors.GRAY_5} weight="BOLD" size={16}>겨울</Text>
          </View>
        </View>
      </View>
      <View style={styles.headerContainer}>
        <Text weight="BOLD" size={20} style={styles.titleWrapper}># 사용자가 추가한 해시태그</Text>
        {/* 해시태그 */}
        <View style={styles.userHashTagContainer}>
          {
            userHashTags.map((item, index) =>
              <View key={`user-${index}`} style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_7 }]}>
                <Text color={Colors.WHITE} weight="BOLD" size={16}># {item}</Text>
              </View>
            )
          }
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    borderRadius: 5,
    marginVertical: 5,
  },
  headerContainer: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 3,
    borderColor: Colors.GRAY_9,
  },
  hashtagContainerWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomWidth: 1,
    borderBottomColor: Colors.GRAY_2,
    paddingHorizontal: 10,
    paddingTop: 6,
    paddingBottom: 15
  },
  titleWrapper: {
    paddingVertical: 3,
    marginLeft: 8,
    marginBottom: 5,
  },
  hashtagContainer: {
    backgroundColor: '#F5839A',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 15,
    marginVertical: 6,
    elevation: 1.5,
    minWidth: 60,
    alignItems: 'center',
    marginRight: 4
  },
  userHashTagContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    flexWrap: 'wrap',
  }
})