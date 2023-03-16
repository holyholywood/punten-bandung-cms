import { Button, Divider, Image, Input, Typography } from "antd";
import { FileImageOutlined, SendOutlined } from "@ant-design/icons";
import React, { useReducer, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import TagPill from "@/components/atoms/TagPill";
import Tabloid from "@/utils/API/Tabloid";
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
  const [imagePreview, setImgPreview] = useState("");
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const tagSetter = (e) => {
    setTagInput(e.target.value);
    if (tagInput.length > 1 && tags.length < 5) {
      if (
        tagInput.charAt(tagInput.length - 1) === "," ||
        tagInput.charAt(tagInput.length - 1) === " "
      ) {
        let word = tagInput.substring(0, tagInput.length - 1);
        setTagInput("");

        setTags([...tags, word]);
      }
    } else if (tags.length >= 5) {
      setTagInput("");
    }
  };
  const imageUploadHandler = (e) => {
    setImage(e.target.files[0]);
    const preview = URL.createObjectURL(e.target.files[0]);
    setImgPreview(preview);
  };

  const handleSubmit = () => {
    const data = {
      title: state.title,
      body: state.body,
      image: image,
      tags,
    };
    console.log(data);
    console.log(Tabloid.store(data));
  };
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
              <figure className="w-full overflow-hidden aspect-[16/9] bg-gray-100 flex items-center justify-center">
                {imagePreview ? (
                  <img src={imagePreview} className="object-fit w-full" />
                ) : (
                  <div className="text-gray-500">
                    <FileImageOutlined />
                    <Text>Tambah cover berita</Text>
                  </div>
                )}
              </figure>
            </label>
            <Input
              type="file"
              id="image-cover"
              accept="image/png, image/gif, image/jpeg"
              className="hidden"
              onChange={imageUploadHandler}
            />
          </div>
          <div className="w-1/2 flex flex-col gap-5">
            <div className="flex justify-end items-center gap-2">
              <Button type="primary" size="large" onClick={handleSubmit}>
                Post
                <SendOutlined />
              </Button>
            </div>
            <label htmlFor="title" className="">
              Judul
            </label>
            <Input
              type="text"
              id="title"
              size="large"
              className=""
              value={state.title}
              onChange={(e) => dispatch({ type: "change_title", newTitle: e.target.value })}
            />
            <label htmlFor="tag" className="mt-5">
              Tag
            </label>
            <Input
              type="text"
              id="tag"
              size="large"
              onChange={tagSetter}
              value={tagInput}
              className=""
            />
            <div className="flex items-center gap-1">
              {tags.map((el, i) => (
                <TagPill text={el} key={i} />
              ))}
            </div>
          </div>
        </div>
        <ReactQuill
          theme="snow"
          className="h-full [&>.ql-container]:min-h-[50vh]"
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
