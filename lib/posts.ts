import { Post } from "~/interfaces/post.interface";
import { getDomain } from "~/utils/getDomain";

export const getPosts = async ({ page = 1, perPage = 10 }): Promise<Post[]> => {
  const res = await fetch(
    `${getDomain()}/api/posts?${new URLSearchParams({
      page: String(page),
      perPage: String(perPage),
    }).toString()}`
  );
  return await res.json();
};

export const getPost = async (slug: string) => {
  const res = await fetch(`
    ${getDomain()}/api/posts/${slug}`);
  return await res.json();
};
