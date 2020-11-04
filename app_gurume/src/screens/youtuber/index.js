import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 30,
    opacity: 0.4,
  },
})

export default () => {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          backgroundColor: '#FF7493',
          height: 50,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <Text>유튜버 검색 기능이 들어갈 공간입니다.</Text>
        <Text>SearchInput</Text>
      </View>
      <View
        style={{
          backgroundColor: '#FF7493',
          // width: 20,
          minHeight: 20,
          flex: 1,
          alignItems: 'flex-end',
          marginBottom: 10,
        }}
      >
        <Text style={{ paddingRight: 5 }}>좋아요 기능이 들어갈 공간입니다. ★</Text>
        <Text style={{ paddingRight: 5, alignSelf: 'center' }}>ThumbsUp</Text>
      </View>
      <View
        style={{
          backgroundColor: '#FFBEFF',
          height: 200,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <Text>유튜버 정보가 들어갈 공간입니다.</Text>
        <Text>YoutuberProfile</Text>
      </View>
      <View
        style={{
          backgroundColor: '#C1FF6B',
          height: 300,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <Text>유튜버 랭킹 정보가 들어갈 공간입니다.</Text>
        <Text>YoutuberRank</Text>
      </View>
      <View
        style={{
          backgroundColor: '#1E96FF',
          height: 100,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <Text>해쉬태그 정보가 들어갈 공간입니다.</Text>
        <Text>HashTagList</Text>
      </View>
      <Text style={{ padding: 10 }}>조회수 Top 5 영상</Text>
      <View
        style={{
          backgroundColor: '#FFA6C5',
          height: 300,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <Text>유튜버 조회수 Top 5 영상 정보가 들어갈 공간입니다.</Text>
        <Text>MovieList</Text>
      </View>
      <Text style={{ padding: 10 }}>해시태그로 보는 지역별 영상</Text>
      <View
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
      </View>
      <View
        style={{
          backgroundColor: '#1E96FF',
          height: 100,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <Text>해쉬태그 정보가 들어갈 공간입니다.</Text>
        <Text>HashTagList</Text>
      </View>
    </ScrollView>
  )
}
