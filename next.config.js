module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap')
    }
    return config
  },
  images: {
    domains: [],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
          // Opt-out of Google FLoC: https://amifloced.org/
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\n/g, ''),
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/gamedev',
        destination: 'https://gamedev.phureewat.me',
        permanent: false,
      },
    ]
  },
}

// https://securityheaders.com
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://gc.zgo.at http://gc.zgo.at;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data: https://phureewat29.goatcounter.com/count;
  media-src 'none';
  connect-src *;
  font-src 'self';
`
