import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";
import Authorbox from "../../../components/Authorbox";


const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className="">
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">By: {post.data.author} | <span>Category: {post.data.category}</span> | <span>Date: {post.data.date}</span></p>
        
      </div>

      <div className="flex align-center justify-center">
        <article className="prose">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
      <Authorbox />

    </div>
  );
};

export default PostPage;
