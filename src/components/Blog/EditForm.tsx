"use client"; // Required for Next.js App Router
import dynamic from 'next/dynamic';
import { useState, useRef } from 'react';
// import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

// Import Quill without SSR
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });


const EditForm = () => {
  const quillRef = useRef<typeof ReactQuill | null>(null);
  const [editorContent, setEditorContent] = useState('');

  const handleChange = (content, delta, source, editor) => {
    setEditorContent(content);
  };

  const handleEditorChange = ({ text }) => {
    console.log(text); // You can save the markdown or convert it to HTML
  };

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
    <div>
      <ReactQuill theme="snow" value={editorContent} onChange={handleChange} modules={modules} />
    </div>
  );
};

export default EditForm;
