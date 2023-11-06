"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarLink = ({ post }: any) => {
  const pathUrl = usePathname();

  return (
    <>
      <li className="block">
        <Link
          href={`/docs/${post?.slug}`}
          className={`font-medium py-2.5 px-3 rounded-md flex w-full duration-300 hover:text-white ${
            pathUrl === `/docs/${post?.slug}` ? "text-white bg-white/10" : ""
          }`}
        >
          {post?.title}
        </Link>
      </li>
    </>
  );
};

export default SidebarLink;
