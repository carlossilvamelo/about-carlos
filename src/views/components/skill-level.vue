<template>
  <v-row no-gutters>
    <v-col xs="6" sm="6" md="6" lg="6" xl="6" >
      <span class="title"> {{ title }} </span>
    </v-col>
    
    <v-col xs="6" sm="6" md="6" lg="6" xl="6">
      <v-progress-linear
        color="blue"
        height="30"
        :value="percent"
        striped
      ></v-progress-linear>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "skill-level",
  props: {
    percent: {
      type: Number,
      default: 50,
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.title {
  font-size: 19px;
}
</style>