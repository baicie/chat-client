import { getPlatforms } from '@ionic/vue'
import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { CHAT } from './store-ids'

export const useChatSore = defineStore(CHAT, () => {
  const globalState = reactive({
    platform: [],
  })

  function initialization() {
    globalState.platform = getPlatforms()
  }
  return {
    initialization,
    globalState,
  }
})
