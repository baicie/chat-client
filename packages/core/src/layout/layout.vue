<script lang='ts' setup>
import { IonPage } from '@ionic/vue'
import { storeToRefs } from 'pinia'
import { useGlobalState } from '@/store/global-state'

const { globalState } = storeToRefs(useGlobalState())
// # config import
// # base state
// # pinia
// # computed
// # watch
// # function
// # lifecycle
// # style
</script>

<template>
  <IonPage />
</template>

<style lang='scss' scoped></style>
