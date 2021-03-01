import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

// import styles
import { Text } from '@styles/CommonStyles'
import { Colors } from '@styles'
import { FONT_SIZE_18 } from './../../styles/typography';
const { width, height } = Dimensions.get("window");
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

/**
 * 유튜버 랭킹 반환 컴포넌트
 * @param {youtuberRankInfo} data 
 */
export default function YoutuberRank({ data }) {
  return (
    <View
      style={{
        backgroundColor: Colors.GRAY_2 + "30",
        padding: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
      }}
    >
      <View style={styles.textWrapper}>
        <Text style={styles.textTitle}>인기 유튜버</Text>
        <Text style={styles.textRank} weight="BOLD">{data ? data.rank : 'N'} 위</Text>
        <FontAwesomeIcon style={[styles.statusIcon, { top: 3 }]} color={data && data.ytbRankIncrease >= 0 ? Colors.GREEN_4 : Colors.RED_3} size={19} name="sort-up" />
        <Text>{data && data.ytbRankIncrease}</Text>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.textTitle}>인기동영상 개수</Text>
        <Text style={styles.textRank} weight="BOLD">{data && data.videoCount} 개</Text>
        <FontAwesomeIcon style={[styles.statusIcon, { bottom: 6 }]} color={Colors.RED_3} size={19} name="sort-down" />
        <Text>1</Text>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.textTitle}>최근 업로드 영상 개수</Text>
        <Text style={styles.textRank} weight="BOLD">{data && data.lastVideoCount} 개</Text>
        <FontAwesomeIcon style={[styles.statusIcon, { top: 3 }]} color={Colors.GREEN_4} size={19} name="sort-up" />
        <Text>3</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textWrapper: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textTitle: {
    width: width * 0.35,
    fontSize: FONT_SIZE_18,
    // textAlign: 'center'
  },
  textRank: {
    width: width * 0.2,
    fontSize: FONT_SIZE_18,
    textAlign: 'right'
  },
  statusIcon: {
    // top: 3,
    paddingLeft: 15,
    paddingRight: 5
  }
})