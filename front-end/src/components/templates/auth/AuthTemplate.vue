<template>
  <v-app id="auth-template">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex class="app-card-content">
            <v-card class="elevation-0 app-card">
              <div class="top-border"></div>
              <v-card-text class="d-flex justify-center">
                <v-row no-gutters align="center">
                  <v-col cols="12" sm="12" class="text-center">
                    <img src="@/assets/img/logo.png" class="app-logo" />
                  </v-col>

                  <v-card class="elevation-0 app-card-form-content pa-4">
                    <v-col cols="12" class="text-center">
                      <slot></slot>
                    </v-col>
                  </v-card>
                </v-row>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// Styles
import "@/components/templates/auth/AuthTemplate.scss";

export default {
  name: "AuthTemplate"
};
</script>