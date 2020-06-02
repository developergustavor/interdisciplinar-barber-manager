<template>
  <admin-template alias="login" title="">
    <auth-template>
      <v-form v-show="showForm" ref="loginForm" :lazy-validation="true">
        <v-text-field
          id="email"
          label="E-mail"
          name="email"
          :rules="emailRules"
          v-model="email"
          type="email"
          class="app-input"
          autocomplete="off"
          color="primary"
          validate-on-blur
          autofocus
        ></v-text-field>

        <v-text-field
          id="password"
          v-model="password"
          :type="passwordVisible ? 'text' : 'password'"
          :rules="passwordRules"
          label="Senha"
          name="senha"
          color="primary"
          :append-icon="passwordVisible ? 'visibility_off' : 'remove_red_eye'"
          @click:append="passwordVisible = !passwordVisible"
          validate-on-blur
        ></v-text-field>

        <v-btn
          block
          color="primary"
          class="text-capitalize font-weight-light mt-4 btn"
          height="40"
          @click="login"
        >Entrar</v-btn>
      </v-form>

      <div class="preloader-container" v-show="showLoader">
        <circular-loader />
      </div>
    </auth-template>
  </admin-template>
</template>

<script>
// Modules
/* import axios from "axios"; */

// Local Files
/* import * as Constants from "@/constants"; */

// Components
import AdminTemplate from "@/components/templates/admin/Template";
import AuthTemplate from "@/components/templates/auth/AuthTemplate";
import CircularLoader from "@/components/loaders/CircularLoader";

// Mixins
import AuthMixin from "@/mixins/users/AuthMixin";
import NavigationMixin from "@/mixins/NavigationMixin";
import SnackbarMixin from "@/mixins/SnackbarMixin";

export default {
  name: "Login",
  components: { AuthTemplate, AdminTemplate, CircularLoader },
  mixins: [NavigationMixin, AuthMixin, SnackbarMixin],
  data() {
    return {
      passwordVisible: false,
      email: "",
      password: "",
      emailRules: [
        v => !!v || "E-mail é obrigatório",
        v =>
          /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(v) ||
          "Digite um telefone válido"
      ],
      passwordRules: [
        v => !!v || "Senha é obrigatória",
        v =>
          (v && v.length >= 4) || "Sua senha precisa ter no mínimo 4 caracteres"
      ],
      showLoader: false,
      showForm: true
    };
  },
  methods: {
    login() {
      this.showForm = false;
      this.showLoader = true;

      setTimeout(() => {
        alert('Logado')
        //window.location.replace('http://localhost:8081/login');
      }, 1000);

      /*  // All data
      var data = this.$data;
      var valid = true;

      // Checking if some field is undefined, empty or null (this is a kind of validation)
      for (var field in data) {
        let value = data[field];

        switch (field) {
          case "email":
            if (!value) valid = false;
            break;

          case "password":
            if (!value) valid = false;
            break;
        }
      }

      if (valid) {
        // Checking if the email already exists
        axios({
          method: "post",
          url: `${Constants.urls.base}/api/user/auth/login`,
          data: {
            email: data.email,
            password: data.password
          }
        })
          .then(response => {
            if (response) {
              if (response.status === 200) {
                let exists = response.data.body.length > 0 ? true : false;

                if (exists) {
                  if (response.data.auth) {
                    this.storeUser(response);

                    let statusId = response.data.body[0].status_id;

                    if (statusId === 1) {
                      this.goTo("home");
                    } else {
                      this.goTo("not_auth", { statusId });
                    }
                  } else {
                    this.showError(response.data.message);
                  }
                } else {
                  this.showError("Email ou senha inválidos!");
                }
              } else {
                this.showError("Email ou senha inválidos!");
              }
            } else this.showError("Falha de conexão com o servidor");
          })
          .catch(err => this.showError(err));
      } else {
        this.showForm = true;
        this.showLoader = false;
        this.showError("Preencha todos os campos corretamente!");
      } */
    },
    showError(msg) {
      this.hideLoader();
      this.showErrorSnackbar(msg);
    },
    hideLoader() {
      this.showLoader = false;
      this.showForm = true;
    }
  },
  mounted: function() {
    document.getElementById("email").focus();
    document.getElementById("email").addEventListener(
      "keypress",
      e => {
        if (e.keyCode === 13) this.login();
      },
      false
    );

    document.getElementById("password").addEventListener(
      "keypress",
      e => {
        if (e.keyCode === 13) this.login();
      },
      false
    );
  }
};
</script>