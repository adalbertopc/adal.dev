import type { Project } from "~/interfaces/project.interface";

const GetPinnedRepositories = `
  query GetPinnedRepositories {
    user(login: "adalbertopc") {
      pinnedItems(first: 6) {
        totalCount
        edges {
          node {
            ... on Repository {
              id
              name
              url
              homepageUrl
              description
              stargazers {
                totalCount
              }
              openGraphImageUrl
              repositoryTopics(first: 5) {
                edges {
                  node {
                    topic {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const getProjects = async (): Promise<Project[]> => {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GetPinnedRepositories,
    }),
  });
  const data = await res.json();
  const repos = data.data?.user.pinnedItems.edges.map((edge: any) => {
    const rawRepo = edge.node;
    const repo: Project = {
      id: rawRepo.id,
      name: rawRepo.name,
      url: rawRepo.url,
      deployUrl: rawRepo.homepageUrl,
      description: rawRepo.description,
      stars: rawRepo.stargazers.totalCount,
      openGraphImageUrl: rawRepo.openGraphImageUrl,
      topics: rawRepo.repositoryTopics.edges.map(
        (edge: any) => edge.node.topic.name
      ),
    };
    return repo;
  });

  return repos;
};
