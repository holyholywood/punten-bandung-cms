import { Divider, Input, Typography } from "antd";
import { FileImageOutlined } from "@ant-design/icons";
import React, { useReducer } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(import("react-quill"), { ssr: false });
const { Text, Title } = Typography;
function reducer(state, action) {
  if (action.type === "change_title") {
    return {
      ...state,
      title: action.newTitle,
    };
  }
  if (action.type === "change_body") {
    return {
      ...state,
      body: action.newBody,
    };
  }
  return new Error("no Action recognized for reducer " + action.type);
}
const WriteNewsPage = () => {
  const [state, dispatch] = useReducer(reducer, { title: "", body: "" });
  return (
    <div>
      <Title>Tulis Berita</Title>
      <Divider />
      <div className="flex flex-col gap-4 min-h-screen">
        <label
          htmlFor="image-cover"
          className="flex
         gap-4 text-xl items-center hover:cursor-pointer"
        >
          <FileImageOutlined />
          <Text>Tambah cover berita</Text>
        </label>
        <Input
          type="file"
          id="image-cover"
          accept="image/png, image/gif, image/jpeg"
          className="hidden"
        />
        <label htmlFor="title" className="mt-10">
          Judul
        </label>
        <Input
          type="text"
          id="title"
          size="large"
          className="w-1/2"
          onChange={(e) => dispatch({ type: "change_title", newTitle: e.target.value })}
        />
        <label htmlFor="title" className="mt-5">
          Tag
        </label>
        <Input type="text" id="title" size="large" className="w-1/2" />
        <label htmlFor="body" className="mt-5">
          Body
        </label>
        <ReactQuill
          theme="snow"
          className="h-full"
          id="body"
          onChange={(e) => dispatch({ type: "change_body", newBody: e })}
        />
      </div>
    </div>
  );
};

export default WriteNewsPage;
