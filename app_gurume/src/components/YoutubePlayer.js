import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Animated, TouchableOpacity } from 'react-native'

// import modules
import Modal from 'react-native-modal';
import Youtube from "react-native-youtube-iframe";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// import styles
import { Colors, Typography } from '@styles'
import { Text } from '@styles/CommonStyles'

const YoutubePlayer = (props) => {
    const [isReady, setIsReady] = useState(false)

    const startValue = new Animated.Value(1)
    const endValue = 1.5

    // <<-- icon) arrow-down ==> loop animation
    useEffect(() => {
        Animated.loop(
            Animated.spring(startValue, {
                toValue: endValue,
                friction: 1,
                useNativeDriver: true,
            }),
            { iterations: 500 },
        ).start();
    }, [startValue, endValue])
    // -->>

    const handleChangeState = () => {
        setIsReady(true)
    }

    const handleSwipeComplete = ({ setIsVisible }) => {
        setIsVisible(false)
        setIsReady(false)
    }

    return (
        <Modal
            isVisible={Boolean(props.isVisible)}
            swipeDirection="down"
            onSwipeComplete={() => handleSwipeComplete(props)}
            coverScreen={false}
            onBackdropPress={() => handleSwipeComplete(props)}
            style={{ marginHorizontal: 5 }}
        >
            <View style={styles.container}>
                <Youtube
                    style={{ zindex: 10000 }}
                    height={195}
                    play={true}
                    apiKey={'AIzaSyCrS8s_D9BpIshutUGsQ8gz6mQee3sn7K4'} //여러분의 API_KEY 보안 잘해주세요^^!
                    videoId={props.videoId} // 리스트에서 보낸 videoId를 받아옴
                    onReady={(state) => handleChangeState(state)}   // 영상 상태변화 감지
                    onFullScreenChange={() => { console.log("변경!") }}
                // allowsFullscreenVideo={false}
                />
                {isReady ? null : <Text style={styles.loadingText}>로딩중...</Text>}
                <View style={styles.textContainer}>
                    <Text size={20}>SUB 🔥만드는자VS먹는자🔥 초밥집 사장님께서 평생 무료 이용권을 걸고 도전을 신청해 ...</Text>
                    <View style={styles.infoTextContainer}>
                        <Text weight="BOLD">조회수 130만</Text>
                        <Text>2020. 12. 30.</Text>
                    </View>
                </View>
                <Animated.View style={[styles.closeText, { transform: [{ scale: startValue }] }]} >
                    <MaterialCommunityIcons
                        color={Colors.BLUE_4}
                        size={30}
                        name="chevron-triple-down"
                    />
                </Animated.View>
            </View>
        </Modal >
    )
}

export default YoutubePlayer

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        paddingTop: 40,
        paddingBottom: 0,
        paddingHorizontal: 7,
        borderRadius: 10,
        zIndex: 1000000
    },
    textContainer: {
        paddingTop: 10,
        paddingLeft: 7,
    },
    infoTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
    },
    closeText: {
        alignSelf: 'center',
        textAlign: 'center',
        borderRadius: 5,
        position: 'relative',
        top: 45
    },
    loadingText: {
        position: 'relative',
        bottom: 100,
        textAlign: 'center',
    }
})

