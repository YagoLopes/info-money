import React from 'react'
import { render } from 'react-dom'
import Modal from 'react-modal'
import { ThemeProvider } from 'styled-components'

import StockDetails from './components/ConnectionDetails'
import StockList from './components/ConnectionList'
import Header from './components/Header'
import AppProvider from './context'
import { GlobalStyle } from './styles/GlobalStyle'
import { Container, Content } from './styles/Main'
import { defaultTheme } from './styles/theme'

Modal.setAppElement('#root')

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppProvider>
        <Container>
          <Header />
          <Content>
            <StockList />
            <StockDetails />
          </Content>
        </Container>
      </AppProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

render(<App />, document.getElementById('root'))
