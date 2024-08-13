/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: false,
  
  experimental: {
    serverComponentsExternalPackages: ['pdf-parse'],
  },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    config.externals = [...config.externals, 'hnswlib-node'] // required for RAG module
    return config
  },
  
}

export default config
