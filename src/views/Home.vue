<template>
  <div class="main-container">
    <v-row no-gutters>
      <v-col xs="6" sm="6" md="6" lg="6" xl="6">
        <text-skill-level />
      </v-col>
      <v-col
        offset="1"
        xs="5"
        sm="5"
        md="5"
        lg="5"
        xl="5"
        style="background-color: white"
      >
        <card-skills-level />
      </v-col>
      <v-col xs="6" sm="6" md="6" lg="6" xl="6">
        <card-idioms />
      </v-col>
      <v-col
        offset="1"
        xs="5"
        sm="5"
        md="5"
        lg="5"
        xl="5"
        style="background-color: white"
      >
        <experiences />
      </v-col>
      <v-col xs="6" sm="6" md="6" lg="6" xl="6">
        <experiences />
      </v-col>
      <v-col
        offset="1"
        xs="5"
        sm="5"
        md="5"
        lg="5"
        xl="5"
        style="background-color: white"
      >
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CardSkillsLevel from "@/views/components/card-skills-level.vue";
import TextSkillLevel from "@/views/components/text-skill-level.vue";
import Idioms from "@/views/components/soft-skills/card-idioms.vue";
import Experiences from "@/views/components/experience/experiences.vue";
export default {
  name: "Home",
  components: {
    "card-skills-level": CardSkillsLevel,
    "text-skill-level": TextSkillLevel,
    "card-idioms": Idioms,
    experiences: Experiences,
  },
};
</script>

<style scoped>
.blue {
  background-color: #32435d;
  height: 300px;
}
</style>
