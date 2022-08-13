import Image from "next/future/image";
import { Link } from "~/components";
import type { Project } from "~/interfaces/project.interface";

export const ProjectCard: React.FC<Project> = ({
  id,
  name,
  description,
  url,
  openGraphImageUrl,
  topics,
  deployUrl,
  stars,
}: Project) => (
  <div className="flex items-center justify-between p-4 transition-colors bg-slate-50 hover:bg-slate-200 rounded-md shadow-sm">
    <div className="flex items-center w-full">
      {topics[0] && (
        <Image
          className="mt-1 w-8 h-8 rounded-full self-start"
          src={`/assets/icons/${topics[0]}.svg`}
          alt={topics[0]}
          width={32}
          height={32}
        />
      )}
      <div className="w-full ml-2">
        <h3 className="text-lg font-bold capitalize">
          <Link href={url} target="_blank">
            {name.replaceAll("-", " ")}
          </Link>
        </h3>
        <p className="text-sm mb-2">{description}</p>
        <div className="flex gap-2 mb-4">
          {topics.slice(1).map((topic: string) => (
            <Image
              key={topic}
              src={`/assets/icons/${topic}.svg`}
              alt={topic}
              width={20}
              height={20}
            />
          ))}
        </div>

        <div className="flex gap-4 items-center">
          <Link href={url} showExternalIcon className="text-xs font-semibold">
            Source Code
          </Link>
          {deployUrl && (
            <Link
              href={deployUrl}
              showExternalIcon
              target="_blank"
              className="text-xs font-semibold"
            >
              Live Preview
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
);
