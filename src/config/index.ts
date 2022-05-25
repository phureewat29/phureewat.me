const siteMetadata = {
  title: `Phureewat Aphibansri`,
  description: `Phureewat Aphibansri is a game and javascript developer`,
  author: `Phureewat Aphibansri`,
  siteUrl:
    process.env.NODE_ENV === 'development'
      ? `https://dev.phureewat.me`
      : `https://phureewat.me`,
  image: `/static/og/default.png`,
  twitterUsername: `@phureewat29`,
}

export { siteMetadata }
