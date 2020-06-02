<template>
  <v-app id="admin-template">
    <v-content>
      <v-container class="container pa-4 pa-sm-8" fluid fill-height>
        <topbar :alias="alias" class="no-print" />

        <div class="conteudo">
          <div v-if="title" class="admin-template-title font-weight-regular mb-8 no-print">
            <span>{{ title }}</span>
          </div>
          <slot></slot>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// Styles
import "@/components/templates/admin/Template.scss";

// Components
import Topbar from "@/components/templates/admin/topbar/Topbar";
import AuthMixin from "@/mixins/users/AuthMixin";
import NavigationMixin from "@/mixins/NavigationMixin";

export default {
  name: "Template",
  components: {
    Topbar
  },
  mixins: [AuthMixin, NavigationMixin],
  props: {
    title: {
      default: null
    },
    alias: {
      default: ""
    }
  },
  created() {
    if (!this.isAutenticated()) this.goTo("login");
  }
};
</script>