import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { getPostMetadata } from "../../../lib/getPostMetadata";
import Authorbox from "../../../components/Authorbox";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import BackToTopButton from '../../../components/backToTop';
import NativeBannerAd from '../../../components/NativeBannerAd';
import BannerAd from '../../../components/BannerAd';
import CodeBlock from '../../../components/CodeBlock';


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
  
  // Make sure the tags field is an array of strings
  const tagsArray = Array.isArray(post.data.tags) ? post.data.tags : [];
  const keywords = tagsArray.length > 0 ? tagsArray.join(", ") : "DevZiaus, Web Development, Programming, Technology, Web Design, Linux, Tech, Blog, Tech Blog, Education";

  return {
    title: `${postTitle}`,
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

    //@ts-ignore
    // Adding keywords meta tag explicitly
    additionalMetaTags: [
      {
        name: "keywords",
        content: keywords,  // Using joined string of tags
      },
    ],
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
        <h1 className="text-2xl text-slate-600 font-bold">{post?.data.title}</h1>
        <p className="text-slate-400 mt-2">
          Author: {author} | <span>Category: {post?.data.category}</span> | <span>Published: {post?.data.date}</span>
        </p>
      </div>

      <NativeBannerAd />

      <div className="flex align-center justify-center">
        <article className="prose text-slate-800">
          <Markdown
            // options={{
            //   overrides: {
            //     code: {
            //       component: CodeBlock, // Use the CodeBlock component to render code blocks
            //     },
            //   },
            // }}
          >
            {post?.content}
          </Markdown>
        </article>
      </div>

      <BannerAd />

      <Authorbox />

      <div className='flex items-center justify-center mt-10'>
        <BackToTopButton />
        <Link
              href={`/`}
              className="px-4 py-2 bg-[#0095da] text-white rounded hover:bg-[#e68324] transition-colors duration-300"
              aria-label='Back to Home Page'
            >
              Home Page
        </Link>
      </div>

      <BannerAd />
    </div>
  );
}
