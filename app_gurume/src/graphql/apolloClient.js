import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://192.168.0.81:3333/graphql/' }),
  cache: new InMemoryCache(),
})

export default client
