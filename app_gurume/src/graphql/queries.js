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

const mut = gql`
mutation mut(
  $ytbChannel: String!
  $ytbProfile: String!
  $ytbLinkAddress: String!
  $ytbHits: Int!
  ){
   createChannel(channelInput:{
    ytbChannel: $ytbChannel
    ytbProfile: $ytbProfile
    ytbLinkAddress: $ytbLinkAddress
    ytbHits: $ytbHits
  }){
    ytbChannel
    ytbProfile
    ytbLinkAddress
  }
}
`

export const GET_TOP_FLOWS = gql`
  query localInfo($region: String){
    localYtbStore(regionTag: $region) {
      _id
    }
    
    localShareFlow(regionTag: $region) {
    shareTitle
    shareThumbnail
    userTags
      adminTag{
        regionTag
        seasonTag
      }
    }
}
`