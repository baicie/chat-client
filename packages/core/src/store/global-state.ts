import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { useThrottleFn } from '@vueuse/core'
import { STATE } from './store-ids'

type Platform = 'mobile' | 'desktop'
interface SliderType {
  title: string
  id: string
}
interface GlobalState {
  platform: Platform
  slider: SliderType[]
  showSlider: boolean
}

export const useGlobalState = defineStore(STATE, () => {
  const globalState: GlobalState = reactive({
    platform: 'desktop',
    slider: [
      {
        title: 'title',
        id: '1',
      },
    ],
    showSlider: true,
  })

  function initialization() {
    windowResize()
  }

  function windowResize() {
    globalState.platform = window.document.body.clientWidth > 779 ? 'desktop' : 'mobile'
  }

  window.addEventListener('resize', useThrottleFn(windowResize))

  return {
    initialization,
    globalState,
  }
})
