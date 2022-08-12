import type { NextApiRequest, NextApiResponse } from "next";

export const Posts = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    // Query params
    // page
    // perPage

    const data = await fetch(
      `https://dev.to/api/articles?${new URLSearchParams({
        username: "adal",
        ...req.query,
      }).toString()}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.DEVTO_TOKEN}`,
          ContentType: "application/json",
        },
      }
    );

    res.json(await data.json());
  }
};

export default Posts;
