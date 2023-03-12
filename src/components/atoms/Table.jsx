import React from "react";
import { Table as AntTable } from "antd";

const Table = ({ column, data }) => {
  return <AntTable className="w-full" columns={column} dataSource={data} />;
};

export default Table;
