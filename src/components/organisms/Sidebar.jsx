import { Menu } from 'antd'
import React, { useState } from 'react'

import {
  HomeOutlined,
  CopyOutlined,
  PieChartOutlined,
  ReadOutlined,
  EyeOutlined
} from '@ant-design/icons'
import Link from 'next/link'
const Sidebar = () => {
  const [current, setCurrent] = useState('home')
  const onClick = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      items={menuItems}
      style={{ width: '16rem', height: '100vh' }}
      mode='inline'
    >
      <div>
        <Menu.Item>tes</Menu.Item>
      </div>
    </Menu>
  )
}

export default Sidebar

const menuItems = [
  {
    label: <Link href='/'>Beranda</Link>,
    key: 'home',
    icon: <HomeOutlined />
  },
  {
    label: 'Analitik',
    key: 'analitik',
    icon: <PieChartOutlined />,
    children: [
      {
        label: <Link href='/analytics/news'>Berita</Link>,
        key: 'berita',
        icon: <CopyOutlined />
      },

      {
        label: 'Ulasan',
        key: <Link href='/analytics/review'>ulasan</Link>,
        icon: <EyeOutlined />
      }
    ]
  },
  {
    label: 'Tabloid',
    key: 'tabloid',
    icon: <ReadOutlined />,
    children: [
      {
        label: <Link href='/tabloids/news'>Berita</Link>,
        key: 'berite',
        icon: <CopyOutlined />
      },
      {
        label: 'Ulasan',
        key: <Link href='/tabloids/review'>ulasan</Link>,
        icon: <EyeOutlined />
      }
    ]
  }
]
