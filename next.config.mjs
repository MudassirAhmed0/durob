import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "duroub-cms.s3.eu-central-1.amazonaws.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "duroub-cms.brackets-tech.com",
        port: "",
        pathname: "/**"
      }
    ]
  }
};

export default withNextIntl(nextConfig);
