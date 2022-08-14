import Head from "next/head";

interface OgImage {
  url?: string;
  width?: string;
  height?: string;
  alt?: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  robots?: string;
  openGraph?: {
    title?: string;
    type?: string;
    locale?: string;
    description?: string;
    site_name?: string;
    url?: string;
    images?: OgImage[];
  };
  children?: React.ReactNode;
}

const seoTemplate = {
  title: "Adalberto Prado - Software Engineer",
  titleTemplate: "%s - Adalberto Prado",
  description: "Adalberto Prado's Web Developer personal website",
  openGraph: {
    type: "website",
    url: "https://www.adal.dev",
    site_name: "Adalberto Prado",
  },
};

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  openGraph,
  robots,
  children,
}) => {
  return (
    <Head>
      <title key="title">
        {title
          ? seoTemplate.titleTemplate.replace(/%s/g, title)
          : seoTemplate.title}
      </title>
      <meta
        key="description"
        name="description"
        content={description || seoTemplate.description}
      />
      <meta
        key="og:type"
        property="og:type"
        content={openGraph?.type ?? seoTemplate.openGraph.type}
      />

      <meta
        key="og:site_name"
        property="og:site_name"
        content={openGraph?.site_name ?? seoTemplate.openGraph.site_name}
      />
      <meta
        key="og:url"
        property="og:url"
        content={openGraph?.url ?? seoTemplate.openGraph.url}
      ></meta>

      <meta key="robots" name="robots" content={robots ?? "index,follow"} />
      <meta
        key="googlebot"
        name="googlebot"
        content={robots ?? "index,follow"}
      ></meta>
      {children}
    </Head>
  );
};

export default SEO;
