import { GetStaticPaths, GetStaticProps } from "next";
import { Link, Markdown } from "~/components";
import { Post } from "~/interfaces/post.interface";

import { getPostBySlug, getPosts } from "~/lib/posts";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts({
    page: 1,
    perPage: 10,
  });
  return {
    paths: posts.map((post: Post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params?.slug as string);
  return {
    props: {
      post,
    },
  };
};

export default function PostSingle({ post }: { post: Post }) {
  return (
    <div>
      <h1 className="text-5xl mb-1 font-bold">{post.title}</h1>
      <p className="text-sm font-semibold my-3">
        {" "}
        {new Date(post.created_at).toLocaleDateString("en", {
          year: "numeric",
          month: "long",
          day: "2-digit",
        })}{" "}
      </p>

      <Markdown value={post.body_markdown} />

      <Link href={post.url} showExternalIcon className="mt-4">
        Read on <b className="ml-1">DEV.TO</b>
      </Link>
    </div>
  );
}
