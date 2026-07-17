/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the workspace root so Turbopack doesn't infer a parent directory
  // when a stray lockfile exists higher up the tree.
  turbopack: {
    root: __dirname,
  },
}

module.exports = nextConfig
