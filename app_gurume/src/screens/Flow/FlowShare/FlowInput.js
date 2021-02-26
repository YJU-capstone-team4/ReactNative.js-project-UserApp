import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, ScrollView } from 'react-native'
import { Camera } from 'expo-camera'
import * as ImagePicker from 'expo-image-picker'
import mime from "mime"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import axios from 'axios'

// import styles
import { Colors, Typography } from '@styles'

// import apis
import { setUserFlowShare } from '../../../utils/api/flow'
import { PolygonMap } from '@components/PolygonMap';

const REGION_TAG_COLOR = '#ff99cc'

const dummyTags = [
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

export default function FlowInput(props) {
  // <<-- camera modules state
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null)
  const [hasCameraPermission, setHasCameraPermission] = useState(null)
  const [image, setImage] = useState(null)
  // -->>
  // 사용자로 부터 입력된 해시태그 리스트
  const [regionTags, setRegionTags] = useState(['서울'])
  const [seasonTags, setSeasonTags] = useState(['봄'])
  const [userTags, setUserTags] = useState(['테스트1', '테스트2'])

  // 사용자가 현재 입력중인 문자열
  const [title, setTitle] = useState('데이트 하기 좋은 코스')           // 공유 동선 이름
  const [hashTag, setHashTag] = useState('')                            // 사용자 해시태그 이름

  // 카메라 모듈 권한 확인 :: IIFE
  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestPermissionsAsync()
      setHasCameraPermission(cameraStatus.status === 'granted')

      const galleryStatus = await ImagePicker.requestCameraRollPermissionsAsync()
      setHasGalleryPermission(galleryStatus.status === 'granted')
    })()
  }, [])

  // 사용자가 추가한 동선 읽은 후 자동으로 지역 태그 맵핑
  useEffect(() => {
    if (!props.regionTags) return;
    console.log(props.regionTags)
    setRegionTags(props.regionTags)

    // props.data.map(item => console.log(item))
  }, [props.regionTags])

  // 사용자로 부터 해시태그 입력 => 추가
  const handleInputHashTag = () => {
    if (hashTag === '') {
      Alert.alert('해시태그를 입력해주세요!!!')
    } else {
      setUserTags([
        ...userTags, hashTag,
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

    console.log("img 파일 정보", result)

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
      setUserTags(userTags.filter((e, i) => (i !== index)))
  }

  function sendXmlHttpRequest(data) {
    const xhr = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
      xhr.onreadystatechange = e => {
        if (xhr.readyState !== 4) {
          return
        }

        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText))
          Alert.alert("이미지 저장 완료!")
        } else {
          Alert.alert("이미지 저장 완료!")
          // TODO 이미지 에러 수정 FLIPPER_VERSION 관련 이슈.
        }
      }
      xhr.open("POST", 'http://13.125.69.16/shareFlow/folder')
      xhr.send(data)
    });
  }

  const handelUploadFlow = async () => {
    if (title.length === 0) {
      Alert.alert('제목을 입력해주세요.')
    } else if (image === null) {
      Alert.alert('썸네일 이미지를 지정해주세요.')
    } else {

      const formData = new FormData()
      formData.append('shareTitle', title)
      formData.append('folderId', props.folderInfo.key)
      formData.append('adminTag', JSON.stringify({
        regionTag: regionTags,
        seasonTag: seasonTags[0]
      }))
      formData.append('userTags', JSON.stringify(userTags))

      // <<-- 안드로이드 전용 이미지 변경 로직
      const newImageUri = "file:///" + image.split("file:/").join("")
      formData.append('img', {
        uri: newImageUri,
        type: mime.getType(newImageUri),
        name: newImageUri.split("/").pop()
      })
      // -->>

      console.log(formData)

      sendXmlHttpRequest(formData)

      // 데이터 초기화 ..
      // setTitle('')
      // setHashTag('')
      // setImage(null)
    }
  }

  const tagPreview = (argTagName, argColor, argIndex, argTagType = 'userTag') => (
    <View
      key={argIndex.toString()}
      style={[styles.tagContainer, { backgroundColor: argColor }]}
    >
      {
        (argTagType !== 'regionTag' && argIndex >= 2) && <TouchableOpacity
          style={{
            position: 'absolute',
            right: -6,
            top: -13,
          }}
          hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
          onPress={() => handelRemoveHashTag(argIndex)}
        >
          <MaterialCommunityIcons
            name="close-circle"
            color="black"
            size={23}
          />
        </TouchableOpacity>
      }
      <Text style={styles.buttonText}>{argTagName}</Text>
    </View>
  )


  const ThumbnailPreview = () => {
    return (
      <View style={{ marginVertical: 5 }}>
        <Image source={{ uri: image }} style={{ flex: 1, height: 200, borderRadius: 10 }} />
        {/* 불투명 Black 배경 */}
        <View style={styles.thumbnailBackground} />
        {/* 썸네일 제목 */}
        <View style={styles.thumbnailTitle}>
          <Text numberOfLines={1} style={[styles.buttonText, { color: 'white', fontSize: 36 }]}>{title}</Text>
        </View>
        {/* 썸네일 관련 태그 */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          horizontal={true}
          style={[
            styles.container,
            { margin: 10, position: 'absolute', bottom: 10, flexWrap: 'nowrap' },
          ]}
        >
          {
            regionTags.map((tag, index) =>
              <View key={index} style={[styles.tagContainer, { backgroundColor: REGION_TAG_COLOR }]}>
                <Text style={styles.buttonText}>{tag}</Text>
              </View>
            )
          }
          {userTags.map((tag, index) =>
            <View key={index} style={[styles.tagContainer, { backgroundColor: Colors.GRAY_7 }]}>
              <Text style={styles.buttonText}>{tag}</Text>
            </View>
          )}
        </ScrollView>
      </View>
    )
  }

  return (
    <View style={{ paddingVertical: 15 }}>
      {image && (
        <>
          <Text style={styles.inputText}># 썸네일 미리보기</Text>
          <ThumbnailPreview />
        </>
      )}
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
          value={image ? image : "파일 선택"}
          editable={false}
        />
        <TouchableOpacity onPress={() => handelPickImage()} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>업로드</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.inputText}># 지역 태그</Text>
      <View style={styles.container}>
        {
          regionTags.map((tag, index) => (
            tagPreview(tag, REGION_TAG_COLOR, index, 'regionTag')
          ))
        }
      </View>
      {/* <Text style={styles.inputText}># 계절 태그</Text>
      <View style={styles.container}>
        {
          regionTags.map((tag, index) => (
            tagPreview(tag, REGION_TAG_COLOR, index, 'regionTag')
          ))
        }
      </View> */}
      <Text style={styles.inputText}># 해시 태그</Text>
      <View style={styles.container}>
        {userTags.map((tag, index) => (
          <View
            key={index.toString()}
            style={[styles.tagContainer, { backgroundColor: Colors.GRAY_7 }]}
          >
            {
              index >= 2 && <TouchableOpacity
                style={{
                  position: 'absolute',
                  right: -6,
                  top: -13,
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
            }
            <Text style={styles.buttonText}>{tag}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity
        onPress={() => handelUploadFlow()}
        style={[styles.buttonContainer, { marginTop: 20, marginBottom: 10, width: 200 }]}
      >
        <Text style={styles.buttonText}>공유하기</Text>
      </TouchableOpacity>
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