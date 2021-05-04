import { FatalErrorBoundary } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import { Router, Route } from '@redwoodjs/router'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
// Bare Base App for Redwood
import './index.css'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodApolloProvider>
      <Routes />
    </RedwoodApolloProvider>
  </FatalErrorBoundary>
)

export default App
