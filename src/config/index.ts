const siteMetadata = {
  title: `Phureewat Aphibansri`,
  description: `Phureewat is payments and blockchains Enthusiast`,
  author: `Phureewat Aphibansri`,
  siteUrl:
    process.env.NODE_ENV === 'development'
      ? `https://dev.phureewat.me`
      : `https://phureewat.me`,
  image: `/static/og/default.png`,
  twitterUsername: `@phureewat29`,
}

export { siteMetadata }
