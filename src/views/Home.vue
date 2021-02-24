<template>
  <div>
    <v-row no-gutters>
      <v-col xs="6" sm="6" md="6" lg="6" xl="6">
        <skill-level title="Java 8+ features" perdent="50" />
        <skill-level title="Java 8+ features" perdent="50" />
        <skill-level title="Java 8+ features" perdent="50" />
        <skill-level title="Java 8+ features" perdent="50" />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col xs="12" sm md="12" lg="12" xl="12" class="blue"> </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col xs="12" sm md="12" lg="12" xl="12" class="blue"> </v-col>
    </v-row>
  </div>
</template>

<script>
import SkillLevel from "@/views/components/skill-level.vue";

export default {
  name: "Home",
  components: {
    "skill-level": SkillLevel,
  },
};
</script>

<style scoped>
.blue {
  background-color: blue;
  height: 300px;
}
</style>
