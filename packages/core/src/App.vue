<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue'
import { onBeforeMount } from 'vue'
import { useGlobalState } from '@/store/global-state'

const { initialization } = useGlobalState()

onBeforeMount(() => {
  initialization()
})
</script>

<template>
  <IonApp>
    <IonRouterOutlet />
  </IonApp>
</template>
