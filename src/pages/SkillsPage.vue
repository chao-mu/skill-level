<template>
  <q-page padding>
    <SkillSheet :skills="skills" />
  </q-page>
</template>

<script>
import SkillSheet from "components/SkillSheet.vue"

export default {
  components: {SkillSheet},
  computed: {
    skills() {
      return [
        {
          name: "knowledge",
          level: 3,
          exp: 300,
          levelProgress: 0.4,
          nextLevelExp: 400,
          id: "sdfsdg",
        },
        {
          name: "community",
          level: 3,
          level: 2,
          exp: 250,
          nextLevelExp: 400,
          levelProgress: 0.5,
          id: "s554dg",
        },
        {
          name: "communication",
          level: 20,
          exp: 2500,
          nextLevelExp: 4000,
          levelProgress: 0.2,
          id: "s5xxxx",
        },
      ]
    }
  }
}
</script>
