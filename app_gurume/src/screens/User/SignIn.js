import React, { useState, useEffect } from 'react'
import { TouchableOpacity, View, StyleSheet, Image, Alert } from 'react-native'
import * as Google from 'expo-google-app-auth'

import { Typography, Colors } from '../../styles';
import { Text } from '../../styles/CommonStyles';
import { GRAY_1 } from './../../styles/color';

export default function SignIn() {
    const [userInfo, setUserInfo] = useState(null)

    const handleSignIn = async () => {
        try {
            const result = await Google.logInAsync({
                androidClientId:
                    '545704347468-26dk3nggi2if8ci4sek1flt9374tbn4h.apps.googleusercontent.com',
                // TODO 클라이언트 아이디 env 파일로 따로 빼놓자.
                // iosClientId: 'your-id',
                scopes: ['profile', 'email'],
                permissions: ['public_profile', 'email', 'gender', 'location']
            })
            if (result.type === 'success') {
                const googleUser = result.user
                console.log(googleUser)
                console.log(result.accessToken)
                Alert.alert("🔥 로그인 성공!!!")
                /**
                 * 로그인 후 활용 예정 데이터
                 * googleUser.email, googleUser.name, result.accessToken
                 */
            } else {
                Alert.alert("로그인에 실패했습니다!!!")
            }
        } catch (e) {
            Alert.alert("시스템 에러!!!")
        }
    }

    return (
        // 구글로그인 로직
        <TouchableOpacity onPress={() => handleSignIn()} style={styles.container} activeOpacity={0.8}>
            <View style={styles.btnGoogleLogin}>
                <Image source={require('../../assets/images/googleLogo.png')} style={{}} />
                <Text style={[styles.txtGoogleLogin, { fontSize: 21 }]}>Sign in with Google</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnGoogleLogin: {
        backgroundColor: Colors.GRAY_1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        borderRadius: 20,
        // elevation: 3,
    },
    txtGoogleLogin: {
        paddingHorizontal: 80,
        paddingTop: 30,

    }
})