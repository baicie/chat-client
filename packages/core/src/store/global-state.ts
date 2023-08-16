import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { getPlatforms } from '@ionic/vue'
import { STATE } from './store-ids'

type Platform = 'ios' | 'ipad' | 'iphone' | 'android' | 'phablet' | 'tablet' | 'cordova' | 'capacitor' | 'electron' | 'pwa' | 'mobile' | 'mobileweb' | 'desktop' | 'hybrid'

interface GlobalState {
  platform: Platform[]
}

export const useGlobalState = defineStore(STATE, () => {
  const globalState: GlobalState = reactive({
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
