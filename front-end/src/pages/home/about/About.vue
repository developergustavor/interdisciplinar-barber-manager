<template>
  <admin-template alias="about" title="Gerenciador de Barbearia">
    <v-content>
      <v-container fluid fill-height>
        <v-card class="content-container" elevation="0">
          <v-row>
            <v-col class="logo-container">
              <v-img :src="require('@/assets/img/logo-large.png')" width="300" />
            </v-col>

            <v-col class="description-container">
              <h1 class="description-title">Quem somos ?</h1>
              <p
                class="description-p"
              >Somos uma equipe de estudantes de Ciências da Computação. Focados em resolver problemas do cotidiano, facilitando serviços em diversas áreas. Com intuito de sanar uma deficiência no mercado de pequenos negócios, melhorando a eficiência sem esquecer a segurança das informações.</p>

              <p
                class="description-p"
              >Estamos sempre em busca de inovação para facilitar as demandas de nossos clientes.</p>

              <p
                class="description-p"
              >Estamos sempre em busca de inovação para facilitar as demandas de nossos clientes.</p>

              <p
                class="description-p"
              >Trabalhamos sempre com tecnologia de ponta para garantir o bom funcionamento, garantindo desempenho e prevenindo perder dados.</p>

              <p
                class="description-p"
              >Nosso compromisso é atender nossos clientes de forma eficaz, utilizando metodologias ágeis no desenvolvimento de nossos softwares.</p>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-content>
  </admin-template>
</template>

<script>
// Styles
import "./About.scss";

// Mixins
import NavigationMixin from "@/mixins/NavigationMixin";

// Components
import AdminTemplate from "@/components/templates/admin/Template";

export default {
  name: "About",
  mixins: [NavigationMixin],
  components: {
    AdminTemplate
  }
};
</script>