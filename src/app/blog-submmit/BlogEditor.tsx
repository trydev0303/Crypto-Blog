"use client";

import { useTheme } from "next-themes";
import {Button} from "@heroui/react";
import dynamic from 'next/dynamic';
import { useState, useRef, useEffect } from 'react';
import 'react-quill-new/dist/quill.snow.css';

// Import Quill without SSR
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

const BlogEditor = () => {
  const { theme } = useTheme();

  const [editorContent, setEditorContent] = useState('');

  const handleChange = (content, delta, source, editor) => {
    console.log("content", content)
    setEditorContent(content);
  };

  const [selectedImage, setSelectedImage] = useState();

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
    // Reset the file input so the same file can be selected again
    e.target.value = '';
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage(null);
  };

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [msg, setMsg] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogData = new FormData();
    blogData.append('title', 'Blog Title'); // Replace with actual title value
    blogData.append('content', editorContent); // Replace with actual content value 
    blogData.append('image', selectedImage); // Append the selected image

  }

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'video'],
      ['clean']
    ],
  };

  return (
    <div className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
      <div className="flex flex-col gap-4 justify-between">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="title"
            placeholder="Enter blog title"
            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
          />
          <div className="flex gap-4 items-center">
            <input
              accept="image/*"
              type="file"
              hidden
              onChange={imageChange}
            />
            
            <Button className="flex w-[170px] cursor-pointer items-center justify-center rounded-full bg-primary text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark" 
              type="button"
              onClick={() => {
                const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement | null;
                fileInput?.click();
              }}
              >
              Upload Image
            </Button>

            {selectedImage && (
              <div className="relative flex w-[50px] h-[50px] items-center justify-between">
                <img
                  src={URL.createObjectURL(selectedImage)}
                  className="border-[1px] border-white w-full h-full rounded-lg"
                  alt="Thumb"
                />
                <button onClick={removeSelectedImage}
                  className="absolute -right-[5px] -top-[5px] w-[20px] h-[20px] rounded-full bg-gray-500 text-white flex items-center justify-center"
                >
                  <span className="text-xs">✕</span>
                </button>
              </div>
            )}
          </div>
        <div className="">
          <ReactQuill theme="snow" value={editorContent} onChange={handleChange} modules={modules} />
        </div>
        <input
          type="submit"
          value="Save"
          className="flex w-[150px] cursor-pointer items-center justify-center rounded-full bg-primary px-5 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
        />
        </form>
      </div>
    </div>
  );
};

export default BlogEditor;
