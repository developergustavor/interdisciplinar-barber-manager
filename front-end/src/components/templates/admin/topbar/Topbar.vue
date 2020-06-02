<template>
  <v-app-bar id="topbar" clipped-left app color="light1" dark>
    <div class="topbar-logo-container">
      <img :src="require('@/assets/img/logo.png')" alt="Home" class="topbar-logo" />
    </div>

    <ul class="menu-item-container">
      <li
        v-for="item in items"
        :key="item.title"
        :class="isActive(item.alias)"
        @click="goTo(item.routeName)"
      >{{ item.title }}</li>
    </ul>

    <!--
          class="btn-side"
          
    -->
    <!-- <v-spacer></v-spacer>
    <v-icon class="item">notifications</v-icon>-->
    <!--
    <v-divider inset class="mt-2 mr-6 ml-6 mb-4 item item-bg" vertical></v-divider>

    <v-menu class="btn-avatar" transition="slide-y-transition" bottom>
      <template v-slot:activator="{ on }">
        <div class="btn-avatar" dark v-on="on">
          <v-avatar size="32px" item>
            <v-icon dark>account_circle</v-icon>
            <v-img :src="require('@/assets/img/logo.png')" alt="Perfil"></v-img>
          </v-avatar>

          <v-icon class="ml-4 item">keyboard_arrow_down</v-icon>
        </div>
      </template>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" @click="clickMenu(item)">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>-->
  </v-app-bar>
</template>

<script>
// Mixins
import "@/components/templates/admin/topbar/Topbar.scss";
import NavigationMixin from "@/mixins/NavigationMixin";
import AuthMixin from "@/mixins/users/AuthMixin";
import SnackbarMixin from "@/mixins/SnackbarMixin";
import UserMixin from "@/mixins/users/UserMixin";

export default {
  name: "Topbar",
  mixins: [AuthMixin, NavigationMixin, SnackbarMixin, UserMixin],
  data() {
    return {
      items: [
        { title: "Página Inicial", alias: "home", routeName: "home" },
        { title: "Quem somos", alias: "about", routeName: "about" },
        { title: "Serviços", alias: "services", routeName: "services" },
        { title: "Login", alias: "login", routeName: "login" }
      ]
    };
  },
  props: {
    alias: {
      type: String,
      default: ''
    }
  },
  methods: {
    isActive(itemAlias) {
      return this.alias === itemAlias ? "active" : "";
    },
    clickMenu(item) {
      if (item.alias === "logout") {
        this.logout();
      } else if (item.alias === "copyUrl") {
        let url = `${window.location.origin}/investidor/cadastro/${this.userToken}`;
        const el = document.createElement("textarea");
        el.value = url;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        this.showSuccessSnackbar("Url copiada!");
      } else {
        this.goTo("change_password", {
          email: this.userEmail,
          logged: true
        });
      }
    }
  }
};
</script>