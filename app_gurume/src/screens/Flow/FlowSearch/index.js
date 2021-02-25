import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

// import styles
import { Colors } from '@styles'
import { Text } from '@styles/CommonStyles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FeatherIcons from 'react-native-vector-icons/Feather'

// import components
import FlowList from '@components/Flow/FlowList'

// import screens
import PlusInput from './PlusInput'
import FlowHashTags from './FlowHashTags'

const shareFlowTb = {
  "count": 5,
  "shareFlowTb": [
    {
      "_id": "602b60155024ad637c0753db",
      "shareTitle": "즐거운 서울",
      "shareThumbnail": "../images/test.jpg",
      "adminTag": {
        "regionTag": [
          "서울특별시"
        ],
        "seasonTag": "봄"
      },
      "userTags": [
        "서울하면여기",
        "즐거운서울",
        "분위기좋은",
        "맛있는",
        "올해최고맛집",
        "맛스타그램",
        "신나는"
      ]
    },
    {
      "_id": "5fb7a0f81fcd78533c2e9c70",
      "shareTitle": "서울에는 이런것도 있지",
      "shareThumbnail": "../images/test.jpg",
      "adminTag": {
        "regionTag": [
          "서울특별시"
        ],
        "seasonTag": "봄"
      },
      "userTags": [
        "서울하면여기",
        "맛있는서울",
        "맛있는",
        "올해최고맛집",
        "조용한",
        "연인",
        "분위기좋은",
        "분위기있는"
      ]
    },
    {
      "_id": "5fb7a0ff1fcd78533c2e9c71",
      "shareTitle": "서울에 왔는데 여기 안갈거야?",
      "shareThumbnail": "../images/test.jpg",
      "adminTag": {
        "regionTag": [
          "서울특별시"
        ],
        "seasonTag": "여름"
      },
      "userTags": [
        "서울하면여기",
        "맛있는서울",
        "맛있는",
        "올해최고맛집",
        "파티분위기",
        "시원한",
        "머리가띵"
      ]
    },
    {
      "_id": "5fb7a0e81fcd78533c2e9c6e",
      "shareTitle": "서울 맛집 투어",
      "shareThumbnail": "../images/test.jpg",
      "adminTag": {
        "regionTag": [
          "서울특별시"
        ],
        "seasonTag": "가을"
      },
      "userTags": [
        "맛있는서울",
        "맛있는",
        "올해최고맛집",
        "서울하면여기",
        "파티분위기"
      ]
    },
    {
      "_id": "5fb7a0df1fcd78533c2e9c6d",
      "shareTitle": "서울 맛집 동선",
      "shareThumbnail": "../images/test.jpg",
      "adminTag": {
        "regionTag": [
          "서울특별시"
        ],
        "seasonTag": "여름"
      },
      "userTags": [
        "서울하면여기",
        "맛있는서울",
        "분위기좋은",
        "맛있는",
        "올해최고맛집",
        "조용한",
        "연인",
        "맛스타그램"
      ]
    }
  ]
}

export default function index(props) {
  const [itemValue, setItemValue] = useState({ key: 0, label: '해시태그' })
  const [hashTagText, setHashTagText] = useState('')
  const [signalOnPress, setSignalOnPress] = useState(false)

  const [flowsData, setFlowsData] = useState()

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {/* Header ... */}
      <View style={styles.textWrapper}>
        <MaterialCommunityIcons name="pound-box" color={Colors.GRAY_9} size={18} />
        <Text style={styles.textContainer}>동선을 </Text>
        <View style={styles.textHighlighter}>
          <Text size={22} >{itemValue.label}</Text>
        </View>
        <Text style={styles.textContainer}>{itemValue.label === '해시태그' ? '를' : '을'} 통해 검색해보세요!</Text>
      </View>
      {/* 검색 컴포넌트 */}
      <PlusInput
        style={{ flex: 1 }}
        text={hashTagText}
        onChangeText={setHashTagText}
        onPress={setSignalOnPress}
        setItemValue={setItemValue}
        itemValue={itemValue}
      />
      {/* 추가된 해시태그 리스트 */}
      { itemValue.key === 0 &&
        <FlowHashTags
          signalOnPress={signalOnPress}
          setSignalOnPress={setSignalOnPress}
          hashTagText={hashTagText}
          setHashTagText={setHashTagText}
        />
      }
      {/* 해시태그 조합으로 검색된 공유 동선 리스트 */}
      <View style={[styles.textWrapper, { paddingTop: 25, paddingBottom: 7 }]}>
        <MaterialCommunityIcons name="pound-box" color={Colors.RED_3} size={18} />
        <Text style={styles.textContainer}>검색 결과</Text>
      </View>
      <FlowList
        naviPath={true}
        navi={props.navigation}
        data={shareFlowTb}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: 5,
    backgroundColor: Colors.WHITE
  },
  textWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 21,
    paddingBottom: 15,
    paddingLeft: 10
  },
  textContainer: {
    fontSize: 18,
    paddingLeft: 5
  },
  textHighlighter: {
    borderBottomColor: Colors.RED_4 + "90",
    borderBottomWidth: 2,
  }
})