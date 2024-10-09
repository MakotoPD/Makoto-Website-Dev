<template>
	<div class="z-[100] fixed left-0 top-0 w-screen h-screen bg-slate-900/80 flex justify-center items-center">
		<div class="relative py-8 lg:py-24 px-5 lg:px-16 rounded-2xl max-h-screen max-w-screen overflow-y-auto bg-[#111827] border border-1 border-primary/60">
			<button @click="emit('closeclicked')"  class="absolute right-2 top-2 px-1 py-1 bg-red-500/40 hover:bg-red-500/60 rounded-md" ><NuxtImg src="/icons/x.svg" class="h-4 w-4" /></button>

			<form id="messform" @submit.prevent="submitForm">
					<div class="grid gap-6 mb-6 md:grid-cols-2">
						<div>
							<label for="first_name" class="block mb-2 text-sm font-medium text-white">{{ $t('page.contact.Form.fName') }} </label>
							<input v-model="fname" type="text" id="first_name" class="border botext-sm rounded-lg  block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  focus:border-blue-500" placeholder="Jan" required>
						</div>
						<div>
							<label for="last_name" class="block mb-2 text-sm font-medium   text-white">{{ $t('page.contact.Form.lName') }}</label>
							<input v-model="lname" type="text" id="last_name" class="border text-sm rounded-lg block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  focus:border-blue-500" placeholder="Kowalski" required>
						</div>
					</div>

					<div class="mb-6">
						<label for="email" class="block mb-2 text-sm font-medium  text-white">{{ $t('page.contact.Form.email') }}</label>
						<input v-model="email" type="email" id="email" class="border text-sm rounded-lg block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  focus:border-blue-500" placeholder="jan.kowal@company.com" required>
					</div>

					<div class="mb-6">						
						<label for="message" class="block mb-2 text-sm font-medium  text-white">{{ $t('page.contact.Form.mess') }}</label>
						<textarea v-model="message" id="message" rows="4" class="block p-2.5 w-full text-sm rounded-lg border  bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  focus:border-blue-500" placeholder="Write your message here..."></textarea>
					</div>  
					
					<div class="mb-6">
						<NuxtTurnstile v-if="pageReady" v-model="token" :options="{theme: 'dark'}" />
					</div>
					
					
					<div class="flex items-start mb-6">
						<div class="flex items-center h-5">
						<input id="remember" type="checkbox" value="" class="w-4 h-4 border rounded focus:ring-3  border-gray-600  focus:ring-blue-600  ring-offset-gray-800" required>
						</div>
						<label for="remember" class="ml-2 text-sm font-medium text-gray-300">I agree with the <a href="/privacy-policy" class="hover:underline  text-blue-500">privacy policy</a>.</label>
					</div>

					<button type="submit" class="flex justify-center items-start gap-2 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  bg-blue-600  hover:bg-blue-700  focus:ring-blue-800"> <p>{{ $t('page.contact.Form.btn') }}</p> <i class='mt-px bx bx-xs bx-send'></i></button>
					
					<Alert v-if="sendsucces" :text=" $t('page.contact.Form.sendsucces')" type="success" />
					<Alert v-if="senderror" :text="$t('page.contact.Form.senderror')" type="error" />
					<Alert v-if="error" :text="error" type="error" />

				</form>
		</div>
	</div>

</template>

<script setup lang="ts">
const emit = defineEmits(['closeclicked'])
const contactprop = defineProps(['type', 'plan'])

const pageReady = ref(false)
onMounted(() => {
	pageReady.value = true
})


const WEB3FORMS_ACCESS_KEY = "5570e19a-cefa-433f-8b62-26c58fa27628"

const fname = ref('')
const lname = ref('')
const email = ref('')
const message = ref('')

const sendsucces = ref(false)
const senderror = ref(false)
const error = ref('')
const token = ref('')



let submitForm = async () => {
	if (email.value != "makotopd@icloud.com" && email.value != "contact@makoto.com.pl" && email.value != "contact@makoto.net.pl") {


		if(token.value == ''){
			error.value = 'Cpatcha not resolved, try again'
			setTimeout(() => {
				error.value = ''
			}, 10000)
		} else {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					access_key: WEB3FORMS_ACCESS_KEY,
					subject: `Nowy klient - ${contactprop.type} ${contactprop.plan}`,
					type: contactprop.type,
					plan: contactprop.plan,
					name: fname.value + " " + lname.value,
					email: email.value,
					message: message.value
				}),
			});
			const result = await response.json();
			if (result.success) {
				console.log('Wiadmość wysłana')
				sendsucces.value = true


				fname.value = ''
				lname.value = ''
				email.value = ''
				message.value = ''
			} else if(result.error) {
				console.log('Błąd wysyłania')
				console.log(result.error)
				error.value = result.error
			}
		}
	}
}

</script>