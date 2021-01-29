import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

// import styles
import { Colors, Typography } from '@styles'
import { Text } from '@styles/CommonStyles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// import components
import PreviewThumb from '@components/PreviewThumb'

const mokupData = [
  {
    shareTitle: '수제버거 투어는 수성못으로!',
    adminTag: {
      regionTag: ['대구광역시'],
      seasonTag: '봄'
    },
    userTags: ['봄', '수성못', '벚꽃']
  },
  {
    shareTitle: '텐동 맛집은 여기로!!',
    adminTag: {
      regionTag: ['대구광역시'],
      seasonTag: '여름'
    },
    userTags: ['봄', '수성못', '벚꽃']
  },
  {
    shareTitle: '공유 동선입니다!!',
    adminTag: {
      regionTag: ['대구광역시'],
      seasonTag: '가을'
    },
    userTags: ['봄', '수성못', '벚꽃']
  },
]

export default function FlowList({ localShareFlow, navi }) {
  return (
    <View
      style={styles.container}
    >
      {/* {
        localShareFlow ? localShareFlow.map((value => <PreviewThumb data={value} />)) : null
      } */}
      {
        mokupData ? mokupData.map(((value, index) => <PreviewThumb key={`thumb-${index}`}  data={value} />)) : null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
})