import { GetStaticProps } from "next";
import {
  Hero,
  Link,
  ProjectsList,
  PostsList,
  Section,
  Separator,
  Homepage,
} from "~/components";
import { getPosts } from "~/lib/posts";
import { getPinnedRepos } from "~/lib/projects";

import Image from "next/future/image";

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getPinnedRepos();
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
  return (
    <>
      <Separator />
      <Homepage projects={projects} posts={posts} />
    </>
  );
}
