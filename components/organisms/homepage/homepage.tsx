import Image from "next/future/image";
import {
  Separator,
  Section,
  Hero,
  ProjectsList,
  PostsList,
  Link,
  FeaturedProject,
} from "~/components";
import { Post } from "~/interfaces/post.interface";
import { Project } from "~/interfaces/project.interface";

interface HomepageProps {
  projects: Project[];
  posts: Post[];
}

export const Homepage: React.FC<HomepageProps> = ({ projects, posts }) => (
  <>
    <Section>
      <Hero />
    </Section>
    <Separator />
    <Section title="Featured Project">
      <FeaturedProject
        title="FIFA World Cup 2022 Qatar Album Tracker"
        description="A web application to track the FIFA World Cup 2022 Qatar Album. It is built with Remix, TailwindCSS, Supabase and Prisma."
        image="/assets/img/qatar.png"
        liveUrl="https://qatar.adal.dev"
        githubUrl="https://github.com/adalbertopc/album-qatar-2022"
      />
    </Section>
    <Separator />
    <Section
      title="Projects"
      description="
      A collection of public projects I have worked on. Most of them are built with Javascript / Typescript."
    >
      <ProjectsList projects={projects} />

      <div className="flex justify-center">
        <Link
          href="https://www.github.com/adalbertopc"
          target="_blank"
          className="inline-flex gap-2 text-sm font-semibold px-4 py-3 transition-all bg-black hover:bg-opacity-80 text-white rounded-lg"
        >
          See more on Github{" "}
          <Image
            src="/assets/icons/github.svg"
            alt="github"
            className="invert"
            width={16}
            height={16}
          />
        </Link>
      </div>
    </Section>
    <Separator />
    <Section title="Blog" className="py-12">
      <PostsList posts={posts} />
    </Section>
  </>
);
