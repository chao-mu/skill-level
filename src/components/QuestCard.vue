<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{name}}</div>
      <div class="text-subtitle2">
        <q-badge class="q-ma-xs" v-for="tag in tags" v-bind:key="tag">{{ tag }}</q-badge>
      </div>
    </q-card-section>
    <q-card-section>
      {{ description }}
    </q-card-section>

    <q-separator dark />

      <q-card-actions>
        <q-btn :v-if="!path" :href="path" label="Start" outline color="purple" />
          <q-btn color="green" outline>Mark Complete</q-btn>
      </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: ["name", "tags", "description", "path"],
  setup () {
    return {}
  },
  methods: {
  }
}
</script>
