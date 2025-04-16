// "use client"; // Required for Next.js App Router

// import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import Link from '@tiptap/extension-link';
// import Image from '@tiptap/extension-image';
// import CodeBlock from '@tiptap/extension-code-block';
// import Placeholder from '@tiptap/extension-placeholder';
// import Highlight from '@tiptap/extension-highlight';

// import BlogAddPage from "@/app/blog-submmit/BlogEditor";
// // import Emoji from '@tiptap/extension-emoji'; // may need a custom extension or emoji picker integration


// export default function TiptapEditor({
//   content,
//   onChange,
// }: {
//   content: string;
//   onChange: (content: string) => void;
// }) {
//   const editor = useEditor({
//     extensions: [
//       StarterKit,
//       Link.configure({
//         openOnClick: false,
//       }),
//       Image,
//       CodeBlock,
//       Highlight,
//       Placeholder.configure({
//         placeholder: 'Start writing your blog post...',
//       }),
//       // Emoji,
//     ],
//     content: '',
//   });

//   if (!editor) return null;

//   return (
//     <div className="border rounded p-4 space-y-2">
//       {/* Toolbar */}
//       <div className="flex flex-wrap gap-2 border-b pb-2">
//         <button onClick={() => editor.chain().focus().toggleBold().run()}>Bold</button>
//         <button onClick={() => editor.chain().focus().toggleItalic().run()}>Italic</button>
//         <button onClick={() => editor.chain().focus().toggleCodeBlock().run()}>Code Block</button>
//         <button onClick={() => editor.chain().focus().toggleHighlight().run()}>Highlight</button>
//         <button
//           onClick={() => {
//             const url = prompt('Enter image URL');
//             if (url) editor.chain().focus().setImage({ src: url }).run();
//           }}
//         >
//           Insert Image
//         </button>
//         <button
//           onClick={() => {
//             const url = prompt('Enter link');
//             if (url) editor.chain().focus().setLink({ href: url }).run();
//           }}
//         >
//           Link
//         </button>
//         {/* <button
//           onClick={() => {
//             const emoji = prompt('Enter emoji');
//             if (emoji) editor.commands.insertContent(emoji);
//           }}
//         >
//           Emoji
//         </button> */}
//       </div>

//       {/* Editor Area */}
//       <EditorContent editor={editor} className="min-h-[200px] p-2 border outline-none" style={{outline:'none !important'}} />
//     </div>
//   );
// }

