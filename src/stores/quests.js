import { defineStore } from 'pinia'

export const useQuestsStore = defineStore('quests', {
  state: () => ({
    quests: []
  }),

  getters: {
  },

  actions: {
    fetchQuests(user_id) {
      $db.collection('quests')
        .where('user_id', '==', user_id)
        .get()
        .then((quests) => this.quests = quests);
    }
  }
})
