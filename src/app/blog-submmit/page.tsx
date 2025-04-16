import BlogEditor from "./BlogEditor";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details Page | Randall Faulk",
  description: "This is Blog Details Page",
  // other metadata
};

const BlogSidebarPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Blog Submit"
        description=""
      />
      <section className="overflow-hidden pb-20 pt-10">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <BlogEditor />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSidebarPage;
