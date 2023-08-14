<template>
    <div class="pt-24 pb-60 w-full flex items-center justify-center">
        <p class="text-xl text-white">{{ $t('page.verify.text') }}</p>
    </div>
</template>
<script setup lang="ts">
const user = useSupabaseUser()

watch(user, () => {
  if (user.value) {
    return navigateTo('/')
  }
}, { immediate: true })
</script>