<template>
  <div class="app-card">
    <v-row no-gutters>
      <v-col offset="6" xs="6" sm="6" md="6" lg="6" xl="6">
        <levels />
      </v-col>
    </v-row>
    <skill-level title="Java 8+ features" perdent="50" />
    <skill-level title="Java 8+ features" perdent="50" />
    <skill-level title="Java 8+ features" perdent="50" />
    <skill-level title="Java 8+ features" perdent="50" />
  </div>
</template>

<script>
import SkillLevel from "@/views/components/skill-level.vue";
import Levels from "@/views/components/levels.vue";
export default {
  name: "card-skills-level",
  components: {
    "skill-level": SkillLevel,
    levels: Levels,
  },
};
</script>
