<template>
  <VDialog v-model="shown" max-width="100%" :width="580" persistent>
    <VCard>
      <VCardTitle> Unable to fetch request information </VCardTitle>
      <VCardText>
        In the following scenario, reloading the tab is required to record
        request.
        <ul class="pl-6 pt-1 pb-3">
          <li>After new installation</li>
          <li>After updating / reloading this extension</li>
          <li>After background worker restart</li>
        </ul>
        Note that the extension cannot record sensitive requests. Please visit
        <a
          href="https://developer.chrome.com/docs/extensions/reference/webRequest/#:~:text=only%20the%20following,to%20prevent%20deadlocks."
          target="_blank"
          v-text="'here'"
        />
        for more information.
      </VCardText>
      <VCardActions>
        <VSpacer />
        <VBtn variant="text" @click="shown = false">OK</VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script lang="ts">
import { PropType, computed, defineComponent, toRefs } from 'vue'

export default defineComponent({
  name: 'DialogReloadPrompt',
  props: {
    modelValue: {
      type: Object as PropType<{ show: boolean }>,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const { modelValue } = toRefs(props)
    const shown = computed<boolean>({
      set: value => {
        emit(
          'update:modelValue',
          Object.assign({}, modelValue.value, { show: value }),
        )
      },
      get: () => {
        return modelValue.value.show
      },
    })

    return {
      shown,
    }
  },
})
</script>

<style lang="scss" module></style>
