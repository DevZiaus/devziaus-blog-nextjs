import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { getPostMetadata } from "../../../lib/getPostMetadata";
import Authorbox from "../../../components/Authorbox";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;

  // Handle file not found scenario
  if (!fs.existsSync(file)) {
    return null;
  }

  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

// Use `generateMetadata` to define dynamic metadata for each post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostContent(params.slug);

  if (!post) {
    return {
      title: "Post Not Found | DevZiaus's Blog",
      description: "The blog post you are looking for could not be found.",
    };
  }

  const postTitle = post.data.title || "Untitled Post";
  const postDescription = post.data.meta || postTitle;
  const postImage = post.data.thumbnail || "//images/logo.png";
  const postUrl = `https://www.devziaus.xyz/posts/${params.slug}`;
  const author = post.data.author || "DevZiaus"; // Fallback to "DevZiaus" if author is not provided

  return {
    title: `${postTitle} | DevZiaus's Blog`,
    description: postDescription,
    openGraph: {
      title: postTitle,
      description: postDescription,
      url: postUrl,
      type: "article",
      images: [
        {
          url: postImage,
          width: 800,
          height: 600,
          alt: postTitle,
        },
      ],
      authors: [author],
    },
    twitter: {
      card: "summary_large_image",
      site: "@devziaus's blog",
      title: postTitle,
      description: postDescription,
      images: [postImage],
      creator: author,
    },
  };
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostContent(params.slug);

  if (!post) {
    notFound(); // If the post is not found, show a 404 page
  }

  const author = post?.data.author || "DevZiaus"; // Fallback for author

  return (
    <div className="">
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600">{post?.data.title}</h1>
        <p className="text-slate-400 mt-2">
          By: {author} | <span>Category: {post?.data.category}</span> | <span>Date: {post?.data.date}</span>
        </p>
      </div>

      <div className="flex align-center justify-center">
        <article className="prose text-slate-800">
          <Markdown>{post?.content}</Markdown>
        </article>
      </div>
      <Authorbox />

      <div className='flex items-center justify-center mt-10'>
        <Link
              href={`/`}
              className="px-4 py-2 bg-[#0095da] text-white rounded hover:bg-[#e68324] transition-colors duration-300"
            >
              Home Page
        </Link>
      </div>
    </div>
  );
}
