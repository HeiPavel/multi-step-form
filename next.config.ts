import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.icon.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              exportType: 'named',
              namedExport: 'ReactComponent'
            }
          }
        ],
        as: '*.js'
      }
    }
  }
}

export default nextConfig;
