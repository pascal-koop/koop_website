<template>
  <Teleport to="body">
    <div v-if="modelValue" @click="closeModal" class="fixed inset-0 bg-opacity-50 z-50 flex items-center justify-center ">
      <div class="w-[90vw] max-h-[90vh] p-5 ">
        <NuxtImg
          :src="imageSrc"
          :format="imageFormat"
          :alt="imageAlt"
          class="max-w-full max-h-[90vh] object-contain rounded-xl shadow-cardImage"
        />
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
function closeModal() {

  emit('update:modelValue', false);
  document.body.style.overflow = 'auto';
  document.documentElement.style.overflow = 'auto';
}
defineProps<{
  modelValue: boolean;
  imageSrc: string;
  imageFormat: string;
  imageAlt: string;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: boolean];

}>();
</script>