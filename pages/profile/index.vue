<template>
    <div class="h-[40rem] w-screen flex flex-col items-center justify-center">
        <h1 class="text-2xl text-white font-bold mb-4">Profile</h1>
        <div>
            {{ user }}
        </div>
        <div>
            <button @click="signout()" class="px-4 py-1 bg-primary">SignOut</button>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: ['auth']
})

const supabase = useSupabaseClient()
const user = ref(null)

const { data } = await useFetch('/api/me', {
  headers: useRequestHeaders(['cookie'])
})

user.value = data


const signout = async () => {
    let { error } = await supabase.auth.signOut()
    navigateTo('/')
}
</script>
