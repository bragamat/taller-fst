import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ApolloProvider } from '@apollo/client'
import { graphqlClient } from './config/graphql.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={graphqlClient}>
      <App />
    </ApolloProvider>,
  </StrictMode>,
)
