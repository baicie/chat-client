<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import {getPlatforms} from '@ionic/core';
import { onBeforeMount } from 'vue';

onBeforeMount(()=>{
  console.log('getPlatforms',getPlatforms())
})
</script>
