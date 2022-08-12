import Image from "next/future/image";
import {
  Separator,
  Section,
  Hero,
  ProjectsList,
  PostsList,
  Link,
} from "~/components";
import { Post } from "~/interfaces/post.interface";
import { Project } from "~/interfaces/project.interface";

interface HomepageProps {
  projects: Project[];
  posts: Post[];
}

export const Homepage: React.FC<HomepageProps> = ({ projects, posts }) => (
  <>
    <Separator />
    <Section>
      <Hero />
    </Section>
    <Separator />
    <Section
      title="Projects"
      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum eius quaerat veritatis, tempora quibusdam ullam et molestias ad! Quia debitis officiis reprehenderit illo veniam, accusantium aspernatur saepe nemo ab sit?"
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
