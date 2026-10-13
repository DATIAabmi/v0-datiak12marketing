// The /partner landing page is a separate Vite app (DATIAabmi/datia-landing-v0) deployed on its own Vercel project.
const PARTNER_LANDING_ORIGIN = "https://datia-landing.vercel.app"

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      { source: "/partner", destination: `${PARTNER_LANDING_ORIGIN}/partner/` },
      { source: "/partner/:path*", destination: `${PARTNER_LANDING_ORIGIN}/partner/:path*` },
    ]
  },
}

export default nextConfig
