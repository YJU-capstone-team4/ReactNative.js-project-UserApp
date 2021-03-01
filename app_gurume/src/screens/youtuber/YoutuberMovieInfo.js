import React, { useState, useEffect } from 'react'
import { View, Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native'

// import styles
import { Text } from '@styles/CommonStyles'
import { Colors } from '@styles'
const { width, height } = Dimensions.get("window")
import secondMovieThumbnail from '@images/movie_thumbnail_2.png'

// import components
import HashTagList from './HashTagList'

// import apis
import { getYoutuberRegionVideo } from '../../utils/api/youtuber'

// 임시 데이터
const YOUTUBER_ID = `5fb73d0e4c2de82830b54834`

export default function youtuberMovieInfo(props) {
  const [selectedRegionTag, setSelectedRegionTag] = useState(null)
  const [regionVideos, setRegionVideos] = useState(null)

  useEffect(() => {
    console.log("변경!")
    if (props.data && props.data.length > 0) {
      setSelectedRegionTag(props.data[0])
    }
  }, [props.searchYoutuber._id, props.data])

  useEffect(() => {
    console.log("지역태그 선택 변경!!")
    console.log('data', props.searchYoutuber._id, selectedRegionTag)
    getRegionVideos()
  }, [selectedRegionTag])

  const getRegionVideos = async () => {
    const data = await getYoutuberRegionVideo(props.searchYoutuber ? props.searchYoutuber._id : YOUTUBER_ID, [selectedRegionTag])
    console.log("video Data", data)
    setRegionVideos(data)
  }

  const handleNavigation = async ({ storeId }) => {
    props.navi.navigate('storeMap', {
      storeId,
      storeName: '실험용',
    })
  }

  return (
    <>
      <HashTagList selectedRegionTag={selectedRegionTag} data={props.data} onPress={setSelectedRegionTag} />
      {
        regionVideos && regionVideos.length > 0 ?
          regionVideos.map(item =>
            <View key={item._id} style={styles.container}>
              <TouchableOpacity activeOpacity={0.8} style={{ width: width * 0.55, paddingRight: 8 }}>
                <Image style={{ width: '100%', height: '100%', borderRadius: 10 }} resizeMode='cover' source={secondMovieThumbnail} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleNavigation(item)} activeOpacity={0.8} style={{ flex: 1, paddingVertical: 5 }}>
                <View style={{ backgroundColor: Colors.GRAY_7, paddingVertical: 3, paddingHorizontal: 10, borderRadius: 20 }}>
                  <Text numberOfLines={1} color={Colors.WHITE}>
                    {item.ytbVideoName}
                  </Text>
                </View>
                <Text style={{ paddingVertical: 40 }} weight="BOLD">{item.storeAddress}</Text>
                <Text>조회수 {parseInt(item.hits / 1000)}만회</Text>
              </TouchableOpacity>
            </View>
          )
          : <View><Text>해당 지역의 정보가 없습니다... 이건 있을수 없는 일이다.</Text></View>
      }
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    height: height * 0.25,
    backgroundColor: Colors.WHITE,
    elevation: 1
  }
})