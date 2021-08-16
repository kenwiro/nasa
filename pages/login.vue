<template>

  <v-container class="fill-height">
    <v-row
      justify="center"
    >
      <v-col
        cols="3"
      >
        <v-form v-model="valid" @submit.prevent="setUser">
          <v-container>
            <v-row justify="center">
              <v-col
                cols="12"
              >
                <v-text-field
                  v-model="login"
                  :rules="loginRules"
                  label="Login"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
              >
                <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  label="Password"
                  type="password"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="auto"
              >
                <v-btn
                  required
                  color="primary"
                  type="submit"
                  :disabled="!valid"
                >SUBMIT</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>

import { mapMutations } from 'vuex';

export default {
  layout: 'login',
  data() {
    return {
      valid: false,
      login: '',
      loginRules: [
        v => !!v || 'Login is required',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
      ],
    }
  },
  methods: {
    ...mapMutations({
      'setLogin' : 'user/SET_USER_LOGIN',
      'setPassword' : 'user/SET_USER_PASSWORD'
    }),
    setUser() {
      this.setLogin(this.login);
      this.setPassword(this.password);
      localStorage.setItem('login', this.login);
      localStorage.setItem('password', this.password);
      this.$router.replace('/');
    }
  },
  mounted() {
    const login = localStorage.getItem('login');
    const password = localStorage.getItem('password');
    if(login && password) {
      this.login = login;
      this.password = password;
    }
  }
}

</script>
