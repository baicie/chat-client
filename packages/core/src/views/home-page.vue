<script setup lang="ts">
import { IonPage } from '@ionic/vue'
import { storeToRefs } from 'pinia'
import { useGlobalState } from '@/store/global-state'
const { globalState } = storeToRefs(useGlobalState())
</script>

<template>
  <IonPage>
    homepage
  </IonPage>
</template>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
