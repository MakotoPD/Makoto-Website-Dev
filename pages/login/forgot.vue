<template>
    <div class="w-full h-full flex justify-center items-center py-24">
        <div class="bg-gray-800/70 rounded-xl py-12 px-8">

            <div class="flex items-center gap-5 mb-8">
                <div class="p-2 bg-blue-900/50 flex items-center justify-center rounded-lg "><i class='bx bx-sm bxs-user text-primary'></i></div>
                <p class="text-xl text-white font-medium">{{ $t('page.login.signup') }}</p>
            </div>

            <div class="mt-4">
                <form
                @submit.prevent="() => (forgot())"
                >
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-400">{{ $t('page.login.email') }}</label>
                    <div class="flex mb-4">
                        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <i class='bx-xs w-4 h-4 text-gray-400 bx bxs-envelope'></i>
                        </span>
                        <input type="email" id="email" v-model="email"  placeholder="name@email.com" class="rounded-none rounded-r-lg 0 border block flex-1 min-w-0 w-full text-sm p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    </div>

                    <Alert v-if="errorval" :text="errorval" type="error"/>
                    <Alert v-if="success" :text="success" type="success"/>

                    <div>
                        <button class="w-full py-2 mt-4 bg-primary text-white rounded-lg ">{{ $t('page.forgot.btn') }}</button>
                    </div>

                </form>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const email = ref('')
const success = ref('')
const errorval = ref('')
const supabase = useSupabaseClient()

const forgot = async () => {
    
    let { data, error } = await supabase.auth.resetPasswordForEmail(email.value)
    console.log(data)

    if (data) {
        success.value = "Check you email"
    } else if (error){
        errorval.value = error
    }
    
}
</script>