<script lang='ts' setup>
import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonPage, IonRouterOutlet, IonRow } from '@ionic/vue'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useGlobalState } from '@/store/global-state'

const { globalState } = storeToRefs(useGlobalState())

const showSlider = computed(() => globalState.value.platform === 'desktop' && globalState.value.showSlider)

function changeSliderState(state = false) {
  globalState.value.showSlider = state
}
</script>

<template>
  <IonPage>
    <IonContent>
      <!-- fixd button  -->
      <template v-if="!globalState.showSlider">
        <IonButton slot="fixed" @click="changeSliderState(true)">
          <IonIcon name="list-outline" />
        </IonButton>
      </template>
      <IonGrid>
        <IonRow>
          <template v-if="showSlider">
            <IonCol size="auto">
              <IonRow style="width: 244px">
                <IonCol>
                  <IonButton @click="changeSliderState(false)">
                    {{ showSlider }}
                  </IonButton>
                  <IonButton>
                    <IonIcon name="list-outline" />
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonCol>
          </template>
          <IonCol>
            <IonRouterOutlet />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
</template>

<style lang='scss' scoped></style>
