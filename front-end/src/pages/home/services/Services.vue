<template>
  <admin-template alias="services" title="Gerenciador de Barbearia">
    <v-content>
      <v-container fluid fill-height>
        <v-card class="content-container" elevation="0">
          <v-row>
            <v-col class="logo-container">
              <v-img :src="require('@/assets/img/logo-large.png')" width="300" />
            </v-col>

            <v-col class="description-container">
              <h1 class="description-title">Serviços</h1>

              <ul>
                <li>
                  <p class="description-p">
                    <span class="description-p-title">Sistema de gestão completo na palma da mão:</span>
                    <br />
                    <span
                      class="description-p-text"
                    >Você controla tudo o que acontece na sua barbearia em tempo real, de onde estiver.</span>
                  </p>
                </li>
                <li>
                  <p class="description-p">
                    <span class="description-p-title">Agendamento Online:</span>
                    <br />
                    <span
                      class="description-p-text"
                    >Organização dos horários e melhor atendimento aos clientes.</span>
                  </p>
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-content>
  </admin-template>
</template>

<script>
// Styles
import "./Services.scss";

// Mixins
import NavigationMixin from "@/mixins/NavigationMixin";

// Components
import AdminTemplate from "@/components/templates/admin/Template";

export default {
  name: "Services",
  mixins: [NavigationMixin],
  components: {
    AdminTemplate
  }
};
</script>