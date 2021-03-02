import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { Text } from '@styles/CommonStyles'
import { Colors } from '@styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// import utils
import { convertRegion, convertFullRegion } from '@utils'

// import apis
import { getSharedUserFlow } from '../../../utils/api/flow'

// import mokup
import mokupRegion from '../../../model/mokupRegion'

// === TEST CODE ===
// 지역 임시 태그 생성.
const exampleData = mokupRegion.map((item, index) => {
  return {
    key: `region-${index}`,
    label: String(convertRegion(item)),
    originalLabel: item,
    onPress: index === 0
  }
})

const mokupSeasonTags = ["봄", "여름", "가을", "겨울"].map((item, index) => {
  return {
    key: `season-${index}`,
    label: item,
    onPress: true
  }
})

export default function FlowHashTags(props) {
  const [regionTags, setRegionTags] = useState(exampleData)
  const [seasonTags, setSeasonTag] = useState(mokupSeasonTags)
  const [userHashTags, setUserHashTags] = useState([])

  // 초기 셋팅값 불러오기
  useEffect(() => {
    props.setSignalOnPress(true)
  }, [])

  // 사용자의 태그 클릭에 따른 검색 결과 반환
  useEffect(() => {
    if (props.signalOnPress === true && props.itemValue.option === 'tag') {
      let copyUserHashTag = Array.prototype.slice.call(userHashTags)
      if (props.hashTagText.length > 0) {
        copyUserHashTag.push(props.hashTagTex)
        setUserHashTags(copyUserHashTag)
        props.setHashTagText('')
      }
      props.setSignalOnPress(false)

      const { selectedRegionTags, selectedSeasonTags } = convertRegionArr(regionTags, seasonTags)
      // 검색 API 전송
      const sendData = {
        regionTag: selectedRegionTags,
        seasonTag: selectedSeasonTags,
        userTag: copyUserHashTag,
        shareTitle: '',
        nickname: '',
        option: 'tag'
      }
      sendSearchData(sendData)
    }
  }, [props.signalOnPress])


  // 선택적 해시태그 삭제
  const handelRemoveHashTag = (index) => {
    const selectedUserHashTag = userHashTags.filter((e, i) => (i !== index))
    setUserHashTags(selectedUserHashTag)

    const { selectedRegionTags, selectedSeasonTags } = convertRegionArr(regionTags, seasonTags)
    // 검색 API 전송
    const sendData = {
      regionTag: selectedRegionTags,
      seasonTag: selectedSeasonTags,
      userTag: selectedUserHashTag,
      shareTitle: '',
      nickname: '',
      option: 'tag'
    }

    sendSearchData(sendData)
  }

  // 해시태그 클릭 시 변경되는 UI
  const hashTagOnPress = async (argHastTagType, argItem, argIndex) => {
    // 두 종류로 나뉘어진다.
    // 1. 지역별 해시태그
    // 2. 계절별 해시태그
    // 나머지 로직은 동일.
    argItem.onPress = !argItem.onPress

    let copyArr = argHastTagType === 'region' ? regionTags : seasonTags

    let newArr = [...copyArr] // copying the old datas array
    newArr[argIndex] = argItem

    const { selectedRegionTags, selectedSeasonTags } = convertRegionArr(regionTags, seasonTags)

    argHastTagType === 'region' ? setRegionTags(newArr) : setSeasonTag(newArr)

    // 여기서 서버로 요청 보내고 다시 받아야 함.
    // 예외 처리) 지역태그, 계절태그 중 하나라도 선택하지 않을 경우, 서버로 전송 불가능 적용.
    if (selectedRegionTags.length === 0 || selectedSeasonTags.length === 0) return props.setFlowsData(null);

    // 검색 API 전송
    const sendData = {
      regionTag: selectedRegionTags,
      seasonTag: selectedSeasonTags,
      userTag: userHashTags,
      shareTitle: '',
      nickname: '',
      option: 'tag'
    }
    sendSearchData(sendData)
  }

  /**
   * 
   * @param {array} argRegionTags 
   * @param {array} argSeasonTags 
   */
  const convertRegionArr = (argRegionTags, argSeasonTags) => {
    let selectedRegionTags = []
    let selectedSeasonTags = []

    argRegionTags.map(item => {
      if (item.onPress) {
        selectedRegionTags.push(item.originalLabel)
      }
    })

    argSeasonTags.map(item => item.onPress ? selectedSeasonTags.push(item.label) : null)

    return { selectedRegionTags, selectedSeasonTags }
  }

  const sendSearchData = async argData => {
    const data = await getSharedUserFlow(argData)
    props.setFlowsData(data)
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text weight="BOLD" size={20} style={styles.titleWrapper}># 지역별 해시태그</Text>
        {/* 지역별 해시태그 */}
        <View style={styles.hashtagContainerWrapper}>
          {regionTags.map((item, index) =>
            <TouchableOpacity
              onPress={() => hashTagOnPress('region', item, index)}
              key={item.key}
              style={[styles.hashtagContainer, item.onPress ? null : { backgroundColor: Colors.GRAY_2 }]}
            >
              <Text color={item.onPress ? Colors.WHITE : Colors.GRAY_5} weight="BOLD" size={16}># {item.label}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.headerContainer}>
        <Text weight="BOLD" size={20} style={styles.titleWrapper}># 계절별 해시태그</Text>
        {/* 계절별 해시태그 */}
        <View style={styles.hashtagContainerWrapper}>
          {
            seasonTags.map((item, index) =>
              <TouchableOpacity
                onPress={() => hashTagOnPress('season', item, index)}
                key={item.key}
                style={[styles.hashtagContainer, { backgroundColor: item.onPress ? Colors.YELLOW_6 : Colors.GRAY_2 }]}
              >
                <Text
                  color={item.onPress ? Colors.WHITE : Colors.GRAY_5}
                  weight="BOLD"
                  size={16}
                >
                  # {item.label}
                </Text>
              </TouchableOpacity>
            )
          }
        </View>
      </View>
      <View style={[styles.headerContainer, { marginBottom: -15 }]}>
        <Text weight="BOLD" size={20} style={styles.titleWrapper}># 사용자가 추가한 해시태그</Text>
        {/* 사용자 해시태그 */}
        <View style={styles.userHashTagContainer}>
          {
            userHashTags.length > 0 ? userHashTags.map((item, index) =>
              <View key={`user-${index}`} style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_7 }]}>
                <TouchableOpacity
                  onPress={() => handelRemoveHashTag(index)}
                  hitSlop={{ top: 20, right: 50, bottom: 20, left: 20 }}
                  style={styles.deleteHashtagBtn}
                >
                  <MaterialCommunityIcons
                    name="close-circle"
                    color="black"
                    size={22}
                  />
                </TouchableOpacity>
                <Text color={Colors.WHITE} weight="BOLD" size={16}># {item}</Text>
              </View>
            ) : <Text style={{ paddingVertical: 10 }}>추가된 해시태그가 없습니다...</Text>
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
    paddingHorizontal: 5,
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
    minWidth: 62,
    alignItems: 'center',
    marginHorizontal: 2
  },
  userHashTagContainer: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    flexWrap: 'wrap',
  },
  deleteHashtagBtn: {
    position: 'absolute',
    right: -8,
    top: -13,
  }
})