<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue'
import { getPlatforms } from '@ionic/core'
import { onBeforeMount } from 'vue'

onBeforeMount(() => {
  console.log('getPlatforms', getPlatforms())
})
</script>

<template>
  <IonApp>
    <IonRouterOutlet />
  </IonApp>
</template>
