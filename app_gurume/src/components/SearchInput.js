import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// import styles
import { Colors, Typography } from '@styles'

export default function SearchInput(props) {
  const [tempValue, setTempValue] = useState(null)

  const handleClicked = () => {
    if (!tempValue) {
      console.log("검색어를 입력해주세요!!!")
    } else {
      // const 
    }
    console.log("클릭!")
    props.onPress(true)
    // 1. 검색 버튼이 눌렸다는 신호를 상위 컴포넌트에 넘겨준다.
    // 2. 상위 컴포넌트에서는 해당 검색 신호를 받아들이고
    // 3. input 창의 text 를 서버로 전송
    // 4. 검색 결과가 서버로 부터 도착하면 해당 검색 결과를 불러올 리스트 토글 ON
    // 5. 토글이 ON => 리스트 컴포넌트에 서버로 부터 도착한 데이터 전송하기.
  }

  return (
    <View style={[styles.container, { marginTop: props.directionTop ? 80 : null }]}    >
      <View style={styles.inputContainer}>
        <TextInput
          style={{
            fontFamily: Typography.FONT_FAMILY_REGULAR,
            fontSize: Typography.FONT_SIZE_16,
          }}
          onChangeText={(text) => setTempValue(text)}
          value={props.text}
          placeholder="내가 좋아하는 유튜버를 검색해보세요"
        />
        <TouchableOpacity
          onPress={() => handleClicked()}
          style={styles.searchContainer}
          hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <MaterialCommunityIcons name="magnify" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    paddingHorizontal: 5,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Colors.GRAY_8,
    borderRadius: 50,
    padding: 12,
    marginHorizontal: 10,
    // textTransform: 'uppercase',
    flex: 1,
    backgroundColor: Colors.WHITE,
    shadowColor: Colors.GRAY_9,
  },
  buttonContainer: {
    // elevation: 10, // FIXME position absoulate 로 걸어준 컴포넌트도 그림자 속성이 걸려있으면 튀어 나오는 이슈...
    marginLeft: 12,
    width: 60,
    height: 60,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: Colors.GRAY_8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.WHITE,
    textTransform: 'uppercase',
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_16,
  },
  hambugerContainer: {
    position: 'absolute',
    zIndex: 1,
    top: 14,
    left: 22,
  },
  searchContainer: {
    position: 'absolute',
    top: 14,
    right: 15,
  }
})