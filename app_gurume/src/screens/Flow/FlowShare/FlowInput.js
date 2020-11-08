import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'

// import styles
import { Colors, Typography } from '@styles'

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
    textTransform: 'uppercase',
  },
  inputText: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    marginVertical: 5,
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
    textTransform: 'uppercase',
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
})

const tags = [
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
  const [title, setTitle] = useState('데이트 하기 좋은 코스')
  const [hashTag, setHashTag] = useState('')
  const [file, setFile] = useState('파일 선택')
  const [hashTags, setHashTags] = useState(tags)

  const handleInputHashTag = () => {
    if (hashTag === '') {
      Alert.alert('해시태그를 입력해주세요!!!')
    } else {
      setHashTags([
        ...hashTags,
        {
          color: '#ff99cc',
          name: hashTag,
        },
      ])

      setHashTag('')
    }
  }

  return (
    <View style={styles.flowInputContainer}>
      <Text style={styles.inputText}>제목</Text>
      <TextInput
        style={styles.inputContainer}
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
          onChangeText={(text) => setFile(text)}
          value={file}
          editable={false}
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>업로드</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.inputText}># 해시태그</Text>
      <View style={styles.container}>
        {hashTags.map((tag, index) => (
          <View key={index.id} style={[styles.tagContainer, { backgroundColor: tag.color }]}>
            <Text style={styles.buttonText}>{tag.name}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}
