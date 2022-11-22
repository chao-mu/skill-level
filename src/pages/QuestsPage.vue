<template>
  <q-page padding>
    <div class="row">
      <QuestCard
          v-for="quest in quests"
          v-bind:key="quest.id"
          class="q-ma-sm"
          :name="quest.name"
          :tags="quest.tags"
          :path="quest.path"
          :description="quest.description"
          :criteria="quest.criteria"
        >
      </QuestCard>
    </div>
  </q-page>
</template>

<script>
import QuestCard from 'components/QuestCard.vue'

export default {
  components: {QuestCard},
  computed: {
    quests() {
      return [
        {
          name: "A gathering of snake wizards share their wisdom (Part 1)",
          tags: ["python", "pycon2022", "video"],
          description: "Lightning talks from PyCon 2022, a python convention",
          path: "https://youtu.be/1IiL31tUEVk",
          id: "oskfposkdpfKDF",
        },
        {
          name: "A gathering of snake wizards share their wisdom (Part 2)",
          tags: ["python", "pycon2022", "video"],
          description: "Lightning talks from PyCon 2022, a python convention (Part 3)",
          path: "https://youtu.be/1IiL31tUEVk",
          id: "oskfposkdpfKDF",
        }
      ]
    }
  }
}
</script>
