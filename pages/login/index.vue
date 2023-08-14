<template>
    <div class="w-full h-full flex justify-center items-center py-24">
        <Signin />
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: ['auth']
})

</script>
