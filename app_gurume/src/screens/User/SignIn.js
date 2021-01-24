import React from 'react'
import { TouchableOpacity, View, StyleSheet, Image } from 'react-native'

import { Typography, Colors } from '../../styles';
import { Text } from '../../styles/CommonStyles';
import { GRAY_1 } from './../../styles/color';

export default function SignIn() {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8}>
            <View style={styles.btnGoogleLogin}>
                <Image source={require('../../assets/images/googleLogo.png')} style={{}} />
                <Text style={[styles.txtGoogleLogin, { fontSize: 21 }]}>Sign in with Google</Text>
            </View>
            {/* <Text>로그인을 위한 컴포넌트</Text> */}
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