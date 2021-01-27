import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native'
import { Camera } from 'expo-camera'
import * as ImagePicker from 'expo-image-picker'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// import styles
import { Colors, Typography } from '@styles'

const dummyTags = [
  {
    color: '#ff99cc',
    name: '대구광역시',
  },
  {
    color: '#ffc000',
    name: '봄',
  },
  {
    color: '#00b050',
    name: '텐동',
  },
  {
    color: '#92d050',
    name: '일식',
  },
  {
    color: '#7030a0',
    name: '데이트',
  },
]

export default function FlowInput() {
  // <<-- camera modules state
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null)
  const [hasCameraPermission, setHasCameraPermission] = useState(null)
  const [image, setImage] = useState(null)
  // -->>
  const [title, setTitle] = useState('데이트 하기 좋은 코스')
  const [hashTag, setHashTag] = useState('')
  const [hashTagList, setHashTagList] = useState(dummyTags)

  // 카메라 모듈 권한 확인 :: IIFE
  useEffect(() => {
    ; (async () => {
      const cameraStatus = await Camera.requestPermissionsAsync()
      setHasCameraPermission(cameraStatus.status === 'granted')

      const galleryStatus = await ImagePicker.requestCameraRollPermissionsAsync()
      setHasGalleryPermission(galleryStatus.status === 'granted')
    })()
  }, [])

  // 사용자로 부터 해시태그 입력 => 추가
  const handleInputHashTag = () => {
    if (hashTag === '') {
      Alert.alert('해시태그를 입력해주세요!!!')
    } else {
      setHashTagList([
        ...hashTagList,
        {
          color: '#ff99cc',
          name: hashTag,
        },
      ])
      setHashTag('')
    }
  }

  // 휴대폰 로컬 저장소에서 이미지 가져오기
  const handelPickImage = async () => {
    // 유저로 부터 권한을 얻지 못했을 경우
    if (hasCameraPermission === false || hasGalleryPermission === false) {
      return Alert.alert('사용자로부터 권한을 얻지 못했습니다.')
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9], // 사용자로부터 1:1 비율의 이미지 가져오기
      quality: 1,
    })

    // 이미지 최종 저장
    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

  // 선택적 해시태그 삭제
  const handelRemoveHashTag = (index) => {
    const _isDefaultTag = index < 2

    _isDefaultTag ?
      Alert.alert('기본 해시태그는 삭제 불가능합니다.') :
      setHashTagList(hashTagList.filter((e, i) => (i !== index)))
  }

  const handelUploadFlow = () => {
    if (title.length === 0) {
      Alert.alert('제목을 입력해주세요.')
    } else if (image === null) {
      Alert.alert('썸네일 이미지를 지정해주세요.')
    } else {
      // mutation 쿼리 전송 ..

      // 데이터 초기화 ..
      setTitle('')
      setHashTag('')
      setImage(null)
    }
  }

  const thumbnail = () => {
    return (
      <View style={{ marginVertical: 5 }}>
        <Image source={{ uri: image }} style={{ flex: 1, height: 200, borderRadius: 10 }} />
        {/* 불투명 Black 배경 */}
        <View style={styles.thumbnailBackground} />
        {/* 썸네일 제목 */}
        <View style={styles.thumbnailTitle}>
          <Text numberOfLines={1} style={[styles.buttonText, { color: 'white', fontSize: 40 }]}>{title}</Text>
        </View>
        {/* 썸네일 관련 태그 */}
        <View
          style={[
            styles.container,
            { margin: 10, position: 'absolute', bottom: 10, flexWrap: 'nowrap' },
          ]}
        >
          {hashTagList.map((tag, index) =>
            index > 5 ? (
              hashTagList.length - 1 === index ? (
                <Text style={[styles.buttonText, { marginTop: 15 }]}>...</Text>
              ) : null
            ) : (
                <View key={index} style={[styles.tagContainer, { backgroundColor: tag.color }]}>
                  <Text style={styles.buttonText}>{tag.name}</Text>
                </View>
              )
          )}
        </View>
      </View>
    )
  }

  return (
    <View>
      <Text style={styles.inputText}>제목</Text>
      <TextInput
        style={styles.inputContainer}
        placeholder="제목을 입력해주세요"
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
      <Text style={styles.inputText}>해시태그</Text>
      <View style={styles.container}>
        <TextInput
          style={[styles.inputContainer, { flex: 1 }]}
          placeholder="해시태그를 입력해주세요"
          onChangeText={(text) => setHashTag(text)}
          value={hashTag}
        />
        <TouchableOpacity onPress={() => handleInputHashTag()} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>추가</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.inputText}>썸네일</Text>
      <View style={styles.container}>
        <TextInput
          style={[
            styles.inputContainer,
            { flex: 1, backgroundColor: Colors.GRAY_LIGHT, color: Colors.BLACK },
          ]}
          value="파일 선택"
          editable={false}
        />
        <TouchableOpacity onPress={() => handelPickImage()} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>업로드</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.inputText}># 해시태그</Text>
      <View style={styles.container}>
        {hashTagList.map((tag, index) => (
          <View
            key={index.toString()}
            style={[styles.tagContainer, { backgroundColor: tag.color }]}
          >
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: -6,
                top: -10,
              }}
              hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
              onPress={() => handelRemoveHashTag(index)}
            >
              <MaterialCommunityIcons
                name="close-circle"
                color="black"
                size={23}
              />
            </TouchableOpacity>
            <Text style={styles.buttonText}>{tag.name}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity
        onPress={() => handelUploadFlow()}
        style={[styles.buttonContainer, { marginTop: 20, marginBottom: 10, width: 200 }]}
      >
        <Text style={styles.buttonText}>공유하기</Text>
      </TouchableOpacity>
      {image && (
        <>
          <Text style={styles.inputText}># 썸네일 미리보기</Text>
          {thumbnail()}
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  inputContainer: {
    borderColor: Colors.GRAY_LIGHT,
    borderWidth: 1,
    borderRadius: 10,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 5,
  },
  inputText: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_16,
    marginVertical: 5,
    marginLeft: 5
  },
  buttonContainer: {
    elevation: 3,
    margin: 5,
    width: 100,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: Colors.DEEP_BLUE,
    alignSelf: 'center',
  },
  buttonText: {
    color: Colors.WHITE,
    alignSelf: 'center',
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  tagContainer: {
    elevation: 3,
    margin: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 16,
    minWidth: 50,
    backgroundColor: Colors.PRIMARY,
    alignSelf: 'center',
  },
  thumbnailTitle: {
    position: 'absolute',
    top: 65,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: 10
  },
  thumbnailBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    flex: 1,
    height: 200,
    backgroundColor: 'black',
    opacity: 0.6,
    borderRadius: 10,
  },
})