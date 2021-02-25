import React from 'react'
import { View, StyleSheet } from 'react-native'

// import styles
import { Text } from '@styles/CommonStyles'

// import components
import PreviewThumb from '@components/PreviewThumb'

export default function FlowList(props) {
  const handleOnPress = () => {
    props.naviPath ?
      props.navi.navigate('FlowShow', {
        title: '서울에는 이런것도 있지'
      }) :
      props.navi.navigate('Flow', { screen: 'FlowShow', params: { title: '서울에는 이런것도 있지' } })
  }
  return (
    <View style={styles.container}    >
      {
        props.data && props.data.shareFlowTb && props.data.shareFlowTb.length !== 0 ?
          props.data.shareFlowTb.map(((value, index) => <PreviewThumb onPress={handleOnPress} regionFlow={Boolean(props.region)} key={`thumb-${index}`} data={value} />)) :
          <View style={styles.emptyContainer}>
            <Text>검색 데이터가 없습니다.</Text>
          </View>
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
  },
  emptyContainer: {
    paddingVertical: 50
  }
})