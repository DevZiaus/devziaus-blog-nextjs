import Image from "next/image";
import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className="border border-slate-300 p-4 rounded-md shadow-sm
    bg-white"
    >
      <p className="text-sm text-slate-400">{props.date} | {props.category}</p>

      <Link href={`/posts/${props.slug}`}>
        <h2 className=" transition-all linear delay-300 text-[#0095da] hover:text-[#e68324] mb-4">{props.title}</h2>
      </Link>
      <Link href={`/posts/${props.slug}`}>
      <Image
            src={props.thumbnail}
            width={100}
            height={100}
            className=""
            alt={"Post Thumbnail"}
          />
        </Link>
      <p className="text-slate-700 my-5">{props.meta}</p>
      <Link href={`/posts/${props.slug}`} className="transition-all ease-linear delay-150 text-sm text-[#0095da] hover:text-white border border-[#0095da] hover:bg-[#0095da] focus:ring-4 focus:outline-none focus:ring-[#0095da] font-medium rounded-lg px-3 py-2 text-center">
          Read More
      </Link>
    </div>
  );
};

export default PostPreview;
