export const state = () => ({
  login: '',
  password: ''
});

export const mutations = {
  SET_USER_LOGIN(state, login) {
    state.login = login;
  },
  SET_USER_PASSWORD(state, password) {
    state.password = password;
  },
};

export const getters = {
  login: state => state.login,
  password: state => state.password,
};
