export const actions = {
  async nuxtServerInit({ commit }) {
    const articlesCount = await fetch('https://api.spaceflightnewsapi.net/v3/articles/count').then(response => response.json());
    const blogsCount = await fetch('https://api.spaceflightnewsapi.net/v3/blogs/count').then(response => response.json());
    const reportsCount = await fetch('https://api.spaceflightnewsapi.net/v3/reports/count').then(response => response.json());
    commit('links/SET_ARTICLES_COUNT', articlesCount);
    commit('links/SET_BLOGS_COUNT', blogsCount);
    commit('links/SET_REPORTS_COUNT', reportsCount);
  }
};
