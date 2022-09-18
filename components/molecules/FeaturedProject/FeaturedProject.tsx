import { ExternalLinkIcon } from "@heroicons/react/solid";
import Image from "next/future/image";
import { Link } from "~/components";

interface FeaturedProjectProps {
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  title,
  description,
  image,
  liveUrl,
  githubUrl,
}) => (
  <div className="grid sm:grid-cols-2 gap-4">
    <div className="">
      <a href={liveUrl} target="_blank" rel="noreferrer">
        <Image
          src={image}
          alt={title}
          width={400}
          height={360}
          className="rounded-xl hover:scale-105 transition-all"
        />
      </a>
    </div>
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-500">{description}</p>
      <div className="flex gap-2">
        <Link
          href="https://qatar.adal.dev"
          target="_blank"
          className="inline-flex gap-2 text-sm font-semibold px-4 py-3 transition-all bg-black hover:bg-opacity-80 text-white rounded-lg"
        >
          Live <ExternalLinkIcon className="w-4 " />
        </Link>
        <Link
          href={githubUrl}
          target="_blank"
          className="inline-flex gap-2 text-sm font-semibold px-4 py-3 transition-all bg-black hover:bg-opacity-80 text-white rounded-lg"
        >
          Source Code{" "}
          <Image
            src="/assets/icons/github.svg"
            alt="github"
            className="invert"
            width={16}
            height={16}
          />
        </Link>
      </div>
    </div>
  </div>
);
