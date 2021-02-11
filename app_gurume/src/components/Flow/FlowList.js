import React from 'react'
import { View, StyleSheet } from 'react-native'

// import styles
import { Text } from '@styles/CommonStyles'

// import components
import PreviewThumb from '@components/PreviewThumb'

// import apis
import { getRegionFlows } from '@utils/api/main/index'
import { useAsync } from '@utils/hooks'

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
]

export default function FlowList(props) {
  const [state] = useAsync(() => getRegionFlows(props.region), [props.region])
  const { loading, data, error } = state

  if (loading) return <View><Text>로딩로딩!</Text></View>
  if (error) return <View><Text>에러에러</Text></View>


  return (
    <View style={styles.container}    >
      {/* {
        mokupData ? mokupData.map(((value, index) => <PreviewThumb key={`thumb-${index}`}  data={value} />)) : null
      } */}
      {
        data && data.shareFlowTb ?
          data.shareFlowTb.map(((value, index) => <PreviewThumb regionFlow={Boolean(props.region)} key={`thumb-${index}`} data={value} />)) : null
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
    paddingBottom: 10
  }
})