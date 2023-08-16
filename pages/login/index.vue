<template>
    <div class="w-full h-full flex justify-center items-center py-24">
        <div class="bg-gray-800/70 rounded-xl py-12 px-8">

            <div class="flex items-center gap-5 mb-8">
                <div class="p-2 bg-blue-900/50 flex items-center justify-center rounded-lg "><i class='bx bx-sm bxs-user text-primary'></i></div>
                <p class="text-xl text-white font-medium">{{ $t('page.login.login') }}</p>
            </div>

            <div class="mb-4">
                <p class="text-gray-400">{{ $t('page.login.loginAnother') }}</p>
                <div class="flex gap-2 my-2">
                    <button @click="signGoogle()" class="w-full px-6 py-1 pt-1.5 bg-gray-700 rounded-lg border border-gray-600 flex items-center justify-center text-gray-400 duration-150 hover:bg-amber-900 hover:text-amber-500 hover:border-amber-600">
                        <i class='bx bx-sm bxl-google'></i>
                    </button>
                    <button @click="signDiscord()" class="w-full px-6 py-1 pt-1.5 bg-gray-700 rounded-lg border border-gray-600 flex items-center justify-center text-gray-400 duration-150 hover:bg-violet-900 hover:text-violet-500 hover:border-violet-600">
                        <i class='bx bx-sm bxl-discord-alt'></i>
                    </button>
                    <button @click="signAzure()" class="w-full px-6 py-1 pt-1.5 bg-gray-700 rounded-lg border border-gray-600 flex items-center justify-center text-gray-400 duration-150 hover:bg-green-900 hover:text-green-500 hover:border-green-600">
                        <i class='bx bx-sm bxl-microsoft'></i>
                    </button>
                </div>
            </div>
            <hr class="border-gray-600">
            <div class="mt-4">
                <form
                    @submit.prevent="() => (login())"
                >
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-400">{{ $t('page.login.email') }}</label>
                    <div class="flex mb-6">
                        <span class="inline-flex items-center px-3 text-sm border border-r-0 rounded-l-md   bg-gray-600   text-gray-400   border-gray-600">
                            <i class='bx-xs w-4 h-4 text-gray-400 bx bxs-envelope'></i>
                        </span>
                        <input type="email" id="email" v-model="email"  placeholder="name@email.com" class="rounded-none rounded-r-lg 0 border block flex-1 min-w-0 w-full text-sm p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    </div>

                    <label for="password" class="block mb-2 text-sm font-medium text-gray-400">{{ $t('page.login.password') }}</label>
                    <div class="flex">
                        <span class="inline-flex items-center px-3 text-sm border border-r-0 rounded-l-md   bg-gray-600   text-gray-400   border-gray-600">
                            <i class='bx-xs w-4 h-4 text-gray-400 bx bxs-lock-open-alt'></i>
                        </span>
                        <input type="password" id="password" v-model="password"  :placeholder="$t('page.login.password')" class="rounded-none rounded-r-lg border block flex-1 min-w-0 w-full text-sm p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    </div>

                    <Alert v-if="errorval" :text="errorval" type="error"/>
                    <Alert v-if="success" :text="success" type="success"/>

                    <div>
                        <button class="w-full py-2 mt-4 bg-primary/70 hover:bg-primary duration-150 text-white rounded-lg ">{{ $t('page.login.loginButton') }}</button>
                    </div>

                </form>
                <div class="text-gray-500 text-sm mt-4 text-center flex flex-col">
                    <button class="underline" @click="navigateTo('/login/forgot')">{{ $t('page.login.forgot') }}</button>
                    <button class="underline" @click="navigateTo('/register')">{{ $t('page.login.donthave') }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: ['auth']
})


const email = ref('')
const password = ref('')

const errorval = ref('')
const success = ref('')

const supabase = useSupabaseClient()


const signGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            queryParams: {
            access_type: 'offline',
            prompt: 'consent',
            },
        },
    })
}

const signDiscord = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'discord',
    })
}

const signAzure = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'azure',
        options: {
            scopes: 'email',
        },
    })
}


const login = async () => {

    if (!email.value) {
        errorval.value = 'Type Email'
    } else if (!password.value) {
        errorval.value = 'Type password'
    } else{

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email.value,
                password: password.value
            })
            if (error) {
                console.log(error)
                errorval.value = 'Wrong Login or Password'
            }
                
            console.log(error)
            console.log('user', data.user)
        }
        catch (error) {
            errorval.value = error
        }
        


    }

    
    

}


const user = useSupabaseUser()
onMounted(() => {
    watchEffect(() => {
        if (user.value){
            navigateTo('/blog')
        }
    })
})

</script>
