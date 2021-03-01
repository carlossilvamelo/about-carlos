<template>
  <div class="container">
    <v-row no-gutters>
      <v-col class="col-style" xs="6" sm="12" md="6" lg="6" xl="6">
        <text-skill-level />
      </v-col>
      <v-col
        class="col-style"
        xs="6"
        sm="12"
        md="6"
        lg="6"
        xl="6"
        style="background-color: white"
      >
        <card-skills-level />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="col-style" xs="6" sm="12" md="6" lg="6" xl="6">
        <card-idioms />
      </v-col>
      <v-col
        class="col-style"
        xs="6"
        sm="12"
        md="6"
        lg="6"
        xl="6"
        style="background-color: white"
      >
        <experiences />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="col-style" xs="6" sm="12" md="6" lg="6" xl="6">
        <experiences />
      </v-col>
      <v-col
        class="col-style"
        xs="6"
        sm="12"
        md="6"
        lg="6"
        xl="6"
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
import { getTokenAndMsg } from "@/firebase/firebaseService";

export default {
  name: "Home",
  mounted(){
    getTokenAndMsg();
  },
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
