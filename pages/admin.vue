<template>
    <div>
        {{ libraries }}
    </div>
</template>

<script setup lang="ts">
const { data: libraries } = await useFetch('/api/libraries', {
  headers: useRequestHeaders(['cookie'])
})
</script>