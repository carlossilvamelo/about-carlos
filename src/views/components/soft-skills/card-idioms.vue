<template>
  <div class="app-card">
    <v-row no-gutters>
      <v-col offset="6" xs="6" sm="6" md="6" lg="6" xl="6">
        <levels />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col xs="6" sm="6" md="6" lg="6" xl="6">
        <img src="@/assets/reino-unido.png" />
      </v-col>
      <v-col xs="6" sm="6" md="6" lg="6" xl="6">
        <v-progress-linear
          color="blue"
          height="30"
          value="90"
          striped
        ></v-progress-linear>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col xs="6" sm="6" md="6" lg="6" xl="6">
        <img src="@/assets/espanha.png" />
      </v-col>
      <v-col xs="6" sm="6" md="6" lg="6" xl="6">
        <v-progress-linear
          color="blue"
          height="30"
          value="90"
          striped
        ></v-progress-linear>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Levels from "@/views/components/levels.vue";
export default {
  name: "card-idioms",
  components:{
    'levels':Levels
  },
  data() {
    return {
      pt: "@/assets/brasil.png",
    };
  },
  mounted() {},
  methods: {
    init() {
      return "@/assets/brasil.png";
    },
  },
};
</script>

<style scoped>
.midi-level {
  text-align: center;
}
</style>
