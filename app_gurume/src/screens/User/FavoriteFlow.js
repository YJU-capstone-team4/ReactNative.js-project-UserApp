import React, { useState } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Text } from './../../styles/CommonStyles'
import { Colors } from '@styles'
import FlowList from '@components/Flow/FlowList'

const FavoriteFlow = (props) => {
    const [userFlows, setUserFlows] = useState(
        {
            shareFlowTb: [
                {
                    "adminTag": {
                        "regionTag": [
                            "서울특별시"
                        ],
                        "seasonTag": "봄"
                    },
                    "userTags": [
                        "서울하면여기",
                        "맛있는서울",
                        "맛있는",
                        "올해최고맛집",
                        "조용한",
                        "연인",
                        "분위기좋은",
                        "분위기있는"
                    ],
                    "_id": "5fb7a0f81fcd78533c2e9c70",
                    "shareTitle": "서울에는 이런것도 있지",
                    "shareThumbnail": "../images/test.jpg",
                    "folderId": "5fb797b5af3c922f9490faa0"
                },
                {
                    "adminTag": {
                        "regionTag": [
                            "서울특별시"
                        ],
                        "seasonTag": "봄"
                    },
                    "userTags": [
                        "서울하면여기",
                        "즐거운서울",
                        "분위기좋은",
                        "맛있는",
                        "올해최고맛집",
                        "맛스타그램",
                        "신나는"
                    ],
                    "_id": "602b60155024ad637c0753db",
                    "shareTitle": "즐거운 서울",
                    "shareThumbnail": "../images/test.jpg",
                    "folderId": "5fb7b0473fddab615456b166"
                },
                {
                    "adminTag": {
                        "regionTag": [
                            "부산광역시"
                        ],
                        "seasonTag": "겨울"
                    },
                    "userTags": [
                        "부산하면여기",
                        "부산사나이",
                        "친구와",
                        "부산에서놀자",
                        "부산최고"
                    ],
                    "_id": "603240cd961d9461ccda32cb",
                    "shareTitle": "부산에는 맛있는게 많지",
                    "shareThumbnail": "../images/test.jpg",
                    "folderId": "60323e5f30ee20334433520e"
                },
                {
                    "adminTag": {
                        "regionTag": [
                            "부산광역시",
                            "대구광역시"
                        ],
                        "seasonTag": "겨울"
                    },
                    "userTags": [
                        "안녕"
                    ],
                    "_id": "6038de7a9a0f3827bc46a374",
                    "shareTitle": "포스트맨으로 테스트중2222",
                    "folderId": "60336db678a46f2a7fa8ccc8",
                    "shareThumbnail": "6038de7a9a0f3827bc46a374"
                },
                {
                    "adminTag": {
                        "regionTag": [
                            "전라북도",
                            "대구광역시"
                        ],
                        "seasonTag": "겨울"
                    },
                    "userTags": [
                        "이건가능한가요"
                    ],
                    "_id": "6038e5509a0f3827bc46a37d",
                    "shareTitle": "포스트맨으로 테스트중ㅋ",
                    "folderId": "60336db678a46f2a7fa8ccc8",
                    "shareThumbnail": "6038e5509a0f3827bc46a37d"
                }
            ]
        }
    )


    return (
        <ScrollView style={styles.container}>
            <FlowList navi={props.navigation} data={userFlows} />
        </ScrollView>
    )
}

export default FavoriteFlow

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        // height: '100%',
        // paddingHorizontal: 15,
        paddingTop: 8
    }
})
