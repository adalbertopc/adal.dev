import { GetStaticProps } from "next";
import { Homepage } from "~/components";
import { getPosts } from "~/lib/posts";
import { getProjects } from "~/lib/projects";

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects();
  const posts = await getPosts({
    page: 1,
    perPage: 3,
  });
  return {
    props: {
      projects,
      posts,
    },
  };
};

export default function Home({ projects = [], posts = [] }) {
  return <Homepage projects={projects} posts={posts} />;
}
