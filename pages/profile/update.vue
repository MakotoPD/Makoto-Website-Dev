<template>
    <div class="w-full h-full flex justify-center items-center py-24">
        <div class="bg-gray-800/70 rounded-xl py-12 px-8">

            <div class="flex items-center gap-5 mb-8">
                <div class="p-2 bg-blue-900/50 flex items-center justify-center rounded-lg "><i class='bx bx-sm bxs-user text-primary'></i></div>
                <p class="text-xl text-white font-medium">{{ $t('page.update.text') }}</p>
            </div>

            <div class="mt-4">
                <form
                @submit.prevent="() => (update())"
                >
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-400">{{ $t('page.login.email') }}</label>
                    <div class="flex mb-4">
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

                    <Alert v-if="errorstate" :text="errorstate" type="error"/>
                    <Alert v-if="success" :text="success" type="success"/>

                    <div>
                        <button class="w-full py-2 mt-4 bg-primary text-white rounded-lg ">{{ loading ? 'Loading' : $t('page.update.btn') }}</button>
                    </div>


                </form>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const email = ref('')
const password = ref('')

const errorstate = ref('')
const success = ref('')
const loading = ref(false)

const supabase = useSupabaseClient()

const { data: user } = await supabase.auth.getUser()

if (!user.user) {
    throw createError({ statusCode: 401, message: "Unauthorized"})
}

const update = async () => {

    if (!email.value) {
        errorstate.value = 'Type Email'
    } else if (!password.value) {
        errorstate.value = 'Type new password'
    } else{

        try {
            loading.value = true
            const { data, error } = await supabase.auth.updateUser({
                email: email.value,
                password: password.value
            })

            if (data) {
                success.value = "Successfully updated."
            }
        } catch(error) {
            errorstate.value = "Error coming from Backend."
        } finally {
            loading.value = false
        }
    }
}

</script>