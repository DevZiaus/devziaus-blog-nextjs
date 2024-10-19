// Import necessary components and utility function
import PostPreview from "../components/PostPreview";
import { getPostMetadata } from "../lib/getPostMetadata";
import Link from "next/link";

// Define posts per page
const POSTS_PER_PAGE = 10;

export const revalidate = 10; // Revalidate every 10 seconds

// Mark the component as async because we're fetching data server-side
export default async function HomePage({ searchParams }: { searchParams: { page?: string } }) {
  // Parse current page number or default to 1
  const currentPage = parseInt(searchParams.page || '1', 10);

  // Fetch all posts metadata
  const allPosts = getPostMetadata(); // This runs only on the server

  // Sort posts by date in descending order (newest first)
  const sortedPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Calculate pagination values
  const totalPosts = sortedPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = sortedPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  // Create post previews for the current page
  const postPreviews = paginatedPosts.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="min-h-[55vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {postPreviews}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center mt-8 space-x-2">
        {currentPage > 1 && (
          <Link
            href={`/?page=${currentPage - 1}`}
            className="px-4 py-2 rounded hover:bg-[#0095da] transition-colors duration-300"
          >
            Previous
          </Link>
        )}

        {/* Page number links */}
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          return (
            <Link
              key={pageNumber}
              href={`/?page=${pageNumber}`}
              className={`px-4 py-2 ${pageNumber === currentPage ? 'bg-gray-300' : ' text-black'} rounded hover:bg-[#0095da] hover:text-white transition-colors duration-300`}
            >
              {pageNumber}
            </Link>
          );
        })}

        {currentPage < totalPages && (
          <Link
            href={`/?page=${currentPage + 1}`}
            className="px-4 py-2 rounded hover:bg-[#0095da] transition-colors duration-300"
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
}
