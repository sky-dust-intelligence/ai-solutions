import { getPosts } from '@/sanity/sanity-utils';
import { Blog } from '@/types/blog';
import SectionTitle from '../Common/SectionTitle';
import SingleBlog from './SingleBlog';

export default async function BlogSection() {
  const posts = await getPosts();

  return (
    <section className="py-20 lg:py-25">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <SectionTitle
          subTitle="Read Our Latest Blogs"
          title="Latest Blogs & News"
          paragraph="Build SaaS AI applications using OpenAI and Next.js, this kit comes with pre-configured and pre-built examples, making it easier to quickly kickstart your AI startup."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5">
          {posts.length > 0 && posts.slice(0, 3).map((blog: Blog) => <SingleBlog key={blog._id} blog={blog} />)}
        </div>
      </div>
    </section>
  );
}
