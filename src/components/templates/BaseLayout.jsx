import React from 'react'
import { Layout, Space } from 'antd'
import Sidebar from '../organisms/Sidebar'

const { Content } = Layout
const BaseLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div>{children}</div>
    </div>
  )
}

export default BaseLayout
