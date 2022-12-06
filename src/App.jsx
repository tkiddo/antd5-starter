import React from 'react'
import { ConfigProvider } from 'antd'
import Home from './views/home'
import themeConfig from './theme/config'

const App = () => {
  return (
    <ConfigProvider theme={themeConfig}>
      <Home />
    </ConfigProvider>
  )
}

export default App
