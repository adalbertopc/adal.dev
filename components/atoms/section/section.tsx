import clsx from "clsx";

interface SectionProps {
  title?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  title,
  description,
  className,
  children,
}) => (
  <section className={clsx(className, "py-12")}>
    {title || description ? (
      <div className="mb-8">
        {title && <h2 className="text-3xl font-bold mb-2">{title}</h2>}
        {description && <p className="">{description}</p>}
      </div>
    ) : null}
    {children}
  </section>
);
