import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

// import components
import UserInfo from './UserInfo'

export default function index(props) {
    // 임시 로그인 검증 변수
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        // props.navigation.navigate('signIn', {
        //     // storeId: index,
        //     // storeName: marker.title,
        // })
    }, [])

    return (
        <View>
            {/* TODO Redux 전역 State 확인 후 로그인 로직 처리 */}
            {/* IF) 로그인 상태가 아닐 경우 props.navitagion -> page 이동 로직 작성. */}
            {isLogin ?
                <UserInfo /> : null}
        </View>
    )
}
