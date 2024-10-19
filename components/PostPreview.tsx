import Image from "next/image";
import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className="border border-slate-300 p-4 rounded-md shadow-sm
    bg-white"
    >
      <Link href={`/posts/${props.slug}`}>
        <h2 className="text-xl lg:text-2xl transition-all linear delay-300 text-[#05233E] hover:text-[#0095da] mb-1">{props.title}</h2>
      </Link>
      <p className="text-sm text-slate-400">{props.date} | {props.category}</p>

      <Link href={`/posts/${props.slug}`}>
      <Image
            src={props.thumbnail}
            width={100}
            height={100}
            className="mt-2"
            alt={"Post Thumbnail"}
          />
        </Link>
      <p className="text-slate-700 my-3">{props.meta}</p>
      <Link href={`/posts/${props.slug}`} className="transition-all ease-linear delay-150 text-sm text-[#0095da] hover:text-white border border-[#0095da] hover:bg-[#0095da] focus:ring-4 focus:outline-none focus:ring-[#0095da] font-medium rounded-lg px-3 py-2 text-center">
          Read More
      </Link>
    </div>
  );
};

export default PostPreview;