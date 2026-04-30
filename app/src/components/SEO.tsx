import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  pathname?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
  keywords?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_NAME = "Ctrl + Create";
const DEFAULT_IMAGE = "/images/assets/og-image.jpg";
const SITE_URL = typeof window !== "undefined" ? window.location.origin : "https://ctrl-create-srvcs.vercel.app";

export default function SEO({
  title,
  description,
  pathname = "",
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
  keywords,
  structuredData,
}: SEOProps) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${pathname}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
      {/* Basic */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_PH" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
