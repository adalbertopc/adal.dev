import type { NextApiRequest, NextApiResponse } from "next";

export const Post = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { slug } = req.query;
    const data = await fetch(`https://dev.to/api/articles/adal/${slug}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.DEVTO_TOKEN}`,
        ContentType: "application/json",
      },
    });

    res.json(await data.json());
  }
};

export default Post;
