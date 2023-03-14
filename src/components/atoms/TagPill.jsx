import React from "react";
import { BorderlessTableOutlined, CloseOutlined } from "@ant-design/icons";

const TagPill = ({ text }) => {
  return (
    <div
      className="px-3 py-1 border  rounded-full flex gap-1 border-gray-400 shadow items-center align-middle"
      style={pillStyle}
    >
      <span className="inline-flex gap-1 items-center">
        <BorderlessTableOutlined />
        {text}
      </span>
      <button className="bg-transparent border-none flex w-fit cursor-pointer ml-4">
        <CloseOutlined className="text-xs text-gray-400 " />
      </button>
    </div>
  );
};

export default TagPill;

const pillStyle = {
  //   border: "1px",
  borderStyle: "solid",
};
