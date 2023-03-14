import { Menu } from "antd";
import React, { useState } from "react";

import {
  HomeOutlined,
  CopyOutlined,
  PieChartOutlined,
  ReadOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import Link from "next/link";
const Sidebar = () => {
  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      items={menuItems}
      style={{ width: "16rem", height: "100vh", position: "sticky" }}
      mode="inline"
      className="py-10 left-0 top-0"
    />
  );
};

export default Sidebar;

const menuItems = [
  {
    label: <Link href="/">Beranda</Link>,
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: "Analitik",
    key: "analitik",
    icon: <PieChartOutlined />,
    children: [
      {
        label: <Link href="/analytics/news">Berita</Link>,
        key: "analitik berita",
        icon: <CopyOutlined />,
      },

      {
        label: <Link href="/analytics/review">ulasan</Link>,
        key: "analitik ulasan",
        icon: <EyeOutlined />,
      },
    ],
  },
  {
    label: "Tabloid",
    key: "tabloid",
    icon: <ReadOutlined />,
    children: [
      {
        label: <Link href="/tabloids/news">Berita</Link>,
        key: "berite",
        icon: <CopyOutlined />,
      },
      {
        label: <Link href="/tabloids/review">Ulasan</Link>,
        key: "tabloid-ulasan",
        icon: <EyeOutlined />,
      },
    ],
  },
];
