import { defineStore } from 'pinia'
import { reactive, watch } from 'vue'

export const useCurrentUserStore = defineStore('currentUser', () => {
  const user = reactive({
    uid: '',
  })

  const storage = localStorage.getItem('user')
  if (storage) {
    const { uid } = JSON.parse(storage)
    user.uid = uid
  }

  watch(() => user, (state) => {
    localStorage.setItem('user', JSON.stringify(state))
  }, { deep: true })

  function setUser(firebaseUser) {
    user.uid = firebaseUser.uid;
  }

  function isAuthorized() {
    return !!user.uid
  }

  return {
    user,
    setUser,
    isAuthorized,
  }
})
