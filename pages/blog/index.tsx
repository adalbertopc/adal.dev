import { GetStaticProps } from "next";
import { Section, PostsList } from "~/components";
import { Post } from "~/interfaces/post.interface";
import { getPosts } from "~/lib/posts";

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts({
    page: 1,
    perPage: 10,
  });
  return {
    props: {
      posts,
    },
  };
};

export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <Section title="Blog" className="pt-0">
      <PostsList posts={posts} />
    </Section>
  );
}
