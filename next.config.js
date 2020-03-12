module.exports = {
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-111566444-3'
    }]
  ],
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  }
};
