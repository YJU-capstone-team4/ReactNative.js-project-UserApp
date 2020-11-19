import React from 'react'
import { View, Text, Button } from 'react-native'

// apollo
import { useMutation } from '@apollo/react-hooks'
import { Queries } from '~/graphql'

export default function FlowList() {
  const [addYoutuber, { loading, error }] = useMutation(Queries.ADD_YOUTUBER)

  if (error) {
    return (
      <View>
        <Text>에러났음!{JSON.stringify(error)}</Text>
      </View>
    )
  }
  return (
    <View
      style={{
        backgroundColor: '#FFB900',
        height: 300,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
      }}
    >
      <Text>동선 Top 5 랭킹 정보가 들어갈 공간입니다.</Text>
      <Text>FlowList</Text>
      <Button
        title="유튜버 추가"
        onPress={() =>
          addYoutuber({
            variables: {
              ytbChannel: '안녕하세요',
              ytbProfile: '개인 설명',
              ytbLinkAddress: '유튜버 주소',
              ytbSubscribe: 11123123,
              ytbHits: 12123123,
            },
          })
        }
        disabled={loading}
      />
    </View>
  )
}
