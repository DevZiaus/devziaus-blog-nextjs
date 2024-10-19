import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostMetadata } from '../components/PostMetadata';

export const getPostMetadata = (): PostMetadata[] => {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter((file) => file.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        title: data.title,
        thumbnail: data.thumbnail,
        date: data.date,
        meta: data.meta,
        slug: fileName.replace('.md', ''),
        author: data.author || 'DevZiaus',
        category: data.category,
      };
    });

  return posts;
};
