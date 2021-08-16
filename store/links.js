export const state = () => ({
  articlesLink: {
    title: 'News',
    to: '/articles',
    description: 'Get an overview of the latest Spaceflight news, from various sources! Easily link your users to the right websites',
    img: '/News.svg',
    count: 0
  },
  blogsLink: {
    title: 'Blogs',
    to: '/blogs',
    description: 'Blogs often provide a more detailed overview of launches and missions. A must-have for the serious spaceflight enthusiast',
    img: '/Blogs.svg',
    count: 0
  },
  reportsLink: {
    title: 'Reports',
    to: '/reports',
    description: 'Space stations and other missions often publish their data. With SNAPI, you can include it in your app as well!',
    img: '/Reports.svg',
    count: 0
  }
});

export const mutations = {
  SET_ARTICLES_COUNT(state, count) {
    state.articlesLink.count = count;
  },
  SET_BLOGS_COUNT(state, count) {
    state.blogsLink.count = count;
  },
  SET_REPORTS_COUNT(state, count) {
    state.reportsLink.count = count;
  },
};

export const getters = {
  links: state => Object.values(state),
  articlesLink: state => state.articlesLink,
  blogsLink: state => state.blogsLink,
  reportsLink: state => state.reportsLink,
};
