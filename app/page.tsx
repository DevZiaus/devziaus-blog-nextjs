import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";


const HomePage = () => {
  let postMetadata = getPostMetadata();
  // Sort posts by date in descending order (newest first)
  // @ts-ignore
  postMetadata = postMetadata.sort((a, b) => new Date(b.date) - new Date(a.date));
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="min-h-[55vh]" >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
    </div>
    
  );
};

export default HomePage;
