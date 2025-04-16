"use client";

import React, {useEffect, useState} from "react";
import {Input, Select, SelectSection, SelectItem, Pagination} from "@heroui/react";
import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Blog | Crypto-Blog",
//   keywords: "Crypto, Blog, Crypto Blog",
//   description: "This is Blog for Crypto Blog",
//   // other metadata
// };

const options = [
  { value: "newest", label: "Newest" },
  { value: "popular", label: "Popular" },
];

const Blog = () => {

  const [page, setPage] = useState(1);

  return (
    <>
      <Breadcrumb
        pageName="Blog"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <section className="pb-[50px] pt-[30px]">
        <div className="container">
          <div className="w-full mb-8 flex justify-between">
            <Input
              isClearable
              placeholder="Search by title..."
              // startContent={<SearchIcon />}
              // value={filterValue}
              // onClear={() => onClear()}
              // onValueChange={onSearchChange}
              style={{outline:'none', marginLeft:'10px'}}
              className="sm:max-w-[500px] -stroke w-full rounded-sm border bg-[#f8f8f8] text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            />
            <div className="flex items-center gap-4">
              <Select 
                className="flex justify-between w-[150px] rounded-lg -stroke border bg-[#f8f8f8] text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"  
                placeholder="Select"
                popoverProps={{
                  className: "rounded-lg border bg-[#f8f8f8] dark:bg-[#2C303B] p-2 shadow-lg", // Popover styles
                }}
                defaultSelectedKeys={["Newest"]} // Default selected option
              >
                {options.map((option) => (
                  <SelectItem key={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select>
              <Link href='/blog-submmit' className="w-[150px] flex items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold capitalize text-white">
                Submit Blog
              </Link>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
            <div className="w-full px-4">
              {/* <Pagination 
                showControls
                dotsJump={30}
                initialPage={1} 
                total={10}
                page={page}
                onChange={setPage}
                showShadow
                color="primary"
                classNames={{
                  base: "flex items-center justify-center pt-8",
                  item: "flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%]  text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white",
                  prev: "flex h-9 font-[30px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white",
                  next: "rotate-4 flex h-9 items-center justify-center rounded-md bg-body-color bg-opacity-[15%] text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white",
                  cursor: "bg-red-500 flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white",
                  forwardIcon: "forward-icon-classes", // forward icon
                  ellipsis: "ellipsis-classes", // ellipsis icon
                  chevronNext: "chevron-next-classes", // chevron next icon
                }}
              /> */}
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1">
                  <span className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                    ...
                  </span>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
