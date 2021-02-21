import React, { useState, useEffect } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { Colors, Typography } from '@styles'
import { Text } from '@styles/CommonStyles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

// import apis
import { getUserFolders } from '@utils/api/folder'

const ModifyFolder = () => {
    const [folders, setFolders] = useState(null)
    const [folderName, setFolderName] = useState('')

    useEffect(() => {
        async function init() {
            const data = await getUserFolders()
            console.log(data.shareFlow)
            setFolders(data.shareFlow)
        }

        init()
    }, [])

    return (
        <View style={styles.container}>
            <Text weight="BOLD" style={{ paddingVertical: 10 }} size={20}>🎃 새로운 폴더 만들기</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10, paddingHorizontal: 18 }}>
                <TextInput
                    style={styles.searchText}
                    placeholder="원하는 폴더 이름을 입력해주세요."
                    onChangeText={(text) => setFolderName(text)}
                    value={folderName}
                />
                <TouchableOpacity>
                    <FontAwesome size={20} name="plus-square" />
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: Colors.GRAY_2, width: '120%', marginLeft: -20, height: 10 }} />
            <View>
                <Text weight="BOLD" style={{ paddingTop: 20, paddingBottom: 10 }} size={20}>🎁 코코님의 폴더 리스트</Text>
            </View>
            {
                folders && folders.map(item =>
                    <View key={item._id} style={styles.folderWrapper}>
                        <Text size={18}>{item.shareTitle}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.btnWrapper}>
                                <FontAwesome size={20} name="pencil" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnWrapper}>
                                <FontAwesome size={20} name="trash" />
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
        </View>
    )
}

export default ModifyFolder

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        paddingHorizontal: 20
    },
    folderWrapper: {
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btnWrapper: {
        // padding: 5
        paddingLeft: 10
    },
    searchText: {
        // textAlign: 'center',
        flex: 1,
        fontSize: 17,
        fontFamily: Typography.FONT_FAMILY_REGULAR
    },
})
