import { ClockIcon } from "@heroicons/react/solid";
import { Link } from "~/components";

interface PostCardProps {
  title: string;
  createdAt: Date;
  slug: string;
  description: string;
  tags?: string[];
  readingTime: number;
}

export const PostCard: React.FC<PostCardProps> = ({
  title,
  description,
  slug,
  createdAt,
  tags,
  readingTime,
}) => (
  <div className="p-4 transition-colors bg-slate-50 hover:bg-slate-200 rounded-md">
    <span className="text-xs font-semibold text-gray-600 inline-block mb-1">
      {new Date(createdAt).toLocaleDateString("en", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      })}{" "}
    </span>
    <h3 className="text-xl font-bold mb-2">
      <Link href={`/blog/${slug}`}>{title}</Link>
    </h3>
    <p className="text-sm mb-4">{description}</p>

    <div className="flex justify-between">
      <div className="flex gap-1">
        {tags?.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-white border border-gray-400 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <span className="text-xs inline-flex items-center gap-1 font-medium text-gray-600 mb-3">
        <ClockIcon width={14} />
        {readingTime} min read{" "}
      </span>
    </div>
  </div>
);
