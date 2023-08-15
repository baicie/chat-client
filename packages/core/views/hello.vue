<script lang='ts' setup>
import {IonButton} from '@ionic/vue';

function onButtonFocus(){
  console.log('onButtonFocus')
}
</script>

<template>
 <div>
  <div>hellow</div>
  <IonButton @click="onButtonFocus">IonButton</IonButton>
 </div>
</template>

<style lang='scss' scoped></style>