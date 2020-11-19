import gql from 'graphql-tag'

export const GET_YOUTUBERS = gql`
  query {
    ytbChannel {
      ytbChannel
      ytbProfile
      ytbLinkAddress
      ytbSubscribe
      ytbHits
    }
  }
`
export const ADD_YOUTUBER = gql`
  mutation {
    channelInput(
      ytbChannel: $ytbChannel
      ytbLinkAddress: $ytbLinkAddress
      ytbProfile: $ytbProfile
      ytbSubscribe: $ytbSubscribe
      ytbHits: $ytbHits
    ) {
      ytbChannel
      ytbLinkAddress
      ytbProfile
      ytbSubscribe
      ytbHits
    }
  }
`
