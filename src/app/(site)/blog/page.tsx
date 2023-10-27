import BlogGridContainer from "@/components/Blog/BlogGridContainer";
import Breadcrumb from "@/components/Breadcrumb";
import { getPosts } from "@/sanity/sanity-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | AI Tool - Next.js Template for AI Tools",
  description: "This is Blog page for AI Tool",
  // other metadata
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <Breadcrumb pageTitle="Blog Grid" />

      <section className="pt-20 lg:pt-25 pb-17.5 lg:pb-22.5 xl:pb-27.5">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <BlogGridContainer blogs={posts} />

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12.5 gap-x-7.5">
            {posts.length > 0 &&
              posts.map((blog: Blog) => (
                <SingleBlog key={blog._id} blog={blog} />
              ))}
          </div> */}
        </div>
      </section>
    </>
  );
}
