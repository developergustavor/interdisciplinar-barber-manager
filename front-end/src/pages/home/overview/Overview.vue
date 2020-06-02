<template>
  <admin-template alias="home" title="Gerenciador de Barbearia">
    <v-content>
      <v-container fluid fill-height>
        <v-card class="content-container" elevation="0">
          <v-row>
            <v-col class="logo-container">
              <v-img :src="require('@/assets/img/logo-large.png')" width="300" />
            </v-col>

            <v-col class="description-container">
              <h1 class="description-title">Sobre</h1>
              <p
                class="description-p"
              >Um software de gestão para empresas do ramo de Barbearia. Um software inovador com capacidade de te auxiliar a gerenciar o fluxo de caixa, com vendas de produtos e serviços.</p>

              <p class="description-p">
                Temos a missão de facilitar o controle financeiro do estabelecimento de maneira fácil e segura.
                Com nosso layout simplificado, não tem necessidade de treinamento no software, por ser auto didático.
              </p>

              <p
                class="description-p"
              >Assim, você consegue ter o controle de tudo que esta acontecendo, poupando tempo e facilitando os cálculos de entrada e saída de recursos.</p>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-content>
  </admin-template>
</template>

<script>
// Styles
import "./Overview.scss";

// Mixins
import NavigationMixin from "@/mixins/NavigationMixin";

// Components
import AdminTemplate from "@/components/templates/admin/Template";

export default {
  name: "Overview",
  mixins: [NavigationMixin],
  components: {
    AdminTemplate
  }
};
</script>