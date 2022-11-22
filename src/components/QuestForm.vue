<template>
  <q-card-section>
    <div class="text-h5">New Quest</div>
  </q-card-section>

  <q-form
    @submit="onSubmit"
    class="q-gutter-md"
  >
    <q-card-section>
      <q-input
        filled
        class="q-mb-sm"
        v-model="title"
        label="Title"
        :rules="[required]"
      />


      <q-select
        filled
        v-model="modelSingle"
        :options="skillOptions"
        use-chips
        stack-label
        label="Single selection"
      />

      <div class="row">
        <q-btn label="Save" type="submit" color="primary"/>
      </div>
    </q-card-section>
  </q-form>
</template>

<script>
import { ref } from 'vue'
import { signInWithEmailAndPassword } from "firebase/auth"
import { useCurrentUserStore } from "stores/currentUser"

export default {
  name: "RegisterComponent",
  setup() {
    return {
      required(val) {
        return val !== null && val !== '' || 'Required field';
      },
    }
  },
  methods: {
    onSubmit() {
    }
  },
  data() {
    return {
      title: ref(""),
      description: ref(""),
      skills: ref([]),
      skillOptions: {"foo": "baz", "qux": "quux"}
    }
  },
};
</script>
