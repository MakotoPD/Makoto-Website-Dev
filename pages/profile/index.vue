<template>
    <div class="h-[40rem] w-screen flex flex-col items-center justify-center">
        <h1 class="text-2xl text-white font-bold mb-4">Profile</h1>
        <div class="bg-gray-800/70 rounded-xl py-12 px-8">
            <div class="flex gap-4 items-center">
                <img :src="avatar_url" alt="avatar" class="w-14 h-14 bg-slate-300 rounded-full">
                <div>
                    <p class="text-white/90 text-xl">{{ name }}</p>
                    <p class="text-white/70 text-sm">{{ email }}</p>
                </div>
            </div>
        </div>
        <div>
            <button @click="signout()" class="px-4 py-1 bg-primary rounded-lg text-white">SignOut</button>
        </div>
        <!-- <div class="mt-8 text-white">
            {{ userifno }}
        </div> -->
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: ['auth']
})

const supabase = useSupabaseClient()
const userifno = ref(null)

const { data: user } = await supabase.auth.getUser()

if (!user.user) {
    throw createError({ statusCode: 401, message: "Unauthorized"})
}

const { data } = await useFetch('/api/me', {
  headers: useRequestHeaders(['cookie'])
})

userifno.value = data 

console.log(data)

let avatar_url: any = data.value?.user_metadata.avatar_url
let role: any = data.value?.role
let name: any = data.value?.user_metadata.name 
let email: any = data.value?.email
let checkgoogle: any = data.value?.identities


for (let i = 0; i < checkgoogle.length; i++) {
    
    if (checkgoogle[i].provider == 'google') {
        avatar_url = checkgoogle[i].identity_data.avatar_url
        name = checkgoogle[i].identity_data.name
    }
}


const signout = async () => {
    let { error } = await supabase.auth.signOut()
    navigateTo('/')
}
</script>
