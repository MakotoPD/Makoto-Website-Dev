export default defineSitemapEventHandler(() => {
    return [
      {
        loc: '/',
        // will be transformed into /en/about-us and /fr/about-us
        _i18nTransform: true,
      }
    ]
  })