import React from 'react'
import { View, ImageBackground } from 'react-native'

import { Text } from '../../styles/CommonStyles'
import { Colors } from '@styles'


export default function MainHeader() {
  return (
    <ImageBackground
      source={require("../../assets/images/background_img.png")} 
      style={{
        // backgroundColor: Colors.GREEN_8,
        height: 280,
        justifyContent: 'center',
        // alignItems: 'center',
        paddingTop: 40,
        marginBottom: 10,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25
      }}
    >
      <Text style={{ color: Colors.WHITE, marginBottom: 10, marginLeft:20, fontSize:25 }} weight={"BOLD"}>환영합니다! 코코님</Text>
      <Text style={{ color: Colors.WHITE, marginBottom: 10, marginLeft:20, fontSize:25 }} weight={"BOLD"}>유튜브 데이터를 한 곳으로</Text>
      <Text style={{ color: Colors.WHITE, marginBottom: 10, marginLeft: 20, fontSize: 20 }} weight={"BOLD"}>이용해보세요!</Text>
    </ImageBackground>
  )
}
