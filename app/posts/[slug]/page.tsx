import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Authorbox from "../../../components/Authorbox";

// Fetch content for the post
const getPostContent = (slug: string) => {
  const folder = path.join(process.cwd(), "posts/");
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

// Dynamic Metadata using generateMetadata
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostContent(params.slug);

  return {
    title: `${post.data.title} | DevZiaus's Blog`,
    description: post.data.meta || post.data.title,
    keywords: post.data.category,
    author: post.data.author,
  };
}

const PostPage = ({ params }: { params: { slug: string } }) => {
  const post = getPostContent(params.slug);

  return (
    <div className="">
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">
          By: {post.data.author} | <span>Category: {post.data.category}</span> |{" "}
          <span>Date: {post.data.date}</span>
        </p>
      </div>

      <div className="flex align-center justify-center">
        <article className="prose text-slate-800">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
      <Authorbox />
    </div>
  );
};

export default PostPage;

// Generate static paths for posts
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    return {
      slug: filename.replace(".md", ""),
    };
  });
}
