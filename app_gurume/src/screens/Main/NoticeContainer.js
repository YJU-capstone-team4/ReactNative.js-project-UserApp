import React from 'react'
import { View, ImageBackground } from 'react-native'

import { Text } from '../../styles/CommonStyles'
import { Colors } from '@styles'

export default function NoticeContainer() {
    return (
        <ImageBackground
            source={require("../../assets/images/background_img.png")}
            style={{
                height: 290,
                justifyContent: 'center',
                // alignItems: 'center',
                paddingTop: 40,
                marginBottom: 10,
            }}
        // imageStyle={{ borderRadius: 13 }}
        >
            <Text style={{ color: Colors.WHITE, marginBottom: 10, marginLeft: 20, fontSize: 25 }} weight={"BOLD"}>환영합니다! 코코님</Text>
            <Text style={{ color: Colors.WHITE, marginBottom: 10, marginLeft: 20, fontSize: 29 }} weight={"BOLD"}>빅데이터 유튜브 정보를</Text>
            <Text style={{ color: Colors.WHITE, marginBottom: 10, marginLeft: 20, fontSize: 23 }} weight={"BOLD"}>이용해보세요!</Text>
        </ImageBackground>
    )
}
