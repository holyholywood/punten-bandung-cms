import { Divider, Image, Input, Typography } from "antd";
import { FileImageOutlined } from "@ant-design/icons";
import React, { useReducer } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import TagPill from "@/components/atoms/TagPill";
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
    <div className="min-h-screen">
      <Title>Tulis Berita</Title>
      <Divider />
      <div className="flex flex-col gap-4 min-h-screen">
        <div className="flex gap-5">
          <div className="w-1/2">
            <label
              htmlFor="image-cover"
              className="flex
             gap-4 text-xl items-center hover:cursor-pointer"
            >
              <figure className="w-full aspect-[16/9] bg-gray-100 flex items-center justify-center">
                {/* <Image src=""/> */}
                <div className="text-gray-500">
                  <FileImageOutlined />
                  <Text>Tambah cover berita</Text>
                </div>
              </figure>
            </label>
            <Input
              type="file"
              id="image-cover"
              accept="image/png, image/gif, image/jpeg"
              className="hidden"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-5">
            <label htmlFor="title" className="">
              Judul
            </label>
            <Input
              type="text"
              id="title"
              size="large"
              className=""
              onChange={(e) => dispatch({ type: "change_title", newTitle: e.target.value })}
            />
            <label htmlFor="title" className="mt-5">
              Tag
            </label>
            <Input type="text" id="title" size="large" className="" />
            <div className="flex">
              <TagPill text={"tst"} />
            </div>
          </div>
        </div>
        <label htmlFor="body" className="mt-5">
          Body
        </label>
        <ReactQuill
          theme="snow"
          className="h-full"
          id="body"
          onChange={(e) => dispatch({ type: "change_body", newBody: e })}
          style={{
            minHeight: "10rem",
          }}
        />
      </div>
    </div>
  );
};

export default WriteNewsPage;
