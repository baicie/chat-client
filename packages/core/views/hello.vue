<script lang='ts' setup>
import {IonButton} from '@ionic/vue'; 
import { getAliveService } from '../apis/chat'; 
import {onBeforeMount,ref} from 'vue';

const activeSite = ref()

function onButtonFocus(){
  console.log('onButtonFocus')
}


// async function

onBeforeMount(async()=>{
  try {
   const res =  await getAliveService()
   console.log('res',res)
   if(res.status === 200 ){
    activeSite.value = res.data
   }
  } catch (error) {
    console.log('onBeforeMount', error)
  }
})
</script>

<template>
<div>
  <div>hellow</div>
  <IonButton @click="onButtonFocus">IonButton</IonButton>
  <ion-list>
    <template v-for="item in activeSite" :key="item.site">
    <ion-item>
    <ion-label>{{ item.site }}-{{ item.models }}</ion-label>
  </ion-item>
</template>
  </ion-list>
</div>
</template>

<style lang='scss' scoped></style>