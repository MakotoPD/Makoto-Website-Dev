<template>
    <div 
        :class="style"
        class="w-full py-2 px-2 my-4 border text-center rounded-lg">
        {{ alertprop.text }}
    </div>
</template>

<script setup lang="ts">

const alertprop = defineProps(['text', 'type'])
let style = ''

if (alertprop.type == 'error') {
    style = 'text-red-500 bg-red-600/30 border-red-600'
} else if (alertprop.type == 'success') {
    style = 'text-green-500 bg-green-300/40 border-green-600'
}

</script>