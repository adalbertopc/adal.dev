import type { Post } from "~/interfaces/post.interface";
import { PostCard } from "../postCard";

interface PostsListProps {
  posts: Post[];
}

export const PostsList: React.FC<PostsListProps> = ({ posts }) => (
  <div className="grid gap-4">
    {posts?.map((post: Post) => (
      <PostCard
        key={post.id}
        title={post.title}
        createdAt={post.created_at}
        description={post.description}
        slug={post.slug}
        readingTime={post.reading_time_minutes}
        tags={post.tag_list}
      />
    ))}
  </div>
);
