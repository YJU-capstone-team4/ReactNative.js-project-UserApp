import React from 'react'
import { StyleSheet, View } from 'react-native'

// import modules
import Modal from 'react-native-modal';
import Youtube from "react-native-youtube-iframe";

import { Colors, Typography } from '@styles'
import { Text } from '@styles/CommonStyles'

// 유튜브 플레이어는 모달로 감싸서 처리.
const YoutubePlayer = (props) => {
    return (
        <Modal isVisible={Boolean(props.isVisible)}>
            <View style={styles.container}>
                <Youtube
                    height={180}
                    apiKey={'AIzaSyCrS8s_D9BpIshutUGsQ8gz6mQee3sn7K4'} //여러분의 API_KEY 보안 잘해주세요^^!
                    videoId={props.videoId} // 리스트에서 보낸 videoId를 받아옴
                    swipeDirection="down"
                    onSwipeComplete={() => props.setIsVisible(false)}
                />
                <View style={styles.textContainer}>
                    <Text size={20}>SUB) 🔥만드는 자 VS 먹는 자의 대결 과연 결과는?</Text>
                    <Text style={styles.hitsText}>조회수 130만</Text>
                </View>
                <Text weight="BOLD" onPress={() => props.setIsVisible(false)} style={styles.closeText}>닫기</Text>
            </View>
        </Modal>
    );
}

export default YoutubePlayer

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        // justifyContent: 'center',
        // alignContent: 'center',
        display: 'flex',
        paddingVertical: 40,
        paddingHorizontal: 7,
        borderRadius: 10
    },
    textContainer: {
        paddingTop: 10,
        paddingLeft: 7,
    },
    hitsText: {
        paddingVertical: 10
    },
    closeText: {
        alignSelf: 'center',
        color: Colors.WHITE,
        backgroundColor: Colors.RED_3,
        width: '100%',
        textAlign: 'center',
        paddingVertical: 15,
        borderRadius: 5
    }
})

