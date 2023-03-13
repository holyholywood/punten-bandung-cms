import React from "react";
import { Typography, Button } from "antd";
import Table from "@/components/atoms/Table";
import { EditOutlined } from "@ant-design/icons";
import Link from "next/link";
const { Title } = Typography;
const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const NewsPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <Title>NewsPage</Title>
        <Link href="/tabloids/news/write">
          <Button primary icon={<EditOutlined />}>
            Tulis
          </Button>
        </Link>
      </div>
      <Table column={columns} data={dataSource} />
    </div>
  );
};

export default NewsPage;
