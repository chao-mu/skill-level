<template>
  <q-card-section>
    <div class="text-h5">Login</div>
  </q-card-section>

  <q-form
    @submit="onSubmit"
    class="q-gutter-md"
  >
    <q-card-section>
      <q-input
        filled
        class="q-mb-sm"
        v-model="email"
        label="Email"
        :rules="[required]"
      />

      <q-input
        filled
        class="q-mb-md"
        type="password"
        v-model="password"
        label="Password"
        :rules="[required]"
      />
      <div class="row">
        <q-btn label="Login" type="submit" color="primary"/>
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
      signInWithEmailAndPassword(this.$auth, this.email, this.password)
        .then(userCredential => {
          useCurrentUserStore().setUser(userCredential)
          this.$router.push("/character")
        })
        .catch(error => {
          const messages = {
            "auth/user-not-found": "User not found.",
            "auth/invalid-email": "Invalid email address.",
            "auth/invalid-password": "Invalid password.",
            "auth/wrong-password": "Wrong password.",
          }

          const code = error.code;
          const msg = messages[code] || "Unknown error code: " + code
          this.$q.notify({type: "negative", message: msg});
        })
    }
  },
  data() {
    return {
      email: ref(''),
      password: ref(''),
      error: ref(null),
    }
  },
};
</script>
