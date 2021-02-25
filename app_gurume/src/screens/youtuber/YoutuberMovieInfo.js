import React, { useState, useEffect } from 'react'
import { View, Dimensions, Image } from 'react-native'

// import styles
import { Text } from '@styles/CommonStyles'
import { Colors } from '@styles'
const { width, height } = Dimensions.get("window")
import secondMovieThumbnail from '@images/movie_thumbnail_2.png'

// import components
import HashTagList from './HashTagList'

export default function youtuberMovieInfo(props) {
  const [selectedRegionTag, setSelectedRegionTag] = useState(null)

  useEffect(() => {
    if (props.data && props.data.length > 0) {
      setSelectedRegionTag(props.data[0])
      // props.navi.navigate('Map')
    }
  }, [props.data])

  useEffect(() => {
    console.log("지역태그 선택 변경!!")
  }, [selectedRegionTag])

  return (
    <>
      <HashTagList selectedRegionTag={selectedRegionTag} data={props.data} onPress={setSelectedRegionTag} />
      {/* <View style={{ borderColor: Colors.GRAY_5, borderStyle: 'dotted', borderRadius: 1, borderWidth: 2, marginTop: -3, marginBottom: 7 }} /> */}
      <View style={{ flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 15, height: height * 0.25, backgroundColor: Colors.WHITE, elevation: 1 }}>
        <View style={{ width: width * 0.55, paddingRight: 8 }}>
          <Image style={{ width: '100%', height: '100%', borderRadius: 10 }} resizeMode='cover' source={secondMovieThumbnail} />
        </View>
        <View style={{ flex: 1, paddingVertical: 5 }}>
          <Text color={Colors.WHITE} style={{ backgroundColor: Colors.GRAY_7, paddingVertical: 3, paddingHorizontal: 10, borderRadius: 20 }}>영상 제목입니다 ...</Text>
          <Text style={{ paddingVertical: 40 }} weight="BOLD">대구광역시 북구 동북로 13-5 카이스트</Text>
          <Text>조회수 320만회</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 15, height: height * 0.25, backgroundColor: Colors.WHITE, elevation: 1, marginVertical: 10 }}>
        <View style={{ width: width * 0.55, paddingRight: 8 }}>
          <Image style={{ width: '100%', height: '100%', borderRadius: 10 }} resizeMode='cover' source={secondMovieThumbnail} />
        </View>
        <View style={{ flex: 1, paddingVertical: 5 }}>
          <Text color={Colors.WHITE} style={{ backgroundColor: Colors.GRAY_7, paddingVertical: 3, paddingHorizontal: 10, borderRadius: 20 }}>영상 제목입니다 ...</Text>
          <Text style={{ paddingVertical: 40 }} weight="BOLD">대구광역시 북구 동북로 13-5 카이스트</Text>
          <Text>조회수 320만회</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 15, height: height * 0.25, backgroundColor: Colors.WHITE, elevation: 1 }}>
        <View style={{ width: width * 0.55, paddingRight: 8 }}>
          <Image style={{ width: '100%', height: '100%', borderRadius: 10 }} resizeMode='cover' source={secondMovieThumbnail} />
        </View>
        <View style={{ flex: 1, paddingVertical: 5 }}>
          <Text color={Colors.WHITE} style={{ backgroundColor: Colors.GRAY_7, paddingVertical: 3, paddingHorizontal: 10, borderRadius: 20 }}>영상 제목입니다 ...</Text>
          <Text style={{ paddingVertical: 40 }} weight="BOLD">대구광역시 북구 동북로 13-5 카이스트</Text>
          <Text>조회수 320만회</Text>
        </View>
      </View>
      {/* <View
        style={{
          backgroundColor: '#FFF978',
          height: 300,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <Text>해시태그로 보는 지역별 영상 정보가 들어갈 공간입니다.</Text>
        <Text>HasTagMovieList</Text>
      </View> */}
    </>
  )
}
