import SidebarLink from "@/components/Docs/SidebarLink";
import { getAllPosts } from "@/libs/markdown";
import { Metadata } from "next";
import BusinessNameGeneratorPage from "../ai-examples/business-name-generator/page";

export const metadata: Metadata = {
  title: "Docs | ESG INTELLIGENCE PLATFORM",
  description: "knowledge base for esg and intelligence",
  // other metadata
};

export default function DocsPage() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
  return (
    <>
      <section className="pt-24 pb-16 md:pb-20 lg:pb-24 md:pt-28 lg:pt-32">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] p-4 rounded-lg transition-all bg-white/5">
                <ul className="space-y-2">
                  {posts.map((post, key) => (
                    <SidebarLink post={post} key={key} />
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details bg-white/5 rounded-lg py-11 px-8 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Welcome to SKY DUST ESG INTELLIGENCE PLATFORM</h1>

                <p className="font-medium">
                  You are at the place where you can find anything about ESG and
                  how to integrate this into your business. The overkill of
                  information is tremendous, the work that needs to be done
                  unduable, but to help you we used AI. Here you will learn how
                  to use AI in order to become far more productive, efficient
                  and effective, and esg integrated towards data-driven.
                </p>
                <p className="font-medium">
                  Please visit:{" "}
                  <b>
                    <a
                      className="text-white"
                      target="_blank"
                      href="https://efrag.org/lab6"
                    >
                      nextjstemplates.com/docs
                    </a>
                  </b>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
