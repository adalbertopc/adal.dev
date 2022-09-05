import Image from "next/future/image";
import clsx from "clsx";

interface CareerThumbProps {
  title: string;
  date: string;
  description?: string;
  imageSrc: string;
  className?: string;
  isActive?: boolean;
  onClick: () => void;
}

export const JobThumb: React.FC<CareerThumbProps> = ({
  isActive,
  date,
  title,
  imageSrc,
  className,
  onClick,
}) => (
  <div>
    <h4 className="text-center text-xs font-semibold mb-2">{date}</h4>
    <div
      className={clsx(
        className,
        "transition-colors rounded-lg bg-slate-100 p-4 flex flex-col gap-3 items-center justify-center cursor-pointer h-20",
        {
          "bg-sky-100": isActive,
        }
      )}
      onClick={onClick}
    >
      <div className="max-w-[200px]">
        <Image
          src={imageSrc}
          alt={title}
          className="object-contain max-h-8"
          width={200}
          height={200}
        />
      </div>
      {title && (
        <h3 className="text-xs text-center font-medium text-slate-800">
          {title}
        </h3>
      )}
    </div>
  </div>
);
