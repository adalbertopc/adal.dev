export const getPosts = async ({ page = 1, perPage = 10 }) => {
  const res = await fetch(
    `https://dev.to/api/articles?${new URLSearchParams({
      username: "adal",
      page: String(page),
      perPage: String(perPage),
    }).toString()}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.DEVTO_TOKEN}`,
        ContentType: "application/json",
      },
    }
  );
  return await res.json();
};

export const getPost = async (slug: string) => {
  const res = await fetch(`https://dev.to/api/articles/adal/${slug}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.DEVTO_TOKEN}`,
      ContentType: "application/json",
    },
  });
  return await res.json();
};
