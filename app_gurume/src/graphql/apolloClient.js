import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://172.26.3.2:4000/' }),
  cache: new InMemoryCache(),
})

export default client
